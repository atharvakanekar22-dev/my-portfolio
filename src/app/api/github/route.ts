import { NextResponse } from "next/server";
import fallbackData from "@/data/github-contributions-fallback.json";

const GITHUB_USERNAME = "atharvakanekar22-dev";

// Cache in-memory for 1 hour to avoid excessive API calls.
let cached: { data: unknown; ts: number } | null = null;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

const GRAPHQL_QUERY = `
query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
            contributionLevel
          }
        }
      }
    }
  }
}
`;

const LEVEL_MAP: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export async function GET() {
  // Return cached data if fresh
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    return NextResponse.json(cached.data);
  }

  const token = process.env.GITHUB_TOKEN;

  // 1. Try GraphQL if token is provided
  if (token) {
    try {
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: GRAPHQL_QUERY, variables: { username: GITHUB_USERNAME } }),
        next: { revalidate: 3600 },
      });

      if (res.ok) {
        const json = await res.json();
        const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
        if (calendar) {
          const data = {
            totalContributions: calendar.totalContributions,
            weeks: calendar.weeks.map(
              (week: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }) => ({
                days: week.contributionDays.map(
                  (day: { date: string; contributionCount: number; contributionLevel: string }) => ({
                    date: day.date,
                    count: day.contributionCount,
                    level: LEVEL_MAP[day.contributionLevel] ?? 0,
                  })
                ),
              })
            ),
          };
          cached = { data, ts: Date.now() };
          return NextResponse.json(data);
        }
      }
    } catch {
      // Fall through to public endpoint
    }
  }

  // 2. Try public contributions API
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`, {
      signal: controller.signal,
      next: { revalidate: 3600 },
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json?.contributions && Array.isArray(json.contributions)) {
        const weeks: { days: { date: string; count: number; level: number }[] }[] = [];
        let currentWeek: { date: string; count: number; level: number }[] = [];

        for (const day of json.contributions) {
          currentWeek.push({
            date: day.date,
            count: day.count,
            level: day.level,
          });
          if (currentWeek.length === 7) {
            weeks.push({ days: currentWeek });
            currentWeek = [];
          }
        }
        if (currentWeek.length > 0) {
          weeks.push({ days: currentWeek });
        }

        const data = {
          totalContributions: json.total?.lastYear ?? 107,
          weeks,
        };
        cached = { data, ts: Date.now() };
        return NextResponse.json(data);
      }
    }
  } catch {
    // Fall through to local fallback data
  }

  // 3. Guaranteed real data fallback
  return NextResponse.json(fallbackData);
}
