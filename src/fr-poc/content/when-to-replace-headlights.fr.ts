import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-ampoules-phares";

const faqs = [
  {
    question: "Quelle est la durée de vie des ampoules de phares ?",
    answer: "Elle varie fortement selon la technologie. Les halogènes fonctionnent souvent plusieurs centaines à plus d'un millier d'heures, selon la chaleur, les vibrations et l'utilisation. Les xénon peuvent durer davantage ; les LED, encore plus longtemps, parfois pendant une grande partie de la vie du véhicule. Une ampoule halogène ou xénon qui cesse de fonctionner a souvent simplement atteint sa fin de vie.",
  },
  {
    question: "Faut-il remplacer les deux ampoules ensemble ?",
    answer: "Pour les halogènes et les xénon, de nombreux professionnels conseillent le remplacement par paire : les deux ampoules ont souvent été installées en même temps et peuvent présenter une usure proche. Cela aide aussi à conserver une luminosité homogène. Cette logique s'applique moins aux blocs LED, qui se réparent et se remplacent différemment.",
  },
  {
    question: "Quels types d'éclairage existe-t-il ?",
    answer: "Les trois grandes familles sont l'**halogène** (filament et lumière plutôt chaude), le **xénon/HID** (décharge haute intensité, lumière plus blanche) et la **LED** (longévité élevée). Certains véhicules haut de gamme utilisent également des technologies laser plus rares. Consultez le manuel pour la référence exacte du système installé.",
  },
  {
    question: "Peut-on changer soi-même une ampoule de phare ?",
    answer: "Sur certaines voitures halogènes, l'accès par l'arrière du phare permet un remplacement simple. D'autres nécessitent de déposer des caches, passages de roue ou éléments de carrosserie. Les systèmes xénon et certains ensembles LED comportent de la **haute tension** : ne les manipulez pas sans les procédures et compétences adaptées. Consultez la documentation du modèle ou confiez l'opération à un professionnel.",
  },
  {
    question: "Pourquoi les phares jaunissent-ils et éclairent-ils moins ?",
    answer: "De nombreuses optiques en polycarbonate s'oxydent sous l'effet des UV : leur surface se ternit et jaunit, réduisant la lumière transmise. Une restauration adaptée peut améliorer leur transparence ; dans certains cas, une réparation ou un remplacement de l'optique s'impose. Si les ampoules sont récentes mais l'éclairage reste faible, examinez les optiques.",
  },
  {
    question: "Comment suivre les changements d'ampoules ?",
    answer: "Notez la date, la technologie, le côté, la marque et la référence. CarCare Diary permet d'enregistrer le remplacement parmi les interventions du véhicule pour retrouver ces informations plus tard.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand remplacer les ampoules de phares ?",
  hero: {
    category: "Entretien",
    readTime: "4 min de lecture",
    title: "Quand remplacer les ampoules de phares ?",
    lede: "Les phares sont essentiels à la sécurité : ils doivent fonctionner de manière fiable et éclairer suffisamment pour conduire de nuit. Contrairement à une vidange, leur remplacement ne suit pas un intervalle kilométrique. Intervenez lorsqu'une ampoule grille, devient nettement moins lumineuse, clignote, change de couleur ou n'éclaire plus correctement.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Remplacez une ampoule lorsque le phare **ne fonctionne plus, éclaire moins bien, clignote ou change de teinte**. Il n'existe pas de fréquence fondée sur le kilométrage. Pour les halogènes et xénon, on recommande souvent de changer les deux côtés ensemble pour conserver un éclairage équilibré.",
  },
  blocks: [
    { type: "heading", text: "Les principaux types de phares" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Halogènes.** Ampoules à filament de tungstène, très répandues jusqu'au milieu des années 2010. Leur lumière est plutôt chaude et leur remplacement relativement abordable. Les deux ampoules ayant souvent le même âge, on les change fréquemment par paire.",
        "**Xénon / HID.** Lampes à décharge haute intensité, courantes sur certaines voitures des années 2000 et 2010. Leur lumière est souvent plus blanche et leur durée de vie généralement supérieure à celle des halogènes, mais elles peuvent faiblir ou changer de couleur. **Attention aux composants haute tension** : une intervention en atelier est souvent préférable.",
        "**LED.** De plus en plus fréquentes sur les modèles récents. Leur durée de vie peut être très longue. En cas de panne, le problème concerne parfois le module électronique ou l'optique complète plutôt qu'une ampoule remplaçable séparément.",
      ],
    },
    { type: "heading", text: "Les signes qu'il faut intervenir" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Un phare est éteint.** Remédiez-y rapidement : la visibilité diminue et le véhicule peut ne plus satisfaire aux obligations d'éclairage.",
        "**Éclairage nettement moins puissant.** Halogènes et xénon peuvent perdre progressivement de la luminosité, parfois imperceptiblement jusqu'à la comparaison entre les côtés.",
        "**Scintillement ou fonctionnement intermittent.** Une ampoule fatiguée ou une connexion desserrée peut être en cause. Faites vérifier.",
        "**Changement de couleur ou faisceau irrégulier.** Certaines lampes xénon vieillissantes deviennent jaunâtres ou rosées. Un faisceau asymétrique peut aussi révéler un mauvais montage.",
        "**Avertissement au tableau de bord.** Beaucoup de voitures signalent une défaillance d'éclairage extérieur ; identifiez et contrôlez l'élément concerné.",
        "**Optique trouble ou jaunie.** L'oxydation du plastique peut réduire l'éclairage même avec une ampoule neuve. Un traitement ou une restauration de l'optique peut être nécessaire.",
      ],
    },
    { type: "heading", text: "Pourquoi l'entretien de l'éclairage compte-t-il ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Une visibilité réduite diminue le temps disponible pour réagir aux obstacles.",
        "Une voiture avec un seul phare peut être prise de loin pour un deux-roues.",
        "Des phares trop faibles rendent plus difficile la détection des piétons et cyclistes.",
        "Un éclairage défaillant peut entraîner une contravention ou une contre-visite lors du contrôle technique, selon le défaut.",
      ],
    },
    { type: "heading", text: "Comment garder l'historique des remplacements ?" },
    { type: "paragraph", text: "Conservez la **date**, le **type et la marque de l'ampoule**, le **côté concerné** (gauche, droit ou les deux) et les raisons de l'intervention. CarCare Diary permet d'enregistrer ces détails pour retrouver facilement la référence si l'autre côté doit être remplacé." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Essuie-glaces", href: "/fr/blog/quand-changer-essuie-glaces-voiture" },
        { label: "Batterie", href: "/fr/blog/quand-changer-batterie-voiture" },
        { label: "Calendrier d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les phares",
  faqs: [...faqs],
  ctaSlug: "quand-changer-ampoules-phares",
  cta: {
    kind: "replacement",
    headline: "Notez vos remplacements d'ampoules et de phares",
    endHeadline: "Conservez l'historique de votre éclairage",
    image: "log",
    subtitle: "Gardez les références et les dates de vos entretiens.",
    endSubtitle: "Retrouvez facilement vos interventions sur votre téléphone.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Phares de voiture : quand changer les ampoules et pourquoi ?",
    description: "Phares faibles, clignotants ou jaunis : découvrez quand remplacer les ampoules halogènes ou xénon et comment entretenir l'éclairage.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-replace-headlights" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-replace-headlights" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToReplaceHeadlightsFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
