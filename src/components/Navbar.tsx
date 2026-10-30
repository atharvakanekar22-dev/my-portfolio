"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  ["Home", "home"], ["About", "about"], ["Education", "education"], ["Projects", "projects"],
  ["Skills", "skills"], ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="nav container" aria-label="Main navigation">
    <button className="menu-toggle" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <div className={`nav-links ${open ? "is-open" : ""}`}>
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="button button-dark nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s connect <ArrowRight size={15} /></a>
    </div>
  </nav></header>;
}
