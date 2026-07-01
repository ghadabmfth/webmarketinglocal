import type { Metadata } from "next";
import Link from "next/link";
import BodyAttrs from "@/components/BodyAttrs";
import FaqList from "@/components/FaqList";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "FAQ — Vos questions sur nos services web | Marketing Local",
  description:
    "Engagement, délais, tarifs, accompagnement : les réponses aux questions les plus fréquentes sur la création de site internet et le référencement local.",
};

const GROUPS = [
  {
    title: "L'offre & l'engagement",
    items: [
      {
        q: "Est-ce que je suis engagé sur une longue durée ?",
        a: "L'engagement initial est de 12 mois, à compter de la mise en ligne — le temps que le référencement local porte ses fruits. Ensuite, vous passez en mensuel sans engagement, résiliable avec 2 mois de préavis.",
      },
      {
        q: "Que comprend exactement le Pack Web Sérénité ?",
        a: "Tout est inclus : création ou refonte du site, maintenance, stratégie SEO locale, optimisation de votre fiche Google, 2 liens entrants par mois, un numéro de suivi des appels, le rapport mensuel et un interlocuteur dédié.",
      },
      {
        q: "245 € HT / mois, est-ce rentable pour une TPE ?",
        a: "Un seul nouveau client gagné via Google couvre souvent plusieurs mois d'abonnement. Tout est inclus, sans coûts cachés ni gros budget de départ.",
      },
      {
        q: "Que se passe-t-il à la fin du contrat ?",
        a: "Vous restez libre : vous continuez en mensuel, ou vous arrêtez avec 2 mois de préavis. Vous avez aussi une option de rachat du site — il vous appartient.",
      },
    ],
  },
  {
    title: "Les résultats",
    items: [
      {
        q: "Combien de temps avant de voir des résultats ?",
        a: "Les premières demandes arrivent souvent dès les premières semaines. Pour le référencement local, on vise le Top 3 sous 6 mois, selon votre marché et votre concurrence.",
      },
      {
        q: "Comment mesurez-vous les résultats ?",
        a: "Chaque mois, vous recevez un rapport clair : positions sur Google, demandes entrantes et appels (grâce au numéro de suivi). Vous voyez précisément ce que ça rapporte.",
      },
      {
        q: "Garantissez-vous la première position sur Google ?",
        a: "Personne ne peut garantir la 1ʳᵉ place — ce serait malhonnête. En revanche, on s'engage sur une méthode éprouvée et un suivi transparent, et on vise systématiquement le Top 3 local.",
      },
    ],
  },
  {
    title: "Travailler avec nous",
    items: [
      {
        q: "Est-ce que je dois m'impliquer dans le projet ?",
        a: "Le minimum. Un brief au départ, vos contenus et photos si vous en avez, puis un point mensuel. On s'occupe de toute la technique et du suivi.",
      },
      {
        q: "Je n'y connais rien au web, est-ce un problème ?",
        a: "Pas du tout — c'est même pour ça qu'on existe. On vous parle résultats, pas jargon, et un interlocuteur unique vous accompagne à chaque étape.",
      },
      {
        q: "J'ai eu une mauvaise expérience avec une agence. Pourquoi ce serait différent ?",
        a: "Un seul interlocuteur qui connaît votre dossier, un rapport mensuel clair et des résultats mesurables. Pas de promesses en l'air — vous voyez ce que ça rapporte.",
      },
      {
        q: "Travaillez-vous avec mon secteur d'activité ?",
        a: "On accompagne artisans, commerçants et TPE/PME de tous secteurs en Loire-Atlantique et au-delà. Le diagnostic gratuit nous permet de valider qu'on peut vous aider concrètement.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <BodyAttrs bodyClass="page-offre page-fq" dataS="fq-1" />

      <section className="contact-hero hero--rea">
        <span className="hero-bubble b1 bubble-float" />
        <span className="hero-bubble b2 bubble-float" />
        <div className="container">
          <nav className="hero-breadcrumb" aria-label="Fil d'ariane">
            <Link href="/">Accueil</Link>
            <span className="bc-sep" aria-hidden="true">›</span>
            <span className="bc-current" aria-current="page">FAQ</span>
          </nav>
          <h1 className="contact-title">
            Vos questions,
            <br />
            nos réponses
          </h1>
          <p className="contact-sub">Tout ce que les dirigeants de TPE nous demandent avant de se lancer. Une autre question ? On y répond avec plaisir.</p>
        </div>
      </section>

      <section className="section faq-page" id="faq">
        <div className="container">
          {GROUPS.map((group, i) => (
            <div className="faq-group reveal" key={group.title}>
              <h2 className="faq-group-title">{group.title}</h2>
              <FaqList items={group.items} defaultOpenFirst={i === 0} />
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Et si votre projet était le prochain ?"
        body="Des solutions adaptées aux TPE et aux PME. On regarde ensemble votre visibilité actuelle et ce qu'on peut en faire."
      />
    </>
  );
}
