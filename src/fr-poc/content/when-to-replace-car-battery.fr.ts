import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-batterie-voiture";

const faqs = [
  {
    question: "Combien de temps dure une batterie de voiture ?",
    answer: "En général, de trois à cinq ans dans des conditions ordinaires, avec de grandes variations. La chaleur accélère la dégradation interne et l'évaporation. Le froid diminue la puissance disponible, rendant les démarrages plus difficiles pour une batterie fatiguée. Des trajets courts et une consommation électrique élevée peuvent également réduire sa durée de vie.",
  },
  {
    question: "Quels sont les signes d'une batterie défaillante ?",
    answer: "Démarrage lent, éclairage faible, cliquetis sans lancement, voyant batterie, corrosion des bornes et besoin répété de câbles sont des signes possibles. Mais des problèmes d'alternateur, de démarreur ou de câblage peuvent produire les mêmes symptômes. Il faut donc **tester la batterie et la charge**, pas remplacer au hasard.",
  },
  {
    question: "Comment tester une batterie de voiture ?",
    answer: "Un garage peut réaliser un test de charge ou de conductance, idéalement en contrôlant aussi l'alternateur. Une mesure au multimètre donne une première indication : au repos, une batterie 12 V classique bien chargée est souvent proche de **12,6 V** ; vers **12,0 V**, elle peut être très déchargée. La tension seule ne remplace pas un test sous charge.",
  },
  {
    question: "Faut-il remplacer sa batterie avant l'hiver ou l'été ?",
    answer: "La faire tester avant une saison exigeante est une bonne précaution, surtout au-delà de trois ans. Le froid réduit la capacité de démarrage disponible. La chaleur, quant à elle, accélère l'usure sur la durée ; une batterie fragilisée pendant l'été peut tomber en panne au premier froid.",
  },
  {
    question: "Pourquoi les bornes de batterie se corrodent-elles ?",
    answer: "Les dépôts blancs ou bleuâtres peuvent résulter des réactions chimiques et des vapeurs autour de la batterie. Un léger dépôt ne signifie pas automatiquement qu'il faut la remplacer. Si la corrosion est importante ou revient rapidement, vérifiez la batterie et le système de charge.",
  },
  {
    question: "Comment suivre le remplacement de la batterie ?",
    answer: "Notez la date, le kilométrage, la marque, les spécifications et toute observation utile. Certaines étiquettes indiquent la date de fabrication. CarCare Diary permet d'enregistrer ces éléments pour retrouver facilement l'âge de la batterie et préparer son prochain contrôle.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand remplacer la batterie de sa voiture ?",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quand remplacer la batterie de sa voiture ?",
    lede: "La plupart des batteries 12 V de voitures thermiques durent environ **3 à 5 ans**, mais la chaleur, la façon de conduire et les équipements électriques peuvent réduire leur longévité. Le froid révèle souvent une batterie affaiblie au moment du démarrage, tandis que la chaleur accélère son vieillissement. Connaître l'âge de la batterie et reconnaître les signes précurseurs permet d'anticiper le remplacement plutôt que de subir une panne.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Une batterie automobile classique dure souvent **3 à 5 ans**, mais les températures extrêmes, les trajets courts et une forte consommation électrique peuvent réduire cette durée. Si elle a plus de trois ans et présente des symptômes, commencez par la faire tester.",
  },
  blocks: [
    { type: "heading", text: "Quels facteurs influencent la durée de vie ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Climat.** La chaleur accélère les réactions internes et peut favoriser la perte de liquide. Le froid réduit fortement la puissance disponible au démarrage : une batterie déjà faible risque alors davantage de ne pas réussir à lancer le moteur.",
        "**Habitudes de conduite.** Des trajets courts et répétés peuvent ne pas laisser assez de temps au système de charge pour reconstituer l'énergie consommée au démarrage. Une batterie régulièrement partiellement déchargée vieillit plus vite.",
        "**Équipements électriques.** Sièges chauffants, accessoires audio, appareils USB et équipements ajoutés sollicitent le système de charge. Laisser fonctionner des accessoires moteur éteint peut décharger la batterie.",
        "**Qualité et technologie.** Certaines batteries AGM sont conçues pour mieux répondre aux besoins électriques spécifiques, notamment des véhicules dotés du Stop & Start. Utilisez la technologie et la capacité prescrites pour votre voiture.",
      ],
    },
    { type: "heading", text: "Les signes d'une batterie en fin de vie" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Démarrage lent.** Le moteur tourne plus lentement que d'habitude ou demande plusieurs tentatives, ce qui peut signaler une capacité insuffisante.",
        "**Éclairage faible.** Phares ou éclairage intérieur moins intenses, surtout moteur arrêté, peuvent indiquer une batterie mal chargée.",
        "**Cliquetis au démarrage.** Des clics rapides sans lancement du moteur évoquent souvent un manque de courant ; un clic isolé peut aussi venir du démarreur.",
        "**Voyant de batterie allumé.** Il peut signaler une défaillance de l'alternateur ou du circuit de charge, et pas seulement de la batterie. Faites vérifier rapidement.",
        "**Corrosion des bornes.** De légers dépôts blancs peuvent apparaître avec le temps. Une corrosion importante ou qui revient vite mérite un contrôle du système électrique.",
        "**Démarrages avec câbles répétés.** Une décharge accidentelle isolée peut arriver. Si vous devez utiliser des câbles régulièrement sans explication claire, faites tester la batterie.",
      ],
    },
    { type: "heading", text: "Que risque-t-on en attendant trop longtemps ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Une panne de démarrage inattendue, loin de chez soi ou à un moment inopportun.",
        "Des décharges répétées pouvant solliciter le système de charge.",
        "Un risque d'immobilisation parfois sans beaucoup de signes préalables.",
        "Des frais de dépannage, de démarrage d'appoint ou de remorquage.",
      ],
    },
    { type: "heading", text: "Comment conserver l'historique de la batterie ?" },
    { type: "paragraph", text: "Notez la **date du remplacement**, la **marque et les caractéristiques de la batterie** (dimensions, capacité, courant de démarrage à froid ou CCA), le **kilométrage** et les **résultats de test ou symptômes constatés**. Le code date de fabrication présent sur certaines batteries peut aussi être utile. CarCare Diary permet de conserver ces informations pour connaître l'ancienneté de la batterie installée." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Rappels d'entretien", href: "/vehicle-service-reminder-app" },
        { label: "Tableau d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
        { label: "Balais d'essuie-glace", href: "/fr/blog/quand-changer-essuie-glaces-voiture" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur la batterie de voiture",
  faqs: [...faqs],
  ctaSlug: "quand-changer-batterie-voiture",
  cta: {
    kind: "replacement",
    headline: "Suivez l'âge et les remplacements de votre batterie",
    endHeadline: "Conservez l'historique de la batterie de votre voiture",
    image: "log",
    subtitle: "Gardez les dates, caractéristiques et résultats de test à portée de main.",
    endSubtitle: "Retrouvez les informations utiles avant le prochain remplacement.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Batterie de voiture : durée de vie et signes de remplacement",
    description: "Combien de temps dure une batterie ? Découvrez les signes d'une batterie faible et comment anticiper son remplacement.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-replace-car-battery" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-replace-car-battery" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToReplaceCarBatteryFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
