import type { Metadata } from "next";
import Link from "next/link";
import BodyAttrs from "@/components/BodyAttrs";
import CtaBand from "@/components/CtaBand";
import RealisationsFilterGrid from "@/components/RealisationsFilterGrid";

export const metadata: Metadata = {
  title: "Nos réalisations — Sites web & SEO local | Marketing Local",
  description:
    "Découvrez nos projets de création de sites internet et de référencement local pour des entreprises de Nantes et de Loire-Atlantique.",
};

export default function NosRealisationsPage() {
  return (
    <>
      <BodyAttrs bodyClass="page-offre page-re" dataS="re-1" />

      <section className="contact-hero hero--rea" data-s="re-14">
        <span className="hero-bubble b1 bubble-float" />
        <span className="hero-bubble b2 bubble-float" />
        <div className="container" data-s="re-15">
          <nav className="hero-breadcrumb" aria-label="Fil d'ariane">
            <Link href="/" data-s="re-16">Accueil</Link>
            <span className="bc-sep" aria-hidden="true" data-s="re-17">›</span>
            <span className="bc-current" aria-current="page" data-s="re-18">Nos réalisations</span>
          </nav>
          <h1 className="contact-title" data-s="re-19">Nos <span className="hl" data-s="re-20">réalisations</span></h1>
          <p className="contact-sub" data-s="re-21">Des sites clairs, rapides et bien référencés, pensés pour générer des demandes. Voici quelques entreprises locales qu&apos;on a rendues visibles.</p>
          <div className="rea-stats">
            <div className="rea-stat"><b>120+</b><span data-s="re-22">entreprises accompagnées</span></div>
            <div className="rea-stat"><b data-s="re-23">2014</b><span data-s="re-24">depuis plus de 10 ans</span></div>
            <div className="rea-stat"><b data-s="re-25">5,0 ★</b><span data-s="re-26">21 avis Google</span></div>
          </div>
        </div>
      </section>

      <section className="section realisations-page" id="projets" data-s="re-27">
        <div className="container" data-s="re-28">
          <RealisationsFilterGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
