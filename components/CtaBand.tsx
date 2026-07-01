import { BtnArrow, PhoneIcon } from "./Icons";
import { SITE } from "@/lib/site-data";

export default function CtaBand({
  eyebrow = "Parlons-en, c'est gratuit",
  heading = "Échangeons sur votre projet",
  body = "Des solutions adaptées aux TPE et aux PME. On regarde ensemble votre visibilité actuelle et ce qu'on peut en faire.",
  ctaLabel = "Demander un diagnostic gratuit",
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="section cta-band section--deep" id="contact" style={{ backgroundColor: "var(--teal)" }}>
      <span className="bubble-deco bd1" style={{ backgroundColor: "#fff", opacity: 0.31 }} />
      <span className="bubble-deco bd2" style={{ backgroundColor: "#fff", opacity: 0.12 }} />
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{heading}</h2>
        <p>{body}</p>
        <div className="cta-actions">
          <a href={SITE.phoneHref} className="btn btn--lg">
            {ctaLabel} <BtnArrow />
          </a>
          <a href={SITE.phoneHref} className="phone-link" style={{ color: "#fff" }}>
            <PhoneIcon width={20} height={20} />
            <span>{SITE.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
