import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/volant-voiture-tremble-causes";

const faqs = [
  {
    question: "Les vibrations du volant sont-elles dangereuses ?",
    answer: "Elles peuvent l'être si elles proviennent d'un pneu endommagé, d'un défaut de direction ou de freinage. Un tremblement nouveau, fort ou accompagné de bruit exige une inspection ; ne l'ignorez pas sous prétexte que la voiture roule encore.",
  },
  {
    question: "Une pression insuffisante peut-elle faire trembler le volant ?",
    answer: "Oui, une pression inadéquate peut altérer le comportement et favoriser l'usure, mais une vibration nette à vitesse élevée peut aussi venir de l'équilibrage ou d'un dommage au pneu. Contrôlez toutes les pressions à froid.",
  },
  {
    question: "Un équilibrage peut-il éliminer les vibrations du volant ?",
    answer: "Oui, si le déséquilibre de roue en est la cause. Mais une jante voilée, un pneu déformé ou un roulement usé ne sera pas forcément réparé par un simple équilibrage.",
  },
  {
    question: "Quelle différence entre équilibrage et géométrie ?",
    answer: "**L'équilibrage** compense la répartition des masses d'une roue en rotation ; **la géométrie** règle les angles de positionnement des roues. Le premier concerne surtout certaines vibrations, la seconde le comportement et l'usure des pneus.",
  },
  {
    question: "Des disques de frein usés peuvent-ils faire trembler le volant ?",
    answer: "Oui. Des irrégularités de surface ou d'épaisseur peuvent provoquer des pulsations pendant le freinage. L'étrier et les autres composants doivent toutefois être contrôlés avant d'accuser les seuls disques.",
  },
  {
    question: "Comment suivre l'entretien des pneus et freins ?",
    answer: "Enregistrez équilibrages, permutations, géométrie, changement des disques et plaquettes avec dates, kilométrages et observations. CarCare Diary permet de centraliser cet historique.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi le volant de ma voiture tremble-t-il ?",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Pourquoi le volant de ma voiture tremble-t-il ?",
    lede: "Un volant qui vibre peut signaler un défaut qui mérite de l'attention. **Le moment où le tremblement apparaît** est un indice important : à grande vitesse, seulement au freinage, après un nid-de-poule ou en permanence. Certains problèmes sont relativement simples ; d'autres touchent directement à la sécurité.",
  },
  prefaceCallout: {
    title: "Important",
    body: "Si les vibrations compromettent le freinage ou la direction, ou apparaissent après un choc, arrêtez-vous en sécurité et demandez une inspection.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "- **Vibrations à grande vitesse :** déséquilibrage, pneu endommagé ou roulement de roue usé. - **Vibrations au freinage :** disque présentant des irrégularités de surface ou étrier défaillant. - **Après un choc :** jante tordue, pneu abîmé, géométrie ou élément de direction endommagé. Ce sont des pistes, non des diagnostics. Un symptôme sévère ou nouveau doit être examiné rapidement.",
  },
  blocks: [
    { type: "heading", text: "Causes possibles selon les circonstances" },
    { type: "subheading", text: "Sur autoroute ou à vitesse élevée" },
    { type: "paragraph", text: "Un **mauvais équilibrage** peut faire vibrer le volant dans une plage de vitesses. Un pneu déformé ou usé irrégulièrement, une jante endommagée ou un roulement usé sont d'autres causes possibles. Un équilibrage seul ne résout pas toujours le problème si la roue est abîmée." },
    { type: "subheading", text: "Quand vous freinez" },
    { type: "paragraph", text: "Des variations d'épaisseur des disques, des dépôts de garniture ou un étrier qui serre mal peuvent provoquer des pulsations dans la pédale et des vibrations au volant. Faites examiner sans délai toute perte d'efficacité ou déviation pendant le freinage." },
    { type: "subheading", text: "Après un nid-de-poule ou un choc contre un trottoir" },
    { type: "paragraph", text: "Vérifiez l'absence de hernie ou de fissure dans le pneu et de déformation visible de la jante. Un choc peut aussi dérégler la géométrie ou endommager un élément de suspension ou de direction. Une inspection est nécessaire avant de reprendre une conduite rapide." },
    { type: "subheading", text: "À d'autres moments" },
    { type: "paragraph", text: "Une vibration constante ou à l'accélération peut provenir d'autres éléments de transmission, de direction ou de suspension. Notez si elle se ressent uniquement au volant ou aussi dans le siège et le plancher." },
    { type: "heading", text: "Quand faut-il cesser de rouler ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Les vibrations apparaissent **brutalement et violemment**, notamment après un choc.",
        "Le freinage devient moins efficace ou la voiture tire d'un côté.",
        "Un **grondement** ou un bruit métallique accompagne le phénomène.",
        "Une jante semble tordue ou un pneu présente un dommage visible.",
      ],
    },
    { type: "heading", text: "Ce qu'il faut vérifier en premier" },
    { type: "paragraph", text: "1. Mesurez les pressions à froid selon l'étiquette constructeur." },
    { type: "paragraph", text: "2. Regardez si un pneu présente hernie, méplat ou usure irrégulière." },
    { type: "paragraph", text: "3. Notez précisément si la vibration apparaît en roulant, freinant, tournant ou accélérant." },
    { type: "paragraph", text: "4. Vérifiez si la voiture tire également d'un côté." },
    { type: "paragraph", text: "5. Distinguez une vibration ressentie seulement au volant d'un tremblement dans tout l'habitacle." },
    { type: "heading", text: "Ce que l'historique d'entretien peut révéler" },
    { type: "paragraph", text: "Retrouvez les dernières dates d'équilibrage et de permutation, le dernier réglage de géométrie, les réparations de disques et plaquettes ainsi que les chocs contre un trottoir ou un nid-de-poule. Ces renseignements aident le mécanicien à réduire les pistes." },
    { type: "heading", text: "Comment enregistrer l'historique des pneus et freins ?" },
    { type: "paragraph", text: "Conservez date, kilométrage, circonstances de vibration, éléments inspectés et pièces remplacées. CarCare Diary permet d'ajouter les contrôles de pneus, géométrie et freins pour retrouver les interventions précédentes." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Voiture qui tremble", href: "/fr/blog/voiture-vibre-tremble-causes" },
        { label: "Pression des pneus", href: "/fr/blog/quand-verifier-pression-pneus" },
        { label: "Permutation", href: "/fr/blog/quand-permuter-pneus-voiture" },
        { label: "Géométrie", href: "/fr/blog/quand-faire-geometrie-roues" },
        { label: "Disques", href: "/fr/blog/quand-changer-disques-frein" },
        { label: "Usure irrégulière", href: "/fr/blog/usure-irreguliere-pneus-causes" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur un volant qui vibre",
  faqs: [...faqs],
  ctaSlug: "volant-voiture-tremble-causes",
  cta: {
    kind: "symptom",
    headline: "Retrouvez l'historique des pneus et des freins",
    endHeadline: "Un carnet de suivi utile au garage",
    image: "log",
    subtitle: "Consignez les contrôles déjà réalisés pour faciliter un nouveau diagnostic.",
    endSubtitle: "Gardez les dates, réparations et symptômes associés aux vibrations.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Volant qui tremble : causes selon la vitesse et le freinage",
    description: "Volant qui vibre sur autoroute, au freinage ou après un choc : découvrez les causes possibles et les signes à faire contrôler.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-is-my-steering-wheel-shaking" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-is-my-steering-wheel-shaking" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyIsMySteeringWheelShakingFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
