export const NAV_LINKS = [
  { href: "/l-agence", label: "L'agence" },
  { href: "/notre-offre", label: "Notre offre" },
  { href: "/nos-realisations", label: "Nos réalisations" },
  { href: "/ressources", label: "Ressources" },
  { href: "/faq", label: "FAQ" },
];

export const SITE = {
  phone: "02 85 52 33 43",
  phoneHref: "tel:0285533343",
  email: "contact@marketinglocal.fr",
  address: "44 rue de Bretagne, 44880 Sautron",
};

export type Review = {
  initials: string;
  name: string;
  when: string;
  text: string;
  avatarColor: string;
};

export const REVIEWS: Review[] = [
  {
    initials: "SM",
    avatarColor: "#E5203C",
    name: "Sophie Mercier",
    when: "il y a 2 mois",
    text: "En quatre mois, on est passés de zéro appel à plusieurs demandes par semaine. On ne s'occupe de rien, c'est ça le plus appréciable. Une équipe à l'écoute et de vrais résultats.",
  },
  {
    initials: "KB",
    avatarColor: "#23768D",
    name: "Karim Benali",
    when: "il y a 3 mois",
    text: "On apparaît enfin en premier sur Google pour notre ville. Les clients nous trouvent seuls, c'est un vrai changement pour l'activité. Je recommande sans hésiter.",
  },
  {
    initials: "CL",
    avatarColor: "#E89D14",
    name: "Claire Lemoine",
    when: "il y a 4 mois",
    text: "Un interlocuteur unique, réactif, qui parle clair. Le rapport mensuel me montre exactement ce que ça rapporte. Enfin une agence qui tient ses promesses.",
  },
  {
    initials: "TR",
    avatarColor: "#155F73",
    name: "Thomas Renaud",
    when: "il y a 5 mois",
    text: "Refonte de notre site et fiche Google nickel. On a doublé les demandes de devis en quelques mois. Sérieux, à l'écoute et de bon conseil.",
  },
  {
    initials: "NB",
    avatarColor: "#0C2F39",
    name: "Nadia Bouchard",
    when: "il y a 6 mois",
    text: "Très bon accompagnement du début à la fin. Notre restaurant est beaucoup plus visible, on reçoit des réservations via Google chaque semaine. Merci à toute l'équipe !",
  },
  {
    initials: "JP",
    avatarColor: "#E5203C",
    name: "Julien Pichon",
    when: "il y a 7 mois",
    text: "Professionnels et disponibles. Ils ont compris mon métier de paysagiste et mis en avant mes réalisations. Résultat : le téléphone sonne beaucoup plus souvent.",
  },
];

export type Project = {
  href: string;
  img: string;
  title: string;
  client: string;
  alt: string;
};

export const PROJECTS: Project[] = [
  { href: "https://libre-court.com/", img: "/assets/shots/libre-court.jpg", title: "Création de site internet", client: "Libre Court", alt: "Aperçu du site Libre Court" },
  { href: "https://www.e-cassini.fr/", img: "/assets/shots/e-cassini.jpg", title: "Site web & référencement", client: "e-Cassini", alt: "Aperçu du site e-Cassini" },
  { href: "https://www.alterpark.fr/", img: "/assets/shots/alterpark.jpg", title: "Refonte de site & SEO local", client: "AlterPark", alt: "Aperçu du site AlterPark" },
  { href: "https://sebertdavid-psychologue.com/", img: "/assets/shots/sebert.jpg", title: "Site vitrine professionnel", client: "David Sébert · Psychologue", alt: "Aperçu du site David Sébert" },
  { href: "https://www.lincubacteur.fr/", img: "/assets/shots/incubacteur.jpg", title: "Création de site internet", client: "L'Incubacteur", alt: "Aperçu du site L'Incubacteur" },
  { href: "https://www.flamme-atlantique.fr/", img: "/assets/shots/flamme.jpg", title: "Site web & référencement local", client: "Flamme Atlantique", alt: "Aperçu du site Flamme Atlantique" },
  { href: "https://www.prisma-technologies.fr/", img: "/assets/shots/prisma.jpg", title: "Site corporate & visibilité", client: "Prisma Technologies", alt: "Aperçu du site Prisma Technologies" },
  { href: "https://accent-beaute.com/", img: "/assets/shots/accent.jpg", title: "Site vitrine & Google My Business", client: "Accent Beauté", alt: "Aperçu du site Accent Beauté" },
  { href: "https://www.cote-nature-fleuriste.fr/", img: "/assets/shots/cotenature.jpg", title: "Création de site internet", client: "Côté Nature · Fleuriste", alt: "Aperçu du site Côté Nature" },
  { href: "https://www.commissaire-a-la-transformation.fr/", img: "/assets/shots/commissaire.jpg", title: "Site web & identité de marque", client: "Le Commissaire à la Transformation", alt: "Aperçu du site Le Commissaire à la Transformation" },
  { href: "https://cylaos.fr/", img: "/assets/shots/cylaos.jpg", title: "Site web & stratégie digitale", client: "Cylaos", alt: "Aperçu du site Cylaos" },
  { href: "https://www.batipropre44.fr/", img: "/assets/proj-batipropre.jpg", title: "Site vitrine & référencement local", client: "Batipropre", alt: "Aperçu du site Batipropre" },
  { href: "https://3dscanow.fr/", img: "/assets/proj-3dscanow.jpg", title: "Création de site internet", client: "3D Scanow", alt: "Aperçu du site 3D Scanow" },
  { href: "https://aeg-construction.fr/", img: "/assets/proj-aeg.jpg", title: "Site corporate & réalisations", client: "AEG Construction", alt: "Aperçu du site AEG Construction" },
  { href: "https://www.atelierducerame.fr/", img: "/assets/proj-atelierducerame.jpg", title: "Site vitrine professionnel", client: "L'Atelier du Céramе", alt: "Aperçu du site L'Atelier du Céramе" },
  { href: "https://www.c2es.club/", img: "/assets/proj-c2es.jpg", title: "Site web & identité", client: "C2ES — Club d'entreprises", alt: "Aperçu du site C2ES" },
  { href: "https://viniscope.fr/", img: "/assets/proj-viniscope.jpg", title: "Création de site internet", client: "Viniscope", alt: "Aperçu du site Viniscope" },
  { href: "https://www.ecylaos.fr/", img: "/assets/proj-ecylaos.jpg", title: "Site e-commerce", client: "eCylaos", alt: "Aperçu du site eCylaos" },
  { href: "https://astriddeplinval.fr/", img: "/assets/shots/astrid-de-plinval.jpg", title: "Site vitrine & référencement local", client: "Astrid de Plinval", alt: "Aperçu du site Astrid de Plinval" },
  { href: "https://www.tntvans.fr/", img: "/assets/shots/tnt-vans.jpg", title: "Site web & référencement", client: "T&T Vans", alt: "Aperçu du site T&T Vans" },
];

export const CLIENT_LOGOS = [
  { src: "/assets/logo-alterpark.svg", alt: "AlterPark" },
  { src: "/assets/logo-prisma.png", alt: "Prisma Technologies" },
  { src: "/assets/logo-librecourt.svg", alt: "Libre Court" },
  { src: "/assets/logo-cylaos.png", alt: "Cylaos" },
  { src: "/assets/logo-c2es.png", alt: "C2ES — Club des Entreprises d'Estuaire et Sillon" },
  { src: "/assets/logo-batipropre.svg", alt: "Batipropre" },
  { src: "/assets/logo-cote-nature.svg", alt: "Côté Nature Fleuriste" },
  { src: "/assets/logo-accent-beaute.svg", alt: "Accent Beauté" },
  { src: "/assets/logo-lincubacteur.svg", alt: "L'Incubacteur" },
  { src: "/assets/logo-commissaire.svg", alt: "Le Commissaire à la Transformation" },
  { src: "/assets/logo-sebert.svg", alt: "David Sébert — Psychologue" },
  { src: "/assets/logo-3dscan.svg", alt: "3D Scanow" },
  { src: "/assets/logo-ecassini.png", alt: "e-Cassini" },
  { src: "/assets/logo-bewell.png", alt: "Be Well" },
  { src: "/assets/logo-flamme-atlantique.png", alt: "Flamme Atlantique" },
  { src: "/assets/logo-griffon.png", alt: "Griffon Joailliers" },
];
