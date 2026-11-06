import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-liquide-direction-assistee";

const faqs = [
  {
    question: "Ma voiture utilise-t-elle du liquide de direction assistée ?",
    answer: "Seules les directions à assistance hydraulique utilisent ce liquide. Les modèles équipés d'une direction assistée électrique (EPS) n'en ont pas besoin. Pour vérifier, recherchez un réservoir de liquide de direction assistée dans le compartiment moteur et consultez le manuel. Si aucun réservoir n'existe et que le manuel ne mentionne pas ce liquide, la direction est probablement électrique.",
  },
  {
    question: "À quelle fréquence faut-il le remplacer ?",
    answer: "Il n'existe pas de fréquence universelle. Beaucoup de constructeurs prévoient des contrôles et des appoints sans remplacement programmé. Certains garages recommandent un changement préventif autour de 48 000 à 80 000 km. Si le manuel ne prévoit aucun intervalle, faites examiner régulièrement l'état du liquide et envisagez un remplacement s'il paraît dégradé ou contaminé.",
  },
  {
    question: "Quels signes peuvent indiquer qu'il faut intervenir ?",
    answer: "Bruits de gémissement en braquant, direction plus dure, liquide très sombre ou sentant le brûlé, mousse dans le réservoir ou traces de fuite près de la pompe et de la crémaillère sont autant de signes à examiner. Ils peuvent aussi révéler un problème mécanique ou une entrée d'air : ne vous contentez pas de changer le liquide sans diagnostic.",
  },
  {
    question: "Peut-on simplement faire l'appoint ?",
    answer: "Un appoint peut être approprié lorsque le niveau est légèrement insuffisant, mais il ne remplace pas un liquide très dégradé. Si le réservoir baisse régulièrement, recherchez la fuite au lieu d'ajouter du liquide à répétition. Utilisez uniquement le produit conforme aux spécifications du constructeur.",
  },
  {
    question: "Que risque-t-on avec un niveau très bas ?",
    answer: "La pompe peut fonctionner sans lubrification suffisante, s'user plus vite ou se détériorer. La direction peut devenir lourde et moins réactive. Si le niveau est très bas, faites rechercher la cause, souvent une fuite progressive, plutôt que de multiplier les appoints.",
  },
  {
    question: "Comment conserver l'historique de cet entretien ?",
    answer: "Notez les dates de contrôle ou de remplacement, l'état du liquide et sa référence. Ces précisions seront utiles lors des interventions suivantes. CarCare Diary vous permet de consigner ces opérations, leur kilométrage éventuel et vos observations dans l'historique du véhicule.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand changer le liquide de direction assistée ?",
  hero: {
    category: "Entretien",
    readTime: "4 min de lecture",
    title: "Quand changer le liquide de direction assistée ?",
    lede: "Les intervalles de remplacement du liquide de direction assistée varient considérablement selon les modèles. Certains constructeurs indiquent une fréquence précise ; d'autres recommandent seulement de contrôler le niveau ou d'intervenir si le liquide est dégradé. **Commencez par vérifier que votre voiture possède une direction assistée hydraulique** : beaucoup de véhicules récents utilisent une assistance électrique, sans liquide de direction assistée.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Vérifiez d'abord le type de direction de votre voiture. Une direction **électrique n'utilise pas de liquide hydraulique**. Si votre modèle possède une direction hydraulique, le constructeur peut ne prévoir aucun remplacement périodique : l'entretien dépend alors du niveau, de l'état du liquide et d'éventuels symptômes. Consultez le manuel.",
  },
  blocks: [
    { type: "heading", text: "Direction assistée hydraulique ou électrique ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Direction assistée hydraulique (HPS).** Une pompe, généralement entraînée par courroie, met le liquide sous pression pour faciliter la direction. Un réservoir est accessible dans le compartiment moteur. Il faut surveiller le niveau et parfois remplacer le liquide. Ce système est devenu moins courant sur les modèles récents.",
        "**Direction assistée électrique (EPS).** Un moteur électrique fournit l'assistance. Il n'y a ni circuit hydraulique ni réservoir de liquide de direction assistée. Ce système est très répandu sur les voitures construites depuis les années 2010 environ.",
      ],
    },
    { type: "heading", text: "Les intervalles habituels d'entretien" },
    { type: "paragraph", text: "Pour une direction hydraulique, le remplacement est moins standardisé que celui de l'huile moteur ou du liquide de refroidissement :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Pas d'intervalle programmé : situation fréquente.** De nombreux constructeurs préconisent seulement de vérifier le niveau et l'état du liquide, et de faire l'appoint si nécessaire. Le liquide se dégrade généralement moins vite que l'huile moteur.",
        "**Remplacement selon l'état.** Un liquide très foncé, présentant une odeur de brûlé ou des impuretés peut justifier son remplacement, quel que soit le kilométrage. Un liquide dégradé peut accélérer l'usure de la pompe et des joints.",
        "**Conseil préventif de certains garages : environ 48 000 à 80 000 km.** Cette fourchette est parfois recommandée pour des véhicules anciens ou très kilométrés (30 000–50 000 miles). **Ce n'est pas une recommandation constructeur universelle.**",
      ],
    },
    { type: "heading", text: "Les signes d'un problème de liquide ou de direction assistée" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Gémissement ou grondement en braquant.** Un bruit aigu venant du compartiment moteur, notamment en butée, peut signaler un niveau faible, de l'air dans le circuit ou une pompe fatiguée.",
        "**Direction inhabituellement dure.** Un effort plus important au volant peut être lié à une fuite, un problème de pompe ou un liquide dégradé.",
        "**Liquide très foncé ou à odeur de brûlé.** Le liquide est souvent clair, ambré ou rouge pâle lorsqu'il est en bon état. Une coloration brun foncé ou une odeur de brûlé justifie un contrôle.",
        "**Mousse ou bulles dans le réservoir.** Elles peuvent indiquer la présence d'air dans le circuit, parfois parce que le niveau a suffisamment baissé pour que la pompe aspire de l'air. Un simple appoint peut ne pas suffire.",
        "**Fuites visibles.** Des traces grasses sous l'avant de la voiture ou autour de la crémaillère, de la pompe, des flexibles ou du réservoir peuvent révéler un joint ou un tuyau défectueux.",
      ],
    },
    { type: "paragraph", text: "Ces symptômes peuvent provenir du liquide, mais aussi de la pompe, des joints ou de la crémaillère. Faites rechercher la cause au lieu de supposer qu'une simple vidange résoudra tout." },
    { type: "heading", text: "Que se passe-t-il si l'entretien est négligé ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Un liquide dégradé peut accélérer l'usure de la pompe et des joints de la crémaillère.",
        "Une fuite persistante peut laisser la pompe fonctionner avec trop peu de lubrification et provoquer sa défaillance.",
        "Le remplacement de la pompe peut être coûteux.",
        "Une direction lourde ou peu réactive peut réduire la capacité à contrôler le véhicule, notamment en situation d'urgence.",
      ],
    },
    { type: "heading", text: "Comment suivre les contrôles et les remplacements ?" },
    { type: "paragraph", text: "Conservez :" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "la **date de vérification ou de remplacement** ;",
        "l'**état observé** (couleur, odeur, niveau) ;",
        "la **référence du liquide utilisé**, car certaines voitures exigent une norme spécifique ;",
        "les **symptômes et réparations associés**.",
      ],
    },
    { type: "paragraph", text: "CarCare Diary permet d'enregistrer ces contrôles et interventions avec une date, le kilométrage si pertinent et des notes. Même lorsqu'aucun remplacement n'est nécessaire, ces observations constituent un historique utile." },
    {
      type: "links",
      intro: "À lire aussi :",
      links: [
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Historique d'entretien", href: "/car-service-history-app" },
        { label: "Liquide de frein", href: "/fr/blog/quand-changer-liquide-de-frein" },
        { label: "Liquide de refroidissement", href: "/fr/blog/quand-changer-liquide-refroidissement" },
        { label: "Huile de transmission", href: "/fr/blog/quand-changer-huile-boite-vitesses" },
        { label: "Calendrier d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur le liquide de direction assistée",
  faqs: [...faqs],
  ctaSlug: "quand-changer-liquide-direction-assistee",
  cta: {
    kind: "interval",
    headline: "Suivez l'entretien de votre direction assistée",
    endHeadline: "Conservez l'historique de votre direction assistée",
    image: "log",
    subtitle: "Enregistrez les contrôles, changements de liquide et observations pour chaque véhicule.",
    endSubtitle: "Retrouvez les interventions et les caractéristiques du liquide utilisé.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Liquide de direction assistée : quand le changer et pourquoi ?",
    description: "Votre voiture possède-t-elle une direction assistée hydraulique ? Découvrez quand contrôler son liquide et les signes d'un problème.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-change-power-steering-fluid" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-change-power-steering-fluid" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToChangePowerSteeringFluidFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
