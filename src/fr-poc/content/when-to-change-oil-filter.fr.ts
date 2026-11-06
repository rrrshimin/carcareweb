import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-filtre-huile";

const faqs = [
  {
    question: "Faut-il changer le filtre à chaque vidange ?",
    answer: "C'est la pratique courante pour la grande majorité des moteurs. Avec des intervalles prolongés à l'huile synthétique, les constructeurs peuvent aussi prévoir le remplacement du filtre à chaque vidange, même lorsque celle-ci n'intervient qu'après 16 000 à 24 000 km ou davantage. Le remplacement systématique avec l'huile reste une approche prudente et largement pratiquée. Vérifiez toujours les instructions propres à votre voiture.",
  },
  {
    question: "À quoi sert un filtre à huile ?",
    answer: "Il retient les particules solides, résidus de combustion et débris présents dans l'huile moteur pendant sa circulation. Le matériau filtrant accumule progressivement ces impuretés. De nombreux filtres possèdent une soupape de dérivation qui évite d'interrompre le débit si la résistance devient excessive, mais l'huile peut alors circuler sans filtration normale.",
  },
  {
    question: "Le type de filtre influence-t-il l'intervalle ?",
    answer: "Oui. Certains éléments filtrants standards sont conçus pour des intervalles relativement courts ; d'autres filtres à durée prolongée sont adaptés à des vidanges plus espacées. Le filtre choisi doit répondre aux spécifications du moteur et à la durée de service prévue. Utilisez la référence recommandée par le constructeur.",
  },
  {
    question: "Peut-on remplacer uniquement le filtre, sans vidanger l'huile ?",
    answer: "C'est techniquement possible dans certaines situations particulières, par exemple lorsqu'un filtre défectueux doit être remplacé avant l'échéance. Une certaine quantité d'huile peut s'écouler et le niveau devra être corrigé. En entretien normal, on remplace généralement l'huile et le filtre ensemble : associer de l'huile neuve à un filtre saturé, ou l'inverse, n'offre pas le même résultat qu'une vidange complète.",
  },
  {
    question: "Quels sont les signes d'un filtre à huile défectueux ?",
    answer: "Une huile visiblement contaminée, un voyant de pression d'huile ou une fuite autour du logement du filtre peuvent signaler un problème. Mais ces signes ne sont pas spécifiques : un manque d'huile, une pompe défaillante ou un joint mal monté sont aussi possibles. Faites examiner rapidement toute anomalie, particulièrement une alerte de pression d'huile.",
  },
  {
    question: "Comment conserver l'historique des remplacements ?",
    answer: "Enregistrez chaque vidange avec sa date, son kilométrage, la viscosité et la marque de l'huile, et si possible la référence du filtre. CarCare Diary vous permet de consigner ces informations et de suivre l'échéance suivante selon le kilométrage ou le temps, lorsque les rappels sont configurés.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer le filtre à huile de sa voiture ?",
  hero: {
    category: "Entretien",
    readTime: "4 min de lecture",
    title: "Quand changer le filtre à huile de sa voiture ?",
    lede: "Sur la plupart des véhicules, on remplace le **filtre à huile à chaque vidange moteur**. Son rôle est de retenir les impuretés présentes dans l'huile pendant qu'elle circule. Lorsqu'un filtre est saturé ou que sa soupape de dérivation s'ouvre, l'huile peut continuer à circuler sans être correctement filtrée. La bonne fréquence dépend du moteur, de l'huile, de la référence du filtre et des prescriptions du constructeur.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "En règle générale, **changez le filtre à chaque vidange**. Suivez l'intervalle prévu par le constructeur pour l'huile et utilisez un filtre conforme à la référence prescrite. Consultez toujours le manuel de votre véhicule.",
  },
  blocks: [
    { type: "heading", text: "Fréquence de remplacement du filtre et de l'huile" },
    { type: "paragraph", text: "Le calendrier du filtre à huile est directement lié à celui de la vidange. Les deux opérations sont presque toujours réalisées ensemble :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Huile conventionnelle.** Les intervalles indicatifs de la source varient de 3 000 à 7 500 miles, soit **environ 4 800 à 12 100 km**, selon le moteur et son programme d'entretien. Le filtre est changé avec l'huile.",
        "**Huile entièrement synthétique.** Certains constructeurs prévoient des intervalles plus longs, souvent de 7 500 à 15 000 miles, soit **environ 12 100 à 24 100 km**, selon le véhicule et les conditions d'utilisation. Le filtre doit être adapté à toute la durée de l'intervalle et remplacé avec la vidange.",
        "**Programme constructeur.** Le manuel précise la norme d'huile, sa viscosité et la fréquence applicable. Remorquage, trajets courts, poussière et températures extrêmes peuvent justifier des intervalles plus rapprochés.",
      ],
    },
    { type: "paragraph", text: "Ces fourchettes sont purement indicatives et **ne remplacent jamais** le programme d'entretien de votre modèle." },
    { type: "heading", text: "Que se passe-t-il à l'intérieur du filtre à huile ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Le média filtrant retient les particules d'usure, les dépôts de carbone et les résidus de combustion transportés par l'huile.",
        "À mesure que les impuretés s'accumulent, le filtre oppose davantage de résistance à la circulation de l'huile.",
        "Une soupape de dérivation peut s'ouvrir lorsque la différence de pression devient trop importante. Le moteur reçoit encore de l'huile, mais celle-ci n'est plus filtrée de la même manière.",
        "Des particules circulant dans les jeux très fins du moteur peuvent accélérer l'usure des coussinets, des surfaces de cames et des parois de cylindres.",
      ],
    },
    { type: "heading", text: "Les signes pouvant indiquer un problème de filtre" },
    { type: "paragraph", text: "Ces symptômes peuvent avoir plusieurs causes. Ils nécessitent un diagnostic plutôt qu'un remplacement du filtre au hasard." },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Voyant de pression d'huile.** Il peut signaler un manque critique d'huile, une défaillance de pompe ou, plus rarement, un problème grave d'obstruction. Prenez ce voyant très au sérieux : **arrêtez le moteur en sécurité** et recherchez la cause avant de continuer.",
        "**Huile anormalement sombre et chargée en particules.** L'huile fonce naturellement avec l'usage. Une décoloration rapide ou des particules visibles peuvent toutefois signaler une contamination ou une vidange très en retard, sans prouver que seul le filtre est défaillant.",
        "**Fuite autour du filtre.** Elle peut venir d'un joint abîmé, d'un montage incorrect, d'un filetage endommagé ou d'un ancien joint resté en place. Une accumulation d'huile près du filtre doit être examinée rapidement.",
        "**Cliquetis ou bruits moteur.** Un manque de lubrification peut provoquer des bruits, notamment au démarrage. Plusieurs problèmes de pression ou de qualité d'huile peuvent en être responsables.",
      ],
    },
    { type: "heading", text: "Que se passe-t-il si les vidanges sont trop espacées ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "L'huile se dégrade et perd progressivement ses capacités de lubrification et de nettoyage, augmentant l'usure interne.",
        "Des boues et dépôts peuvent s'accumuler dans le moteur et gêner la lubrification de certains composants.",
        "Un filtre saturé peut laisser passer de l'huile insuffisamment filtrée par sa soupape de dérivation.",
        "À long terme, le risque de défaillances coûteuses augmente lorsque l'entretien prescrit n'est pas respecté.",
      ],
    },
    { type: "heading", text: "Comment suivre les vidanges et les filtres ?" },
    { type: "paragraph", text: "Notez ensemble la date de vidange, le kilométrage, la marque et la viscosité de l'huile, ainsi que la référence du filtre si vous la connaissez. CarCare Diary permet d'enregistrer ces détails dans les spécifications et les notes d'une intervention. Pour préparer la prochaine échéance, appuyez-vous sur l'intervalle du constructeur et activez, si vous le souhaitez, les rappels disponibles dans l'application." },
  ],
  faqHeading: "Questions fréquentes sur les filtres à huile",
  faqs: [...faqs],
  ctaSlug: "quand-changer-filtre-huile",
  cta: {
    kind: "interval",
    headline: "Gardez l'historique de vos vidanges et filtres à huile",
    endHeadline: "Retrouvez vos vidanges au même endroit",
    image: "log",
    subtitle: "Enregistrez chaque intervention avec sa date, son kilométrage et ses spécifications.",
    endSubtitle: "Conservez un historique utile pour préparer les prochaines interventions.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Filtre à huile : quand le changer et quels signes surveiller ?",
    description: "Apprenez quand remplacer le filtre à huile, à quoi il sert et comment suivre vos vidanges dans CarCare Diary.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-change-oil-filter" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-change-oil-filter" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToChangeOilFilterFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
