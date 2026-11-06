import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-essuie-glaces-voiture";

const faqs = [
  {
    question: "À quelle fréquence faut-il changer les balais d'essuie-glace ?",
    answer: "Tous les **6 à 12 mois** est une fréquence courante, mais elle dépend de l'exposition au soleil et au gel, de la qualité et de l'usage. Changez immédiatement les balais si des traces, des à-coups ou des zones non essuyées gênent la visibilité, quel que soit leur âge.",
  },
  {
    question: "Comment reconnaître des balais d'essuie-glace usés ?",
    answer: "Cherchez des traces, du bruit, des saccades, des zones mal essuyées et du caoutchouc fendu ou décollé. Nettoyez d'abord le pare-brise et les lames pour écarter un simple dépôt de saleté.",
  },
  {
    question: "Faut-il changer les essuie-glaces avant et arrière ensemble ?",
    answer: "Non. Les balais arrière et avant peuvent s'user à des rythmes différents. Examinez chacun et remplacez ceux qui sont usés, en vérifiant que la référence et la longueur conviennent au véhicule.",
  },
  {
    question: "Le type de balai influence-t-il sa durée de vie ?",
    answer: "Oui. La qualité du caoutchouc, la conception (conventionnelle, plate ou hybride), l'adaptation à la courbure de la vitre et les conditions météorologiques jouent un rôle. Un balai plus cher n'est pas forcément adapté : respectez les dimensions et fixations recommandées.",
  },
  {
    question: "Peut-on remplacer les balais soi-même ?",
    answer: "Sur beaucoup de voitures, oui. Vérifiez la longueur des balais et le type de fixation, déverrouillez l'ancien balai et installez le nouveau selon la notice. Protégez le pare-brise et évitez de laisser le bras métallique retomber sur la vitre.",
  },
  {
    question: "Comment noter les changements d'essuie-glaces ?",
    answer: "Enregistrez la date, la position des balais, leur marque ou référence et la raison du remplacement. Un historique dans CarCare Diary aide à retrouver les pièces compatibles et à savoir quand l'opération a été faite.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer les essuie-glaces de sa voiture ?",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quand changer les essuie-glaces de sa voiture ?",
    lede: "Les balais d'essuie-glace sont faciles à remplacer, mais ils jouent un rôle essentiel pour la visibilité. De nombreux automobilistes les changent tous les **6 à 12 mois**. Le soleil, le gel, la saleté et la qualité du caoutchouc peuvent toutefois accélérer leur dégradation. Le meilleur indicateur reste leur efficacité, pas seulement leur âge.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Envisagez un remplacement tous les **6 à 12 mois**, ou plus tôt si les balais laissent des traces, sautillent sur le pare-brise ou n'essuient plus certaines zones. Le bon critère est une visibilité nette, notamment sous la pluie.",
  },
  blocks: [
    { type: "heading", text: "Fréquence habituelle de remplacement" },
    { type: "paragraph", text: "La longévité dépend fortement de l'utilisation et de l'environnement :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Fort soleil et chaleur.** Les UV et les températures élevées durcissent et fissurent progressivement le caoutchouc ; le remplacement peut être nécessaire avant un an.",
        "**Gel, neige et givre.** Des balais collés au pare-brise ou utilisés sur de la glace peuvent se déchirer ou se déformer rapidement.",
        "**Climat modéré et usage limité.** Des balais de bonne qualité peuvent rester efficaces plus longtemps, à condition que leur essuyage soit uniforme et silencieux.",
      ],
    },
    { type: "paragraph", text: "Contrôlez visuellement les balais avant les saisons pluvieuses. La fréquence de six à douze mois reste un repère, pas une obligation de remplacement si leur état et leur fonctionnement sont satisfaisants." },
    { type: "heading", text: "Signes d'essuie-glaces à remplacer" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Traces et voile sur la vitre.** Un caoutchouc usé ou déformé n'évacue plus toute l'eau et laisse des bandes qui gênent la vue.",
        "**Saccades et à-coups.** Les balais sautillent au lieu de glisser régulièrement : la lame peut être durcie, déformée ou mal positionnée.",
        "**Grincements persistants.** Un bruit répété, surtout sur une vitre correctement mouillée, peut signaler une lame usée, encrassée ou inadaptée.",
        "**Caoutchouc fissuré ou décollé.** Une lame fendue, déchirée ou séparée de son support doit être remplacée.",
        "**Zones non essuyées.** Des arcs d'eau restent au centre ou aux extrémités du pare-brise parce que le balai ne plaque plus correctement.",
      ],
    },
    { type: "paragraph", text: "Avant de remplacer des balais qui laissent seulement des traces, nettoyez délicatement le pare-brise et les lames ; une saleté importante peut parfois être en cause. Si le défaut persiste, changez-les." },
    { type: "heading", text: "Pourquoi leur état compte pour la sécurité" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Une mauvaise visibilité sous la pluie réduit le temps disponible pour réagir aux obstacles.",
        "Les traces et les reflets des phares rendent la conduite de nuit plus difficile.",
        "Une forte averse peut survenir sans prévenir : des balais défaillants deviennent alors un problème immédiat.",
        "Leur remplacement est généralement peu coûteux par rapport à son importance pour la sécurité.",
      ],
    },
    { type: "heading", text: "Comment suivre les changements d'essuie-glaces ?" },
    { type: "paragraph", text: "Après chaque intervention, notez :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "la **date** du remplacement ;",
        "les balais changés, **avant, arrière ou les deux** ;",
        "la **référence, le type ou la marque** choisis ;",
        "le **motif du remplacement**, les conditions saisonnières ou toute observation utile.",
      ],
    },
    { type: "paragraph", text: "CarCare Diary permet de conserver cette information dans l'historique d'entretien du véhicule et de retrouver la référence utilisée précédemment." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Batterie automobile", href: "/fr/blog/quand-changer-batterie-voiture" },
        { label: "Pression des pneus", href: "/fr/blog/quand-verifier-pression-pneus" },
        { label: "Calendrier d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les essuie-glaces",
  faqs: [...faqs],
  ctaSlug: "quand-changer-essuie-glaces-voiture",
  cta: {
    kind: "replacement",
    headline: "N'oubliez plus vos petits entretiens",
    endHeadline: "Conservez toutes vos interventions au même endroit",
    image: "log",
    subtitle: "Gardez la date et la référence de vos essuie-glaces dans l'historique de votre voiture.",
    endSubtitle: "Essuie-glaces, filtres, vidanges : retrouvez facilement ce que vous avez remplacé et quand.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Quand changer les essuie-glaces ? Fréquence et signes d'usure",
    description: "Traces, bruit, zones mal essuyées : apprenez à reconnaître des balais d'essuie-glace usés et à suivre leur remplacement.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-replace-windshield-wipers" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-replace-windshield-wipers" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToReplaceWindshieldWipersFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
