import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-courroie-accessoires";

const faqs = [
  {
    question: "Quelle est la durée de vie d'une courroie d'accessoires ?",
    answer: "Beaucoup de courroies modernes sont fabriquées en EPDM, un caoutchouc plus résistant à certaines fissurations que les anciennes courroies en néoprène. Elles peuvent s'user sans défauts visuels évidents. Certains constructeurs prévoient un remplacement selon l'âge ou le kilométrage ; d'autres privilégient les inspections. Consultez le programme de votre modèle.",
  },
  {
    question: "Quels équipements entraîne la courroie d'accessoires ?",
    answer: "Selon le moteur, elle peut entraîner l'alternateur, le compresseur de climatisation, la pompe de direction assistée hydraulique et parfois la pompe à eau. En cas de rupture, ces équipements cessent de fonctionner. Si la pompe à eau est concernée, le moteur risque une surchauffe rapide.",
  },
  {
    question: "Quels signes indiquent qu'elle doit être changée ?",
    answer: "Sifflement, couinement ou grincement venant du compartiment moteur, fissures, surface brillante et durcie, effilochage, nervures manquantes ou usure lisse sont des indices. Un tendeur défectueux peut provoquer les mêmes bruits : faites examiner l'ensemble du système.",
  },
  {
    question: "Peut-elle casser sans prévenir ?",
    answer: "Oui. En particulier, certaines courroies EPDM peuvent présenter une usure avancée sans fissures spectaculaires. Une rupture peut survenir avec peu de signes préalables, d'où l'intérêt d'inspections périodiques lors des révisions.",
  },
  {
    question: "Faut-il remplacer le tendeur en même temps ?",
    answer: "Il est fréquent de contrôler et parfois de remplacer le tendeur et les galets en même temps. Un tendeur fatigué peut faire patiner ou user prématurément une courroie neuve. La décision dépend de l'état et des prescriptions du constructeur, ainsi que du coût de la main-d'œuvre.",
  },
  {
    question: "Comment garder l'historique des remplacements ?",
    answer: "Enregistrez la date, le kilométrage, le type de courroie, sa marque et les pièces remplacées en même temps. CarCare Diary permet de consigner ces informations et de prévoir un rappel de contrôle si vous le configurez.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer la courroie d'accessoires ?",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quand changer la courroie d'accessoires ?",
    lede: "La **courroie d'accessoires** entraîne plusieurs équipements du moteur : souvent l'alternateur, le compresseur de climatisation, parfois la pompe de direction assistée et, sur certains modèles, la pompe à eau. Lorsque cette dernière est entraînée par la courroie, une rupture peut provoquer une surchauffe rapide. L'inspection de l'état de la courroie est parfois plus utile qu'un kilométrage générique.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Faites contrôler régulièrement la courroie et remplacez-la en présence de **fissures, effilochage, zones brillantes et durcies, nervures manquantes** ou à l'échéance prescrite par le constructeur. Un bruit anormal doit également être examiné. L'état de la courroie, du tendeur et des poulies compte autant que son âge.",
  },
  blocks: [
    { type: "heading", text: "Quels accessoires la courroie entraîne-t-elle ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Alternateur.** Il recharge la batterie et alimente les équipements électriques lorsque le moteur tourne. Si la courroie rompt, la batterie ne se recharge plus.",
        "**Compresseur de climatisation.** Une courroie qui patine ou se rompt peut arrêter le fonctionnement de la climatisation.",
        "**Pompe de direction assistée hydraulique.** Sur les voitures équipées de ce système, une rupture rend immédiatement la direction beaucoup plus dure.",
        "**Pompe à eau, sur certains moteurs.** Tous les moteurs ne l'entraînent pas par la courroie d'accessoires ; certains utilisent la distribution. Si la pompe s'arrête à cause de la rupture, le moteur peut surchauffer très rapidement.",
      ],
    },
    { type: "heading", text: "Les signes d'une courroie d'accessoires usée" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Couinement ou sifflement.** Un bruit aigu au démarrage à froid ou lors de la mise en route de la climatisation peut signaler un patinage, une courroie durcie ou un tendeur défectueux.",
        "**Fissures sur les nervures.** Le caoutchouc se dégrade avec le temps. Des fissures visibles justifient un contrôle et souvent un remplacement.",
        "**Surface lisse et brillante.** Un aspect vitrifié indique une perte d'adhérence. Les courroies EPDM peuvent s'user sans présenter les mêmes fissures que les anciens caoutchoucs.",
        "**Bords effilochés ou nervures manquantes.** Cela peut révéler un mauvais alignement des poulies ou une usure importante.",
        "**Voyant de batterie ou d'alternateur.** Si la courroie patine sur la poulie d'alternateur, la charge peut devenir insuffisante.",
        "**Surchauffe du moteur.** Sur certains véhicules, une courroie rompue ou très détendue interrompt la circulation du liquide de refroidissement via la pompe à eau.",
      ],
    },
    { type: "heading", text: "Que peut-il se passer si la courroie casse ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Le véhicule peut devenir inutilisable : recharge électrique, climatisation et assistance hydraulique de direction cessent de fonctionner selon la configuration.",
        "Si la pompe à eau est entraînée par cette courroie, le moteur peut surchauffer en quelques minutes et subir des dégâts importants.",
        "La courroie rompue peut endommager d'autres composants dans le compartiment moteur.",
        "Une panne peut survenir soudainement et vous immobiliser sans avertissement.",
      ],
    },
    {
      type: "callout",
      tone: "warning",
      title: "Sécurité",
      body: "Une montée rapide de température ou une perte importante de l\u0027assistance de direction exige un arrêt en sécurité et une inspection avant de poursuivre la route.",
    },
    { type: "heading", text: "Comment suivre le remplacement ?" },
    { type: "paragraph", text: "Notez **la date**, **le kilométrage**, **la marque et la référence de la courroie**, le remplacement éventuel du **tendeur et des galets**, ainsi que les défauts de l'ancienne courroie. CarCare Diary permet de conserver ces informations et de suivre la prochaine inspection selon le programme constructeur." },
    {
      type: "links",
      intro: "À lire aussi :",
      links: [
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Courroie de distribution", href: "/fr/blog/quand-changer-courroie-distribution" },
        { label: "Batterie", href: "/fr/blog/quand-changer-batterie-voiture" },
        { label: "Liquide de refroidissement", href: "/fr/blog/quand-changer-liquide-refroidissement" },
        { label: "Tableau d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur la courroie d'accessoires",
  faqs: [...faqs],
  ctaSlug: "quand-changer-courroie-accessoires",
  cta: {
    kind: "replacement",
    headline: "Enregistrez vos changements de courroie d'accessoires",
    endHeadline: "Retrouvez l'historique de vos courroies",
    image: "log",
    subtitle: "Gardez les références, dates et kilométrages de chaque intervention.",
    endSubtitle: "Conservez les interventions et les inspections au même endroit.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Courroie d'accessoires : quand la changer et quels signes ?",
    description: "Fissures, sifflements, usure : découvrez les signes d'une courroie d'accessoires fatiguée et les risques d'une rupture.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-replace-serpentine-belt" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-replace-serpentine-belt" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToReplaceSerpentineBeltFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
