import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-liquide-de-frein";

const faqs = [
  {
    question: "À quelle fréquence faut-il changer le liquide de frein ?",
    answer: "De nombreux constructeurs recommandent un remplacement tous les deux ans, même si la voiture roule peu. Certains imposent des intervalles plus courts ou plus longs selon le véhicule et le type de liquide (DOT 3, DOT 4, DOT 5.1 ou DOT 5). Consultez le carnet d'entretien : le freinage est un système de sécurité et les prescriptions du constructeur prévalent.",
  },
  {
    question: "Pourquoi faut-il remplacer le liquide de frein ?",
    answer: "La plupart des liquides de frein absorbent progressivement l'humidité de l'air. Leur point d'ébullition diminue alors. En cas de freinage intense, le liquide trop chaud peut produire de la vapeur, entraînant une pédale molle et une réduction importante de l'efficacité. Un liquide correctement entretenu conserve une meilleure résistance à la chaleur et un fonctionnement plus constant.",
  },
  {
    question: "Quels signes indiquent qu'il faut remplacer le liquide ?",
    answer: "Une pédale spongieuse, un témoin de freinage allumé, un liquide particulièrement foncé ou un changement net de sensation à la pédale doivent vous alerter. Ces symptômes ne prouvent pas à eux seuls que le liquide est en cause. Si la pédale s'enfonce au plancher ou si le freinage semble dangereux, faites inspecter immédiatement le système.",
  },
  {
    question: "Peut-on vérifier soi-même le liquide de frein ?",
    answer: "Vous pouvez généralement voir le niveau et la couleur dans le réservoir translucide situé dans le compartiment moteur. Un liquide récent est souvent clair ou ambré. Une couleur très sombre peut signaler une dégradation, mais ce n'est **pas une mesure fiable de la teneur en eau**. Pour cette dernière, un test adapté ou un contrôle en atelier est nécessaire.",
  },
  {
    question: "Est-il dangereux de rouler avec un liquide de frein ancien ?",
    answer: "Un liquide dégradé présente un risque, surtout lors de freinages répétés ou prolongés : descente de montagne, freinage d'urgence ou remorquage. Son point d'ébullition abaissé favorise la formation de vapeur et la perte d'efficacité. Même si le problème ne se manifeste pas en conduite tranquille, ne reportez pas longtemps un entretien de sécurité prescrit.",
  },
  {
    question: "Comment conserver l'historique des changements de liquide ?",
    answer: "Notez chaque remplacement avec sa date et la norme du liquide employé. Cette opération étant principalement suivie dans le temps, un rappel fondé sur la date prévue par le constructeur est particulièrement utile. CarCare Diary permet d'enregistrer l'entretien et, selon les réglages et autorisations, de programmer des rappels locaux.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer le liquide de frein de sa voiture ",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quand changer le liquide de frein de sa voiture ?",
    lede: "Le liquide de frein se remplace généralement selon un **intervalle de temps**, et non selon le kilométrage, car il absorbe progressivement l'humidité de l'air, même si vous roulez peu. Plus il contient d'eau, plus sa température d'ébullition diminue, avec un risque de perte d'efficacité lors de freinages intenses. Un remplacement **tous les deux ans** est courant, mais seul le programme d'entretien du constructeur indique l'intervalle applicable à votre voiture.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Pour de nombreuses voitures, prévoyez le remplacement du liquide de frein **tous les 2 ans**, indépendamment du kilométrage. Certains constructeurs préconisent un intervalle différent : vérifiez le manuel de votre véhicule.",
  },
  blocks: [
    { type: "heading", text: "Pourquoi remplacer le liquide de frein selon le temps plutôt que les kilomètres ?" },
    { type: "paragraph", text: "Les liquides de frein DOT 3, DOT 4 et DOT 5.1 sont **hygroscopiques** : ils absorbent l'humidité ambiante, notamment par une très lente diffusion à travers certains flexibles et joints. Le phénomène se produit même lorsque la voiture reste garée plusieurs mois. À mesure que la teneur en eau augmente, le point d'ébullition diminue." },
    { type: "paragraph", text: "Lors des freinages ordinaires, vous ne remarquerez peut-être rien. Mais dans une longue descente, en cas de remorquage ou lors de freinages répétés, un liquide dégradé peut atteindre sa température d'ébullition. La vapeur est compressible, contrairement au liquide : la pédale devient molle, parfois avec une course nettement plus longue. Cette perte d'efficacité du freinage représente un danger." },
    { type: "heading", text: "Intervalles habituels de remplacement" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Programme de nombreux constructeurs : environ tous les 2 ans.** Cet intervalle, indépendant du kilométrage, est fréquent chez les constructeurs européens et japonais. D'autres recommandations existent : vérifiez toujours la documentation de votre modèle.",
        "**Utilisation sportive ou sollicitations thermiques importantes : une fois par an, parfois davantage.** Circuit, routes de montagne, remorquage fréquent ou usages professionnels intensifs peuvent justifier des contrôles et remplacements plus rapprochés. Un spécialiste pourra préciser les exigences applicables.",
        "**Liquides longue durée ou DOT 5 silicone : intervalle spécifique.** Le DOT 5 à base de silicone n'absorbe pas l'eau de la même façon que les liquides à base de glycol. Ses propriétés sont différentes et **il n'est pas interchangeable** avec les DOT 3, DOT 4 ou DOT 5.1. Ne changez jamais de norme sans prescription du constructeur.",
      ],
    },
    { type: "heading", text: "Les signes d'un liquide de frein à contrôler plus tôt" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Pédale molle ou spongieuse.** Une sensation inhabituelle, surtout après une série de freinages intenses, peut correspondre à la formation de vapeur dans un circuit contenant un liquide trop humide.",
        "**Course de pédale plus longue.** Si vous devez appuyer plus loin qu'auparavant pour freiner, faites examiner le système : le liquide, l'usure des plaquettes et d'autres défaillances peuvent être en cause.",
        "**Voyant ABS ou frein allumé.** Il peut signaler un niveau trop faible ou un défaut du système. Si le comportement de la pédale change également, faites contrôler les freins rapidement.",
        "**Liquide très foncé, brun ou noir.** Un liquide neuf est généralement clair à légèrement jaune. Une coloration sombre peut signaler une contamination importante, mais l'inspection visuelle ne permet pas de mesurer précisément la teneur en eau.",
        "**Freinage moins rassurant.** Toute dégradation de la sensation à la pédale, du mordant ou de la distance de freinage mérite un diagnostic.",
      ],
    },
    { type: "heading", text: "Que risque-t-on en repoussant le remplacement ?" },
    { type: "paragraph", text: "Les conséquences touchent avant tout la **sécurité**, mais l'humidité peut aussi accélérer la détérioration des composants :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "diminution de l'efficacité lors de freinages prolongés, avec pédale qui s'assouplit ;",
        "freinage moins prévisible lors d'un arrêt d'urgence ;",
        "corrosion accélérée d'éléments internes, notamment étriers et maître-cylindre ;",
        "dysfonctionnements possibles des composants hydrauliques de l'ABS ;",
        "dans des conditions thermiques extrêmes, perte presque totale de l'efficacité du freinage.",
      ],
    },
    { type: "paragraph", text: "Le remplacement du liquide est généralement une intervention relativement peu coûteuse au regard des risques. Ne négligez pas l'intervalle prescrit." },
    {
      type: "callout",
      tone: "danger",
      title: "Sécurité",
      body: "Si la pédale s\u0027enfonce anormalement, si le freinage devient inefficace ou si un voyant s\u0027accompagne d\u0027un comportement inhabituel, ne continuez pas à rouler. Faites contrôler le véhicule en sécurité par un professionnel.",
    },
    { type: "heading", text: "Comment suivre les changements de liquide de frein ?" },
    { type: "paragraph", text: "Conservez au minimum :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "la **date de purge ou de remplacement** ;",
        "la **norme de liquide utilisée** (DOT 3, DOT 4, DOT 5.1, etc.) ;",
        "des **notes sur la sensation à la pédale** et les observations faites pendant l'intervention.",
      ],
    },
    { type: "paragraph", text: "CarCare Diary permet de consigner le remplacement du liquide de frein et de suivre la date de la prochaine intervention. Les rappels éventuels dépendent des paramètres de l'application et des notifications autorisées sur le téléphone." },
  ],
  faqHeading: "Questions fréquentes sur le liquide de frein",
  faqs: [...faqs],
  ctaSlug: "quand-changer-liquide-de-frein",
  cta: {
    kind: "interval",
    headline: "Conservez l'historique des remplacements de liquide de frein",
    endHeadline: "Retrouvez tous vos entretiens de freinage au même endroit",
    image: "log",
    subtitle: "Enregistrez l'intervention, sa date et les spécifications, puis gardez vos prochains entretiens à l'esprit.",
    endSubtitle: "Gardez les dates et détails de vos interventions à portée de main.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Liquide de frein : quand le changer et quels signes surveiller ?",
    description: "Découvrez à quelle fréquence remplacer le liquide de frein, pourquoi il vieillit et quels symptômes nécessitent un contrôle.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-change-brake-fluid" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-change-brake-fluid" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToChangeBrakeFluidFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
