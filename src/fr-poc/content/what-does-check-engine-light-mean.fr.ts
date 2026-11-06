import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/voyant-moteur-allume-signification";

const faqs = [
  {
    question: "Peut-on rouler avec le voyant moteur allumé ?",
    answer: "Si le voyant est fixe et que la voiture se comporte normalement, il peut être possible de rejoindre prudemment un garage. N'attendez pas indéfiniment pour rechercher la cause. Un voyant clignotant est plus urgent : il peut signaler des ratés actifs pouvant surchauffer le catalyseur. Ralentissez, évitez les fortes accélérations et faites contrôler le véhicule dès que possible. Si la conduite devient dangereuse, arrêtez-vous en sécurité.",
  },
  {
    question: "Quelle différence entre voyant fixe et clignotant ?",
    answer: "Un voyant fixe signale un défaut détecté et mémorisé, qui n'est pas nécessairement critique à l'instant présent. Un clignotement indique souvent une anomalie active, notamment des ratés d'allumage, nécessitant une réaction rapide. Continuer à rouler dans ces conditions peut abîmer le catalyseur.",
  },
  {
    question: "Comment connaître le code défaut du voyant moteur ?",
    answer: "Il faut lire les codes enregistrés dans le système OBD-II avec un lecteur compatible ou l'outil de diagnostic d'un garagiste ou d'un concessionnaire. Certains magasins automobiles proposent également ce service. **Le code n'est pas un diagnostic définitif** : il identifie le système ayant signalé une anomalie, puis il faut rechercher la cause réelle.",
  },
  {
    question: "Le voyant moteur peut-il s'éteindre tout seul ?",
    answer: "Oui. Si un problème temporaire disparaît, par exemple après avoir correctement refermé un bouchon de réservoir, le voyant peut s'éteindre après plusieurs cycles de conduite. S'il existe un défaut persistant, il restera allumé ou reviendra. Effacer le code sans réparer ne règle rien.",
  },
  {
    question: "Le voyant moteur est-il identique au témoin de révision ?",
    answer: "Non. Le voyant moteur signale un défaut détecté par le diagnostic du véhicule. Un témoin de révision ou d'entretien, souvent représenté par une clé, indique généralement qu'une échéance programmée approche selon le temps ou le kilométrage. Il s'agit de deux messages distincts.",
  },
  {
    question: "Comment garder l'historique des réparations du voyant moteur ?",
    answer: "Après la lecture du code et la réparation, enregistrez le code, la cause diagnostiquée, les pièces ou réglages concernés, la date et le kilométrage. CarCare Diary permet d'ajouter ces éléments aux notes d'entretien pour faciliter les vérifications futures.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Que signifie le voyant moteur allumé ?",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Que signifie le voyant moteur allumé ?",
    lede: "Le **voyant moteur**, aussi appelé témoin de dysfonctionnement (MIL), indique que le système de diagnostic embarqué a enregistré un défaut. Un voyant **fixe** demande une vérification prochaine. Un voyant **clignotant** peut indiquer des ratés de combustion actifs susceptibles d'endommager le catalyseur : ralentissez et arrêtez-vous en sécurité si nécessaire. Ce témoin recouvre des centaines de défauts, du bouchon de réservoir mal fermé à la sonde lambda défaillante. Pour connaître la cause signalée, il faut lire le code de défaut avec un outil OBD.",
  },
  prefaceCallout: {
    title: "Important",
    body: "Ce guide présente des causes possibles, pas un diagnostic. Un code de défaut identifie souvent le circuit ou le capteur ayant signalé l'anomalie — pas nécessairement la pièce à remplacer. Si le voyant clignote ou si d'autres symptômes affectent la conduite ou la sécurité, faites examiner le véhicule sans tarder.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Un **voyant moteur fixe** signale un défaut mémorisé — non nécessairement urgent, mais à lire et diagnostiquer rapidement. Un **voyant clignotant** est plus préoccupant, souvent lié à des ratés d'allumage : ralentissez, évitez les accélérations importantes et faites examiner le véhicule au plus vite. En cas de perte de puissance, de surchauffe ou de comportement dangereux, arrêtez-vous en sécurité. Pour identifier la cause, faites lire le code OBD-II par un professionnel ou avec un lecteur compatible.",
  },
  blocks: [
    { type: "heading", text: "Voyant moteur fixe ou clignotant : quelle différence ?" },
    {
      type: "callout",
      tone: "warning",
      title: "Voyant moteur fixe",
      body: "Le calculateur a enregistré un défaut qui peut ne plus être actif au moment où vous le voyez. S'il n'existe pas d'autres symptômes, il est souvent possible de rejoindre prudemment un atelier, mais n'ignorez pas durablement l'alerte.",
    },
    {
      type: "callout",
      tone: "danger",
      title: "Voyant moteur clignotant",
      body: "Le défaut est actif, fréquemment sous forme de ratés de combustion. Une partie du carburant imbrûlé peut atteindre l'échappement et surchauffer le catalyseur. Évitez les fortes sollicitations et demandez une inspection urgente.",
    },
    { type: "heading", text: "Que faire en premier ?" },
    {
      type: "list",
      variant: "check",
      items: [
        "**Vérifiez le bouchon de réservoir.** Assurez-vous qu'il est correctement fermé : une fuite de vapeurs de carburant peut déclencher un défaut du système antipollution.",
        "**Notez les autres symptômes.** Ralenti irrégulier, manque de puissance, odeur inhabituelle ou surchauffe peuvent aider au diagnostic.",
        "**Observez si le voyant est fixe ou clignotant.** Cette différence influe sur l'urgence.",
        "**Faites lire le code OBD-II.** Utilisez un lecteur adapté ou demandez un diagnostic à un atelier.",
        "**Ne supprimez pas le code sans traiter la cause.** Effacer l'alerte ne répare pas le défaut et peut compliquer le diagnostic ultérieur.",
      ],
    },
    { type: "heading", text: "Les causes courantes du voyant moteur" },
    { type: "paragraph", text: "Voici des domaines de panne fréquents. Ils ne constituent pas une liste exhaustive et un code seul ne permet pas toujours d'identifier la pièce défectueuse." },
    { type: "subheading", text: "Bouchon de carburant desserré ou endommagé" },
    { type: "paragraph", text: "Un bouchon mal fermé peut laisser échapper des vapeurs et déclencher un code lié au système d'émissions par évaporation. Il suffit parfois de le revisser correctement puis d'effectuer quelques cycles de conduite pour que le voyant disparaisse, si c'était bien l'unique cause." },
    { type: "subheading", text: "Sonde lambda (capteur O2) défaillante" },
    { type: "paragraph", text: "Les sondes à oxygène mesurent la composition des gaz d'échappement afin d'aider le calculateur à ajuster l'injection. Une sonde défectueuse peut augmenter la consommation et les émissions polluantes." },
    { type: "subheading", text: "Ratés de combustion dans un ou plusieurs cylindres" },
    { type: "paragraph", text: "Un cylindre ne brûle pas correctement le mélange. Les causes possibles comprennent bougie usée, bobine d'allumage défaillante, injecteur ou défaut de compression. Des ratés importants peuvent déclencher un voyant clignotant et abîmer le catalyseur." },
    { type: "subheading", text: "Rendement du catalyseur insuffisant" },
    { type: "paragraph", text: "Le catalyseur réduit certaines émissions nocives. Un code de rendement faible peut indiquer son vieillissement, mais également un problème en amont, par exemple une sonde lambda ou des ratés persistants." },
    { type: "subheading", text: "Débitmètre d'air (MAF)" },
    { type: "paragraph", text: "Ce capteur mesure la quantité d'air entrant dans le moteur pour que le calculateur adapte l'injection. Un débitmètre encrassé ou défectueux peut perturber le fonctionnement et déclencher un code." },
    { type: "subheading", text: "Système de récupération des vapeurs d'essence (EVAP)" },
    { type: "paragraph", text: "Ce système empêche une partie des vapeurs du réservoir d'être rejetées dans l'atmosphère. Une fuite, parfois simplement au niveau du bouchon, peut générer un code EVAP même si la voiture semble rouler normalement." },
    { type: "subheading", text: "Bougies ou bobines d'allumage" },
    { type: "paragraph", text: "Des bougies usées ou des bobines défaillantes peuvent provoquer des ratés de combustion. Les codes associés à certains cylindres permettent de mieux cibler les contrôles à effectuer." },
    { type: "heading", text: "Quel historique d'entretien peut aider au diagnostic ?" },
    {
      type: "list",
      variant: "check",
      items: [
        "Les dernières interventions sur **bougies et allumage**, puisque les ratés figurent parmi les déclencheurs courants du voyant.",
        "Le remplacement du **filtre à air moteur** et du **filtre à carburant**, susceptibles d'influencer le fonctionnement moteur.",
        "L'historique des **vidanges**, car une dégradation importante de l'huile peut affecter certains organes.",
        "Les **anciens codes défaut** et les réparations associées.",
        "Toute intervention récente près des **capteurs ou composants antipollution**.",
      ],
    },
    { type: "heading", text: "Comment suivre les réparations liées au voyant moteur ?" },
    { type: "paragraph", text: "Après le diagnostic et la réparation, notez le code défaut, ce qui a été identifié, les pièces remplacées ou les réglages effectués, ainsi que la date et le kilométrage. Dans CarCare Diary, vous pouvez ajouter ces informations dans les notes d'une intervention afin de conserver un historique utile lors d'une panne ultérieure." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Quand remplacer les bougies ?", href: "/fr/blog/quand-changer-bougies-allumage" },
        { label: "Quand faire la vidange ?", href: "/fr/blog/quand-faire-vidange-voiture" },
        { label: "Filtre à air moteur", href: "/fr/blog/quand-changer-filtre-air-moteur" },
        { label: "Historique d'entretien", href: "/car-service-history-app" },
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur le voyant moteur",
  faqs: [...faqs],
  ctaSlug: "voyant-moteur-allume-signification",
  cta: {
    kind: "symptom",
    headline: "Gardez une trace des défauts et des réparations",
    endHeadline: "Conservez l'historique des réparations du moteur",
    image: "log",
    subtitle: "Enregistrez les codes diagnostiqués, les interventions et leur kilométrage au même endroit.",
    endSubtitle: "Retrouvez vos interventions précédentes lorsque vous consultez un garage.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Voyant moteur allumé ou clignotant : causes et que faire ?",
    description: "Voyant moteur fixe ou clignotant ? Découvrez les causes possibles, les situations urgentes et les étapes pour identifier le problème.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/what-does-check-engine-light-mean" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/what-does-check-engine-light-mean" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whatDoesCheckEngineLightMeanFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
