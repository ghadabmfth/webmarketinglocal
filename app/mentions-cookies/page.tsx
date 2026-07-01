import type { Metadata } from "next";
import Link from "next/link";
import BodyAttrs from "@/components/BodyAttrs";
import { BtnArrow, PhoneIcon } from "@/components/Icons";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mentions relatives aux cookies | Marketing Local",
  description:
    "Politique de cookies du site Marketing Local : types de cookies, consentement, durée de conservation et gestion de vos préférences.",
};

export default function MentionsCookiesPage() {
  return (
    <>
      <BodyAttrs bodyClass="page-offre page-fq page-lg" dataS="fq-1" />

      <section className="contact-hero hero--rea">
        <span className="hero-bubble b1 bubble-float" />
        <span className="hero-bubble b2 bubble-float" />
        <span className="hero-bubble b3 bubble-float" />
        <div className="container">
          <nav className="hero-breadcrumb" aria-label="Fil d'ariane">
            <Link href="/">Accueil</Link>
            <span className="bc-sep" aria-hidden="true">›</span>
            <span className="bc-current" aria-current="page">Cookies</span>
          </nav>
          <h1 className="contact-title">
            Mentions relatives
            <br />
            aux cookies
          </h1>
          <p className="contact-sub">Comment nous utilisons les cookies et comment gérer vos préférences.</p>
        </div>
      </section>

      <section className="section legal-page">
        <div className="container">
          <article className="legal-body reveal">
            <p className="legal-updated">Dernière mise à jour : juin 2026</p>

            <h2>Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la
              consultation d&apos;un site internet. Il permet au site de mémoriser des informations relatives à votre
              navigation afin d&apos;améliorer votre expérience et de mesurer l&apos;audience.
            </p>

            <h2>Les cookies que nous utilisons</h2>
            <p>Le site Marketing Local utilise différentes catégories de cookies :</p>
            <ul>
              <li>
                <strong>Cookies strictement nécessaires :</strong> indispensables au bon fonctionnement du site (navigation,
                sécurité, mémorisation de vos préférences). Ils ne nécessitent pas votre consentement.
              </li>
              <li>
                <strong>Cookies de mesure d&apos;audience :</strong> ils nous permettent de comprendre comment les visiteurs
                utilisent le site (pages consultées, durée de visite, source de trafic) afin d&apos;en améliorer le contenu. Ces
                cookies ne sont déposés qu&apos;avec votre consentement.
              </li>
              <li>
                <strong>Cookies de fonctionnalités :</strong> ils mémorisent vos choix (par exemple les images déposées dans
                les zones interactives) pour personnaliser votre expérience.
              </li>
              <li>
                <strong>Cookies tiers :</strong> certains services intégrés (cartes Google Maps, contenus externes) peuvent
                déposer leurs propres cookies, soumis à la politique de confidentialité de ces tiers.
              </li>
            </ul>

            <h2>Votre consentement</h2>
            <p>
              Lors de votre première visite, un bandeau vous informe de l&apos;utilisation de cookies. Vous pouvez accepter,
              refuser ou personnaliser vos préférences. Aucun cookie non essentiel n&apos;est déposé sans votre accord
              préalable.
            </p>
            <p>
              Votre consentement est conservé pour une durée maximale de 6 mois. Passé ce délai, votre choix vous sera de
              nouveau demandé.
            </p>

            <h2>Gérer ou supprimer les cookies</h2>
            <p>
              Vous pouvez à tout moment modifier vos préférences ou supprimer les cookies enregistrés via les paramètres de
              votre navigateur :
            </p>
            <ul>
              <li><strong>Google Chrome :</strong> Paramètres › Confidentialité et sécurité › Cookies</li>
              <li><strong>Mozilla Firefox :</strong> Paramètres › Vie privée et sécurité › Cookies</li>
              <li><strong>Safari :</strong> Préférences › Confidentialité</li>
              <li><strong>Microsoft Edge :</strong> Paramètres › Cookies et autorisations de site</li>
            </ul>
            <p>La suppression des cookies strictement nécessaires peut toutefois altérer le bon fonctionnement du site.</p>

            <h2>Durée de conservation</h2>
            <p>
              Les cookies ont une durée de vie limitée et ne sont jamais conservés au-delà de 13 mois. Les données collectées
              via les cookies de mesure d&apos;audience sont conservées pour une durée maximale de 25 mois.
            </p>

            <h2>Vos données personnelles</h2>
            <p>
              Les informations recueillies via les cookies ne sont jamais revendues à des tiers. Conformément au Règlement
              Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de
              suppression de vos données. Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@marketinglocal.fr">contact@marketinglocal.fr</a>.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question relative à notre utilisation des cookies, écrivez-nous à{" "}
              <a href="mailto:contact@marketinglocal.fr">contact@marketinglocal.fr</a> ou appelez le 02 85 52 33 43.
            </p>
            <p>
              <Link className="btn legal-cta" href="/contact">
                Nous contacter <BtnArrow />
              </Link>
            </p>
          </article>
        </div>
      </section>

      <section className="section cta-band section--deep" data-s="fq-19">
        <span className="bubble-deco bd1" data-s="fq-20" />
        <span className="bubble-deco bd2" data-s="fq-21" />
        <div className="container" data-s="fq-22">
          <span className="eyebrow" data-s="fq-23">Parlons-en, c&apos;est gratuit</span>
          <h2 data-s="fq-24">Et si votre projet était le prochain ?</h2>
          <p data-s="fq-25">
            Des solutions adaptées aux TPE et aux PME. On regarde ensemble votre visibilité actuelle et ce qu&apos;on peut en
            faire.
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn--lg" data-s="fq-26">
              Demander un diagnostic gratuit <BtnArrow />
            </Link>
            <a href={SITE.phoneHref} className="phone-link" data-s="fq-28">
              <PhoneIcon width={20} height={20} />
              <span data-s="fq-30">{SITE.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
