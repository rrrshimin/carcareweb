import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/moteur-voiture-surchauffe-causes";

const faqs = [
  {
    question: "Que faire si le moteur surchauffe pendant la conduite ?",
    answer: "Arrêtez-vous dès que possible en sécurité, coupez le moteur et faites appel à une assistance. **N'essayez pas d'atteindre un garage avec un moteur en surchauffe.** N'ouvrez jamais le bouchon du circuit à chaud.",
  },
  {
    question: "Peut-on rouler avec un moteur qui surchauffe ?",
    answer: "Non, pas si un voyant de température, de la vapeur ou une forte élévation de température confirme la surchauffe. Continuer peut endommager sérieusement les joints et le moteur. Il faut rechercher la cause avant de reprendre la route.",
  },
  {
    question: "Pourquoi ne faut-il pas ouvrir le bouchon de refroidissement à chaud ?",
    answer: "Le circuit est sous pression. L'ouverture peut projeter du liquide et de la vapeur brûlants et provoquer de graves blessures. Attendez le refroidissement complet, même si l'aiguille est redescendue.",
  },
  {
    question: "Un manque d'huile peut-il provoquer une surchauffe ?",
    answer: "Oui. L'huile lubrifie et contribue à limiter la température des pièces internes. Un niveau très bas augmente les frottements et peut aggraver la surchauffe. Il faut contrôler les niveaux selon les instructions du constructeur.",
  },
  {
    question: "Comment un thermostat peut-il provoquer une surchauffe ?",
    answer: "Lorsqu'il reste bloqué fermé, il empêche ou limite la circulation du liquide vers le radiateur. Le moteur chauffe alors rapidement malgré une quantité de liquide parfois normale. Seul un diagnostic confirme le problème.",
  },
  {
    question: "Comment suivre l'entretien du refroidissement ?",
    answer: "Enregistrez changements de liquide, réparations de pompe, thermostat ou radiateur, températures anormales et interventions précédentes. CarCare Diary conserve ces informations avec les dates et le kilométrage.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi le moteur de ma voiture surchauffe-t-il",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Pourquoi le moteur de ma voiture surchauffe-t-il ?",
    lede: "Une surchauffe du moteur demande une réaction immédiate. Si le voyant de température s'allume ou si l'aiguille entre dans le rouge, **arrêtez de rouler dès que vous pouvez le faire en sécurité**. N'essayez pas de rejoindre un garage en roulant : poursuivre la conduite peut endommager le joint de culasse ou d'autres pièces du moteur. Les causes fréquentes sont une fuite ou un manque de liquide, une pompe à eau, un thermostat, un radiateur ou un ventilateur défaillant.",
  },
  prefaceCallout: {
    title: "Important",
    body: "Ces informations décrivent des hypothèses, pas un diagnostic. Une surchauffe, un problème de freinage ou de direction exigent une inspection par un professionnel avant toute reprise de la conduite.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Une surchauffe peut provenir **d'un niveau trop bas, d'une fuite, d'un thermostat bloqué, d'une pompe à eau usée, d'un radiateur obstrué ou d'un ventilateur en panne**. Si le voyant de température s'allume ou si de la vapeur apparaît, garez-vous en sécurité et **n'ouvrez pas le bouchon de refroidissement à chaud**.",
  },
  blocks: [
    {
      type: "callout",
      tone: "danger",
      title: "Arrêtez immédiatement si vous observez l'un de ces signes",
      body: "Témoin de température dans la **zone rouge** ou voyant de surchauffe allumé · vapeur ou fumée depuis le compartiment moteur · odeur sucrée de liquide de refroidissement · autres avertissements avec température en hausse.",
    },
    { type: "paragraph", text: "Arrêtez-vous en lieu sûr, coupez le moteur et demandez une assistance. Attendez le refroidissement complet avant toute vérification ; un circuit chaud est sous pression et peut provoquer de graves brûlures." },
    { type: "heading", text: "Les causes courantes de surchauffe" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Fuite ou manque de liquide de refroidissement.** Le liquide transporte la chaleur vers le radiateur. Une fuite externe (durite, radiateur, pompe) ou interne (joint de culasse) réduit l'efficacité du circuit.",
        "**Thermostat bloqué.** S'il reste fermé, le liquide circule mal vers le radiateur et la température peut monter rapidement.",
        "**Pompe à eau défaillante.** Turbine usée, roulement endommagé ou fuite d'étanchéité peuvent réduire la circulation du liquide ; un bruit ou une fuite peut accompagner le problème.",
        "**Radiateur obstrué ou abîmé.** Débris, ailettes endommagées ou dépôts internes limitent l'évacuation de la chaleur.",
        "**Ventilateur de refroidissement défectueux.** Il assure le passage de l'air dans le radiateur, notamment à l'arrêt ou à faible vitesse ; une panne peut être surtout visible dans les embouteillages.",
        "**Durites bouchées ou écrasées.** Un tuyau pincé, détérioré intérieurement ou obstrué peut réduire le débit du circuit.",
        "**Joint de culasse défectueux.** Des gaz de combustion peuvent pénétrer dans le circuit, augmenter la pression et provoquer surchauffe, perte de liquide, fumée blanche ou contamination de l'huile.",
      ],
    },
    { type: "heading", text: "Ce qu'il faut vérifier une fois le moteur froid" },
    { type: "paragraph", text: "1. **Attendez son refroidissement complet**. Comptez au minimum trente minutes, mais le délai réel varie ; n'ouvrez rien tant que le circuit reste chaud." },
    { type: "paragraph", text: "2. Vérifiez le niveau dans le **vase d'expansion**, selon la notice du constructeur." },
    { type: "paragraph", text: "3. Recherchez visuellement une fuite sous la voiture ou autour du compartiment moteur." },
    { type: "paragraph", text: "4. Contrôlez le **niveau d'huile**, qui peut également contribuer à une hausse de température s'il est insuffisant." },
    { type: "paragraph", text: "5. Notez les traces de liquide, dépôts ou zones humides près des durites, du radiateur et de la pompe à eau." },
    { type: "heading", text: "Ce que l'historique d'entretien peut révéler" },
    { type: "paragraph", text: "Retrouvez le dernier remplacement du liquide, les réparations du radiateur, du thermostat ou de la pompe à eau, les anciens épisodes de surchauffe, les vidanges et les travaux récents autour du circuit. Ces renseignements aident le mécanicien à comparer les symptômes dans le temps." },
    { type: "heading", text: "Comment suivre les incidents du circuit de refroidissement ?" },
    { type: "paragraph", text: "Notez date, kilométrage, température ou voyant observé, circonstances, niveau de liquide, pièces changées et diagnostic. CarCare Diary permet de conserver ces opérations dans un historique consultable lors d'une réparation ultérieure." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Liquide de refroidissement", href: "/fr/blog/quand-changer-liquide-refroidissement" },
        { label: "Vidange moteur", href: "/fr/blog/quand-faire-vidange-voiture" },
        { label: "Tableau d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur la surchauffe moteur",
  faqs: [...faqs],
  ctaSlug: "moteur-voiture-surchauffe-causes",
  cta: {
    kind: "symptom",
    headline: "Notez les incidents de refroidissement",
    endHeadline: "Un historique utile au garagiste",
    image: "log",
    subtitle: "Retrouvez les dates, diagnostics et réparations après un épisode de surchauffe.",
    endSubtitle: "Conservez les interventions et observations du circuit de refroidissement en un seul endroit.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Moteur qui surchauffe : causes et conduite à tenir",
    description: "Fuite de liquide de refroidissement, thermostat, pompe à eau, radiateur ou ventilateur : que faire face à une surchauffe moteur ?",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-is-my-car-overheating" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-is-my-car-overheating" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyIsMyCarOverheatingFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
