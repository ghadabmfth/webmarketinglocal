import type { Metadata } from "next";
import Link from "next/link";
import BodyAttrs from "@/components/BodyAttrs";
import { BtnArrow, PhoneIcon } from "@/components/Icons";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mentions légales | Marketing Local",
  description: "Mentions légales du site Marketing Local : éditeur, hébergement, propriété intellectuelle et responsabilité.",
};

export default function MentionsLegalesPage() {
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
            <span className="bc-current" aria-current="page">Mentions légales</span>
          </nav>
          <h1 className="contact-title">Mentions légales</h1>
          <p className="contact-sub">Les informations légales relatives à l&apos;éditeur et à l&apos;utilisation de ce site.</p>
        </div>
      </section>

      <section className="section legal-page">
        <div className="container">
          <article className="legal-body reveal">
            <p className="legal-updated">Dernière mise à jour : juin 2026</p>

            <h2>Éditeur du site</h2>
            <p>
              Le présent site est édité par <strong>Marketing Local</strong>, agence web spécialisée dans la création de sites
              internet, le référencement local et la visibilité en ligne des TPE et PME.
            </p>
            <ul>
              <li><strong>Statut du propriétaire :</strong> société</li>
              <li><strong>Forme juridique :</strong> EURL</li>
              <li><strong>Nom de la société :</strong> Marketing Local</li>
              <li><strong>Capital social :</strong> 5 000 €</li>
              <li><strong>Siège social :</strong> 19 bis rue de la Vallée, 44880 Sautron, France</li>
              <li><strong>Bureau :</strong> 44 rue de Bretagne, 44880 Sautron, France</li>
              <li><strong>Téléphone :</strong> 02 85 52 33 43</li>
              <li><strong>Email :</strong> contact@marketinglocal.fr</li>
              <li><strong>SIRET :</strong> 803 136 423 00024</li>
              <li><strong>R.C.S. :</strong> Registre du commerce de Nantes</li>
              <li><strong>N° TVA intracommunautaire :</strong> FR 91 803136423</li>
            </ul>

            <h2>Création et responsabilité de la publication</h2>
            <ul>
              <li><strong>Créateur du site :</strong> marketinglocal.fr</li>
              <li>
                <strong>Responsable de la publication :</strong> Jacquelin Chombart de Lauwe (personne morale) —{" "}
                <a href="mailto:delauwe@marketinglocal.fr">delauwe@marketinglocal.fr</a>
              </li>
              <li>
                <strong>Webmaster :</strong> <a href="mailto:webmaster@marketinglocal.fr">webmaster@marketinglocal.fr</a>
              </li>
            </ul>

            <h2>Hébergement</h2>
            <p>
              L&apos;hébergement du site est assuré par <strong>OuiHeberg</strong>, qui met l&apos;accent sur la performance, la
              sécurité des infrastructures et la qualité du support technique, en s&apos;appuyant sur l&apos;expertise de ses
              équipes et les technologies les plus récentes.
            </p>
            <ul>
              <li><strong>Hébergeur :</strong> OuiHeberg</li>
              <li><strong>SIRET :</strong> 888 341 997 00029</li>
              <li><strong>Adresse :</strong> 9 rue des Colonnes, 75002 Paris, France</li>
              <li>
                <strong>Site web :</strong>{" "}
                <a href="https://www.ouiheberg.com" target="_blank" rel="noopener">
                  www.ouiheberg.com
                </a>
              </li>
              <li>
                <strong>Email :</strong> <a href="mailto:contact@ouiheberg.com">contact@ouiheberg.com</a>
              </li>
            </ul>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos, graphismes, vidéos, structure et code)
              est la propriété exclusive de Marketing Local ou de ses partenaires, sauf mention contraire. Toute reproduction,
              représentation, modification ou diffusion, totale ou partielle, sans autorisation écrite préalable, est interdite
              et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
            <p>
              La marque « Marketing Local », son logo et son identité visuelle sont protégés. Toute utilisation non autorisée
              fera l&apos;objet de poursuites.
            </p>

            <h2>Responsabilité</h2>
            <p>
              Marketing Local s&apos;efforce de fournir des informations exactes et à jour sur ce site. Toutefois, l&apos;agence
              ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées. L&apos;utilisateur
              reste seul responsable de l&apos;usage qu&apos;il fait de ces informations.
            </p>
            <p>
              Marketing Local ne saurait être tenue responsable des dommages directs ou indirects résultant de l&apos;accès au
              site ou de son utilisation, ni des éventuels dysfonctionnements techniques ou interruptions de service.
            </p>

            <h2>Liens externes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. Marketing Local n&apos;exerce aucun contrôle sur ces sites
              et décline toute responsabilité quant à leur contenu ou à leur politique de confidentialité.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution
              amiable, les tribunaux compétents seront ceux du ressort de Nantes.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question relative au site ou à ces mentions légales, vous pouvez nous écrire à{" "}
              <a href="mailto:contact@marketinglocal.fr">contact@marketinglocal.fr</a> ou nous appeler au 02 85 52 33 43.
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
