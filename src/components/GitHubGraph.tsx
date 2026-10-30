"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { profile } from "@/data/portfolio";

interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4
}

interface ContributionWeek {
  days: ContributionDay[];
}

interface ContributionData {
  weeks: ContributionWeek[];
  totalContributions: number;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function GitHubGraph() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchContributions() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (!cancelled) {
          setData(json);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    }

    fetchContributions();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent, day: ContributionDay) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const dateObj = new Date(day.date);
    const dateStr = dateObj.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setTooltip({
      text: `${day.count} contribution${day.count !== 1 ? "s" : ""} on ${dateStr}`,
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  // Compute month positions
  const monthLabels: { label: string; col: number }[] = [];
  if (data && data.weeks) {
    let prevMonth = -1;
    data.weeks.forEach((week, i) => {
      if (week.days.length > 0) {
        const d = new Date(week.days[0].date);
        const m = d.getMonth();
        if (m !== prevMonth) {
          monthLabels.push({ label: MONTHS[m], col: i });
          prevMonth = m;
        }
      }
    });
  }

  if (loading) {
    return (
      <div className="github-fallback">
        <p>Loading contribution data…</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="github-fallback">
        <p>Contribution data is temporarily unavailable.</p>
        <a href={profile.github} target="_blank" rel="noreferrer">
          View my GitHub profile →
        </a>
      </div>
    );
  }

  return (
    <div className="github-graph-card">
      {/* Scrollable Container with months & grid kept together */}
      <div className="contribution-graph-wrapper" ref={scrollContainerRef}>
        <div className="contribution-inner-table">
          {/* Month headers aligned over weeks */}
          <div className="contribution-months-row">
            <div className="contribution-labels-spacer" />
            <div className="contribution-months-track">
              {monthLabels.map(({ label, col }, i) => {
                const nextCol = i + 1 < monthLabels.length ? monthLabels[i + 1].col : data.weeks.length;
                const span = Math.max(1, nextCol - col);
                return (
                  <span
                    key={`${label}-${col}`}
                    className="contribution-month-label"
                    style={{ width: `${span * 15}px` }}
                  >
                    {label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Day labels + Graph Grid */}
          <div className="contribution-body-row">
            <div className="contribution-labels-column">
              {DAYS.map((d, i) => (
                <span className="contribution-label" key={i}>
                  {i % 2 === 1 ? d : ""}
                </span>
              ))}
            </div>

            <div className="contribution-graph">
              {data.weeks.map((week, wi) => (
                <div className="contribution-week" key={wi}>
                  {week.days.map((day, di) => (
                    <div
                      key={di}
                      className={`contribution-day gh-level-${day.level}`}
                      onMouseEnter={(e) => handleMouseEnter(e, day)}
                      onMouseLeave={handleMouseLeave}
                      aria-label={`${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer: total + legend */}
      <div className="contribution-footer">
        <span className="contribution-total">
          <strong>{data.totalContributions.toLocaleString()}</strong> contributions in the last year
        </span>
        <div className="contribution-legend">
          <span className="contribution-legend-label">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`contribution-legend-box gh-level-${level}`}
              title={`Level ${level}`}
            />
          ))}
          <span className="contribution-legend-label">More</span>
        </div>
      </div>

      {/* Floating tooltip */}
      {tooltip && (
        <div
          className="contribution-tooltip"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
