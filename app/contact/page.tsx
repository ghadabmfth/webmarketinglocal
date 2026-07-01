import type { Metadata } from "next";
import Link from "next/link";
import BodyAttrs from "@/components/BodyAttrs";
import ContactForm from "@/components/ContactForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { BtnArrow } from "@/components/Icons";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Contact — Demandez votre diagnostic gratuit | Marketing Local",
  description:
    "Parlons de votre projet web. Diagnostic gratuit et sans engagement, réponse sous 48h. Agence web Marketing Local à Sautron, près de Nantes.",
};

export default function ContactPage() {
  return (
    <>
      <BodyAttrs bodyClass="page-offre page-ct" dataS="ct-1" />

      <section className="contact-hero hero--rea">
        <span className="hero-bubble b1 bubble-float" />
        <span className="hero-bubble b2 bubble-float" />
        <div className="container">
          <nav className="hero-breadcrumb" aria-label="Fil d'ariane">
            <Link href="/">Accueil</Link>
            <span className="bc-sep" aria-hidden="true">›</span>
            <span className="bc-current" aria-current="page">Contact</span>
          </nav>
          <h1 className="contact-title">
            Parlons de
            <br />
            <span className="hl">votre projet</span>
          </h1>
          <p className="contact-sub">Pas de démo commerciale agressive. Un échange simple pour voir si on peut vous aider — et comment.</p>
        </div>
      </section>

      <section className="section contact-main" id="contact">
        <div className="container">
          <div className="contact-grid">
            <aside className="contact-aside reveal">
              <span className="eyebrow eyebrow--coord"><span className="ey-amber">Nos coordonnées</span></span>
              <div className="coord-list">
                <a className="coord-row reveal" href="tel:0285523343">
                  <span className="coord-ic"><PhoneIcon width={24} height={24} /></span>
                  <span className="coord-txt"><b>Téléphone</b><span>02 85 52 33 43</span></span>
                </a>
                <a className="coord-row reveal" href="https://maps.google.com/?q=44+rue+de+Bretagne+44880+Sautron">
                  <span className="coord-ic"><PinIcon width={24} height={24} /></span>
                  <span className="coord-txt"><b>Adresse</b><span>44 rue de Bretagne, 44880 Sautron</span></span>
                </a>
                <a className="coord-row reveal" href="mailto:contact@marketinglocal.fr">
                  <span className="coord-ic"><MailIcon width={24} height={24} /></span>
                  <span className="coord-txt"><b>Email</b><span>contact@marketinglocal.fr</span></span>
                </a>
                <a className="coord-row reveal">
                  <span className="coord-ic">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></svg>
                  </span>
                  <span className="coord-txt"><b>Horaires</b><span>Lundi — Vendredi : 9h – 18h</span></span>
                </a>
              </div>
              <div className="contact-reassure">
                <div className="cr-rating">
                  <span className="cr-stars">★★★★★</span>
                  <span className="cr-score"><b>5,0</b> · 21 avis Google</span>
                </div>
                <p>Une réponse sous 48h ouvrées. On vous rappelle au moment qui vous arrange.</p>
              </div>
            </aside>

            <div className="contact-form-wrap reveal d1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-map-section">
        <div className="container">
          <div className="map-frame reveal">
            <iframe
              className="map-embed"
              title="Marketing Local — 44 rue de Bretagne, 44880 Sautron"
              src="https://www.google.com/maps?q=44+rue+de+Bretagne+44880+Sautron&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-card">
              <div className="mc-head">
                <span className="mc-logo mc-logo--mark"><LogoMark /></span>
                <div className="mc-name"><b>Agence Web Marketing Local</b><span>44 rue de Bretagne, Sautron</span></div>
              </div>
              <div className="mc-rating"><span className="mc-score">5,0</span><span className="mc-stars">★★★★★</span></div>
              <p className="mc-reviews">21 avis Google</p>
              <a className="mc-link" href="https://maps.google.com/?q=44+rue+de+Bretagne+44880+Sautron" target="_blank" rel="noopener">
                Afficher une carte plus grande <BtnArrow />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
