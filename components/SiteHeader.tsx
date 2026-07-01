"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { BtnArrow, MailIcon, PhoneIcon, PinIcon } from "./Icons";
import { NAV_LINKS, SITE } from "@/lib/site-data";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mnavOpen, setMnavOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mnavOpen ? "hidden" : "";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMnavOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mnavOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="header">
        <div className="container header-inner">
          <Link href="/" className="logo" aria-label="Marketing Local — accueil">
            <Logo />
          </Link>

          <nav className="nav-pill" aria-label="Navigation principale">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link href="/contact" className="btn">
              Diagnostic gratuit <BtnArrow />
            </Link>
            <button className="menu-toggle" id="menuToggle" aria-label="Ouvrir le menu" onClick={() => setMnavOpen(true)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="mnav-overlay" id="mnavOverlay" hidden={!mnavOpen} onClick={() => setMnavOpen(false)} />
      <aside className={`mnav${mnavOpen ? " open" : ""}`} id="mnav" aria-label="Menu mobile" aria-hidden={!mnavOpen}>
        <div className="mnav-head">
          <Link href="/" className="logo" aria-label="Marketing Local — accueil" onClick={() => setMnavOpen(false)}>
            <Logo />
          </Link>
          <button className="mnav-close" id="mnavClose" aria-label="Fermer le menu" onClick={() => setMnavOpen(false)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>
        <nav className="mnav-links">
          <Link href="/" onClick={() => setMnavOpen(false)}>
            Accueil
          </Link>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMnavOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMnavOpen(false)}>
            Contact
          </Link>
        </nav>
        <Link href="/contact" className="btn mnav-cta" onClick={() => setMnavOpen(false)}>
          Diagnostic gratuit <BtnArrow />
        </Link>
        <div className="mnav-contact">
          <a href={SITE.phoneHref}>
            <PhoneIcon /> {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`}>
            <MailIcon /> {SITE.email}
          </a>
          <span className="mnav-addr">
            <PinIcon /> {SITE.address}
          </span>
        </div>
        <div className="mnav-social">
          <a href="#" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.51 2.5 2.5 0 0 1 4.98 3.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-4v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23h-4V8z" />
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
}
