import type { Metadata } from "next";
import Link from "next/link";
import BodyAttrs from "@/components/BodyAttrs";
import BlogFilterGrid from "@/components/BlogFilterGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Ressources & blog — Conseils web, SEO et IA | Marketing Local",
  description:
    "Conseils concrets, sans jargon, pour rendre votre entreprise plus visible : création de site, référencement local, Google, intelligence artificielle et stratégie digitale.",
};

export default function RessourcesPage() {
  return (
    <>
      <BodyAttrs bodyClass="page-offre page-rs" dataS="rs-1" />

      <section className="contact-hero hero--rea" data-s="rs-14">
        <span className="hero-bubble b1 bubble-float" />
        <span className="hero-bubble b2 bubble-float" />
        <div className="container" data-s="rs-15">
          <nav className="hero-breadcrumb" aria-label="Fil d'ariane">
            <Link href="/">Accueil</Link>
            <span className="bc-sep" aria-hidden="true">›</span>
            <span className="bc-current" aria-current="page">Ressources</span>
          </nav>
          <h1 className="contact-title">
            Nos ressources
            <br />
            <span className="hl">&amp; actualités</span>
          </h1>
          <p className="contact-sub">Conseils concrets, sans jargon, pour rendre votre entreprise plus visible et gagner des clients en ligne.</p>
        </div>
      </section>

      <section className="section blog-page" id="blog" data-s="rs-16">
        <div className="container" data-s="rs-17">
          <BlogFilterGrid />
        </div>
      </section>

      <CtaBand
        heading="Et si votre projet était le prochain ?"
        body="Des solutions adaptées aux TPE et aux PME. On regarde ensemble votre visibilité actuelle et ce qu'on peut en faire."
      />
    </>
  );
}
