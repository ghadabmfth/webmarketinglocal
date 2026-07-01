import type { Metadata } from "next";
import Link from "next/link";
import BodyAttrs from "@/components/BodyAttrs";
import CtaBand from "@/components/CtaBand";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { BtnArrow, PlusIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "L'agence Marketing Local — Votre partenaire visibilité locale à Nantes",
  description:
    "Depuis 2014, Marketing Local accompagne artisans, commerçants et TPE de Nantes et sa région : un interlocuteur unique, des résultats concrets, zéro jargon.",
};

export default function AgencePage() {
  return (
    <>
      <BodyAttrs bodyClass="page-offre page-ag" dataS="ag-1" />

      {/* ============ HERO ============ */}
      <section className="hero hero--offre" data-s="ag-14">
        <span className="hero-bubble b1 bubble-float" />
        <span className="hero-bubble b2 bubble-float bubble-float--rev" />
        <div className="container hero-grid" data-s="ag-15">
          <div className="hero-copy" data-s="ag-16">
            <nav className="hero-breadcrumb" aria-label="Fil d'ariane">
              <Link href="/">Accueil</Link>
              <span className="bc-sep" aria-hidden="true">›</span>
              <span className="bc-current" aria-current="page">L&apos;agence</span>
            </nav>
            <h1 className="hero-title" data-s="ag-17">
              <span data-s="ag-18">L&apos;agence web </span>
              <span data-s="ag-19">locale</span>
              <span data-s="ag-20"> qui vous rend </span>
              <span data-s="ag-21">visible</span>
            </h1>
            <p className="hero-sub" data-s="ag-22">Depuis 2014, on accompagne les artisans, commerçants et TPE de Nantes et sa région. Un interlocuteur unique, des résultats concrets, zéro jargon.</p>
            <div className="hero-cta" data-s="ag-23">
              <Link href="/contact" className="btn" data-s="ag-24">
                Échangeons sur votre projet <BtnArrow />
              </Link>
              <button className="btn-play" type="button" data-scroll="#histoire" data-s="ag-25">
                <span className="dot" data-s="ag-26">
                  <svg width="13" height="15" viewBox="0 0 11 13" fill="currentColor" data-s="ag-27">
                    <path d="M10 5.4 1.4.1A.95.95 0 0 0 0 .95v10.5a.95.95 0 0 0 1.4.83L10 7a.95.95 0 0 0 0-1.6Z" data-s="ag-28" />
                  </svg>
                </span>
                <span data-s="ag-29">Notre histoire</span>
              </button>
            </div>
            <p className="hero-fineprint" data-s="ag-30">Basés à Sautron · +120 entreprises locales accompagnées</p>
          </div>

          <div className="hero-media offre-media" data-s="ag-31">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-portrait"
              src="/assets/hero-jchombart.png"
              alt="Jacquelin Chombart De Lauwe — Expert WebMarketing, Marketing Local"
              width={660}
              data-s="ag-32"
            />
            <div className="hero-stats">
              <div className="hero-stat hs-gray hs-tl float">
                <div className="num" data-s="ag-33">2014</div>
                <div className="lbl">Année de création</div>
              </div>
              <div className="hero-stat hs-amber hs-tr float" data-s="ag-34">
                <div className="num">120<span className="u">+</span></div>
                <div className="lbl">Entreprises accompagnées</div>
              </div>
              <div className="hero-stat hs-teal hs-bl float" data-s="ag-35">
                <div className="num">6</div>
                <div className="lbl">Experts dédiés</div>
              </div>
              <div className="hero-stat hs-gray hs-br float">
                <div className="num">100<span className="u">%</span></div>
                <div className="lbl">Local — Loire-Atlantique</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATEMENT ============ */}
      <section className="section statement" data-s="ag-36">
        <div className="container" data-s="ag-37">
          <div className="statement-inner reveal">
            <span className="statement-mark" aria-hidden="true">&ldquo;</span>
            <p className="statement-text">Un interlocuteur unique, un cadre clair, <span className="hl">zéro complexité.</span></p>
            <p className="statement-by">— notre promesse, depuis le premier jour</p>
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATIONS ============ */}
      <section className="section certifs" data-s="ag-38">
        <div className="container" data-s="ag-39">
          <div className="certifs-card reveal" data-s="ag-40">
            <div className="certifs-copy">
              <span className="eyebrow" data-s="ag-41">Certifications</span>
              <h2 className="certifs-title">Une agence web expérimentée et certifiée</h2>
              <p className="certifs-lead">En continu, notre équipe se forme et renouvelle ses certifications sur les outils leaders du Web. Chaque nouvelle tendance du digital — référencement, acquisition, data, IA — est analysée pour garantir à nos clients un accompagnement de qualité, toujours à jour.</p>
            </div>
            <div className="certifs-badges">
              <div className="cert-badge reveal">
                <span className="cert-ic">
                  <svg viewBox="0 0 48 48" width="30" height="30" aria-hidden="true">
                    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8a12 12 0 0 1 0-24c3 0 5.8 1.2 7.9 3l5.7-5.7A20 20 0 1 0 24 44c11 0 20-9 20-20 0-1.3-.1-2.3-.4-3.5z" />
                    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8A12 12 0 0 1 24 12c3 0 5.8 1.2 7.9 3l5.7-5.7A20 20 0 0 0 6.3 14.7z" />
                    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.7 28l-6.5 5A20 20 0 0 0 24 44z" />
                    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C39 35.7 44 30.5 44 24c0-1.3-.1-2.3-.4-3.5z" />
                  </svg>
                </span>
                <span className="cert-txt"><b>Google Partner</b><span>Agence certifiée</span></span>
              </div>
              <div className="cert-badge reveal d1">
                <span className="cert-ic">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#23768D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </span>
                <span className="cert-txt"><b>Google Ads</b><span>Search &amp; Display</span></span>
              </div>
              <div className="cert-badge reveal d2">
                <span className="cert-ic">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#E8930F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </span>
                <span className="cert-txt"><b>Google Analytics</b><span>GA4 · Data</span></span>
              </div>
              <div className="cert-badge reveal d3">
                <span className="cert-ic">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#23768D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="cert-txt"><b>Google Business</b><span>Profile · Local</span></span>
              </div>
              <div className="cert-badge reveal d3">
                <span className="cert-ic">
                  <svg viewBox="0 0 24 24" width="27" height="27" fill="#21759B" aria-hidden="true">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM3.5 12a8.5 8.5 0 0 1 .73-3.46l3.94 10.8A8.5 8.5 0 0 1 3.5 12zm8.5 8.5c-.83 0-1.64-.12-2.4-.34l2.55-7.4 2.61 7.15.06.14A8.49 8.49 0 0 1 12 20.5zm1.17-12.49c.51-.03.97-.08.97-.08.46-.06.4-.73-.05-.71 0 0-1.37.11-2.26.11-.83 0-2.23-.11-2.23-.11-.46-.02-.51.68-.06.71 0 0 .43.05.89.08l1.32 3.62-1.86 5.56-3.09-9.18c.51-.03.97-.08.97-.08.46-.06.4-.73-.05-.71 0 0-1.37.11-2.26.11-.16 0-.35 0-.55-.01A8.49 8.49 0 0 1 12 3.5a8.46 8.46 0 0 1 6.39 2.9c-.04 0-.07-.01-.11-.01-.83 0-1.42.73-1.42 1.51 0 .7.4 1.29.83 1.99.32.57.7 1.3.7 2.35 0 .73-.28 1.57-.65 2.75l-.85 2.84-3.09-9.18zm3.83 11.45 2.59-7.49c.48-1.21.65-2.18.65-3.04 0-.31-.02-.6-.06-.87a8.46 8.46 0 0 1-3.18 11.4z" />
                  </svg>
                </span>
                <span className="cert-txt"><b>Expert WordPress</b><span>Sites &amp; maintenance</span></span>
              </div>
              <div className="cert-badge reveal d3">
                <span className="cert-ic">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="#D97757" aria-hidden="true">
                    <path d="M12 2.2 3.4 19.8h3.3l1.8-3.9h7l1.8 3.9h3.3L12 2.2zm-2.3 11 2.3-5 2.3 5H9.7z" />
                  </svg>
                </span>
                <span className="cert-txt"><b>IA — Claude</b><span>Conception assistée</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HISTOIRE ============ */}
      <section className="section histoire section--wash" id="histoire" data-s="ag-42">
        <div className="container" data-s="ag-43">
          <div className="histoire-grid">
            <div className="histoire-copy reveal">
              <span className="eyebrow" data-s="ag-44">Notre histoire</span>
              <h2 data-s="ag-45">Une agence à taille humaine, <span data-s="ag-46">proche de vous</span></h2>
              <p data-s="ag-47">Marketing Local est née d&apos;un constat simple : les artisans et les TPE n&apos;ont ni le temps ni les codes pour gérer leur présence en ligne — et la plupart des agences leur parlent technique au lieu de leur parler clients.</p>
              <p data-s="ag-48">Basés à Sautron, au nord de Nantes, on construit des sites clairs, rapides et bien référencés, qui installent votre crédibilité et génèrent des demandes qualifiées dès les premiers mois. Une relation de proximité, un suivi régulier, et un seul interlocuteur qui connaît votre dossier.</p>
              <ul className="val-list">
                <li className="reveal">
                  <span className="val-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span><b>Proximité directe</b> — basés près de chez vous, joignables facilement</span>
                </li>
                <li className="reveal d1">
                  <span className="val-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span><b>Spécialistes du local</b> — on connaît votre marché et vos concurrents</span>
                </li>
                <li className="reveal d2">
                  <span className="val-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span><b>Un site qui rassure</b> — crédible, professionnel, pensé pour convertir</span>
                </li>
              </ul>
            </div>
            <div className="histoire-media reveal d1">
              <span className="hm-corner hm-corner--tr" />
              <span className="hm-corner hm-corner--bl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img id="agence-bureau" className="histoire-photo" src="/assets/Photo-lagence-marketinglocal.jpg" alt="Photo de l'équipe ou des bureaux" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ PÔLES D'EXPERTISE ============ */}
      <section className="section metiers" data-s="ag-49">
        <div className="container" data-s="ag-50">
          <div className="metiers-grid">
            <div className="metiers-intro reveal">
              <span className="eyebrow" data-s="ag-51">Nos pôles d&apos;expertise</span>
              <h2 className="metiers-title" data-s="ag-52">Les différents pôles d&apos;expertise de l&apos;agence</h2>
              <p className="metiers-lead">Site, référencement local, fiche Google et accompagnement s&apos;associent pour faire de votre présence en ligne un vrai levier de clients.</p>
              <Link href="/notre-offre" className="btn metiers-cta" data-s="ag-53">
                Voir notre offre <BtnArrow />
              </Link>
            </div>

            <div className="metiers-acc reveal d1">
              <details className="metier" open>
                <summary>Conseil &amp; stratégie <span className="metier-toggle" aria-hidden="true" /></summary>
                <div className="metier-body">
                  <p>Notre équipe analyse votre visibilité actuelle et votre marché local, puis vous guide sur les leviers de performance qui s&apos;offrent à vous.</p>
                  <p>En collaboration étroite avec vous, on définit vos objectifs et on élabore une stratégie digitale adaptée — qui tient compte du site, du référencement, de la fiche Google et de l&apos;acquisition.</p>
                </div>
              </details>
              <details className="metier">
                <summary>Création de site web <span className="metier-toggle" aria-hidden="true" /></summary>
                <div className="metier-body">
                  <p>Des sites clairs, rapides et pensés pour convertir vos visiteurs en appels et en demandes de devis. Conçus pour vos cibles, optimisés pour Google et maintenus dans le temps.</p>
                </div>
              </details>
              <details className="metier">
                <summary>Référencement local (SEO) <span className="metier-toggle" aria-hidden="true" /></summary>
                <div className="metier-body">
                  <p>On vous fait remonter sur les recherches de votre ville et de votre métier, et on optimise votre fiche Google My Business mois après mois pour générer des demandes qualifiées.</p>
                </div>
              </details>
              <details className="metier">
                <summary>Print · Digital · Textile <span className="metier-toggle" aria-hidden="true" /></summary>
                <div className="metier-body">
                  <p>Cartes de visite, flyers, enseignes et vêtements de marque : une image cohérente et professionnelle, sur tous vos supports, en ligne comme en boutique.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DIFFÉRENCE ============ */}
      <section className="section diff" data-screen-label="Ce qui nous différencie" data-s="ag-54">
        <div className="container" data-s="ag-55">
          <div className="section-head reveal" data-s="ag-56">
            <span className="eyebrow" data-s="ag-57">Pourquoi Marketing Local</span>
            <h2 data-s="ag-58">Ce qui nous différencie</h2>
            <p data-s="ag-59">Pas une agence généraliste. Un partenaire spécialisé dans l&apos;acquisition digitale des TPE locales.</p>
          </div>
          <div className="diff-grid">
            <article className="diff-card reveal">
              <span className="diff-ic">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                  <path d="M9 13a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-8l-5 4v-4h0a3 3 0 0 1-3-3z" fill="#23768D" />
                  <path d="M23 19a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h0v4l-5-4h-6a3 3 0 0 1-3-3z" fill="#F7B131" />
                  <circle cx="16" cy="40" r="3.4" fill="#0D1B2E" />
                  <circle cx="32" cy="40" r="3.4" fill="#0D1B2E" />
                </svg>
              </span>
              <h4>On parle business, pas technique</h4>
              <p>Pas de jargon SEO. On vous parle de demandes, de clients, de résultats — et c&apos;est tout.</p>
            </article>
            <article className="diff-card reveal">
              <span className="diff-ic">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                  <path d="M8 14 18 11l12 3 10-3v22l-10 3-12-3-10 3z" fill="#EAF3F5" stroke="#23768D" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M18 11v22M30 14v22" stroke="#23768D" strokeWidth="1.3" />
                  <path d="M30 15c-3.9 0-7 3-7 6.8 0 4.8 7 10.2 7 10.2s7-5.4 7-10.2c0-3.8-3.1-6.8-7-6.8z" fill="#F7B131" />
                  <circle cx="30" cy="22" r="2.4" fill="#fff" />
                </svg>
              </span>
              <h4>Spécialistes du local</h4>
              <p>Nantes, Loire-Atlantique et région — on connaît le marché, les concurrents et les opportunités.</p>
            </article>
            <article className="diff-card reveal">
              <span className="diff-ic">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="25" r="12" fill="#EAF3F5" stroke="#23768D" strokeWidth="1.6" />
                  <path d="M12 25h24M24 13c4.5 3.6 4.5 20.4 0 24M24 13c-4.5 3.6-4.5 20.4 0 24" stroke="#23768D" strokeWidth="1.3" fill="none" />
                  <path d="M13 24a11 11 0 0 1 22 0" stroke="#0D1B2E" strokeWidth="2.4" fill="none" />
                  <rect x="10.5" y="23.5" width="4" height="7" rx="2" fill="#0D1B2E" />
                  <rect x="33.5" y="23.5" width="4" height="7" rx="2" fill="#0D1B2E" />
                </svg>
              </span>
              <h4>Un seul interlocuteur</h4>
              <p>Pas de rotation d&apos;équipe, pas de ticket support. Un contact dédié qui connaît votre dossier.</p>
            </article>
            <article className="diff-card reveal">
              <span className="diff-ic">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                  <rect x="10" y="28" width="6" height="10" rx="1.5" fill="#23768D" />
                  <rect x="21" y="22" width="6" height="16" rx="1.5" fill="#23768D" />
                  <rect x="32" y="15" width="6" height="23" rx="1.5" fill="#F7B131" />
                  <path d="M11 24l8-6 7 4 9-9" stroke="#0D1B2E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 13h5v5" stroke="#0D1B2E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h4>Résultats mesurables</h4>
              <p>Rapport mensuel, suivi des positions, comptage des appels. Vous savez ce que ça rapporte.</p>
            </article>
            <article className="diff-card reveal">
              <span className="diff-ic">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                  <rect x="9" y="9" width="13.5" height="13.5" rx="3" fill="#E5203C" />
                  <rect x="25.5" y="9" width="13.5" height="13.5" rx="3" fill="#F7B131" />
                  <rect x="9" y="25.5" width="13.5" height="13.5" rx="3" fill="#23768D" />
                  <rect x="25.5" y="25.5" width="13.5" height="13.5" rx="3" fill="#4285F4" />
                </svg>
              </span>
              <h4>Solution clé en main</h4>
              <p>Site, SEO, maintenance, suivi : tout est géré par une seule équipe. Zéro coordination de votre côté.</p>
            </article>
            <article className="diff-card reveal">
              <span className="diff-ic">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                  <path d="M24 40S8 30 8 18.5C8 13 12 9 17 9c3.4 0 5.8 1.8 7 4 1.2-2.2 3.6-4 7-4 5 0 9 4 9 9.5C40 30 24 40 24 40z" fill="#F7B131" />
                  <path d="M16 22l4 4 8-8" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h4>Une relation durable</h4>
              <p>12 ans d&apos;expérience, +120 entreprises accompagnées. On s&apos;inscrit dans la durée, pas dans le one-shot.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ FONDATEUR ============ */}
      <section className="section founder section--wash" data-s="ag-60">
        <div className="container" data-s="ag-61">
          <div className="founder-card reveal">
            <div className="founder-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img id="agence-fondateur" className="founder-photo" src="/assets/Photo-J-Chombard-de-Lawe.jpg" alt="Photo du fondateur" loading="lazy" />
            </div>
            <div className="founder-copy">
              <span className="eyebrow" data-s="ag-62">Le fondateur</span>
              <h3 className="founder-name">Jacquelin Chombart De Lauwe</h3>
              <p className="founder-role">Expert WebMarketing · Fondateur de Marketing Local</p>
              <p className="founder-quote">« Mon métier, c&apos;est de rendre votre entreprise visible là où vos clients vous cherchent — simplement, sans que vous ayez à y passer vos soirées. On avance ensemble, étape par étape, et vous voyez les résultats arriver. »</p>
              <div className="founder-contacts">
                <a href="tel:0285523343" className="founder-contact">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  02 85 52 33 43
                </a>
                <a href="mailto:delauwe@marketinglocal.com" className="founder-contact">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  delauwe@marketinglocal.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section section--wash" data-s="ag-63">
        <div className="container" data-s="ag-64">
          <div className="section-head reveal">
            <span className="eyebrow" data-s="ag-65">Ils en parlent mieux que nous</span>
            <h2 data-s="ag-66">Des résultats concrets, près de chez vous</h2>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* ============ EN SAVOIR PLUS ============ */}
      <section className="section ensavoirplus section--wash" data-s="ag-75">
        <div className="container" data-s="ag-76">
          <div className="section-head reveal" data-s="ag-77">
            <span className="eyebrow" data-s="ag-78">Bon à savoir</span>
            <h2 data-s="ag-79">En savoir plus sur Marketing Local</h2>
          </div>
          <div className="faq-wrap reveal d1">
            <div className="faq-item open">
              <button className="faq-q">
                Marketing Local, une agence web basée près de Nantes ? <PlusIcon />
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">
                  Marketing Local, c&apos;est une aventure née à Sautron, au nord de Nantes, en Loire-Atlantique. C&apos;est au cœur de ce territoire dynamique que notre siège est installé et que notre équipe travaille au quotidien.
                  <br />
                  <br />
                  Mais notre activité s&apos;étend bien au-delà : on accompagne des artisans, commerçants et TPE à Nantes, Orvault, Rezé, Saint-Herblain et partout en Loire-Atlantique — comme ailleurs en France. Les outils d&apos;aujourd&apos;hui nous permettent de piloter vos projets avec la même efficacité, même à distance.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                Êtes-vous spécialisés sur un secteur en particulier ? <PlusIcon />
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">On travaille surtout avec des TPE, artisans et commerçants locaux — boulangeries, artisans du bâtiment, instituts de beauté, restaurants, professions libérales… Des activités pour lesquelles être trouvé sur Google au bon endroit change tout. C&apos;est ce qui nous permet de bien connaître vos enjeux et d&apos;aller droit au but.</div>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q">
                Pourquoi le nom « Marketing Local » ? <PlusIcon />
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">Parce que tout est dans le mot : du marketing concret, au service des entreprises locales. Pas de jargon, pas de promesses hors-sol — juste de la visibilité là où vos clients vous cherchent, près de chez vous.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
