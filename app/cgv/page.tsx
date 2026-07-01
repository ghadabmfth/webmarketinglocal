import type { Metadata } from "next";
import Link from "next/link";
import BodyAttrs from "@/components/BodyAttrs";
import { BtnArrow, PhoneIcon } from "@/components/Icons";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Marketing Local",
  description:
    "Conditions Générales de Vente de Marketing Local : contrat, obligations, facturation, résiliation, propriété du site et droit applicable.",
};

export default function CgvPage() {
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
            <span className="bc-current" aria-current="page">CGV</span>
          </nav>
          <h1 className="contact-title">
            Conditions générales
            <br />
            de vente
          </h1>
          <p className="contact-sub">Les conditions régissant nos prestations de création et de gestion de site internet.</p>
        </div>
      </section>

      <section className="section legal-page">
        <div className="container">
          <article className="legal-body reveal">
            <p className="legal-updated">Dernière mise à jour : juin 2026</p>

            <h2>1 — Contrat</h2>

            <p>
              La société <strong>Marketing Local</strong>, EURL au capital de 5 000 €, dont le siège social est 19 bis rue de la
              Vallée, 44880 Sautron, et le bureau est 44 rue de Bretagne, 44880 Sautron, RCS 803 136 423, représentée par M.
              Jacquelin Chombart de Lauwe, gérant, dûment habilité aux présentes, ci-après dénommée « le prestataire », fournit à
              ses clients un service payant, comprenant la création et/ou la gestion d&apos;un site Internet et des prestations
              marketing, en contrepartie du paiement d&apos;un abonnement mensuel.
            </p>

            <p>
              Le détail des prestations de services, objet du présent contrat, figure dans le devis signé entre le prestataire
              et le client. Ce devis et les présentes Conditions Générales de Vente constituent le Contrat de Service.
            </p>

            <h2>2 — Obligations du prestataire</h2>

            <p>
              Le prestataire s&apos;engage à respecter le caractère strictement confidentiel des éléments qui lui sont confiés
              par le client tels que sa stratégie et ses objectifs.
            </p>

            <p>
              Le prestataire s&apos;engage à fournir un service exclusif et donc à ne pas effectuer de prestations de web
              marketing à un concurrent direct (profession ou services identiques) dans une même ville sans un accord préalable.
            </p>

            <p>
              Le prestataire assure la création ou la refonte du site internet, son hébergement, le dépôt et la location du nom
              de domaine du client, les sauvegardes, la maintenance, les modifications ainsi que les formalités administratives
              relatives au site pendant toute la durée du contrat. Le prestataire assure un référencement naturel et/ou payant
              sans assurer pour autant une quelconque garantie d&apos;indexation ou de positionnement. À noter que ces travaux ne
              seront commencés qu&apos;à réception du premier règlement.
            </p>

            <p>
              Le prestataire s&apos;engage à mettre tout en œuvre pour assurer la permanence, la continuité et la qualité des
              services fournis au client et souscrit à ce titre à une obligation de moyens et en aucun cas ne saurait être tenu
              d&apos;une obligation de résultats. Le prestataire ne saurait donc être tenu responsable d&apos;une quelconque
              dégradation du site ayant un impact direct ou indirect sur les résultats du site ou l&apos;image de la société,
              étant donné le caractère incontrôlable d&apos;Internet.
            </p>

            <p>En aucun cas, la responsabilité du prestataire ne pourra être recherchée en cas de :</p>

            <ul>
              <li>faute, négligence, omission ou défaillance du client, non-respect des conseils donnés ;</li>
              <li>
                faute, négligence ou omission d&apos;un tiers sur lequel le prestataire n&apos;a aucun pouvoir de contrôle ou de
                surveillance ;
              </li>
              <li>force majeure, évènement ou incident indépendant de la volonté du prestataire ;</li>
              <li>
                problèmes imputables à l&apos;attitude de l&apos;internaute — le prestataire est uniquement l&apos;interlocuteur
                technique ; le client se tournera alors vers son assureur pour régler ces différends.
              </li>
            </ul>

            <p>
              Le prestataire ne pourra être tenu responsable envers le client des conséquences de l&apos;introduction d&apos;un
              virus informatique dans le serveur web ou dans le site, de la migration du site dans un environnement matériel ou
              logiciel différent, des modifications apportées aux composants logiciels par une personne autre que le
              prestataire, d&apos;une baisse de chiffre d&apos;affaires consécutive au fonctionnement ou à l&apos;absence de
              fonctionnement du site, d&apos;une intrusion illégale d&apos;un tiers dans le serveur web, d&apos;un encombrement
              temporaire de la bande passante ou d&apos;une interruption du service de connexion Internet pour une cause hors de
              son contrôle.
            </p>

            <h2>3 — Obligations et responsabilité du client</h2>

            <p>
              Un projet de création et de gestion active de site Internet nécessite une participation constructive du client.
              Le client doit donc :
            </p>

            <ul>
              <li>Fournir les éléments demandés (chartes graphiques, logos, images, contenu, etc.) dans un délai raisonnable.</li>
              <li>Valider les propositions graphiques ou fonctionnelles et les contenus dans un délai maximum de cinq jours.</li>
            </ul>

            <p>
              Dans le cas où ces délais ne seraient pas respectés, le prestataire est fondé à exiger le règlement du solde de
              création et à faire démarrer la facturation de l&apos;abonnement.
            </p>

            <p>
              Si des changements sont demandés après validation des propositions graphiques ou fonctionnelles, ils feront
              l&apos;objet d&apos;un devis séparé. Un refus, par le client, du devis proposé dans ce cas de figure ne peut en
              aucun cas remettre en cause le présent contrat, et notamment les développements initialement prévus.
            </p>

            <p>
              Le client est responsable pendant la durée de l&apos;abonnement du paiement de l&apos;ensemble des sommes dues au
              titre de la fourniture des services du prestataire. Il s&apos;engage également à respecter le mode et le délai de
              règlement définis dans le devis.
            </p>

            <p>Le client s&apos;oblige à :</p>

            <ul>
              <li>Informer immédiatement le prestataire en cas de panne ou de dysfonctionnement du site Internet.</li>
              <li>Être responsable des informations diffusées sur son site Internet.</li>
            </ul>

            <p>
              De plus, le client garantit le prestataire de tout recours de tiers portant sur le contenu du service ou les
              prestations du client, et ce sous quelque législation que ce soit.
            </p>

            <p>
              Le client est le responsable entier et exclusif des mots de passe nécessaires à l&apos;utilisation des services.
              Le prestataire dégage toute responsabilité pour toute utilisation illicite ou frauduleuse des mots de passe mis à
              la disposition du client. La fourniture des mots de passe est considérée comme confidentielle. Toute suspicion
              d&apos;une divulgation, intentionnelle ou non, des mots de passe fournis engage la responsabilité unique du client
              à l&apos;exclusion de celle de Marketing Local.
            </p>

            <h2>4 — Durée du contrat</h2>

            <p>
              Le contrat est conclu pour une durée initiale de douze (12) mois pendant laquelle le client ne peut prétendre
              s&apos;attribuer la propriété des travaux effectués par le prestataire. Il est renouvelable automatiquement par
              tacite reconduction.
            </p>

            <h2>5 — Facturation</h2>

            <p>
              En contrepartie des services fournis par le prestataire, le client s&apos;engage à payer un forfait mensuel,
              correspondant aux frais d&apos;abonnement et d&apos;hébergement du site internet, dont le montant et les
              modalités de paiement sont précisés dans le devis et/ou la facture.
            </p>

            <p>
              Le prestataire délivre chaque mois une facture. La facture du client est exclusivement envoyée par email. Le
              client est libre de la consulter, de la copier ou de l&apos;imprimer. En aucun cas le prestataire n&apos;enverra
              au client de facture sur support papier.
            </p>

            <p>
              En cas d&apos;incident de paiement, le prestataire pourra suspendre immédiatement les services d&apos;hébergement
              du site Internet et des emails du client. Il pourra également résilier le contrat sans préavis.
            </p>

            <h2>6 — Résiliation</h2>

            <p>
              Celle-ci ne peut intervenir dans la période initiale de douze (12) mois. Par la suite, le client est libre de
              résilier ce contrat à n&apos;importe quel moment, par courrier recommandé adressé au siège social du prestataire,
              et en respectant un préavis de 60 jours.
            </p>

            <p>
              À la condition expresse que le client soit à jour de ses règlements, et sur simple demande, le prestataire lui
              livrera les éléments du site internet conformément à l&apos;article 7 du présent contrat.
            </p>

            <p>La résiliation ne pourra donner lieu au remboursement de toute somme versée au titre du présent contrat.</p>

            <h2>7 — Propriété et cession du site</h2>

            <p>
              Le client est propriétaire de son site Internet à partir du moment où le solde est réglé. Dans le cas contraire,
              le prestataire reste l&apos;unique propriétaire du site développé jusqu&apos;au paiement du solde.
            </p>

            <p>
              En cas de rupture, sur simple demande, et à la condition expresse que le client soit à jour de ses règlements, le
              prestataire lui fournira les éléments du site Internet : les fichiers graphiques, les codes sources et les bases
              de données.
            </p>

            <h2>8 — Délai de livraison</h2>

            <p>
              Le prestataire s&apos;engage à tout mettre en œuvre pour procéder à la réalisation des services commandés par
              l&apos;abonné, mais ne s&apos;engage sur aucun délai de livraison. La mise en place du site internet est en effet
              conditionnée par la fourniture par l&apos;abonné des éléments graphiques et des contenus devant figurer sur le
              site internet.
            </p>

            <h2>9 — Contenu du site et droits d&apos;auteur</h2>

            <p>
              Le client s&apos;engage expressément à ne pas proposer sur son site des marchandises illicites ou interdites par
              la loi, à respecter la propriété intellectuelle des autres sites et plus généralement des œuvres de l&apos;esprit,
              littéraires, artistiques et autres, ainsi que les droits d&apos;auteur et les propriétaires des marques. Il
              s&apos;engage en outre à respecter les droits de la personnalité et le respect de la personne humaine.
            </p>

            <p>
              Le client déclare avoir conclu des contrats ou accords avec les éventuels auteurs intervenant dans la réalisation
              du site afin de lui céder l&apos;intégralité des droits d&apos;exploitation des œuvres concernées. Il est précisé
              que, pour le recours aux iconographies, photographies, dessins ou musiques, les droits seront à la charge du
              client.
            </p>

            <p>
              En tout état de cause, le client déclare avoir été parfaitement informé de ses obligations en la matière et
              décharge le prestataire de toute responsabilité en cas de recours des tiers.
            </p>

            <h2>10 — Nom de domaine</h2>

            <p>
              Le prestataire propose au client d&apos;enregistrer, pour le compte de ce dernier, son nom de domaine auprès de
              son partenaire d&apos;hébergement. Afin d&apos;acquérir ce nom de domaine, le client doit accepter les conditions
              d&apos;utilisation consultables sur le site internet du partenaire.
            </p>

            <p>
              Le client est considéré comme propriétaire et demandeur du nom de domaine, le prestataire étant considéré comme
              contact technique, administratif et de facturation.
            </p>

            <p>
              Au terme du contrat entre le prestataire et le client, le mandat confié par le client au prestataire pour la
              gestion de son nom de domaine sera résilié de plein droit. Le client s&apos;assurera de ne plus faire apparaître
              le prestataire comme contact technique, administratif et de facturation de son nom de domaine.
            </p>

            <h2>11 — Sous-traitance</h2>

            <p>
              Le prestataire pourra avoir librement recours à la sous-traitance pour une partie ou la totalité des prestations.
              Le prestataire demeurera responsable à l&apos;égard du client de l&apos;exécution de l&apos;intégralité des
              obligations découlant du présent contrat.
            </p>

            <h2>12 — Clause de divisibilité contractuelle</h2>

            <p>
              Si l&apos;une des clauses des présentes conditions générales était contraire à une loi d&apos;ordre public
              nationale ou internationale, seule la clause en question sera annulée, les présentes demeurant valables pour le
              surplus. Les parties négocieront de bonne foi la rédaction d&apos;une nouvelle clause destinée à remplacer celle
              qui était nulle.
            </p>

            <h2>13 — Clause d&apos;intégralité</h2>

            <p>
              Il est convenu que les présentes conditions générales renferment toutes les conditions et obligations que les
              parties ont adoptées, et qu&apos;elles ne peuvent être contredites ni complétées par des déclarations ou des
              documents antérieurs. Ce contrat se substitue à tout autre document qui aurait pu être signé antérieurement ou
              échangé entre les parties à une date précédant la conclusion du présent accord.
            </p>

            <h2>14 — Force majeure</h2>

            <p>
              Les parties ne sont pas responsables en cas de force majeure, et notamment en cas de défaillance du réseau public
              de distribution d&apos;électricité, grèves, guerres, tempêtes, tremblements de terre, défaillance du réseau public
              des télécommunications, pertes de connectivité Internet dues aux opérateurs publics ou privés, et de ses effets.
            </p>

            <h2>15 — Incessibilité</h2>

            <p>
              Le client ne peut transférer ou céder le présent contrat, ou se substituer à un tiers. Le cas échéant, un nouveau
              contrat devra être signé.
            </p>

            <h2>16 — Loi applicable</h2>

            <p>
              Les présentes conditions générales sont soumises à l&apos;application du droit français. Les parties
              s&apos;engagent à rechercher une solution amiable à tout différend qui pourrait naître de la réalisation des
              prestations. Si elles n&apos;y parviennent pas, les parties soumettront le litige au tribunal de commerce de
              Nantes.
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
