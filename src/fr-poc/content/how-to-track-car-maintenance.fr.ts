import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/comment-suivre-entretien-voiture";

const HOW_TO_STEPS = [
  {
    name: "Tenez votre kilométrage à jour",
    text: "Actualisez régulièrement le kilométrage de votre véhicule dans votre carnet d'entretien, et pas uniquement lorsqu'une intervention est réalisée. Cette information vous aide à estimer la distance qui vous sépare du prochain entretien et à renseigner plus précisément chaque nouvelle opération. Dans CarCare Diary, le kilométrage peut être mis à jour manuellement. Il peut également être repris dans le formulaire d'une nouvelle intervention à partir de la dernière valeur enregistrée.",
  },
  {
    name: "Notez chaque intervention dès qu'elle est effectuée",
    text: "Enregistrez l'entretien dès qu'il est terminé, pendant que vous avez encore la facture sous les yeux et que les détails sont frais dans votre mémoire. Reconstituer plusieurs mois plus tard les opérations effectuées peut entraîner des oublis et des erreurs. Une entrée rapide contenant les informations essentielles vaut mieux qu'une fiche très détaillée que vous ne prenez jamais le temps de remplir.",
  },
  {
    name: "Regroupez toutes les informations au même endroit",
    text: "Choisissez un emplacement unique pour votre historique d'entretien et utilisez-le pour chaque intervention. Lorsque les informations sont dispersées entre des factures papier, des e-mails, des notes et plusieurs applications, il devient difficile de retrouver rapidement ce dont vous avez besoin. Un carnet papier, un tableau ou une application peuvent convenir. L'essentiel est de conserver une méthode cohérente et de l'utiliser systématiquement.",
  },
  {
    name: "Vérifiez régulièrement les entretiens à prévoir",
    text: "Tous les quelques mois, consultez les dernières interventions et identifiez celles qui pourraient bientôt être nécessaires. La prochaine vidange approche ? Une vérification des freins est-elle à prévoir ? Une permutation des pneus est-elle recommandée pour votre véhicule ? Un rapide contrôle tous les trimestres vous aide à anticiper les interventions plutôt qu'à réagir une fois qu'elles sont en retard. CarCare Diary peut également proposer des rappels facultatifs pour certains entretiens à venir et pour la mise à jour du kilométrage, lorsque les notifications sont activées et autorisées sur votre appareil. Pour déterminer les échéances applicables à votre voiture, référez-vous toujours aux recommandations de son constructeur.",
  },
  {
    name: "Gardez votre historique accessible avec votre voiture",
    text: "Votre historique d'entretien doit pouvoir être consulté facilement chez un garagiste, lorsque vous remplissez un document relatif à l'entretien ou lorsque vous présentez votre voiture à un acheteur potentiel. Un carnet numérique sur votre téléphone est accessible lorsque vous en avez besoin. Un dossier papier conservé dans la boîte à gants peut aussi convenir, à condition qu'il accompagne le véhicule et soit régulièrement mis à jour.",
  },
] as const;

const faqs = [
  {
    question: "Quelle est la meilleure façon de suivre l'entretien de sa voiture ?",
    answer:
      "La meilleure méthode est celle que vous utiliserez régulièrement. Pour de nombreux conducteurs, une application dédiée est plus pratique qu'un carnet papier ou qu'un tableur : elle reste accessible sur le téléphone, permet d'ajouter facilement des informations et regroupe les interventions au même endroit. Mais le plus important reste l'habitude de noter chaque entretien au moment où il est effectué, en précisant sa nature, sa date, son kilométrage et, si possible, les caractéristiques des pièces ou produits utilisés.",
  },
  {
    question: "Faut-il noter le kilométrage dans son historique d'entretien ?",
    answer:
      "Oui. Le kilométrage est l'une des informations les plus utiles dans un historique d'entretien. Il permet de suivre la distance parcourue entre deux interventions et de mieux anticiper les opérations recommandées à certains intervalles kilométriques. Dans la mesure du possible, relevez le compteur en même temps que la date et la nature de l'entretien.",
  },
  {
    question: "Peut-on suivre l'entretien de sa voiture de manière numérique ?",
    answer:
      "Oui. Des applications comme CarCare Diary permettent d'enregistrer sur votre téléphone les interventions réalisées, avec leur type, leur date, leur kilométrage et des notes sur les pièces ou produits utilisés. Au fur et à mesure que vous ajoutez des entrées, vous constituez un historique que vous pouvez consulter et, si vous le souhaitez, partager grâce à un lien.",
  },
  {
    question: "Quelles informations faut-il inclure dans une fiche d'entretien ?",
    answer:
      "Commencez par trois éléments essentiels : le type d'intervention, la date et le kilométrage relevé au compteur. Vous pouvez ensuite ajouter les caractéristiques des pièces ou fluides utilisés, par exemple la viscosité de l'huile, la référence d'un filtre ou les dimensions des pneus. Une courte note sur les remarques du garagiste ou les points à surveiller lors du prochain entretien peut également être très utile.",
  },
  {
    question: "Comment suivre l'entretien de plusieurs voitures ?",
    answer:
      "Conservez un historique distinct pour chaque véhicule afin de ne pas mélanger leurs interventions et leurs kilométrages. CarCare Diary permet de gérer plusieurs véhicules selon la formule choisie. La version gratuite prend en charge un véhicule, la formule Base jusqu'à trois et la formule Pro permet d'en gérer davantage. Cette organisation est particulièrement pratique lorsqu'un foyer possède plusieurs voitures.",
  },
  {
    question: "CarCare Diary est-il gratuit ?",
    answer:
      "Oui. CarCare Diary propose une formule gratuite permettant de suivre un véhicule, d'enregistrer les interventions d'entretien courantes, de mettre à jour manuellement le kilométrage et de partager l'historique d'entretien à l'aide d'un lien public. Certaines fonctionnalités supplémentaires, comme les journaux de dépenses et les analyses associées, nécessitent une formule payante. Les formules Base et Pro permettent également de gérer davantage de véhicules.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Comment suivre l'entretien de sa voiture",
  hero: {
    category: "Guides",
    readTime: "5 min de lecture (estimation)",
    title: "Comment suivre l'entretien de sa voiture ?",
    lede:
      "Pour suivre l'entretien de votre voiture, adoptez trois habitudes simples : notez chaque intervention avec sa nature, sa date et son kilométrage dès qu'elle est effectuée, regroupez toutes les informations au même endroit et vérifiez les entretiens à prévoir avant chaque rendez-vous au garage. En appliquant régulièrement ces trois principes, vous constituerez un historique d'entretien fiable tout au long de la vie de votre véhicule.",
  },
  lastUpdatedLabel: "Dernière mise à jour : août 2026",
  blocks: [
    {
      type: "heading",
      text: "Pourquoi est-il important de suivre l'entretien de sa voiture ?",
    },
    {
      type: "paragraph",
      text: "Un historique d'entretien bien tenu vous permet de savoir précisément quelles interventions ont été réalisées, à quelle date et à quel kilométrage. Ces informations sont précieuses lorsqu'un garagiste vous demande quand un liquide a été remplacé pour la dernière fois, lorsque vous cherchez à savoir si un entretien est en retard ou lorsqu'un acheteur souhaite connaître la manière dont votre voiture a été entretenue.",
    },
    {
      type: "paragraph",
      text: "Ce suivi permet également de repérer certaines tendances : les éléments de votre voiture qui nécessitent une attention régulière, l'influence de vos habitudes de conduite sur la fréquence des entretiens et, si vous renseignez les coûts, le budget approximatif consacré à l'entretien chaque année. Autant d'informations qu'il est difficile de reconstituer de mémoire.",
    },
    { type: "primaryCta" },
    {
      type: "heading",
      text: "Quelles informations noter pour chaque entretien ?",
    },
    {
      type: "paragraph",
      text: "Pour chaque intervention, conservez six informations : le type d'entretien, la date, le kilométrage, les pièces et fluides utilisés, vos notes et, si vous le souhaitez, le coût. Chacune contribue à rendre votre historique plus utile au fil du temps.",
    },
    { type: "subheading", text: "Type d'entretien" },
    { type: "paragraph", text: "Soyez précis. Indiquer « vidange moteur » est déjà utile. Préciser « vidange moteur - huile 0W-30 entièrement synthétique, filtre Bosch » l'est encore davantage. Ces détails vous seront précieux lorsqu'il faudra effectuer la même opération." },
    { type: "subheading", text: "Date" },
    { type: "paragraph", text: "Notez la date exacte de l'intervention, et pas seulement le mois ou l'année. Cela facilite le suivi des intervalles d'entretien et permet de consulter votre historique chronologiquement, sans ambiguïté." },
    { type: "subheading", text: "Kilométrage" },
    { type: "paragraph", text: "Relevez le kilométrage affiché au compteur au moment de l'intervention. Cette information est particulièrement importante pour les entretiens prévus à certains intervalles kilométriques. Sans elle, il devient beaucoup plus difficile de déterminer la distance parcourue depuis la dernière opération." },
    { type: "subheading", text: "Pièces et fluides utilisés" },
    { type: "paragraph", text: "Notez, lorsque vous les connaissez, la viscosité de l'huile, la référence du filtre, la marque et les dimensions des pneus ou les caractéristiques du liquide utilisé. Ces précisions peuvent être utiles lorsqu'il faut remplacer la même pièce ou vérifier la compatibilité d'un produit. Dans CarCare Diary, ces informations peuvent être saisies dans le champ de spécifications de l'intervention." },
    { type: "subheading", text: "Notes et observations" },
    { type: "paragraph", text: "Conservez les remarques du garagiste, les anomalies que vous avez constatées ou les points à surveiller lors du prochain entretien. Quelques notes libres permettent de garder un contexte que les informations standardisées ne suffisent pas toujours à décrire." },
    { type: "subheading", text: "Coût" },
    { type: "paragraph", text: "Cette information est facultative, mais utile. Noter le montant de chaque intervention vous aide à mieux comprendre vos dépenses d'entretien et à prévoir un budget pour les prochains travaux." },
    {
      type: "paragraph",
      text: "Commencez simplement par le type d'entretien, la date et le kilométrage. Vous pourrez ajouter davantage de détails une fois que cette habitude sera bien installée. Même un historique partiel reste plus utile que l'absence totale de suivi.",
    },
    {
      type: "heading",
      text: "Une méthode simple pour suivre l'entretien de sa voiture",
    },
    {
      type: "paragraph",
      text: "Cinq habitudes suffisent pour constituer progressivement un historique d'entretien fiable. Inutile de mettre en place un système compliqué.",
    },
    { type: "subheading", text: "01 - Tenez votre kilométrage à jour" },
    {
      type: "paragraph",
      text: "Actualisez régulièrement le kilométrage de votre véhicule dans votre carnet d'entretien, et pas uniquement lorsqu'une intervention est réalisée. Cette information vous aide à estimer la distance qui vous sépare du prochain entretien et à renseigner plus précisément chaque nouvelle opération.",
    },
    {
      type: "paragraph",
      text: "Dans CarCare Diary, le kilométrage peut être mis à jour manuellement. Il peut également être repris dans le formulaire d'une nouvelle intervention à partir de la dernière valeur enregistrée.",
    },
    { type: "subheading", text: "02 - Notez chaque intervention dès qu'elle est effectuée" },
    {
      type: "paragraph",
      text: "Enregistrez l'entretien dès qu'il est terminé, pendant que vous avez encore la facture sous les yeux et que les détails sont frais dans votre mémoire.",
    },
    {
      type: "paragraph",
      text: "Reconstituer plusieurs mois plus tard les opérations effectuées peut entraîner des oublis et des erreurs. Une entrée rapide contenant les informations essentielles vaut mieux qu'une fiche très détaillée que vous ne prenez jamais le temps de remplir.",
    },
    { type: "subheading", text: "03 - Regroupez toutes les informations au même endroit" },
    {
      type: "paragraph",
      text: "Choisissez un emplacement unique pour votre historique d'entretien et utilisez-le pour chaque intervention.",
    },
    {
      type: "paragraph",
      text: "Lorsque les informations sont dispersées entre des factures papier, des e-mails, des notes et plusieurs applications, il devient difficile de retrouver rapidement ce dont vous avez besoin.",
    },
    {
      type: "paragraph",
      text: "Un carnet papier, un tableau ou une application peuvent convenir. L'essentiel est de conserver une méthode cohérente et de l'utiliser systématiquement.",
    },
    { type: "subheading", text: "04 - Vérifiez régulièrement les entretiens à prévoir" },
    {
      type: "paragraph",
      text: "Tous les quelques mois, consultez les dernières interventions et identifiez celles qui pourraient bientôt être nécessaires.",
    },
    {
      type: "paragraph",
      text: "La prochaine vidange approche ? Une vérification des freins est-elle à prévoir ? Une permutation des pneus est-elle recommandée pour votre véhicule ?",
    },
    {
      type: "paragraph",
      text: "Un rapide contrôle tous les trimestres vous aide à anticiper les interventions plutôt qu'à réagir une fois qu'elles sont en retard.",
    },
    {
      type: "paragraph",
      text: "CarCare Diary peut également proposer des rappels facultatifs pour certains entretiens à venir et pour la mise à jour du kilométrage, lorsque les notifications sont activées et autorisées sur votre appareil.",
    },
    {
      type: "paragraph",
      text: "Pour déterminer les échéances applicables à votre voiture, référez-vous toujours aux recommandations de son constructeur.",
    },
    { type: "subheading", text: "05 - Gardez votre historique accessible avec votre voiture" },
    {
      type: "paragraph",
      text: "Votre historique d'entretien doit pouvoir être consulté facilement chez un garagiste, lorsque vous remplissez un document relatif à l'entretien ou lorsque vous présentez votre voiture à un acheteur potentiel.",
    },
    {
      type: "paragraph",
      text: "Un carnet numérique sur votre téléphone est accessible lorsque vous en avez besoin. Un dossier papier conservé dans la boîte à gants peut aussi convenir, à condition qu'il accompagne le véhicule et soit régulièrement mis à jour.",
    },
    {
      type: "heading",
      text: "Les erreurs courantes qui rendent un historique d'entretien moins utile",
    },
    {
      type: "paragraph",
      text: "La plupart des problèmes liés au suivi de l'entretien ne viennent pas d'un manque d'effort. Ce sont souvent de petites habitudes qui réduisent progressivement la qualité des informations conservées.",
    },
    {
      type: "paragraph",
      text: "Voici les erreurs les plus fréquentes.",
    },
    { type: "subheading", text: "Ne pas noter le kilométrage" },
    { type: "paragraph", text: "Un historique qui contient uniquement des dates indique quand une intervention a eu lieu, mais pas la distance parcourue depuis. Sans kilométrage, le suivi des entretiens liés à la distance, comme les vidanges ou certaines vérifications mécaniques, perd une grande partie de sa précision." },
    { type: "subheading", text: "Se fier uniquement aux factures" },
    { type: "paragraph", text: "Les factures des garages et concessionnaires sont précieuses, mais elles ne constituent pas, à elles seules, un système de suivi complet. Elles peuvent être égarées, devenir illisibles avec le temps ou ne pas mentionner les opérations que vous avez réalisées vous-même. Elles ne fournissent pas non plus nécessairement une chronologie unique et facile à consulter. Conservez-les lorsque c'est possible, mais reportez aussi les informations essentielles dans votre historique d'entretien." },
    { type: "subheading", text: "Oublier les caractéristiques des pièces et produits" },
    { type: "paragraph", text: "Noter simplement « vidange » sans préciser le type d'huile ou la référence du filtre utilisé peut vous obliger à rechercher ces informations lors de la prochaine intervention. Quelques précisions saisies au bon moment vous feront gagner du temps lorsque le même entretien sera nécessaire." },
    { type: "subheading", text: "Laisser son historique prendre du retard" },
    { type: "paragraph", text: "Un carnet qui n'a pas été actualisé depuis six mois est beaucoup moins utile qu'un carnet tenu régulièrement. Plus le temps passe, plus il devient difficile de retrouver les dates exactes, les kilométrages et les références des pièces utilisées. Essayez donc de noter chaque intervention immédiatement ou dans les jours qui suivent, plutôt que de devoir tout reconstituer plus tard." },
    { type: "subheading", text: "Repartir de zéro à chaque changement de voiture" },
    { type: "paragraph", text: "L'historique d'entretien fait partie des informations utiles sur un véhicule. Lorsque vous vendez votre voiture, un carnet bien tenu permet de montrer les opérations réalisées au fil du temps. Lorsque vous achetez un autre véhicule, commencer son suivi dès le premier jour vous aidera à constituer progressivement un historique utile pour les années suivantes." },
    {
      type: "heading",
      text: "L'APPLICATION",
    },
    {
      type: "heading",
      text: "Comment CarCare Diary facilite le suivi de l'entretien",
    },
    {
      type: "paragraph",
      text: "CarCare Diary est une application de suivi de l'entretien automobile, disponible gratuitement sur iPhone et Android. Elle vous aide à conserver vos interventions et votre kilométrage au même endroit, pour que vous puissiez vous concentrer sur votre voiture plutôt que sur l'organisation de vos documents.",
    },
    { type: "subheading", text: "Enregistrez chaque entretien" },
    { type: "paragraph", text: "Ajoutez une intervention avec son type, sa date, le kilométrage lorsqu'il est pertinent, les spécifications des pièces ou fluides utilisés et vos notes. Les entrées s'organisent par catégories et constituent progressivement l'historique des entretiens que vous avez enregistrés pour votre véhicule." },
    { type: "subheading", text: "Gardez votre kilométrage à jour" },
    { type: "paragraph", text: "Actualisez manuellement le kilométrage de votre voiture lorsque cela est nécessaire. Lors de l'ajout d'une intervention, le formulaire peut reprendre le dernier kilométrage enregistré. Pour les entretiens suivis en fonction de la distance parcourue, cette information contribue au calcul des prochaines échéances." },
    { type: "subheading", text: "Consultez votre historique" },
    { type: "paragraph", text: "Retrouvez les interventions enregistrées dans les différentes catégories d'entretien, puis consultez leur chronologie pour voir ce qui a été fait et à quel moment. Vous pouvez ainsi retrouver les dates, kilométrages et détails associés aux opérations déjà consignées, sans devoir parcourir plusieurs documents." },
    { type: "subheading", text: "Partagez votre historique lorsque vous en avez besoin" },
    { type: "paragraph", text: "Générez un lien public en lecture seule vers les informations d'entretien que vous avez enregistrées pour votre véhicule. C'est un moyen pratique de présenter les interventions réalisées à un garagiste ou à un acheteur potentiel, sans leur donner accès à votre compte." },
    {
      type: "links",
      intro: "À lire aussi :",
      links: [
        { label: "Checklist d'entretien automobile", href: "/fr/blog/checklist-entretien-voiture" },
        { label: "Carnet d'entretien du véhicule", href: "/vehicle-maintenance-log" },
        { label: "Historique d'entretien automobile", href: "/car-service-history" },
        {
          label: "Application de suivi d'entretien automobile",
          href: "/car-maintenance-tracker",
        },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur le suivi de l'entretien automobile",
  faqs: [...faqs],
  ctaSlug: "comment-suivre-entretien-voiture",
  cta: {
    kind: "records",
    headline: "Suivez tous vos entretiens au même endroit",
    endHeadline: "Commencez votre carnet d'entretien dès aujourd'hui",
    subtitle:
      "Consignez vos interventions, tenez votre kilométrage à jour et partagez les entretiens enregistrés grâce à un simple lien.",
    endSubtitle:
      "Consignez vos interventions, suivez le kilométrage de votre voiture et gardez son historique d'entretien à portée de main.",
    image: "log",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Suivi entretien voiture : méthode, carnet et rappels",
    description:
      "Apprenez à suivre l'entretien de votre voiture : interventions, dates, kilométrage et rappels. Organisez votre historique avec CarCare Diary.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/how-to-track-car-maintenance" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/how-to-track-car-maintenance" },
    ],
    datePublished: "2026-04-16",
    dateModified: "2026-08-06",
  },
};

const articleJsonLd = buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`);

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment suivre l'entretien de sa voiture",
  description:
    "Cinq habitudes pour suivre l'entretien automobile : tenir le kilométrage à jour, noter chaque intervention, centraliser les informations, vérifier les échéances et garder l'historique accessible.",
  step: HOW_TO_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

/** Draft FR — Article 01 (how-to-track-car-maintenance). */
export const howToTrackCarMaintenanceFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: [...articleJsonLd, howToJsonLd],
  },
};
