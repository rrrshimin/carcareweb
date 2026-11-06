import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-huile-boite-vitesses";

const faqs = [
  {
    question: "À quelle fréquence faut-il changer l'huile de boîte ?",
    answer: "Cela dépend du type de transmission et du modèle. Certaines boîtes manuelles sont entretenues vers 48 000–96 000 km ; les prescriptions pour les automatiques vont de fréquences similaires à des intervalles beaucoup plus longs. Les CVT et les boîtes à double embrayage ont leurs propres exigences. Ne choisissez pas une fréquence générique sans vérifier le manuel.",
  },
  {
    question: "Que signifie une huile de boîte « à vie » ?",
    answer: "Certains constructeurs parlent de fluide « à vie », sans changement programmé. Des mécaniciens indépendants contestent parfois cette notion, notamment lorsque le véhicule roule longtemps après sa période initiale de garantie. Les conditions difficiles peuvent accélérer l'usure du fluide. Un entretien en dehors du programme constructeur doit être discuté avec un professionnel connaissant la transmission concernée.",
  },
  {
    question: "Quels symptômes peuvent indiquer un problème d'huile de boîte ?",
    answer: "Engagement lent en D ou R, passages brusques, patinage, bruits inhabituels, odeur de brûlé ou fluide très foncé sont des signes qui justifient un examen. Ils peuvent aussi provenir de défauts internes. Faites diagnostiquer la transmission plutôt que de supposer qu'une simple vidange suffira.",
  },
  {
    question: "Peut-on contrôler soi-même le niveau d'huile de boîte ?",
    answer: "Certaines anciennes boîtes automatiques possèdent une jauge. Sur beaucoup de véhicules modernes, la boîte est fermée et le contrôle nécessite du matériel d'atelier et une procédure précise, parfois à température déterminée. Sur les boîtes manuelles, le niveau peut être contrôlé par un bouchon de remplissage. Consultez la méthode spécifique à votre modèle.",
  },
  {
    question: "La conduite influence-t-elle la durée de vie du fluide ?",
    answer: "Oui. Remorquage, charges importantes, routes de montagne, circulation urbaine avec arrêts fréquents, conduite sportive et fortes chaleurs augmentent les contraintes thermiques. Le constructeur peut prescrire des intervalles plus courts pour ces usages sévères.",
  },
  {
    question: "Comment conserver l'historique des vidanges de transmission ?",
    answer: "Notez la date, le kilométrage, la norme exacte du fluide et toute observation de l'atelier. Chaque transmission nécessite une formulation adaptée. CarCare Diary permet de garder cet historique et de préparer les entretiens suivants avec des rappels facultatifs si vous les activez.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer l'huile de boîte de vitesses ?",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quand changer l'huile de boîte de vitesses ?",
    lede: "L'intervalle de remplacement de l'huile de transmission dépend fortement du type de boîte : **manuelle, automatique, à variation continue (CVT) ou à double embrayage**. Les conditions d'utilisation jouent également un rôle. Certains constructeurs indiquent de longs intervalles, d'autres des fréquences plus rapprochées. Consultez en priorité le manuel de votre voiture et faites examiner tout symptôme inhabituel par un professionnel qualifié.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Il n'existe pas d'intervalle universel. Certaines boîtes manuelles sont entretenues tous les **48 000 à 96 000 km** environ (30 000–60 000 miles), mais les boîtes automatiques, CVT et à double embrayage suivent des règles très différentes. Utilisez le programme constructeur et l'huile prescrite pour votre transmission.",
  },
  blocks: [
    { type: "heading", text: "Intervalles selon le type de boîte" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Boîte manuelle : souvent 48 000–96 000 km à titre indicatif.** Elle utilise une huile d'engrenages spécifique, généralement différente de l'ATF des boîtes automatiques. La fréquence dépend de la conception et du lubrifiant. Circuit, remorquage et conditions difficiles peuvent rapprocher les échéances.",
        "**Boîte automatique (ATF) : très variable.** Certains constructeurs recommandent des intervalles comparables ; d'autres prévoient des périodes beaucoup plus longues, voire une huile dite « à vie ». Les trajets urbains avec arrêts fréquents et le remorquage peuvent nécessiter une maintenance plus rapprochée.",
        "**Transmission CVT : souvent 48 000–96 000 km à titre indicatif, sans jamais constituer une règle générale.** L'huile CVT est une formulation spécifique, qui ne doit pas être remplacée par une ATF ordinaire. Un mauvais produit peut gravement endommager la boîte.",
        "**Boîte à double embrayage (DCT/DSG) : suivez exactement la prescription constructeur.** Certaines utilisent des embrayages humides avec entretien périodique du fluide ; d'autres des embrayages secs. Les besoins diffèrent selon la conception.",
      ],
    },
    { type: "heading", text: "Les signes que l'huile de transmission mérite un contrôle" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Engagement retardé de la marche avant ou arrière.** Un délai inhabituel après le passage depuis la position P peut indiquer un problème de pression, de niveau ou d'huile dégradée.",
        "**Passages de rapports brusques ou saccadés.** La qualité du fluide peut influencer la pression hydraulique et la lubrification des embrayages ; d'autres défauts sont également possibles.",
        "**Patinage ou perte momentanée de transmission.** Si la boîte semble se désengager brièvement ou hésite entre les rapports, faites-la contrôler rapidement.",
        "**Sifflements, bourdonnements ou grincements.** Des sons inhabituels, surtout en charge, peuvent signaler une dégradation du fluide ou une usure interne.",
        "**Odeur de brûlé.** Une huile surchauffée ou fortement dégradée peut dégager une odeur caractéristique, signe d'un problème possible de température.",
        "**Fluide très foncé ou sentant le brûlé.** L'ATF neuve est souvent rouge ou rosée et translucide, mais son aspect varie selon la formulation. Une couleur très sombre et une odeur suspecte doivent faire rechercher la cause.",
      ],
    },
    { type: "paragraph", text: "Les mêmes symptômes peuvent être dus à des défaillances mécaniques, électroniques ou hydrauliques. Une vidange ne remplace pas un diagnostic." },
    { type: "heading", text: "Pourquoi ne pas reporter une vidange prescrite ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Un fluide dégradé perd progressivement ses capacités de lubrification et d'évacuation de la chaleur.",
        "Les disques d'embrayage et autres éléments internes peuvent s'user plus rapidement.",
        "Des dépôts peuvent se former dans le bloc hydraulique et sur les composants d'embrayage.",
        "La transmission peut surchauffer, surtout lors d'efforts prolongés.",
        "Dans les cas graves, une réfection ou un remplacement complet de boîte peut devenir nécessaire, avec des coûts élevés.",
      ],
    },
    { type: "heading", text: "Comment suivre les changements d'huile de boîte ?" },
    { type: "paragraph", text: "Conservez la **date**, le **kilométrage**, le **type et la norme de fluide**, le type de transmission concerné et les observations de l'atelier. Ces détails sont particulièrement importants : une huile inadaptée peut endommager certaines boîtes." },
    { type: "paragraph", text: "CarCare Diary permet d'enregistrer ces interventions et de suivre les échéances en fonction des intervalles de votre voiture. Les rappels dépendent de vos réglages et de l'autorisation des notifications." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Historique d'entretien", href: "/car-service-history-app" },
        { label: "Vidange moteur", href: "/fr/blog/quand-faire-vidange-voiture" },
        { label: "Liquide de frein", href: "/fr/blog/quand-changer-liquide-de-frein" },
        { label: "Tableau d'entretien par kilométrage", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur l'huile de transmission",
  faqs: [...faqs],
  ctaSlug: "quand-changer-huile-boite-vitesses",
  cta: {
    kind: "interval",
    headline: "Enregistrez les vidanges de votre boîte de vitesses",
    endHeadline: "Gardez l'historique de votre transmission",
    image: "log",
    subtitle: "Retrouvez les dates, kilométrages et spécifications de fluide au même endroit.",
    endSubtitle: "Consignez chaque intervention pour faciliter les prochains entretiens.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Vidange de boîte de vitesses : quand changer l'huile ?",
    description: "Boîte manuelle, automatique, CVT ou double embrayage : découvrez les intervalles, signes d'alerte et précautions d'entretien.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-change-transmission-fluid" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-change-transmission-fluid" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToChangeTransmissionFluidFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
