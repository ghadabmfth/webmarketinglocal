import Link from "next/link";
import BodyAttrs from "@/components/BodyAttrs";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import { BtnArrow, CheckDot } from "@/components/Icons";
import { CLIENT_LOGOS } from "@/lib/site-data";

const FAQ_ITEMS = [
  {
    q: "Le site est-il vraiment inclus ?",
    a: "Oui. Le site professionnel est compris dans l'abonnement dès le départ — vous n'avez pas de gros budget à sortir au lancement.",
  },
  {
    q: "En combien de temps voit-on des résultats ?",
    a: "Les premières demandes arrivent souvent dès les premières semaines. Pour le référencement local, on vise le Top 3 sous 6 mois selon votre marché.",
  },
  {
    q: "Suis-je engagé longtemps ?",
    a: "L'engagement est de 12 mois, le temps que le référencement produise ses effets. Ensuite, c'est résiliable à tout moment.",
  },
  {
    q: "Je n'y connais rien au web, c'est un problème ?",
    a: "Pas du tout — c'est même pour ça qu'on existe. On s'occupe de tout, vous gardez votre métier. Un interlocuteur dédié vous explique tout simplement.",
  },
  {
    q: "Travaillez-vous avec mon secteur d'activité ?",
    a: "On accompagne artisans, commerçants et TPE/PME de Loire-Atlantique et de toute la France. Le diagnostic gratuit nous permet de valider le potentiel de votre activité.",
  },
];

export default function AccueilPage() {
  return (
    <>
      <BodyAttrs bodyClass="page-accueil" dataS="acc-1" />

      {/* ============ HERO ============ */}
      <section className="hero">
        <span className="hero-bubble b1 bubble-float" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="badge-pill">
              <span className="pulse" /> Agence web locale — Nantes &amp; région
            </span>
            <h1 className="hero-title">
              <span style={{ color: "var(--ink)" }}>Votre </span>
              <span style={{ color: "var(--teal)" }}>visibilité </span>
              <br />
              <span style={{ color: "var(--ink)" }}>sur </span>
              <span style={{ color: "var(--amber)" }}>Google</span>
              <span style={{ color: "var(--ink-2)" }}>, </span>
              <br />
              <span style={{ color: "var(--ink)" }}>gérée pour </span>
              <span style={{ color: "var(--coral)" }}>vous</span>
              <span style={{ color: "var(--ink)" }}> !</span>
            </h1>
            <p className="hero-sub">Un système simple pour générer des appels et des demandes de devis, sans vous occuper du web.</p>
            <div className="hero-cta">
              <Link href="/contact" className="btn">
                Discutons de votre projet <BtnArrow />
              </Link>
              <button className="btn-play" type="button" data-scroll="#offre">
                <span className="dot" style={{ backgroundColor: "var(--teal)" }}>
                  <svg width="13" height="15" viewBox="0 0 11 13" fill="currentColor">
                    <path d="M10 5.4 1.4.1A.95.95 0 0 0 0 .95v10.5a.95.95 0 0 0 1.4.83L10 7a.95.95 0 0 0 0-1.6Z" />
                  </svg>
                </span>
                <span>Découvrir l&apos;offre</span>
              </button>
            </div>
            <p className="hero-fineprint">À partir de 245 € HT / mois · Engagement 12 mois · Résiliable</p>
          </div>

          <div className="hero-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-portrait"
              src="/assets/hero-jchombart.png"
              alt="Jacquelin Chombart De Lauwe — Expert WebMarketing, Marketing Local"
              width={660}
            />

            <div className="chip-glass float chip-calls" style={{ backgroundColor: "rgba(133, 133, 133, 0.5)" }}>
              <span className="ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>+3 appels</span> <span className="soft">cette semaine</span>
            </div>

            <div className="card-stats float">
              <div className="stat stat--dark"><div className="num" style={{ fontFamily: "var(--font-display)" }}>+3<span className="u">×</span></div><div className="lbl">Demandes entrantes</div></div>
              <div className="stat stat--amber"><div className="num" style={{ fontFamily: "var(--font-display)" }}>Top<sub>3</sub></div><div className="lbl">Google local en 6 mois</div></div>
              <div className="stat stat--deep" style={{ backgroundColor: "var(--teal)" }}><div className="num" style={{ fontFamily: "var(--font-display)" }}>12<span className="u"> ans</span></div><div className="lbl">D&apos;expérience locale</div></div>
              <div className="stat stat--dark"><div className="num" style={{ fontFamily: "var(--font-display)" }}>80<span className="u">+</span></div><div className="lbl">Sites créés</div></div>
            </div>

            <div className="chip-glass float chip-rank">
              <span className="gicon" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8a12 12 0 0 1 0-24c3 0 5.8 1.2 7.9 3l5.7-5.7A20 20 0 1 0 24 44c11 0 20-9 20-20 0-1.3-.1-2.3-.4-3.5z" />
                  <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8A12 12 0 0 1 24 12c3 0 5.8 1.2 7.9 3l5.7-5.7A20 20 0 0 0 6.3 14.7z" />
                  <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.7 28l-6.5 5A20 20 0 0 0 24 44z" />
                  <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C39 35.7 44 30.5 44 24c0-1.3-.1-2.3-.4-3.5z" />
                </svg>
              </span>
              <span><span className="soft">Position</span> #2 sur Google</span>
            </div>

            <div className="card-checklist float" style={{ backgroundColor: "rgba(133, 133, 133, 0.5)" }}>
              <ul>
                <li><CheckDot /> Site professionnel inclus dès le départ</li>
                <li><CheckDot /> Rapport mensuel de résultats</li>
                <li><CheckDot /> Résiliable après 12 mois</li>
                <li><CheckDot /> Un interlocuteur dédié et réactif</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLIENTS ============ */}
      <section className="clients" id="realisations">
        <div className="container">
          <h4 className="clients-eyebrow" style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--ink)" }}>Ils nous font confiance, déjà +120 entreprises locales accompagnées</h4>
        </div>
        <div className="marquee" aria-label="Logos de nos clients">
          <div className="marquee-track">
            {CLIENT_LOGOS.map((l) => (
              // eslint-disable-next-line @next/next/no-img-element
              <span className="cl" key={l.src}><img src={l.src} alt={l.alt} /></span>
            ))}
            {CLIENT_LOGOS.map((l) => (
              // eslint-disable-next-line @next/next/no-img-element
              <span className="cl" aria-hidden="true" key={l.src + "-dup"}><img src={l.src} alt="" /></span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROBLEM ============ */}
      <section className="problem">
        <div className="container">
          <div className="problem-grid">
            <div className="pain-grid">
              <div className="pain-card reveal">
                <div className="pain-ic">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></svg>
                </div>
                <h4>Pas assez de demandes</h4>
                <p>L&apos;essentiel de votre activité vient encore du bouche-à-oreille ou de votre réseau.</p>
              </div>
              <div className="pain-card reveal d1">
                <div className="pain-ic">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" y1="2" x2="22" y2="22" /></svg>
                </div>
                <h4>Aucune visibilité sur Google</h4>
                <p>Vos prospects vous cherchent, mais ne vous trouvent pas</p>
              </div>
              <div className="pain-card reveal d1">
                <div className="pain-ic">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 9h20" /><path d="m8 14 3 3" /><path d="m11 14-3 3" /><path d="M16 14h.01" /></svg>
                </div>
                <h4>Un site qui ne convertit pas</h4>
                <p>Vous avez un site, mais il reste une vitrine inerte qui ne déclenche aucun contact.</p>
              </div>
              <div className="pain-card reveal d2">
                <div className="pain-ic">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2 2" /><path d="M5 3 2 6" /><path d="m22 6-3-3" /></svg>
                </div>
                <h4>Pas le temps de gérer ça</h4>
                <p>Le marketing digital est important — mais vous avez déjà 20 autres priorités.</p>
              </div>
            </div>

            <div className="problem-copy reveal d1">
              <span className="eyebrow">Ce que vous avez ?</span>
              <h2 className="problem-title" style={{ color: "var(--ink)" }}>Un site déjà en ligne, mais pas de nouveaux clients ?</h2>
              <p className="problem-body">Ce n&apos;est pas un problème de budget, ni de motivation. C&apos;est un problème de méthode — et c&apos;est exactement ce qu&apos;on résout.</p>
              <a href="#methode" className="btn btn--lg">
                Voir comment on résout ça <BtnArrow />
              </a>
            </div>

            <div className="result-bubble reveal">
              <svg className="rb-curve" viewBox="0 0 460 150" fill="none" preserveAspectRatio="none">
                <path className="rb-curve-path" d="M14 8 C 60 92, 185 134, 335 130 C 393 128, 427 121, 450 108" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 12" />
              </svg>
              <svg className="rb-arrowhead" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 3 L17 11 L3 19" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="rb-circle">
                <span className="rb-tag"><span className="rb-pulse" /> Résultat</span>
                <span className="rb-text">votre acquisition repose encore trop sur la chance ou le réseau.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUTCOME ============ */}
      <section className="section outcome" data-screen-label="Ce que vous obtenez">
        <div className="container outcome-grid">
          <div className="outcome-copy reveal">
            <span className="eyebrow">Ce que vous obtenez ?</span>
            <h2>Un système simple pour <span className="hl">générer des demandes</span> sans gérer la technique</h2>
            <p>Pas un site de plus. Un dispositif complet d&apos;acquisition locale qui travaille pour vous.</p>
          </div>

          <div className="outcome-cards">
            <div className="oc-col">
              <article className="oc-card reveal">
                <div className="oc-ic amber">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                </div>
                <h4>Un site qui convertit</h4>
                <p>Créé ou refondu pour transformer vos visiteurs en prospects. Pensé pour vos cibles, optimisé pour Google, maintenu dans le temps.</p>
                <span className="oc-tag amber" style={{ color: "rgb(34, 197, 94)", backgroundColor: "rgb(227, 249, 230)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
                  Plus de formulaires remplis
                </span>
              </article>

              <article className="oc-card reveal d2">
                <div className="oc-ic teal">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17a3 3 0 0 0 3-3l3-3a2.12 2.12 0 0 0-3-3l-3 3" /><path d="M13 7a3 3 0 0 0-3 3l-3 3a2.12 2.12 0 0 0 3 3l3-3" /><path d="m7.5 16.5 1.5 1.5" /><path d="m15 6 1.5 1.5" /></svg>
                </div>
                <h4>Un partenaire dédié</h4>
                <p>Un seul interlocuteur qui connaît votre dossier. Rapport mensuel clair. Vous déléguez, vous restez informé, vous pilotez en toute sérénité.</p>
                <span className="oc-tag amber" style={{ color: "rgb(34, 197, 94)", backgroundColor: "rgb(227, 249, 230)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
                  Zéro gestion technique
                </span>
              </article>
            </div>

            <div className="oc-col oc-col--offset">
              <article className="oc-card reveal d1">
                <div className="oc-ic plain">
                  <svg width="30" height="30" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8a12 12 0 0 1 0-24c3 0 5.8 1.2 7.9 3l5.7-5.7A20 20 0 1 0 24 44c11 0 20-9 20-20 0-1.3-.1-2.3-.4-3.5z" />
                    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8A12 12 0 0 1 24 12c3 0 5.8 1.2 7.9 3l5.7-5.7A20 20 0 0 0 6.3 14.7z" />
                    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.7 28l-6.5 5A20 20 0 0 0 24 44z" />
                    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C39 35.7 44 30.5 44 24c0-1.3-.1-2.3-.4-3.5z" />
                  </svg>
                </div>
                <h4>Une visibilité Google locale</h4>
                <p>Stratégie SEO construite pour votre zone géographique. Fiche Google optimisée. Vous apparaissez quand vos prospects vous cherchent.</p>
                <span className="oc-tag teal-outline" style={{ color: "rgb(34, 197, 94)", backgroundColor: "rgb(227, 249, 230)", boxShadow: "none" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
                  Top 3 Google local en 6 mois
                </span>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OFFER ============ */}
      <section className="section section--wash" id="offre">
        <div className="container">
          <div className="pack-grid">
            <div className="pack-left reveal">
              <span className="eyebrow">Notre offre</span>
              <h2 className="pack-title">Le Pack Web Sérénité — <span className="hl">tout inclus</span></h2>
              <p className="pack-lead">Site, SEO, maintenance, suivi mensuel. Un seul abonnement, un seul interlocuteur, un seul objectif : vous faire trouver par vos prospects.</p>
              <ul className="pack-list">
                <li className="reveal d0"><span className="pl-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span><span>Création ou refonte de votre site internet</span></li>
                <li className="reveal d1"><span className="pl-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span><span>Maintenance technique continue — rien à gérer</span></li>
                <li className="reveal d2"><span className="pl-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span><span>Stratégie SEO locale personnalisée</span></li>
                <li className="reveal d3"><span className="pl-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span><span>Optimisation de votre fiche Google</span></li>
                <li className="reveal d0"><span className="pl-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span><span>2 liens entrants mensuels inclus</span></li>
                <li className="reveal d1"><span className="pl-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span><span>Numéro tracé redirigé vers votre ligne</span></li>
                <li className="reveal d2"><span className="pl-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span><span>Rapport mensuel de résultats</span></li>
                <li className="reveal d3"><span className="pl-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span><span>Interlocuteur dédié et réactif</span></li>
              </ul>
              <Link href="/contact" className="btn pack-btn-left">
                Voir tous les détails de l&apos;offre <BtnArrow />
              </Link>
            </div>

            <aside className="pack-card reveal d1">
              <span className="pack-badge"><span className="pb-dot" /> <span>Pack Web Sérénité</span></span>
              <h3 className="pack-card-title">Votre visibilité Google gérée pour vous</h3>
              <p className="pack-card-sub">Tout inclus — site, SEO, maintenance, suivi</p>
              <div className="pack-price"><span className="pp-amount" style={{ fontFamily: "var(--font-display)" }}>245 €</span><span className="pp-unit">HT / mois</span></div>
              <p className="pack-fine">Engagement 12 mois à compter de la mise en ligne · TVA 20 % en sus</p>
              <div className="pack-divider" />
              <ul className="pack-card-list">
                <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span>Site professionnel inclus</span></li>
                <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span>SEO local + fiche Google</span></li>
                <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span>Maintenance &amp; mises à jour</span></li>
                <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span>Rapport mensuel clair</span></li>
                <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span>Interlocuteur dédié</span></li>
              </ul>
              <Link href="/contact" className="btn pack-btn-card">
                Demandez votre diagnostic gratuit <BtnArrow />
              </Link>
              <p class="pack-card-foot">Gratuit et sans engagement · Réponse sous 48h</p>
            </aside>
          </div>
        </div>
      </section>

      {/* ============ METHOD ============ */}
      <section className="section" id="methode">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">COMMENT ÇA MARCHE</span>
            <h2>Trois étapes, zéro prise de tête ...</h2>
            <p>Simple, cadré, sans surprise... On avance ensemble, étape par étape — et vous voyez les résultats arriver.</p>
          </div>
          <div className="timeline">
            <span className="tl-line" aria-hidden="true" />
            <div className="tl-step reveal">
              <div className="tl-node teal" style={{ backgroundColor: "rgb(255, 234, 233)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <span className="tl-num" style={{ fontFamily: "var(--font-display)", backgroundColor: "rgb(229, 32, 60)", color: "#fff" }}>01</span>
              </div>
              <div className="tl-text">
                <h4>Diagnostic gratuit</h4>
                <p>On analyse votre situation, votre marché local et vos objectifs. Un échange de 30 minutes, sans engagement, pour valider si on peut vous aider concrètement.</p>
              </div>
            </div>
            <div className="tl-step reveal d1">
              <div className="tl-node amber">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                <span className="tl-num" style={{ fontFamily: "var(--font-display)", backgroundColor: "rgb(247, 177, 49)" }}>02</span>
              </div>
              <div className="tl-text">
                <h4>Lancement &amp; onboarding</h4>
                <p>Brief stratégique, choix des mots-clés, architecture du site, brief photos. On définit ensemble la stratégie avant de produire quoi que ce soit.</p>
              </div>
            </div>
            <div className="tl-step reveal d3">
              <div className="tl-node amber">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="20" x2="6" y2="15" /><line x1="12" y1="20" x2="12" y2="9" /><line x1="18" y1="20" x2="18" y2="5" /><line x1="3" y1="20" x2="21" y2="20" /></svg>
                <span
                  className="tl-num"
                  style={{ fontFamily: "var(--font-display)", backgroundColor: "rgb(35, 118, 141)", border: "1px solid" }}
                >
                  03
                </span>
              </div>
              <div className="tl-text">
                <h4>Mise en ligne &amp; suivi</h4>
                <p>Votre site est mis en ligne. La stratégie SEO démarre. Chaque mois, vous recevez un rapport de résultats et on optimise ensemble.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST ============ */}
      <section className="section trust">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-copy reveal">
              <span className="trust-badge"><span className="tb-dot" /> Un interlocuteur unique</span>
              <h2 className="trust-title">Un cadre clair, <span className="hl">zéro complexité</span></h2>
              <p className="trust-lead">Pas de rotation d&apos;équipe. Pas de ticket support. Une agence à taille humaine, basée à Sautron, qui s&apos;implique vraiment dans votre réussite.</p>
              <ul className="trust-list">
                <li className="reveal d1">
                  <span className="trust-ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" /><circle cx="18" cy="6" r="3.4" fill="#F7B131" stroke="none" /><path d="M16.7 6 17.7 7 19.3 5.2" stroke="#fff" strokeWidth="1.4" /></svg></span>
                  <span className="trust-txt"><b>On parle business, pas technique</b><span>Visibilité, contacts, résultats — pas de jargon inutile.</span></span>
                </li>
                <li className="reveal d2">
                  <span className="trust-ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><circle cx="11" cy="10" r="2.2" fill="#F7B131" stroke="none" /><path d="M11 12.2c-1.6 0-2.6 1-2.6 1" /></svg></span>
                  <span className="trust-txt"><b>Spécialistes du local depuis 2014</b><span>Nantes et Loire-Atlantique — on connaît votre marché.</span></span>
                </li>
                <li className="reveal d3">
                  <span className="trust-ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="20" x2="5" y2="13" /><line x1="12" y1="20" x2="12" y2="8" /><line x1="19" y1="20" x2="19" y2="4" /><circle cx="19" cy="4" r="2.4" fill="#F7B131" stroke="none" /></svg></span>
                  <span className="trust-txt"><b>Résultats mesurables chaque mois</b><span>Rapport clair, positions suivies, appels comptabilisés.</span></span>
                </li>
              </ul>
            </div>

            <div className="trust-media reveal d1">
              <span className="tm-corner tm-corner--tr" />
              <span className="tm-corner tm-corner--bl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img id="trust-team" className="trust-photo" src="/assets/Photo-lagence-marketinglocal.jpg" alt="Jacquelin Chombart De Lauwe — Marketing Local" loading="lazy" />
              <div className="trust-pill">
                <span className="tp-dot" />
                <span className="tp-txt"><b>Disponibles cette semaine</b><span>Réponse sous 48h garantie</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section section--wash">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Ils en parlent mieux que nous</span>
            <h2>Des résultats concrets, près de chez vous</h2>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <ProjectsCarousel />

      {/* ============ FAQ ============ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Questions fréquentes</span>
            <h2>Ce que les entreprises locales nous demandent</h2>
          </div>
          <FaqList items={FAQ_ITEMS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
