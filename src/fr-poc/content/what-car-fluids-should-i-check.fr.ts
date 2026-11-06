import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quels-liquides-verifier-voiture";

const faqs = [
  {
    question: "À quelle fréquence faut-il vérifier les liquides ?",
    answer: "Vérifiez l'huile moteur toutes les quelques semaines ou avant un long trajet. Les autres liquides accessibles, notamment le refroidissement et le freinage, peuvent être surveillés environ une fois par mois ou lors des entretiens, selon les procédures du constructeur. Contrôlez le lave-glace dès qu'il baisse. Certaines boîtes de vitesses ne possèdent pas de jauge accessible.",
  },
  {
    question: "Peut-on faire soi-même l'appoint ?",
    answer: "L'huile moteur et le lave-glace sont généralement les plus simples, à condition d'utiliser le produit prescrit. Le liquide de refroidissement ne doit être complété que **moteur complètement froid**, avec un produit compatible et préparé selon les indications du constructeur. Le liquide de frein, l'huile de transmission et l'huile de différentiel nécessitent davantage de précautions et parfois une intervention professionnelle.",
  },
  {
    question: "Pourquoi dois-je ajouter régulièrement le même liquide ?",
    answer: "Une baisse répétée peut indiquer une fuite ou une consommation anormale. Une faible consommation d'huile existe sur certains moteurs, mais une consommation excessive mérite un diagnostic. Des appoints fréquents de liquide de frein, notamment sans intervention récente sur les freins, peuvent révéler une fuite dangereuse. Recherchez la cause plutôt que de continuer les appoints indéfiniment.",
  },
  {
    question: "Peut-on ouvrir le réservoir de refroidissement à chaud ?",
    answer: "**Non.** Le circuit est sous pression. Ouvrir son bouchon lorsque le moteur est chaud peut provoquer une projection soudaine de liquide brûlant et de vapeur. Attendez le refroidissement complet avant tout contrôle ou appoint.",
  },
  {
    question: "De quelle couleur est le liquide de frein ?",
    answer: "Un liquide neuf est souvent transparent à légèrement ambré. Il peut foncer avec l'âge et la contamination. Le liquide absorbe naturellement l'humidité, ce qui abaisse son point d'ébullition et peut réduire les performances lors de freinages intensifs. La couleur seule ne permet cependant pas de mesurer son état : respectez le calendrier constructeur.",
  },
  {
    question: "Comment suivre les changements et appoints de liquides ?",
    answer: "Notez chaque intervention avec sa date, le kilométrage, le type de fluide utilisé et les observations pertinentes. CarCare Diary vous aide à conserver cet historique pour retrouver les derniers changements lors d'un entretien ou d'une recherche de fuite.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quels liquides faut-il vérifier sur sa voiture ?",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quels liquides faut-il vérifier sur sa voiture ?",
    lede: "Surveiller les liquides de sa voiture est l'un des gestes d'entretien préventif les plus simples. Chaque fluide remplit une fonction précise : un niveau trop bas ou un produit dégradé peut entraîner des réparations bien plus coûteuses qu'un contrôle ou un remplacement. Voici les liquides essentiels, leur rôle et les précautions de vérification.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Les principaux liquides à surveiller sont **l'huile moteur, le liquide de refroidissement, le liquide de frein, l'huile de transmission et, si votre véhicule en possède, le liquide de direction assistée**. Ajoutez le lave-glace et, sur certains véhicules, les huiles de différentiel et de boîte de transfert. Les méthodes de contrôle et les spécifications varient selon les modèles : consultez le manuel.",
  },
  blocks: [
    { type: "heading", text: "Tableau des liquides essentiels" },
    {
      type: "table",
      headers: ["Liquide", "À quoi sert-il ?", "Comment le contrôler ?", "Précaution principale"],
      rows: [
        ["**Huile moteur**", "Lubrifie les pièces, limite le frottement et la chaleur", "Vérifier la jauge selon la procédure du constructeur, moteur arrêté ; niveau entre MIN et MAX", "Un niveau très bas ou une huile dégradée peut endommager rapidement le moteur."],
        ["**Liquide de refroidissement / antigel**", "Régule la température et protège du gel et de l'ébullition", "Contrôler le vase d'expansion **moteur froid**", "Ne jamais ouvrir un bouchon sous pression lorsque le moteur est chaud. Un manque de liquide peut entraîner une surchauffe."],
        ["**Liquide de frein**", "Transmet la force de freinage par le circuit hydraulique", "Examiner le niveau du réservoir, entre MIN et MAX", "Une baisse peut révéler une fuite ou l'usure des plaquettes ; faire contrôler rapidement."],
        ["**Huile de transmission**", "Lubrifie les organes de boîte et participe à la sélection des rapports", "Certains modèles ont une jauge, d'autres un circuit fermé. Suivre la procédure du manuel", "Un niveau faible ou un fluide inadapté peut endommager coûteusement la boîte."],
        ["**Liquide de direction assistée**", "Fournit l'assistance hydraulique sur les systèmes concernés", "Contrôler le réservoir selon la procédure prescrite, souvent moteur froid", "De nombreuses voitures utilisent une assistance électrique sans fluide. Un manque de liquide peut rendre la direction lourde."],
        ["**Liquide lave-glace**", "Nettoie le pare-brise pour conserver une bonne visibilité", "Vérifier le réservoir et faire l'appoint avec un produit adapté", "La visibilité est indispensable à la sécurité ; choisir un produit antigel si nécessaire."],
        ["**Huile de différentiel / boîte de transfert**", "Lubrifie les engrenages, notamment sur certains 4×4 et véhicules à transmission intégrale", "Contrôle souvent réalisé via un bouchon de remplissage, en atelier", "Un entretien négligé peut provoquer une usure prématurée et des défaillances mécaniques."],
      ],
    },
    { type: "heading", text: "À quelle fréquence vérifier les liquides ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Huile moteur :** toutes les quelques semaines ou avant un long trajet. Un manque d'huile peut endommager rapidement le moteur.",
        "**Liquide de refroidissement :** environ une fois par mois ou à chaque entretien, en observant le vase d'expansion, moteur froid.",
        "**Liquide de frein :** lors des entretiens périodiques. Un niveau bas peut être lié à des plaquettes usées ou à une fuite. Le remplacement suit un calendrier indépendamment du niveau.",
        "**Huile de transmission :** selon les prescriptions constructeur ou en présence de symptômes. Certaines boîtes ne permettent pas de contrôle simple par le conducteur.",
        "**Liquide de direction assistée :** régulièrement si la voiture utilise une assistance hydraulique, par exemple une fois par mois. Les directions électriques n'en ont généralement pas.",
        "**Lave-glace :** dès que le niveau devient insuffisant ; employer un produit adapté aux températures de la saison.",
      ],
    },
    { type: "heading", text: "Les signes qu'un liquide nécessite une attention particulière" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Huile moteur très noire, granuleuse ou nettement sous le repère MIN. Une coloration sombre seule ne suffit pas à diagnostiquer un défaut.",
        "Liquide de refroidissement rouillé ou décoloré, ou besoin de faire l'appoint à répétition.",
        "Liquide de frein brun foncé ou niveau qui a fortement diminué.",
        "Huile de transmission très sombre, odorante ou niveau insuffisant lorsque le contrôle est possible.",
        "Direction devenue lourde ou pompe qui gémit lorsque vous tournez le volant.",
        "Contamination visible d'un fluide, par exemple huile d'aspect laiteux pouvant évoquer un mélange avec du liquide de refroidissement.",
      ],
    },
    { type: "paragraph", text: "Ces signes ne permettent pas toujours de déterminer la cause. Faites examiner rapidement toute fuite récurrente ou anomalie concernant les freins, le moteur ou la direction." },
    { type: "heading", text: "Pourquoi conserver l'historique des liquides ?" },
    { type: "paragraph", text: "Savoir quand un fluide a été changé ou complété facilite chaque visite à l'atelier. Un mécanicien peut vérifier la date du dernier remplacement du liquide de frein, retrouver la dernière vidange ou comprendre qu'un niveau de liquide de refroidissement baisse régulièrement. Un historique documenté est également utile lors de l'achat ou de la vente d'un véhicule." },
    { type: "heading", text: "Comment suivre l'entretien des différents liquides ?" },
    { type: "paragraph", text: "Pour chaque changement ou appoint, consignez la **date**, le **kilométrage**, la **norme ou le type de fluide** et les observations éventuelles. CarCare Diary permet d'enregistrer séparément les opérations d'entretien par véhicule. Vous pouvez consulter leurs échéances et activer les rappels disponibles si vous le souhaitez et si les notifications sont autorisées." },
    {
      type: "links",
      intro: "À lire aussi :",
      links: [
        { label: "Vidange moteur", href: "/fr/blog/quand-faire-vidange-voiture" },
        { label: "Liquide de refroidissement", href: "/fr/blog/quand-changer-liquide-refroidissement" },
        { label: "Liquide de frein", href: "/fr/blog/quand-changer-liquide-de-frein" },
        { label: "Huile de transmission", href: "/fr/blog/quand-changer-huile-boite-vitesses" },
        { label: "Direction assistée", href: "/fr/blog/quand-changer-liquide-direction-assistee" },
        { label: "Calendrier d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
        { label: "Rappels d'entretien", href: "/vehicle-service-reminder-app" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les liquides automobiles",
  faqs: [...faqs],
  ctaSlug: "quels-liquides-verifier-voiture",
  cta: {
    kind: "interval",
    headline: "Enregistrez l'entretien des liquides de votre voiture",
    endHeadline: "Gardez l'historique des entretiens sur votre téléphone",
    image: "log",
    subtitle: "Conservez les dates de remplacement, les spécifications et le kilométrage au même endroit.",
    endSubtitle: "Retrouvez les interventions et préparez les prochaines vérifications.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Quels liquides vérifier sur une voiture ? Liste et précautions",
    description: "Huile moteur, liquide de refroidissement, de frein et de transmission : découvrez les contrôles utiles, les risques et les fréquences indicatives.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/what-car-fluids-should-i-check" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/what-car-fluids-should-i-check" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whatCarFluidsShouldICheckFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
