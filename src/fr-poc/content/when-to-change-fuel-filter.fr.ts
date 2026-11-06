import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-filtre-carburant";

const faqs = [
  {
    question: "À quelle fréquence faut-il changer un filtre à carburant ?",
    answer: "Cela dépend du véhicule. Certains constructeurs préconisent un remplacement de filtre externe tous les **32 000 à 48 000 km** environ. D'autres, dont le filtre est intégré au réservoir, ne prévoient pas de remplacement périodique et considèrent cette pièce comme faisant partie du module de pompe. Consultez le programme d'entretien de votre modèle.",
  },
  {
    question: "Ma voiture possède-t-elle un filtre à carburant accessible ?",
    answer: "De nombreuses voitures anciennes, et certains modèles plus récents, ont un filtre monté sur la conduite de carburant, sous le capot, sous le véhicule ou près du tablier. Il est généralement remplaçable séparément. Beaucoup de voitures modernes possèdent au contraire un filtre intégré à la pompe dans le réservoir. La documentation technique de votre modèle permettra de déterminer le montage exact.",
  },
  {
    question: "Quels symptômes peut provoquer un filtre à carburant bouché ?",
    answer: "Difficultés de démarrage, hésitations à l'accélération, pertes de puissance, ratés moteur, ralenti irrégulier ou calages sont possibles. Toutefois, une pompe défaillante, des injecteurs encrassés, un défaut d'allumage ou un capteur défectueux peuvent provoquer des signes similaires. Le filtre ne doit pas être incriminé sans diagnostic.",
  },
  {
    question: "Les filtres à carburant diffèrent-ils entre essence et diesel ?",
    answer: "Oui. Les systèmes d'injection diesel, notamment à haute pression, sont particulièrement sensibles à l'eau et aux contaminants. Les voitures diesel possèdent souvent un filtre principal avec séparateur d'eau, parfois complété d'un second filtre. Les intervalles de remplacement sont généralement précisés par le constructeur. Certains véhicules possèdent un voyant signalant la présence d'eau dans le filtre.",
  },
  {
    question: "Peut-on remplacer soi-même un filtre à carburant ?",
    answer: "Sur certains modèles, le remplacement d'un filtre externe est possible, mais intervenir sur le circuit de carburant présente des risques. Il faut notamment **dépressuriser le circuit**, travailler dans un espace ventilé à l'écart de toute flamme ou source d'étincelles, et utiliser les raccords et outils adaptés. Si vous n'avez pas l'expérience nécessaire, confiez l'intervention à un professionnel.",
  },
  {
    question: "Comment conserver l'historique des remplacements ?",
    answer: "Notez la date, le kilométrage, la référence du filtre et la raison du remplacement, qu'il soit préventif ou motivé par un symptôme. Dans CarCare Diary, vous pouvez enregistrer ces informations et suivre le prochain entretien selon l'intervalle constructeur, avec les rappels facultatifs disponibles.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer le filtre à carburant de sa voitur",
  hero: {
    category: "Entretien",
    readTime: "4 min de lecture",
    title: "Quand changer le filtre à carburant de sa voiture ?",
    lede: "Les recommandations de remplacement du filtre à carburant varient beaucoup d'une voiture à l'autre. Certains véhicules possèdent un filtre externe accessible, prévu pour un remplacement périodique. D'autres intègrent le filtre au module de pompe dans le réservoir, sans intervalle de remplacement régulier. Les symptômes d'un filtre obstrué ressemblent à ceux d'autres problèmes d'alimentation ou d'allumage : **le diagnostic est aussi important que le calendrier d'entretien**.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Commencez par vérifier si votre véhicule dispose d'un filtre à carburant remplaçable séparément. Pour certains filtres accessibles, le constructeur peut prévoir un remplacement tous les **32 000 à 48 000 km** environ (20 000 à 30 000 miles). Beaucoup de voitures modernes ne prévoient aucun remplacement périodique. Le manuel constructeur reste la référence.",
  },
  blocks: [
    { type: "heading", text: "Les différents filtres à carburant et leur entretien" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Filtre externe monté en ligne, remplaçable.** Installé sur la conduite de carburant, dans le compartiment moteur, sous la voiture ou près de la cloison pare-feu. Il peut être remplacé indépendamment. Ce montage existe sur de nombreux véhicules anciens et certains modèles actuels.",
        "**Filtre dans le réservoir, intégré à la pompe.** Inclus dans le module de pompe à carburant. Il n'est généralement pas remplacé comme une pièce d'entretien séparée ; son remplacement intervient souvent lors d'une intervention sur le module de pompe.",
        "**Filtre principal diesel avec séparateur d'eau.** De nombreux moteurs diesel possèdent un filtre et un décanteur dont l'eau doit parfois être purgée. Le remplacement du filtre suit généralement un calendrier précis. Un témoin peut signaler la présence d'eau dans le séparateur.",
      ],
    },
    { type: "heading", text: "Les signes d'un filtre à carburant encrassé" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Démarrage difficile.** Une restriction de débit peut réduire la pression de carburant aux injecteurs et prolonger le démarrage, surtout à froid. Une pompe fatiguée, des injecteurs défectueux ou un problème d'allumage peuvent produire le même symptôme.",
        "**À-coups ou hésitations à l'accélération.** Lorsque le moteur demande davantage de carburant, un filtre obstrué peut limiter le débit. Le moteur manque alors momentanément de réponse. D'autres défauts du circuit ou de l'allumage sont possibles.",
        "**Manque de puissance en charge.** À haut régime ou à forte accélération, le débit disponible peut devenir insuffisant, donnant l'impression que le moteur manque de carburant.",
        "**Ratés d'allumage ou ralenti irrégulier.** Une pression trop faible peut contribuer à un mélange pauvre et à un fonctionnement instable. La lecture des codes défaut peut aider à orienter le diagnostic.",
        "**Calage à faible vitesse ou avec un réservoir presque vide.** Une obstruction importante peut perturber l'alimentation. Un faible niveau de carburant peut parfois accentuer un problème déjà présent.",
      ],
    },
    { type: "paragraph", text: "Ces symptômes **ne prouvent pas** que le filtre est en cause : ils indiquent qu'il faut vérifier le système d'alimentation dans son ensemble." },
    { type: "heading", text: "Que risque-t-on en retardant le remplacement ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Une obstruction progressive peut solliciter davantage la pompe à carburant et accélérer son usure.",
        "Une défaillance de pompe coûte généralement bien plus cher qu'un remplacement de filtre accessible.",
        "Une pression de carburant insuffisante peut dégrader les performances et provoquer des ratés moteur.",
        "Sur un diesel, l'accumulation d'eau dans un séparateur non entretenu peut atteindre les composants d'injection et les endommager.",
      ],
    },
    { type: "heading", text: "Comment suivre les changements de filtre à carburant ?" },
    { type: "paragraph", text: "Pour chaque intervention, conservez :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "la **date du remplacement** ;",
        "le **kilométrage** affiché au compteur ;",
        "le **type de filtre** (en ligne, filtre principal diesel) et, si possible, sa référence ;",
        "les **symptômes ayant motivé l'intervention** et ceux qui ont disparu après réparation.",
      ],
    },
    { type: "paragraph", text: "CarCare Diary permet de consigner un remplacement de filtre avec date, kilométrage et notes. Si votre constructeur prévoit un intervalle kilométrique, vous pouvez suivre cette échéance dans votre carnet d'entretien et activer les rappels disponibles selon les paramètres de l'application." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Suivi des entretiens", href: "/car-maintenance-tracker" },
        { label: "Application d'historique automobile", href: "/car-service-history-app" },
        { label: "Quand faire la vidange ?", href: "/fr/blog/quand-faire-vidange-voiture" },
        { label: "Quand remplacer le filtre à air moteur ?", href: "/fr/blog/quand-changer-filtre-air-moteur" },
        { label: "Tableau d'entretien par kilométrage", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur le filtre à carburant",
  faqs: [...faqs],
  ctaSlug: "quand-changer-filtre-carburant",
  cta: {
    kind: "interval",
    headline: "Enregistrez les remplacements de votre filtre à carburant",
    endHeadline: "Gardez l'historique de vos filtres à carburant",
    image: "log",
    subtitle: "Conservez la date, le kilométrage et les observations au même endroit.",
    endSubtitle: "Retrouvez vos interventions et préparez les prochaines échéances.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Filtre à carburant : quand le remplacer et quels symptômes ?",
    description: "Découvrez quand remplacer un filtre à carburant, comment reconnaître les signes d'obstruction et comment suivre son entretien.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-change-fuel-filter" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-change-fuel-filter" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToChangeFuelFilterFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
