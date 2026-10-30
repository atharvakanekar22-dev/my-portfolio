import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atharva Kanekar | AI & Software Engineering",
  description: "Atharva Kanekar is an MCA student in Mumbai exploring AI, software engineering, and cybersecurity through practical projects.",
  openGraph: {
    title: "Atharva Kanekar | AI & Software Engineering",
    description: "Building thoughtful digital experiences through technology.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
