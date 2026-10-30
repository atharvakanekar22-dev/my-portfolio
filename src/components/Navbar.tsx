"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const link of navLinks) {
      const id = link.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          {/* Logo */}
          <a href="#home" className="nav-logo" onClick={handleNavClick}>
            A<span>K</span>
          </a>

          {/* Desktop nav links */}
          <div className="nav-links">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={activeSection === href.replace("#", "") ? "active" : ""}
                onClick={handleNavClick}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="nav-right">
            <ThemeToggle />
            <button
              className="menu-toggle"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? "is-open" : ""}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation">
          <X size={18} />
        </button>
        {navLinks.map(({ label, href }) => (
          <a key={href} href={href} onClick={handleNavClick}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
