import type { Metadata } from "next";
import Link from "next/link";
import BodyAttrs from "@/components/BodyAttrs";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export const metadata: Metadata = {
  title: "Agence web à Orvault | Sites internet & SEO local — Marketing Local",
  description:
    "Agence web à Orvault pour PME, sociétés de conseil et professions libérales : sites internet clairs et rapides, référencement local et accompagnement de proximité.",
};

const FAQ_ITEMS = [
  {
    q: "Êtes-vous une agence basée près d’Orvault ?",
    a: "Oui, nous sommes installés à Sautron, juste à côté d’Orvault. Cette proximité nous permet d’échanger facilement et de bien comprendre le tissu économique local — entreprises de services, conseil, professions libérales et PME du nord nantais.",
  },
  {
    q: "Mon activité est dans le tertiaire — est-ce adapté ?",
    a: "Tout à fait. Pour les sociétés de services et de conseil, un site clair et crédible et une bonne visibilité Google jouent un rôle décisif dans la décision des futurs clients. C’est précisément ce que nous construisons.",
  },
  {
    q: "Combien coûte un site internet à Orvault ?",
    a: "Nous fonctionnons par abonnement mensuel tout compris (création, hébergement, maintenance, SEO local, suivi), sans gros investissement de départ. Le montant dépend de votre projet — défini ensemble lors du diagnostic gratuit.",
  },
  {
    q: "En combien de temps des résultats à Orvault ?",
    a: "Les premiers contacts arrivent souvent dès les premières semaines. Pour le référencement local sur Orvault et la métropole, l’objectif est le Top 3 sous 6 mois selon votre marché.",
  },
  {
    q: "Aurai-je un interlocuteur dédié ?",
    a: "Oui. Pas de rotation d’équipe ni de ticket support : un seul contact qui connaît votre dossier, vous explique simplement et reste joignable.",
  },
];

export default function AgenceWebOrvaultPage() {
  return (
    <>
      <BodyAttrs bodyClass="page-offre page-ag" dataS="ag-1" />

      {/* ============ HERO ============ */}
      <section className="contact-hero hero--rea">
        <span className="hero-bubble b1 bubble-float" />
        <span className="hero-bubble b2 bubble-float" />
        <div className="container locseo-hero">
          <nav className="hero-breadcrumb" aria-label="Fil d'ariane">
            <Link href="/">Accueil</Link>
            <span className="bc-sep" aria-hidden="true">›</span>
            <span className="bc-current" aria-current="page">Agence web Orvault</span>
          </nav>
          <span className="locseo-pill">
            <svg width="11" height="15" viewBox="0 0 11 15" fill="none"><path d="M5.5 0a5.5 5.5 0 0 0-5.5 5.5C0 9.6 5.5 15 5.5 15S11 9.6 11 5.5A5.5 5.5 0 0 0 5.5 0z" fill="#23768D" /><circle cx="5.5" cy="5.3" r="2" fill="#fff" /></svg>
            Nantes &amp; Loire-Atlantique
          </span>
          <h1 className="contact-title locseo-title">Agence Web à Orvault — Plus de visibilité pour votre entreprise</h1>
          <p className="contact-sub locseo-sub">Au nord de Nantes, Orvault accueille de nombreuses entreprises de services, sociétés de conseil, professions libérales et PME tertiaires. Pour ces activités, la qualité de la présence en ligne joue un rôle déterminant dans la décision des futurs clients.</p>
          <div className="locseo-cta">
            <Link href="/contact" className="btn btn--lg">
              Discuter de votre projet
              <span className="btn-arrow" aria-hidden="true">
                <svg className="ar ar-diag" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="8 7 17 7 17 16" /></svg>
                <svg className="ar ar-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
              </span>
            </Link>
          </div>
          <div className="rea-stats rea-stats--center hero-stats-row reveal">
            <div className="rea-stat"><b className="st-teal">120+</b><span>entreprises accompagnées</span></div>
            <div className="rea-stat"><b className="st-coral">2014</b><span>depuis plus de 10 ans</span></div>
            <div className="rea-stat"><b className="st-amber">5,0 ★</b><span>21 avis Google</span></div>
            <div className="rea-stat"><b className="st-teal">48 h</b><span>délai de réponse garanti</span></div>
          </div>
        </div>
      </section>

      {/* ============ POURQUOI ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal"><span className="eyebrow">Pourquoi nous</span><h2>Pourquoi choisir une agence web locale à Orvault ?</h2></div>
          <div className="diff-grid locserv-why">
            <article className="diff-card reveal">
              <span className="diff-ic locserv-whyic">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z" /></svg>
              </span>
              <h4>Proximité</h4>
              <p>Basés tout près d&apos;Orvault, à Sautron, nous connaissons le tissu économique local et ses entreprises de services.</p>
            </article>
            <article className="diff-card reveal">
              <span className="diff-ic locserv-whyic">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5a.8.8 0 0 0 .65 1.27H11l-1 7.23 8.5-11.5a.8.8 0 0 0-.65-1.27H12z" /></svg>
              </span>
              <h4>Réactivité</h4>
              <p>Un interlocuteur accessible, des échanges directs et un accompagnement personnalisé. Pas d&apos;intermédiaire, une communication simple, fluide et efficace à chaque étape de votre projet.</p>
            </article>
            <article className="diff-card reveal">
              <span className="diff-ic locserv-whyic">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" /></svg>
              </span>
              <h4>Résultats locaux</h4>
              <p>Notre expertise SEO local est pensée pour vous positionner là où vos clients vous cherchent : sur Google, dans votre zone.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section section--wash">
        <div className="container">
          <div className="section-head reveal"><span className="eyebrow">Nos services</span><h2>Nos services pour les entreprises orvaltaises</h2><p>Un ensemble de leviers pour construire et entretenir votre présence en ligne.</p></div>
          <div className="locserv-grid">
            <article className="locserv-card reveal">
              <span className="locserv-ic2">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <rect x="6" y="9" width="36" height="26" rx="4" fill="#EAF3F5" stroke="#23768D" strokeWidth="2" />
                  <path d="M6 15h36" stroke="#23768D" strokeWidth="2" />
                  <circle cx="11" cy="12" r="1.3" fill="#23768D" />
                  <circle cx="15" cy="12" r="1.3" fill="#23768D" />
                  <rect x="12" y="20" width="13" height="9" rx="2" fill="#F7B131" />
                  <path d="M29 21h7M29 25h7M29 29h4" stroke="#23768D" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Création de site internet</h3>
              <p>Un site moderne, rapide et pensé pour convertir vos visiteurs en clients.</p>
              <Link className="locserv-more" href="/nos-realisations">
                En savoir plus
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
              </Link>
            </article>
            <article className="locserv-card reveal">
              <span className="locserv-ic2">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <circle cx="21" cy="21" r="12" fill="#EAF3F5" stroke="#23768D" strokeWidth="2" />
                  <path d="m30 30 8 8" stroke="#23768D" strokeWidth="3" strokeLinecap="round" />
                  <path d="M21 14c-3.3 0-6 3-6 7 0 5 6 10 6 10s6-5 6-10c0-4-2.7-7-6-7z" fill="#F7B131" />
                  <circle cx="21" cy="20.5" r="2.2" fill="#fff" />
                </svg>
              </span>
              <h3>Référencement SEO local</h3>
              <p>Être visible sur Google quand vos clients cherchent un professionnel près de chez eux.</p>
              <Link className="locserv-more" href="/nos-realisations">
                En savoir plus
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
              </Link>
            </article>
            <article className="locserv-card reveal">
              <span className="locserv-ic2">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path d="M10 20v8a2 2 0 0 0 2 2h3l2 7a2 2 0 0 0 2 1.5h1.5L21 30h4l11 7V11L25 18h-13a2 2 0 0 0-2 2z" fill="#F7B131" />
                  <path d="M38 19a4 4 0 0 1 0 10" stroke="#23768D" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Gestion Google Ads</h3>
              <p>Des campagnes publicitaires maîtrisées pour générer des demandes dès les premières semaines.</p>
              <Link className="locserv-more" href="/nos-realisations">
                En savoir plus
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
              </Link>
            </article>
            <article className="locserv-card reveal">
              <span className="locserv-ic2">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <rect x="11" y="7" width="26" height="34" rx="4" fill="#EAF3F5" stroke="#23768D" strokeWidth="2" />
                  <path d="M17 16h14M17 22h14M17 28h9" stroke="#23768D" strokeWidth="2" strokeLinecap="round" />
                  <path d="M30 33.5 34 29l4 4-4 4.5-4 .8z" fill="#F7B131" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
              </span>
              <h3>Contenu SEO</h3>
              <p>Des articles et pages optimisés pour attirer un trafic qualifié sur votre site.</p>
              <Link className="locserv-more" href="/nos-realisations">
                En savoir plus
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ============ ZONE ============ */}
      <section className="section">
        <div className="container locseo-zone">
          <div className="section-head reveal">
            <span className="eyebrow">Zone d&apos;intervention</span>
            <h2>Notre présence sur toute la métropole nantaise</h2>
            <p>Orvault, Sautron, Nantes, Saint-Herblain, La Chapelle-sur-Erdre, Couëron, Carquefou… et plus largement en Loire-Atlantique.</p>
          </div>
          <div className="locseo-zones reveal">
            {["Orvault", "Sautron", "Nantes", "Saint-Herblain", "Loire-Atlantique (44)"].map((zone) => (
              <span className="locseo-zone-pill" key={zone}>
                <svg width="12" height="14" viewBox="0 0 11 15" fill="none"><path d="M5.5 0a5.5 5.5 0 0 0-5.5 5.5C0 9.6 5.5 15 5.5 15S11 9.6 11 5.5A5.5 5.5 0 0 0 5.5 0z" fill="currentColor" /><circle cx="5.5" cy="5.3" r="2" fill="#fff" /></svg>
                {" "}{zone}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TÉMOIGNAGES ============ */}
      <section className="section section--wash">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Ils en parlent mieux que nous</span>
            <h2>Des résultats concrets, près de chez vous</h2>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Questions fréquentes</span>
            <h2>Agence web à Orvault — vos questions</h2>
          </div>
          <FaqList items={FAQ_ITEMS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
