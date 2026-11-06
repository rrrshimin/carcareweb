import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-filtre-air-moteur";

const faqs = [
  {
    question: "À quelle fréquence remplacer le filtre à air moteur ?",
    answer: "De nombreux constructeurs indiquent des intervalles autour de 19 000–24 000 km dans des conditions normales, mais les prescriptions varient. Les routes poussiéreuses, le trafic dense et la pollution peuvent accélérer l'encrassement. Une inspection lors des vidanges est une habitude utile.",
  },
  {
    question: "Comment reconnaître un filtre à air à remplacer ?",
    answer: "Retirez l'élément selon les instructions du constructeur et inspectez-le. Un filtre neuf est souvent clair ; un filtre légèrement gris peut encore fonctionner. Un élément très foncé, chargé de poussières ou avec des plis obstrués mérite un remplacement. Les symptômes moteur ne permettent pas, à eux seuls, d'en conclure que le filtre est en cause.",
  },
  {
    question: "Quels symptômes peut provoquer un filtre à air sale ?",
    answer: "Un filtre très encrassé peut contribuer à une accélération moins franche, un ralenti irrégulier, une consommation légèrement plus élevée et, dans certains cas, un code défaut. Mais bougies, injecteurs, capteurs et alimentation en carburant peuvent provoquer les mêmes symptômes. Vérifiez le filtre sans exclure d'autres causes.",
  },
  {
    question: "Peut-on nettoyer le filtre plutôt que le remplacer ?",
    answer: "Certains filtres lavables spécifiques sont conçus pour être nettoyés puis éventuellement réhuilés. Les filtres papier plissés classiques sont généralement **à remplacer**, pas à laver. L'air comprimé peut enlever la poussière superficielle sans restaurer complètement les performances de filtration.",
  },
  {
    question: "Est-il facile de remplacer un filtre à air moteur ?",
    answer: "Sur de nombreuses voitures, il est accessible dans un boîtier en plastique relié à l'admission, fermé par des clips ou des vis. Il faut néanmoins choisir le bon élément et respecter le remontage. Vérifiez la référence dans la documentation ou sur le filtre existant.",
  },
  {
    question: "Comment conserver l'historique des remplacements ?",
    answer: "Notez la date, le kilométrage et la référence du filtre. Le kilométrage sert ensuite à estimer la prochaine échéance. CarCare Diary permet d'enregistrer ces interventions et d'activer un rappel kilométrique selon les réglages disponibles.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer le filtre à air du moteur ?",
  hero: {
    category: "Entretien",
    readTime: "4 min de lecture",
    title: "Quand changer le filtre à air du moteur ?",
    lede: "Le filtre à air moteur empêche poussières, saletés et débris de pénétrer dans l'admission. Beaucoup de programmes d'entretien prévoient un remplacement vers **19 000 à 24 000 km** (12 000–15 000 miles), mais des routes poussiéreuses, une circulation dense ou une pollution importante peuvent accélérer l'encrassement. Une inspection visuelle est particulièrement utile.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Dans des conditions normales, **19 000–24 000 km** constitue une fourchette indicative courante. Sur les routes non revêtues, dans la poussière ou un trafic très pollué, un remplacement plus fréquent peut être nécessaire. Inspectez le filtre à chaque vidange si cela convient à votre véhicule, et suivez la recommandation constructeur.",
  },
  blocks: [
    { type: "heading", text: "Intervalles selon les conditions de conduite" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Conditions normales :** environ 19 000–24 000 km sur certains programmes, principalement sur routes revêtues avec une qualité de l'air ordinaire.",
        "**Routes poussiéreuses et non revêtues :** inspection régulière et remplacement éventuellement plus tôt ; les chantiers, chemins de terre et pistes peuvent encrasser rapidement le filtre.",
        "**Trafic urbain dense et pollution :** accumulation plus rapide de particules possible que lors d'une circulation routière fluide.",
      ],
    },
    { type: "heading", text: "Comment examiner visuellement le filtre à air ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Blanc ou blanc cassé :** filtre neuf ou peu utilisé, généralement sans remplacement nécessaire.",
        "**Gris clair avec un peu de poussière :** élément déjà utilisé, mais pouvant encore fonctionner ; une inspection plus attentive et l'échéance constructeur guideront la décision.",
        "**Gris très foncé, brun, plis fortement chargés :** remplacement généralement indiqué si le filtre est visiblement obstrué.",
      ],
    },
    { type: "paragraph", text: "La couleur seule ne constitue pas un test universel de performance. Examinez l'état général et suivez la procédure du fabricant du filtre." },
    { type: "heading", text: "Les signes d'un filtre à air très encrassé" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Réponse à l'accélérateur moins vive.** Une restriction importante peut limiter le débit d'air, mais bougies, capteurs ou carburant peuvent produire des effets similaires.",
        "**Ralenti irrégulier.** Un fonctionnement instable peut avoir de nombreuses causes. Vérifier le filtre est une étape simple.",
        "**Consommation légèrement accrue.** L'effet dépend du moteur et de sa gestion électronique, ainsi que du niveau d'encrassement.",
        "**Voyant moteur dans certains cas.** Une restriction importante peut perturber les mesures d'admission. Il faut lire les codes défaut avant d'accuser le filtre.",
      ],
    },
    { type: "heading", text: "Que se passe-t-il si le remplacement est négligé ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Le débit d'air peut diminuer progressivement avec l'accumulation de poussière.",
        "Des particules fines peuvent, dans certaines situations, contourner ou traverser un élément surchargé.",
        "Les performances peuvent se dégrader et la consommation augmenter.",
        "Certains composants d'admission peuvent être davantage sollicités.",
      ],
    },
    { type: "heading", text: "Comment suivre le remplacement ?" },
    { type: "paragraph", text: "Notez **la date**, **le kilométrage**, **la marque ou la référence du filtre** et **son état lors du contrôle**. CarCare Diary permet de consigner ces détails et d'utiliser le kilométrage du dernier remplacement comme point de départ pour la prochaine échéance, selon les intervalles du constructeur." },
  ],
  faqHeading: "Questions fréquentes sur le filtre à air moteur",
  faqs: [...faqs],
  ctaSlug: "quand-changer-filtre-air-moteur",
  cta: {
    kind: "replacement",
    headline: "Gardez une trace des changements de filtre à air",
    endHeadline: "Retrouvez vos entretiens de filtre moteur au même endroit",
    image: "log",
    subtitle: "Conservez les dates, kilométrages et références de pièces.",
    endSubtitle: "Un historique clair pour préparer chaque révision.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Filtre à air moteur : quand le remplacer et comment le vérifier ?",
    description: "Intervalles, inspection visuelle, symptômes : découvrez quand remplacer le filtre à air moteur et suivre son entretien.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-replace-engine-air-filter" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-replace-engine-air-filter" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToReplaceEngineAirFilterFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
