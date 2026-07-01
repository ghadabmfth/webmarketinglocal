import Link from "next/link";
import Logo from "./Logo";

export default function SiteFooter() {
  return (
    <footer className="footer" id="blog" style={{ backgroundColor: "var(--teal)" }}>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo" aria-label="Marketing Local">
              <Logo className="logo-svg logo-svg--footer" ringColor="#ffffff" textColor="#ffffff" />
            </Link>
            <p className="blurb">L&apos;agence web qui rend les artisans, commerçants et TPE visibles en ligne — simplement.</p>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><Link href="/notre-offre#offre">Site vitrine</Link></li>
              <li><Link href="/notre-offre#offre">Référencement local</Link></li>
              <li><Link href="/notre-offre#offre">Google My Business</Link></li>
              <li><Link href="/notre-offre#offre">Print &amp; Textile</Link></li>
            </ul>
          </div>
          <div>
            <h5>Agence</h5>
            <ul>
              <li><Link href="/notre-offre#methode">Notre méthode</Link></li>
              <li><Link href="/nos-realisations">Réalisations</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/ressources">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <div className="contact-line">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              02 85 52 33 43
            </div>
            <div className="contact-line">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              delauwe@marketinglocal.com
            </div>
            <div className="contact-line">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Nantes &amp; Loire-Atlantique
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Marketing Local · EURL · SIRET 803 136 423 00024 · RCS Nantes</span>
          <span className="footer-legal">
            <Link href="/mentions-legales">Mentions légales</Link> · <Link href="/mentions-cookies">Cookies</Link> · <Link href="/cgv">CGV</Link>
          </span>
          <span className="triad">PRINT · DIGITAL · TEXTILE</span>
        </div>
      </div>
    </footer>
  );
}
