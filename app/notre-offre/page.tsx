import type { Metadata } from "next";
import Link from "next/link";
import BodyAttrs from "@/components/BodyAttrs";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { BtnArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Notre offre — Pack Web Sérénité tout-en-un | Marketing Local",
  description:
    "Site, référencement local, fiche Google et suivi mensuel réunis dans un abonnement clair à partir de 245 €/mois. Une offre complète gérée de A à Z pour les TPE.",
};

const FAQ_ITEMS = [
  {
    q: "Est-ce que je suis engagé sur une longue durée ?",
    a: "L'engagement initial est de 12 mois, à compter de la mise en ligne — le temps que le référencement local porte ses fruits. Ensuite, vous passez en mensuel sans engagement, résiliable avec 2 mois de préavis.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Les premières demandes arrivent souvent dès les premières semaines. Pour le référencement local, on vise le Top 3 sous 6 mois, selon votre marché et votre concurrence.",
  },
  {
    q: "Que se passe-t-il à la fin du contrat ?",
    a: "Vous restez libre : vous continuez en mensuel, ou vous arrêtez avec 2 mois de préavis. Et vous avez une option de rachat du site — il vous appartient.",
  },
  {
    q: "Est-ce que je dois m'impliquer dans le projet ?",
    a: "Le minimum. Un brief au départ, vos contenus et photos si vous en avez, puis un point mensuel. On s'occupe de toute la technique et du suivi.",
  },
  {
    q: "245 € HT / mois, est-ce que c'est rentable pour une TPE ?",
    a: "Un seul nouveau client gagné via Google couvre souvent plusieurs mois d'abonnement. Tout est inclus (site, SEO, maintenance, suivi) : pas de coûts cachés ni de gros budget de départ.",
  },
  {
    q: "J'ai eu une mauvaise expérience avec une agence. Pourquoi ce serait différent ?",
    a: "Un seul interlocuteur qui connaît votre dossier, un rapport mensuel clair et des résultats mesurables. Pas de jargon, pas de promesses en l'air — vous voyez ce que ça rapporte.",
  },
];

export default function NotreOffrePage() {
  return (
    <>
      <BodyAttrs bodyClass="page-offre page-no" dataS="no-1" />

      {/* ============ HERO ============ */}
      <section className="hero hero--offre hero--offrepage" data-s="no-14">
        <span className="hero-bubble b1 bubble-float" />
        <span className="hero-bubble b2 bubble-float" />
        <div className="container hero-grid" data-s="no-15">
          <div className="hero-copy" data-s="no-16">
            <nav className="hero-breadcrumb" aria-label="Fil d'ariane">
              <Link href="/">Accueil</Link>
              <span className="bc-sep" aria-hidden="true">›</span>
              <span className="bc-current" aria-current="page">Notre offre</span>
            </nav>
            <h1 className="hero-title" data-s="no-17">
              <span data-s="no-18">Une offre </span>
              <span data-s="no-19">tout-en-un</span>
              <span data-s="no-20"> pour votre </span>
              <span data-s="no-21">visibilité locale</span>
            </h1>
            <p className="hero-sub" data-s="no-22">Site, référencement local, fiche Google et suivi mensuel — réunis dans un seul abonnement clair, géré de A à Z.</p>
            <div className="hero-cta" data-s="no-23">
              <Link href="/contact" className="btn" data-s="no-24">
                Discutons de votre projet <BtnArrow />
              </Link>
              <button className="btn-play" type="button" data-scroll="#offre" data-s="no-25">
                <span className="dot" data-s="no-26">
                  <svg width="13" height="15" viewBox="0 0 11 13" fill="currentColor" data-s="no-27">
                    <path d="M10 5.4 1.4.1A.95.95 0 0 0 0 .95v10.5a.95.95 0 0 0 1.4.83L10 7a.95.95 0 0 0 0-1.6Z" data-s="no-28" />
                  </svg>
                </span>
                <span data-s="no-29">Découvrir l&apos;offre</span>
              </button>
            </div>
            <p className="hero-fineprint" data-s="no-30">À partir de 245 € HT / mois · Engagement 12 mois · Résiliable</p>
          </div>

          <div className="hero-media offre-media" data-s="no-31">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-portrait"
              src="/assets/hero-jchombart.png"
              alt="Jacquelin Chombart De Lauwe — Expert WebMarketing, Marketing Local"
              width={660}
              data-s="no-32"
            />

            <div className="hero-stats">
              <div className="hero-stat hs-gray hs-tl float">
                <div className="num" data-s="no-33">+3<span className="u">×</span></div>
                <div className="lbl">Demandes entrantes</div>
              </div>
              <div className="hero-stat hs-amber hs-tr float" data-s="no-34">
                <div className="num">Top<sub>3</sub></div>
                <div className="lbl">Google local en 6 mois</div>
              </div>
              <div className="hero-stat hs-teal hs-bl float" data-s="no-35">
                <div className="num">12<span className="u"> ans</span></div>
                <div className="lbl">D&apos;expérience locale</div>
              </div>
              <div className="hero-stat hs-gray hs-br float">
                <div className="num">80<span className="u">+</span></div>
                <div className="lbl">Sites créés en Loire-Atlantique</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DÉFIS ============ */}
      <section className="section defis" data-screen-label="Les défis des dirigeants de TPE" data-s="no-36">
        <div className="container" data-s="no-37">
          <div className="section-head reveal" data-s="no-38">
            <span className="eyebrow" data-s="no-39">Vous vous reconnaissez ?</span>
            <h2 data-s="no-40">Les défis des <span data-s="no-41">dirigeants de TPE</span></h2>
            <p data-s="no-42">Si l&apos;une de ces situations vous parle, le Pack Web Sérénité a été conçu pour vous.</p>
          </div>
          <div className="defis-grid">
            <article className="pain-card reveal">
              <div className="pain-ic" data-s="no-43">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M6.5 4.5h2.6l1.2 3-1.7 1.2a10 10 0 0 0 4.7 4.7l1.2-1.7 3 1.2v2.6a1.5 1.5 0 0 1-1.6 1.5A13.5 13.5 0 0 1 5 6.1 1.5 1.5 0 0 1 6.5 4.5z" fill="#AEB6BA" />
                  <circle cx="12" cy="12" r="10.6" stroke="#E5203C" strokeWidth="1.7" />
                  <line x1="4.6" y1="4.6" x2="19.4" y2="19.4" stroke="#E5203C" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>
              <h4 data-s="no-44">Votre téléphone ne sonne pas assez</h4>
              <p data-s="no-45">L&apos;essentiel de vos clients vient encore du bouche-à-oreille ou de votre réseau personnel.</p>
            </article>
            <article className="pain-card reveal">
              <div className="pain-ic" data-s="no-46">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M10.5 4 A6.5 6.5 0 0 1 17 10.5" stroke="#4285F4" strokeWidth="2.4" fill="none" />
                  <path d="M17 10.5 A6.5 6.5 0 0 1 10.5 17" stroke="#EA4335" strokeWidth="2.4" fill="none" />
                  <path d="M10.5 17 A6.5 6.5 0 0 1 4 10.5" stroke="#FBBC04" strokeWidth="2.4" fill="none" />
                  <path d="M4 10.5 A6.5 6.5 0 0 1 10.5 4" stroke="#34A853" strokeWidth="2.4" fill="none" />
                  <line x1="15.4" y1="15.4" x2="20" y2="20" stroke="#5F6368" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>
              <h4 data-s="no-47">Vous n&apos;apparaissez pas sur Google</h4>
              <p data-s="no-48">Quand un prospect cherche votre service en local, vous n&apos;êtes pas dans les premiers résultats.</p>
            </article>
            <article className="pain-card reveal">
              <div className="pain-ic" data-s="no-49">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <text x="12" y="5.5" fontSize="5.2" fill="#F7B131" textAnchor="middle" fontWeight="700" fontFamily="Poppins, sans-serif">www</text>
                  <circle cx="12" cy="14" r="7.2" stroke="#23768D" strokeWidth="1.8" />
                  <ellipse cx="12" cy="14" rx="3" ry="7.2" stroke="#23768D" strokeWidth="1.5" />
                  <line x1="4.9" y1="14" x2="19.1" y2="14" stroke="#23768D" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 data-s="no-50">Votre site ne génère pas de contacts</h4>
              <p data-s="no-51">Il est en ligne, mais il ne vous apporte ni appels ni formulaires remplis.</p>
            </article>
            <article className="pain-card reveal">
              <div className="pain-ic" data-s="no-52">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="13.5" r="7.3" stroke="#2A2E34" strokeWidth="1.9" />
                  <path d="M12 10v3.5l2.4 1.7" stroke="#2A2E34" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.6 6.2 7.6 3.6" stroke="#E5203C" strokeWidth="1.9" strokeLinecap="round" />
                  <path d="M19.4 6.2 16.4 3.6" stroke="#E5203C" strokeWidth="1.9" strokeLinecap="round" />
                  <path d="M7.5 20.4 6 22.4" stroke="#2A2E34" strokeWidth="1.9" strokeLinecap="round" />
                  <path d="M16.5 20.4 18 22.4" stroke="#2A2E34" strokeWidth="1.9" strokeLinecap="round" />
                </svg>
              </div>
              <h4 data-s="no-53">Vous n&apos;avez pas le temps de gérer ça</h4>
              <p data-s="no-54">Le marketing digital, c&apos;est important — mais vous avez déjà 20 priorités avant.</p>
            </article>
            <article className="pain-card reveal">
              <div className="pain-ic" data-s="no-55">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9.4" fill="#F7B131" />
                  <path d="M7 9.2 9.6 11M9.6 9.2 7 11" stroke="#2A1A00" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M14.4 9.2 17 11M17 9.2 14.4 11" stroke="#2A1A00" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M8 16.2c1-1.2 2-1.2 2.7-.1.6 1 1.7 1 2.6 0 .7-.8 1.7-.8 2.7.1" stroke="#2A1A00" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 data-s="no-56">Vous avez déjà essayé, sans résultat</h4>
              <p data-s="no-57">Agence, freelance, Wix… Vous avez investi, mais ça n&apos;a pas produit de retour mesurable.</p>
            </article>
            <article className="pain-card reveal">
              <div className="pain-ic" data-s="no-58">
                <svg id="fi_15713432" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m202.33 53.44a80.7 80.7 0 0 0 -18.8 22.06l-161.24 278.08a81.62 81.62 0 0 0 29.58 111.22 81.62 81.62 0 0 0 111.22-29.58l138.59-239c-30.58-43.9-75.19-107.93-99.35-142.78z" fill="#febd00"></path><circle cx="92.69" cy="394.4" fill="#25a84a" r="81.38"></circle><rect fill="#2e8add" height="484.21" rx="81.38" transform="matrix(-.866 .5 -.5 -.866 751.31 309.71)" width="162.76" x="252.78" y="13.4"></rect></svg>
              </div>
              <h4 data-s="no-59">Vous ne savez pas ce qui fonctionne</h4>
              <p data-s="no-60">Pas de visibilité sur ce que rapportent vos actions digitales, ni sur quoi agir en priorité.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ TRANSFORMATION ============ */}
      <section className="section compare" data-screen-label="Ce qui change concrètement" data-s="no-61">
        <div className="container" data-s="no-62">
          <div className="section-head reveal" data-s="no-63">
            <span className="eyebrow" data-s="no-64">La transformation</span>
            <h2 data-s="no-65">Ce qui change concrètement</h2>
            <p data-s="no-66">Le Pack Web Sérénité ne vend pas un site. Il vend une transformation de votre acquisition digitale.</p>
          </div>

          <div className="compare-grid">
            <article className="compare-card cmp-avant reveal">
              <div className="cmp-head">
                <span className="cmp-pill cmp-pill--red">Avant</span>
                <span className="cmp-label" data-s="no-67">Sans accompagnement</span>
              </div>
              <ul className="cmp-list">
                <li><span className="cmp-x"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg></span>Site vitrine peu ou pas exploité</li>
                <li><span className="cmp-x"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg></span>Visibilité Google faible ou nulle en local</li>
                <li><span className="cmp-x"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg></span>Acquisition dépendante du bouche-à-oreille</li>
                <li><span className="cmp-x"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg></span>Aucune visibilité sur vos résultats digitaux</li>
                <li><span className="cmp-x"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg></span>Charge mentale liée à la gestion du web</li>
                <li><span className="cmp-x"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg></span>Prestataires multiples, peu de cohérence</li>
              </ul>
            </article>

            <span className="compare-arrow" aria-hidden="true" data-s="no-68">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" data-s="no-69"><line x1="4" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
            </span>

            <article className="compare-card cmp-apres reveal d1" data-s="no-70">
              <div className="cmp-head">
                <span className="cmp-pill cmp-pill--teal" data-s="no-71">Après</span>
                <span className="cmp-label cmp-label--light" data-s="no-72">Avec le Pack Web Sérénité</span>
              </div>
              <ul className="cmp-list">
                <li><span className="cmp-c" data-s="no-73"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Site professionnel, pensé pour convertir</li>
                <li><span className="cmp-c" data-s="no-74"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Référencement local en progression continue</li>
                <li><span className="cmp-c" data-s="no-75"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Demandes entrantes régulières via le web</li>
                <li><span className="cmp-c" data-s="no-76"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Rapport mensuel clair sur les performances</li>
                <li><span className="cmp-c" data-s="no-77"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Zéro gestion technique de votre côté</li>
                <li><span className="cmp-c" data-s="no-78"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Un seul interlocuteur dédié, réactif</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ============ OFFER ============ */}
      <section className="section section--wash" id="offre" data-s="no-79">
        <div className="container" data-s="no-80">
          <div className="pack-grid">
            <div className="pack-left reveal">
              <span className="eyebrow" data-s="no-81">L&apos;offre socle</span>
              <h2 className="pack-title" data-s="no-82">Un socle de visibilité <span className="hl" data-s="no-83">durable</span></h2>
              <p className="pack-lead" data-s="no-84">Le Pack Web Sérénité est une solution complète et déléguée. Vous n&apos;avez plus à vous occuper de votre présence web — on s&apos;en charge.</p>
              <ul className="socle-list">
                <li className="socle-item reveal">
                  <span className="socle-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F7B131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.4" /><line x1="20" y1="20" x2="15.5" y2="15.5" /></svg></span>
                  <span className="socle-txt"><b>Aucun frais caché</b><span>Le tarif mensuel couvre tout : site, maintenance, SEO, rapport mensuel.</span></span>
                </li>
                <li className="socle-item reveal">
                  <span className="socle-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F7B131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 4v4h-4" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 20v-4h4" /></svg></span>
                  <span className="socle-txt"><b>Résiliable après 12 mois</b><span>Engagement initial d&apos;un an, puis mensuel sans engagement avec 2 mois de préavis.</span></span>
                </li>
                <li className="socle-item reveal">
                  <span className="socle-ic">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <text x="12" y="6" fontSize="5" fill="#F7B131" textAnchor="middle" fontWeight="700" fontFamily="Poppins, sans-serif">www</text>
                      <circle cx="12" cy="14" r="6.6" stroke="#23768D" strokeWidth="1.8" />
                      <ellipse cx="12" cy="14" rx="2.8" ry="6.6" stroke="#23768D" strokeWidth="1.4" />
                      <line x1="5.4" y1="14" x2="18.6" y2="14" stroke="#23768D" strokeWidth="1.4" />
                    </svg>
                  </span>
                  <span className="socle-txt"><b>Le site vous appartient</b><span>Option de rachat du site à la fin du contrat — sans obligation.</span></span>
                </li>
                <li className="socle-item reveal">
                  <span className="socle-ic">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M6.5 4.5h2.6l1.2 3-1.7 1.2a10 10 0 0 0 4.7 4.7l1.2-1.7 3 1.2v2.6a1.5 1.5 0 0 1-1.6 1.5A13.5 13.5 0 0 1 5 6.1 1.5 1.5 0 0 1 6.5 4.5z" fill="#23768D" />
                      <circle cx="17.5" cy="6.5" r="3" fill="#F7B131" />
                    </svg>
                  </span>
                  <span className="socle-txt"><b>Numéro de suivi des appels inclus</b><span>Un numéro tracé redirigé vers votre ligne — mesurez vos appels entrants.</span></span>
                </li>
              </ul>
            </div>

            <aside className="pack-card reveal d1">
              <span className="pack-badge"><span className="pb-dot" /> <span>Pack Web Sérénité</span></span>
              <h3 className="pack-card-title">Votre visibilité Google gérée pour vous</h3>
              <p className="pack-card-sub">Tout inclus — site, SEO, maintenance, suivi</p>
              <div className="pack-price"><span className="pp-amount" style={{ fontFamily: "var(--font-display)" }}>245 €</span><span className="pp-unit">HT / mois</span></div>
              <p className="pack-fine">Engagement 12 mois à compter de la mise en ligne · TVA 20 % en sus</p>
              <div className="pack-divider" />
              <ul className="pack-card-list">
                  <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span data-s="no-90">Création ou refonte de votre site internet</span></li>
                  <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span data-s="no-91">Maintenance technique continue — rien à gérer</span></li>
                  <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span data-s="no-92">Stratégie SEO locale personnalisée</span></li>
                  <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span data-s="no-93">Optimisation de votre fiche Google</span></li>
                  <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span data-s="no-94">2 liens entrants mensuels (netlinking)</span></li>
                  <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span data-s="no-95">Numéro tracé redirigé vers votre ligne</span></li>
                  <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span data-s="no-96">Rapport mensuel de résultats clair</span></li>
                  <li><span className="pcl-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#F7B131" strokeWidth="2" /><path d="M8 12.4l2.6 2.6 5-5.6" stroke="#F7B131" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span data-s="no-97">Interlocuteur dédié et réactif</span></li>
                </ul>
              <Link href="/contact" className="btn pack-btn-card">
                Demandez votre diagnostic gratuit <BtnArrow />
              </Link>
              <p class="pack-card-foot">Gratuit et sans engagement · Réponse sous 48h</p>
            </aside>
          </div>
        </div>
      </section>

      {/* ============ OPTIONS ============ */}
      <section className="section options" data-screen-label="Les options pour accélérer" data-s="no-100">
        <div className="container" data-s="no-101">
          <div className="section-head reveal" data-s="no-102">
            <span className="eyebrow" data-s="no-103">Pour aller plus loin</span>
            <h2 data-s="no-104">Les options pour accélérer</h2>
            <p data-s="no-105">Deux leviers complémentaires à activer selon vos objectifs et votre calendrier.</p>
          </div>

          <div className="options-grid">
            {/* Option Contenu */}
            <article className="opt-card reveal">
              <div className="opt-head">
                <span className="opt-ic opt-ic--amber"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h12l4 4v12a0 0 0 0 1 0 0H4a0 0 0 0 1 0 0z" /><polyline points="15 4 15 9 20 9" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></svg></span>
                <div>
                  <h3>Option Contenu</h3>
                  <p className="opt-desc">Des contenus optimisés pour travailler plus de mots-clés et élargir votre présence sur Google : articles de blog, pages locales, pages FAQ.</p>
                </div>
              </div>
              <div className="opt-packs">
                <div className="opt-pack">
                  <div className="op-info"><b>Pack Essentiel</b><span>8 contenus / an · 99 € / contenu</span></div>
                  <div className="op-price"><span className="op-amount">49 €</span><span className="op-unit">HT / mois</span></div>
                </div>
                <div className="opt-pack opt-pack--pop">
                  <span className="op-tag" data-s="no-106">Populaire</span>
                  <div className="op-info"><b>Pack Croissance</b><span>12 contenus / an · 89 € / contenu <em data-s="no-107">−9 %</em></span></div>
                  <div className="op-price"><span className="op-amount" data-s="no-108">89 €</span><span className="op-unit">HT / mois</span></div>
                </div>
                <div className="opt-pack">
                  <div className="op-info"><b>Pack Accélération</b><span>24 contenus / an · 84,50 € / contenu <em>−14 %</em></span></div>
                  <div className="op-price"><span className="op-amount">169 €</span><span className="op-unit">HT / mois</span></div>
                </div>
              </div>
            </article>

            {/* Option Google Ads */}
            <article className="opt-card opt-card--ads reveal d1">
              <div className="opt-head">
                <span className="opt-ic opt-ic--google">
                  <svg  width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <g>
                      <path class="st0" d="M84.5,28.57c2.4-6.3,5.7-12.1,10.6-16.8c19.6-19.1,52-14.3,65.3,9.7c10,18.2,20.6,36,30.9,54
                        c17.2,29.9,34.6,59.8,51.6,89.8c14.3,25.1-1.2,56.8-29.6,61.1c-17.4,2.6-33.7-5.4-42.7-21c-15.1-26.3-30.3-52.6-45.4-78.8
                        c-0.3-0.6-0.7-1.1-1.1-1.6c-1.6-1.3-2.3-3.2-3.3-4.9c-6.7-11.8-13.6-23.5-20.3-35.2c-4.3-7.6-8.8-15.1-13.1-22.7
                        c-3.9-6.8-5.7-14.2-5.5-22C82.2,36.17,82.7,32.17,84.5,28.57" fill="#3C8BD9"/>
                      <path class="st1" d="M84.5,28.57c-0.9,3.6-1.7,7.2-1.9,11c-0.3,8.4,1.8,16.2,6,23.5c11,18.9,22,37.9,32.9,56.9c1,1.7,1.8,3.4,2.8,5
                        c-6,10.4-12,20.7-18.1,31.1c-8.4,14.5-16.8,29.1-25.3,43.6c-0.4,0-0.5-0.2-0.6-0.5c-0.1-0.8,0.2-1.5,0.4-2.3
                        c4.1-15,0.7-28.3-9.6-39.7c-6.3-6.9-14.3-10.8-23.5-12.1c-12-1.7-22.6,1.4-32.1,8.9c-1.7,1.3-2.8,3.2-4.8,4.2
                        c-0.4,0-0.6-0.2-0.7-0.5c4.8-8.3,9.5-16.6,14.3-24.9c19.8-34.4,39.6-68.8,59.5-103.1C84,29.27,84.3,28.97,84.5,28.57" fill="#FABC04"/>
                      <path class="st2" d="M10.4,157.97c1.9-1.7,3.7-3.5,5.7-5.1c24.3-19.2,60.8-5.3,66.1,25.1c1.3,7.3,0.6,14.3-1.6,21.3
                        c-0.1,0.6-0.2,1.1-0.4,1.7c-0.9,1.6-1.7,3.3-2.7,4.9c-8.9,14.7-22,22-39.2,20.9c-19.7-1.4-35.2-16.2-37.9-35.8
                        c-1.3-9.5,0.6-18.4,5.5-26.6c1-1.8,2.2-3.4,3.3-5.2C9.7,158.77,9.5,157.97,10.4,157.97" fill="#34A852"/>
                      <path class="st1" d="M10.4,157.97c-0.4,0.4-0.4,1.1-1.1,1.2c-0.1-0.7,0.3-1.1,0.7-1.6L10.4,157.97" fill="#FABC04"/>
                      <path class="st3" d="M80.2,200.97c-0.4-0.7,0-1.2,0.4-1.7c0.1,0.1,0.3,0.3,0.4,0.4L80.2,200.97" fill="#E1C025"/>
                    </g>
                  </svg>
                </span>
                <div>
                  <h3>Option Google Ads</h3>
                  <p className="opt-desc">Des campagnes Google Ads gérées pour vous, pour générer de la visibilité et des demandes à court terme — en complément du SEO.</p>
                </div>
              </div>
              <div className="ads-rate">
                <span className="ads-pct" data-s="no-109">15 %</span>
                <span className="ads-rate-txt">des dépenses publicitaires<br />
                  <b>min. 89 € HT / mois</b>
                </span>
              </div>
              <ul className="ads-list">
                <li><span className="ads-c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Paramétrage et structuration des campagnes</li>
                <li><span className="ads-c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Sélection des mots-clés et rédaction des annonces</li>
                <li><span className="ads-c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Optimisations et suivi des performances</li>
                <li><span className="ads-c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Budget conseillé : à partir de 300 € HT / mois</li>
                <li><span className="ads-c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Sans engagement — 1 mois de préavis</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ============ METHOD ============ */}
      <section className="section" id="methode" data-s="no-110">
        <div className="container" data-s="no-111">
          <div className="section-head reveal" data-s="no-112">
            <span className="eyebrow" data-s="no-113">COMMENT ÇA MARCHE</span>
            <h2 data-s="no-114">Simple, cadré, sans surprise</h2>
            <p data-s="no-115">De la signature à vos premiers résultats — un process clair en 4 étapes.</p>
          </div>
          <div className="timeline timeline-4">
            <span className="tl-line" aria-hidden="true" data-s="no-116" />
            <div className="tl-step reveal">
              <div className="tl-node teal" data-s="no-117">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" data-s="no-118" /><line x1="21" y1="21" x2="16.65" y2="16.65" data-s="no-119" /></svg>
                <span className="tl-num" data-s="no-120">01</span>
              </div>
              <div className="tl-text">
                <h4>Diagnostic gratuit</h4>
                <p>On analyse votre situation, votre marché local et vos objectifs. Un échange de 30 minutes, sans engagement.</p>
              </div>
            </div>
            <div className="tl-step reveal d1" data-s="no-121">
              <div className="tl-node amber">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                <span className="tl-num" data-s="no-122">02</span>
              </div>
              <div className="tl-text">
                <h4>Onboarding stratégique</h4>
                <p>Brief complet, choix des mots-clés prioritaires, architecture du site et brief graphique. On cadre tout avant de produire.</p>
              </div>
            </div>
            <div className="tl-step reveal d3">
              <div className="tl-node amber" data-s="no-123">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5 3 22l5.5-1.5" data-s="no-124" /><path d="M9 15l7.5-7.5a4 4 0 0 0 0-5 4 4 0 0 0-5 0L4 10l5 5z" data-s="no-125" /><circle cx="13.5" cy="10.5" r="1.5" data-s="no-126" /></svg>
                <span className="tl-num" data-s="no-127">03</span>
              </div>
              <div className="tl-text">
                <h4>Lancement du site</h4>
                <p>Création ou refonte, mise en ligne et optimisation de votre fiche Google. La stratégie SEO locale démarre.</p>
              </div>
            </div>
            <div className="tl-step reveal d3">
              <div className="tl-node teal" data-s="no-128">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="20" x2="6" y2="15" data-s="no-129" /><line x1="12" y1="20" x2="12" y2="9" data-s="no-130" /><line x1="18" y1="20" x2="18" y2="5" data-s="no-131" /><line x1="3" y1="20" x2="21" y2="20" data-s="no-132" /></svg>
                <span className="tl-num" data-s="no-133">04</span>
              </div>
              <div className="tl-text">
                <h4>Suivi mensuel</h4>
                <p>Rapport de résultats, optimisations continues et point régulier avec votre interlocuteur dédié.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DIFFÉRENCE ============ */}
      <section className="section diff" data-screen-label="Ce qui nous différencie" data-s="no-134">
        <div className="container" data-s="no-135">
          <div className="section-head reveal" data-s="no-136">
            <span className="eyebrow" data-s="no-137">Pourquoi Marketing Local</span>
            <h2 data-s="no-138">Ce qui nous différencie</h2>
            <p data-s="no-139">Pas une agence généraliste. Un partenaire spécialisé dans l&apos;acquisition digitale des TPE locales.</p>
          </div>
          <div className="diff-grid">
            <article className="diff-card reveal">
              <span className="diff-ic"><svg width="44" height="44" viewBox="0 0 48 48" fill="none"><path d="M9 13a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-8l-5 4v-4h0a3 3 0 0 1-3-3z" fill="#23768D" /><path d="M23 19a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h0v4l-5-4h-6a3 3 0 0 1-3-3z" fill="#F7B131" /><circle cx="16" cy="40" r="3.4" fill="#0D1B2E" /><circle cx="32" cy="40" r="3.4" fill="#0D1B2E" /></svg></span>
              <h4>On parle business, pas technique</h4>
              <p>Pas de jargon SEO. On vous parle de demandes, de clients, de résultats — et c&apos;est tout.</p>
            </article>
            <article className="diff-card reveal">
              <span className="diff-ic"><svg width="44" height="44" viewBox="0 0 48 48" fill="none"><path d="M8 14 18 11l12 3 10-3v22l-10 3-12-3-10 3z" fill="#EAF3F5" stroke="#23768D" strokeWidth="1.6" strokeLinejoin="round" /><path d="M18 11v22M30 14v22" stroke="#23768D" strokeWidth="1.3" /><path d="M30 15c-3.9 0-7 3-7 6.8 0 4.8 7 10.2 7 10.2s7-5.4 7-10.2c0-3.8-3.1-6.8-7-6.8z" fill="#F7B131" /><circle cx="30" cy="22" r="2.4" fill="#fff" /></svg></span>
              <h4>Spécialistes du local</h4>
              <p>Nantes, Loire-Atlantique et région — on connaît le marché, les concurrents et les opportunités.</p>
            </article>
            <article className="diff-card reveal">
              <span className="diff-ic"><svg width="44" height="44" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="25" r="12" fill="#EAF3F5" stroke="#23768D" strokeWidth="1.6" /><path d="M12 25h24M24 13c4.5 3.6 4.5 20.4 0 24M24 13c-4.5 3.6-4.5 20.4 0 24" stroke="#23768D" strokeWidth="1.3" fill="none" /><path d="M13 24a11 11 0 0 1 22 0" stroke="#0D1B2E" strokeWidth="2.4" fill="none" /><rect x="10.5" y="23.5" width="4" height="7" rx="2" fill="#0D1B2E" /><rect x="33.5" y="23.5" width="4" height="7" rx="2" fill="#0D1B2E" /></svg></span>
              <h4>Un seul interlocuteur</h4>
              <p>Pas de rotation d&apos;équipe, pas de ticket support. Un contact dédié qui connaît votre dossier.</p>
            </article>
            <article className="diff-card reveal">
              <span className="diff-ic"><svg width="44" height="44" viewBox="0 0 48 48" fill="none"><rect x="10" y="28" width="6" height="10" rx="1.5" fill="#23768D" /><rect x="21" y="22" width="6" height="16" rx="1.5" fill="#23768D" /><rect x="32" y="15" width="6" height="23" rx="1.5" fill="#F7B131" /><path d="M11 24l8-6 7 4 9-9" stroke="#0D1B2E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M30 13h5v5" stroke="#0D1B2E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <h4>Résultats mesurables</h4>
              <p>Rapport mensuel, suivi des positions, comptage des appels. Vous savez ce que ça rapporte.</p>
            </article>
            <article className="diff-card reveal">
              <span className="diff-ic"><svg width="44" height="44" viewBox="0 0 48 48" fill="none"><rect x="9" y="9" width="13.5" height="13.5" rx="3" fill="#E5203C" /><rect x="25.5" y="9" width="13.5" height="13.5" rx="3" fill="#F7B131" /><rect x="9" y="25.5" width="13.5" height="13.5" rx="3" fill="#23768D" /><rect x="25.5" y="25.5" width="13.5" height="13.5" rx="3" fill="#4285F4" /></svg></span>
              <h4>Solution clé en main</h4>
              <p>Site, SEO, maintenance, suivi : tout est géré par une seule équipe. Zéro coordination de votre côté.</p>
            </article>
            <article className="diff-card reveal">
              <span className="diff-ic"><svg width="44" height="44" viewBox="0 0 48 48" fill="none"><circle cx="12.5" cy="19" r="4.4" fill="#23768D" /><path d="M5 34c0-4.4 3.4-7.4 7.5-7.4S20 29.6 20 34z" fill="#23768D" /><circle cx="35.5" cy="19" r="4.4" fill="#23768D" /><path d="M28 34c0-4.4 3.4-7.4 7.5-7.4S43 29.6 43 34z" fill="#23768D" /><circle cx="24" cy="16" r="5.4" fill="#F7B131" /><path d="M14.5 36c0-5.3 4.2-9.4 9.5-9.4s9.5 4.1 9.5 9.4z" fill="#F7B131" /></svg></span>
              <h4>Structure à taille humaine</h4>
              <p>12 ans d&apos;expérience, 6 collaborateurs, basés à Sautron. Une agence qui s&apos;implique vraiment.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section section--wash" data-s="no-140">
        <div className="container" data-s="no-141">
          <div className="section-head reveal">
            <span className="eyebrow" data-s="no-142">Ils en parlent mieux que nous</span>
            <h2 data-s="no-143">Des résultats concrets, près de chez vous</h2>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow" data-s="no-152">Questions fréquentes</span>
            <h2 data-s="no-153">Ce que les entreprises locales nous demandent</h2>
          </div>
          <FaqList items={FAQ_ITEMS} defaultOpenFirst />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
