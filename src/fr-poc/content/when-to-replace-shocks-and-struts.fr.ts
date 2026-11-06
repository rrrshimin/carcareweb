import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-amortisseurs-voiture";

const faqs = [
  {
    question: "Quelle est la durée de vie des amortisseurs et jambes de force ?",
    answer: "Il n'y a pas de kilométrage de remplacement systématique. Des contrôles autour de 80 000–100 000 km sont souvent proposés, avec remplacement si une usure est constatée. Routes accidentées, gravier et ralentisseurs peuvent accélérer la dégradation. Les symptômes et l'examen professionnel sont plus pertinents que le seul compteur.",
  },
  {
    question: "Quelle différence entre amortisseur et jambe de force ?",
    answer: "Un amortisseur indépendant limite les oscillations d'un ressort séparé. La jambe de force est un ensemble de suspension qui réunit ressort et amortisseur et peut participer à la géométrie de direction. Son remplacement est parfois plus complexe. De nombreuses voitures ont des jambes de force à l'avant et des amortisseurs séparés à l'arrière, mais ce n'est pas universel.",
  },
  {
    question: "Faut-il remplacer les amortisseurs par paire ?",
    answer: "Oui, on recommande de remplacer ensemble les deux éléments du même essieu. N'en changer qu'un seul peut créer une différence d'amortissement entre les roues gauche et droite, nuisant à la stabilité. L'élément opposé a généralement connu les mêmes conditions d'utilisation.",
  },
  {
    question: "Des amortisseurs usés augmentent-ils la distance de freinage ?",
    answer: "Oui, ils peuvent la dégrader, notamment sur route irrégulière. Les amortisseurs contribuent à garder les pneus en contact avec la chaussée. Lorsqu'une roue rebondit, elle transmet moins efficacement les efforts de freinage. Il s'agit donc d'un enjeu de sécurité, pas seulement de confort.",
  },
  {
    question: "Peut-on vérifier soi-même les amortisseurs ?",
    answer: "Un test de rebond simple ou l'observation de traces d'huile donne des indices, mais reste approximatif. Un professionnel pourra examiner les fixations, silentblocs, butées, ressorts et amortisseurs, idéalement sur pont, pour distinguer les différentes causes.",
  },
  {
    question: "Faut-il refaire la géométrie après remplacement ?",
    answer: "Le remplacement de jambes de force peut modifier certains angles de suspension : un contrôle de géométrie est souvent conseillé. Le changement d'amortisseurs arrière indépendants ne l'impose pas toujours. Demandez au professionnel ce qui est prévu pour votre modèle.",
  },
  {
    question: "Comment garder l'historique de la suspension ?",
    answer: "Enregistrez la date et le kilométrage de chaque contrôle ou changement, les coins concernés et l'état des pièces déposées. Ajouter les observations sur les pneus facilite l'identification de tendances. CarCare Diary permet de consigner ces éléments avec les autres entretiens.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer les amortisseurs de sa voiture ?",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quand changer les amortisseurs de sa voiture ?",
    lede: "Les amortisseurs et jambes de force s'usent généralement de façon progressive, sur des dizaines de milliers de kilomètres. Le conducteur peut s'habituer à un comportement dégradé jusqu'à ce que la tenue de route, le confort et les pneus soient nettement touchés. À la différence d'une vidange, leur remplacement dépend surtout de **leur état**, pas d'un kilométrage fixe.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Il n'existe pas de fréquence universelle. Un contrôle autour de **80 000 à 100 000 km** peut être pertinent, ou plus tôt si la voiture rebondit après les bosses, plonge au freinage, penche fortement en virage, use ses pneus par vagues ou présente une fuite d'huile sur un amortisseur. En cas de remplacement, intervenez **par paire sur le même essieu** selon les recommandations du professionnel.",
  },
  blocks: [
    { type: "heading", text: "À quoi servent les amortisseurs et jambes de force ?" },
    { type: "paragraph", text: "Ils contrôlent les mouvements de la suspension et aident les pneus à rester en contact avec la route. Un **amortisseur indépendant** travaille avec un ressort séparé. Une **jambe de force** associe plusieurs fonctions de suspension et participe parfois à la géométrie de direction. Les deux peuvent se dégrader lentement et influencer le contrôle du véhicule." },
    { type: "heading", text: "Les signes d'une suspension fatiguée" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Avant de la voiture qui plonge au freinage.** Des amortisseurs avant usés contrôlent moins bien le transfert de masse, ce qui peut dégrader la stabilité et augmenter la distance d'arrêt.",
        "**Roulis excessif en virage.** Une forte inclinaison de la caisse ou une instabilité lors d'un changement de voie peut évoquer une mauvaise maîtrise des mouvements.",
        "**Rebonds après une bosse.** Une voiture qui continue d'osciller après un ralentisseur peut avoir un amortissement insuffisant. Le test reste indicatif.",
        "**Usure des pneus en facettes ou ondulations.** Une roue qui rebondit au lieu de rester bien plaquée peut produire des zones alternativement creusées et surélevées sur la bande de roulement.",
        "**Vibrations dans le volant.** Une suspension très usée peut contribuer à des vibrations, mais il faut aussi rechercher un déséquilibrage ou un problème de roue.",
        "**Fuite d'huile visible sur un amortisseur.** Des traces humides qui descendent le long du corps peuvent révéler un joint défaillant et une perte d'efficacité.",
        "**Claquements sur les bosses.** Ils peuvent provenir de la coupelle de jambe de force, d'une butée, d'un amortisseur ou d'autres éléments de suspension.",
      ],
    },
    {
      type: "callout",
      tone: "danger",
      title: "Évitez de continuer à rouler dans ces situations",
      body: "Tenue de route fortement dégradée (roulis important, instabilité à vitesse élevée ou direction imprévisible) · bruits de claquement ou cognement de suspension qui empirent rapidement · roue endommagée ou composant de suspension structurellement compromis après un choc. Arrêtez-vous en sécurité et faites inspecter le véhicule.",
    },
    { type: "heading", text: "Conseils généraux de remplacement" },
    {
      type: "table",
      headers: ["Situation", "Que faire ?"],
      rows: [
        ["Voiture de plus de 100 000 km", "Faire contrôler les amortisseurs lors de la prochaine révision s'ils ne l'ont pas été."],
        ["Usure des pneus en facettes", "Vérifier l'amortissement et les autres organes du train roulant."],
        ["Fuite d'huile sur le corps", "Faire examiner et remplacer l'amortisseur défaillant selon le diagnostic."],
        ["Plusieurs rebonds après une bosse", "Vérifier l'état des amortisseurs et ressorts."],
        ["Remplacement d'une jambe de force", "Contrôler la géométrie des roues après l'intervention."],
        ["Un seul côté à remplacer", "Remplacer les deux éléments d'un même essieu pour garder un comportement équilibré."],
      ],
    },
    { type: "heading", text: "Quel historique d'entretien est utile ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Le kilométrage des derniers remplacements ou contrôles.",
        "Les observations sur l'usure des pneus, notamment les facettes remarquées lors des permutations.",
        "Les travaux précédents sur silentblocs, bras de suspension, rotules et roulements.",
        "Les chocs connus : nids-de-poule, trottoirs, conduite sur routes très dégradées.",
      ],
    },
    { type: "heading", text: "Comment suivre l'entretien de la suspension ?" },
    { type: "paragraph", text: "Notez chaque inspection ou remplacement avec la date, le kilométrage, les coins du véhicule concernés et les observations sur les anciennes pièces. CarCare Diary permet de conserver ces détails dans un historique par véhicule et de les rapprocher des notes concernant l'usure des pneus." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Voiture qui vibre", href: "/fr/blog/voiture-vibre-tremble-causes" },
        { label: "Volant qui tremble", href: "/fr/blog/volant-voiture-tremble-causes" },
        { label: "Usure irrégulière des pneus", href: "/fr/blog/usure-irreguliere-pneus-causes" },
        { label: "Géométrie", href: "/fr/blog/quand-faire-geometrie-roues" },
        { label: "Permutation des pneus", href: "/fr/blog/quand-permuter-pneus-voiture" },
        { label: "Tableau d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les amortisseurs",
  faqs: [...faqs],
  ctaSlug: "quand-changer-amortisseurs-voiture",
  cta: {
    kind: "replacement",
    headline: "Suivez vos remplacements d'amortisseurs",
    endHeadline: "Conservez l'historique de la suspension",
    image: "log",
    subtitle: "Gardez les dates, kilométrages et observations au même endroit.",
    endSubtitle: "Retrouvez vos contrôles et les interventions sur les trains roulants.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Amortisseurs usés : quand les changer et quels signes ?",
    description: "Rebonds, vibrations, usure des pneus : découvrez les signes d'amortisseurs fatigués et quand faire inspecter la suspension.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-replace-shocks-and-struts" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-replace-shocks-and-struts" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToReplaceShocksAndStrutsFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
