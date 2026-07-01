import Link from "next/link";
import BodyAttrs from "@/components/BodyAttrs";
import { BtnArrow, PhoneIcon } from "@/components/Icons";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <>
      <BodyAttrs bodyClass="page-offre page-nf" dataS="nf-1" />

      <main className="notfound" data-s="nf-14">
        <span className="nf-bubble nf-bubble--a" aria-hidden="true" />
        <span className="nf-bubble nf-bubble--b" aria-hidden="true" />
        <span className="nf-x nf-x1" aria-hidden="true">×</span>
        <span className="nf-x nf-x2" aria-hidden="true">×</span>
        <span className="nf-x nf-x3" aria-hidden="true">×</span>
        <span className="nf-x nf-x4" aria-hidden="true">×</span>
        <span className="nf-x nf-x5" aria-hidden="true">×</span>
        <span className="nf-x nf-x6" aria-hidden="true">×</span>
        <span className="nf-x nf-x7" aria-hidden="true">×</span>
        <span className="nf-x nf-x8" aria-hidden="true">×</span>
        <div className="container nf-inner">
          <div className="nf-mark" aria-hidden="true" data-s="nf-15">
            <span className="nf-4" data-s="nf-16">4</span>
            <span className="nf-bubblemark">
              <LogoMark />
            </span>
            <span className="nf-4" data-s="nf-18">4</span>
          </div>
          <h1 className="nf-title">Oups, cette page a disparu</h1>
          <p className="nf-sub">
            La page que vous cherchez n&apos;existe pas ou a été déplacée. Pas de panique — on vous remet sur le bon chemin.
          </p>
          <div className="nf-cta">
            <Link href="/" className="btn nf-btn">
              Retour à l&apos;accueil <BtnArrow />
            </Link>
            <Link href="/contact" className="btn-play nf-ghost">
              <span className="dot" data-s="nf-19">
                <PhoneIcon width={18} height={18} />
              </span>
              <span data-s="nf-20">Nous contacter</span>
            </Link>
          </div>
          <div className="nf-links">
            <span>Pages utiles :</span>
            <Link href="/l-agence">L&apos;agence</Link>
            <Link href="/notre-offre">Notre offre</Link>
            <Link href="/nos-realisations">Nos réalisations</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </main>
    </>
  );
}
