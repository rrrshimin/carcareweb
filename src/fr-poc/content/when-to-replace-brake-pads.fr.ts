import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-plaquettes-frein";

const faqs = [
  {
    question: "Combien de kilomètres durent les plaquettes de frein ?",
    answer: "Leur durée de vie varie beaucoup. On estime généralement cette durée à environ 40 000 à 80 000 km, mais les plaquettes peuvent s'user plus vite ou durer davantage selon la conduite, la route, les matériaux et le poids du véhicule. Une voiture lourde, une conduite avec freinages appuyés ou des descentes de montagne accélèrent l'usure. L'inspection reste plus fiable qu'une estimation au kilométrage.",
  },
  {
    question: "Quels sont les signes indiquant qu'il faut changer les plaquettes ?",
    answer: "Sifflement aigu lors du freinage, frottement métallique, vibrations dans la pédale, distance d'arrêt plus longue ou voyant de frein. Ces signes peuvent avoir plusieurs causes, mais chacun justifie une vérification rapide. Un bruit métallique ou une forte perte d'efficacité impose une attention immédiate.",
  },
  {
    question: "Les plaquettes avant s'usent-elles plus vite que les arrière ?",
    answer: "Le plus souvent, oui. Les freins avant supportent une plus grande part de l'effort lors de la décélération en raison du transfert de masse. Les plaquettes avant doivent donc souvent être remplacées plus régulièrement, même si cela dépend du système de freinage et de l'usage.",
  },
  {
    question: "Peut-on vérifier soi-même l'usure des plaquettes ?",
    answer: "Parfois, on peut apercevoir l'épaisseur de la garniture entre les rayons de la roue. Certaines plaquettes possèdent une rainure servant de repère, mais l'observation reste limitée. Un professionnel peut mesurer précisément la garniture. Un remplacement est généralement conseillé vers 2 à 3 mm de matériau restant, selon le constructeur.",
  },
  {
    question: "Faut-il remplacer les plaquettes des deux côtés en même temps ?",
    answer: "Oui. Sur un même essieu, les plaquettes gauche et droite doivent normalement être remplacées ensemble. Remplacer un seul côté peut créer un déséquilibre de freinage et faire dévier le véhicule.",
  },
  {
    question: "Comment retrouver la date du dernier remplacement ?",
    answer: "Enregistrez chaque intervention avec sa date, son kilométrage, l'essieu concerné et, si possible, la marque des pièces. Une application comme CarCare Diary permet de conserver ces informations et d'utiliser des échéances de contrôle ; les notifications éventuelles dépendent des paramètres activés.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Plaquettes de frein",
  hero: {
    category: "Entretien",
    readTime: "7 min de lecture",
    title: "Quand faut-il changer les plaquettes de frein ?",
    lede: "La durée de vie des plaquettes de frein varie énormément : elle peut être inférieure à 30 000 km sur une voiture lourde utilisée surtout en ville, ou dépasser 70 000 km sur un véhicule conduit tranquillement sur autoroute. Le style de conduite, le matériau des plaquettes, le poids et le relief ont tous une influence. Un contrôle visuel de l'usure est plus fiable qu'un kilométrage théorique ; connaître les signes d'alerte permet d'agir avant qu'un problème ne compromette la sécurité.",
  },
  lastUpdatedLabel: "Dernière mise à jour : novembre 2026",
  shortAnswer: {
    label: "Réponse rapide",
    body: "La durée de vie est généralement estimée à environ 40 000 à 80 000 km (25 000 à 50 000 miles), mais les écarts sont très importants. Les plaquettes avant s'usent souvent plus vite que les arrière. Faites-les examiner régulièrement, par exemple lors d'une permutation des pneus si elle est prévue, ou au moins lors de l'inspection annuelle adaptée à votre véhicule. Ne vous fiez pas uniquement au compteur.",
    footnote: "Ces chiffres sont indicatifs. Le contrôle de l'épaisseur réelle et les recommandations du constructeur priment.",
  },
  blocks: [
    { type: "heading", text: "Quelle est la durée de vie habituelle des plaquettes ?" },
    { type: "paragraph", text: "C'est l'un des éléments dont la longévité est la plus difficile à prévoir. Les mêmes plaquettes peuvent s'user à des rythmes très différents sur un même modèle de voiture, selon le trajet et la façon de freiner." },
    { type: "subheading", text: "Autoroute et freinages doux" },
    { type: "paragraph", text: "Estimation : plutôt vers la limite haute de la fourchette." },
    { type: "paragraph", text: "Les ralentissements progressifs sur voie rapide sollicitent moins les plaquettes. Une conduite avec peu de freinages brusques peut prolonger leur durée de vie." },
    { type: "subheading", text: "Ville et arrêts fréquents" },
    { type: "paragraph", text: "Estimation : plutôt vers la limite basse." },
    { type: "paragraph", text: "Une circulation avec de nombreux feux et embouteillages entraîne des freinages répétés et parfois plus intenses. L'usure peut être sensiblement accélérée." },
    { type: "subheading", text: "Montagne et routes vallonnées" },
    { type: "paragraph", text: "Estimation : parfois nettement plus courte que la moyenne." },
    { type: "paragraph", text: "Le frein moteur aide à limiter l'effort, mais les longues descentes demandent une énergie de freinage importante et augmentent la sollicitation des plaquettes." },
    { type: "subheading", text: "Remorquage et fortes charges" },
    { type: "paragraph", text: "Estimation : inférieure à la moyenne." },
    { type: "paragraph", text: "Plus la masse à ralentir est élevée, plus les freins doivent dissiper d'énergie. Un remorquage fréquent peut accélérer l'usure des plaquettes et des disques." },
    { type: "paragraph", text: "Compte tenu de ces différences, de nombreux constructeurs recommandent de contrôler les freins à intervalles réguliers plutôt que d'imposer un seul kilométrage de remplacement." },
    { type: "heading", text: "Signes d'usure des plaquettes de frein" },
    { type: "paragraph", text: "Cinq symptômes peuvent indiquer que les plaquettes nécessitent une vérification. Certains proviennent d'un témoin d'usure intégré ; d'autres peuvent signaler des dommages déjà présents." },
    { type: "subheading", text: "Sifflement ou grincement au freinage" },
    { type: "paragraph", text: "Certaines plaquettes comportent une languette métallique qui produit un sifflement aigu lorsque la garniture s'amincit. C'est un avertissement à ne pas ignorer. D'autres causes de bruit sont possibles : un contrôle reste nécessaire." },
    { type: "subheading", text: "Bruit de frottement métallique" },
    { type: "paragraph", text: "Si la garniture est totalement usée, son support peut toucher le disque. Ce contact métal contre métal endommage rapidement le disque et exige une intervention immédiate. Évitez de continuer à rouler avec un freinage dégradé." },
    { type: "subheading", text: "Vibrations ou pulsations dans la pédale" },
    { type: "paragraph", text: "Elles peuvent être liées à une usure irrégulière, à des dépôts ou à un disque présentant un défaut. Même s'il reste de la garniture, le système de freinage doit être examiné." },
    { type: "subheading", text: "Distance de freinage allongée" },
    { type: "paragraph", text: "Si votre voiture met sensiblement plus longtemps qu'avant à s'arrêter, l'usure des plaquettes fait partie des causes possibles. C'est un problème de sécurité : faites contrôler les freins rapidement." },
    { type: "subheading", text: "Voyant de frein allumé" },
    { type: "paragraph", text: "Certains véhicules possèdent un capteur d'usure qui déclenche un avertissement au tableau de bord. Consultez votre manuel pour savoir ce que le voyant indique sur votre modèle : tous les témoins de frein ne signalent pas uniquement les plaquettes." },
    { type: "heading", text: "Que risque-t-on à ignorer des plaquettes usées ?" },
    { type: "paragraph", text: "Le freinage est essentiel à la sécurité. Repousser un remplacement malgré des symptômes peut avoir plusieurs conséquences :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Disques endommagés : un contact métal contre métal peut rayer ou détériorer le disque, rendant nécessaire son remplacement en plus des plaquettes.",
        "Étriers détériorés : un frottement prolongé peut entraîner des dégâts supplémentaires et augmenter le coût de la réparation.",
        "Freinage moins efficace : les distances d'arrêt peuvent s'allonger dans une situation d'urgence.",
        "Perte d'efficacité à chaud : des freins dégradés peuvent moins bien fonctionner lors d'une forte sollicitation.",
        "Freinage déséquilibré : une usure anormale d'un côté peut faire dévier le véhicule au freinage.",
      ],
    },
    { type: "paragraph", text: "Il est généralement moins coûteux de remplacer des plaquettes à temps que de réparer également les disques et les étriers. Un bruit d'alerte doit conduire à un contrôle, pas à un diagnostic automatique." },
    { type: "heading", text: "Freins avant et freins arrière : quelles différences ?" },
    { type: "paragraph", text: "Sur la plupart des véhicules, l'essieu avant assure une part plus importante du freinage. Lors d'une décélération, le transfert de masse accroît la charge sur les roues avant. En conséquence :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "L'usure des plaquettes avant est parfois 30 à 50 % plus rapide que celle des arrière ; cette proportion n'est pas universelle.",
        "Les plaquettes avant peuvent nécessiter des remplacements plus fréquents.",
        "Les plaquettes arrière peuvent durer sensiblement plus longtemps sur certains modèles.",
        "Les plaquettes doivent être remplacées par paire sur un même essieu, à gauche et à droite ensemble.",
      ],
    },
    { type: "heading", text: "Comment suivre les remplacements de plaquettes ?" },
    { type: "paragraph", text: "Consignez chaque intervention de freinage en précisant l'essieu concerné et le kilométrage. Vous disposerez ainsi d'un point de référence pour planifier la prochaine inspection et donner des informations utiles au futur intervenant." },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Date et kilométrage de chaque remplacement.",
        "Essieu concerné : avant, arrière ou les deux.",
        "Marque ou type de plaquettes, si connus.",
        "Remarques sur l'état des disques au moment des travaux.",
      ],
    },
    { type: "paragraph", text: "CarCare Diary permet d'enregistrer les remplacements dans une catégorie dédiée aux freins, avec date, kilométrage et notes. Les échéances peuvent être suivies à partir des informations saisies et des notifications facultatives peuvent être activées pour les contrôles futurs." },
    {
      type: "links",
      intro: "Liens utiles :",
      links: [
        { label: "Vidange moteur", href: "/fr/blog/quand-faire-vidange-voiture" },
        { label: "Permutation des pneus", href: "/fr/blog/quand-permuter-pneus-voiture" },
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Application d'historique d'entretien", href: "/car-service-history-app" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes",
  faqs: [...faqs],
  ctaSlug: "quand-changer-plaquettes-frein",
  cta: {
    kind: "replacement",
    headline: "Conservez les remplacements de plaquettes dans votre historique",
    endHeadline: "Gardez tous vos entretiens de freinage au même endroit",
    image: "log",
    subtitle: "Notez les pièces utilisées, la date, le kilométrage et vos observations afin de retrouver les informations lors d'un prochain entretien.",
    endSubtitle: "Enregistrez les interventions, suivez le kilométrage et retrouvez l'historique de votre voiture sur votre téléphone.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Quand changer les plaquettes de frein ? Signes et usure",
    description: "Découvrez les signes de plaquettes de frein usées, leur durée de vie indicative, les risques et comment garder l'historique de vos remplacements.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-replace-brake-pads" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-replace-brake-pads" },
    ],
    datePublished: "2026-04-16",
    dateModified: "2026-11-04",
  },
};

export const whenToReplaceBrakePadsFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
