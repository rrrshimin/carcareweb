import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/quand-changer-disques-frein";

const faqs = [
  {
    question: "Combien de temps durent les disques de frein ?",
    answer: "Leur durée de vie dépend de la conduite, de la qualité des disques, des plaquettes, du poids de la voiture et des sollicitations. Remorquage, freinages brusques, montagne et circuit peuvent réduire leur longévité. De nombreux disques durent plus longtemps qu'un jeu de plaquettes, mais aucun kilométrage universel ne convient à tous les véhicules.",
  },
  {
    question: "Faut-il changer disques et plaquettes ensemble ?",
    answer: "Pas systématiquement, mais c'est souvent recommandé lorsqu'un disque est sous sa cote minimale ou endommagé. Des plaquettes neuves sur des disques très usés peuvent s'user plus vite et ne pas restaurer un freinage satisfaisant. Un professionnel doit mesurer et examiner les disques avant de décider.",
  },
  {
    question: "Peut-on rectifier les disques plutôt que les remplacer ?",
    answer: "Dans certains cas, un disque suffisamment épais, non fissuré et sans dommages majeurs peut être rectifié pour retrouver une surface régulière. Cette opération enlève de la matière : si la cote minimale risque d'être atteinte, il faut remplacer le disque. La faisabilité dépend du disque et des prescriptions constructeur.",
  },
  {
    question: "Pourquoi un disque de frein se voile-t-il ?",
    answer: "Les vibrations attribuées à un « disque voilé » résultent parfois plutôt de variations d'épaisseur ou de dépôts irréguliers de garniture. Des freinages très intenses suivis d'un refroidissement rapide ou un étrier qui reste partiellement serré peuvent favoriser ces défauts. La pédale vibre alors et le volant peut trembler.",
  },
  {
    question: "Les disques avant et arrière s'usent-ils aussi vite ?",
    answer: "Généralement non. Lors du freinage, le transfert de charge vers l'avant fait travailler davantage les freins avant, qui peuvent s'user plus rapidement. La répartition dépend toutefois de la conception du véhicule et du système de freinage.",
  },
  {
    question: "Comment garder l'historique des changements de disques ?",
    answer: "Notez la date, le kilométrage, les essieux concernés, les références des pièces et les observations ayant motivé le remplacement. CarCare Diary vous permet d'enregistrer cette intervention et de prévoir, si nécessaire, un rappel de contrôle à une prochaine date ou échéance kilométrique.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Quand remplacer les disques de frein ?",
  hero: {
    category: "Entretien",
    readTime: "5 min de lecture",
    title: "Quand remplacer les disques de frein ?",
    lede: "On ne remplace pas les disques de frein après un kilométrage fixe : leur durée de vie dépend de l'usure, de l'**épaisseur mesurée**, de leur état et des symptômes. Ils sont généralement inspectés lors du remplacement des plaquettes. Le freinage est essentiel à la sécurité : vibrations, grincements métalliques, déport ou allongement des distances d'arrêt doivent être examinés rapidement par un professionnel.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Un disque doit être remplacé s'il passe **sous l'épaisseur minimale prescrite**, présente des fissures, des rainures profondes ou d'autres dommages, ou si son état compromet le freinage. Des vibrations, bruits métalliques ou déports imposent un **diagnostic**, pas une conclusion automatique sur les disques.",
  },
  blocks: [
    { type: "heading", text: "Quand faut-il envisager le remplacement ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Épaisseur inférieure au minimum.** Chaque disque possède une cote minimale indiquée sur la pièce ou dans la documentation. En dessous de cette valeur, le disque n'a plus assez de matière pour dissiper correctement la chaleur. Un mécanicien contrôle l'épaisseur avec un instrument de mesure.",
        "**À chaque remplacement des plaquettes.** Il faut vérifier l'épaisseur et l'état des disques pour déterminer s'ils peuvent être conservés, rectifiés lorsqu'une telle opération est admise, ou remplacés.",
        "**En présence de symptômes.** Vibrations, pulsations, bruits métalliques, déport ou distance de freinage accrue nécessitent une inspection immédiate.",
        "**Dommages visibles.** Rainures profondes après contact métal contre métal, fissures, corrosion importante sur la surface de friction ou coloration bleutée due à une forte surchauffe peuvent imposer un remplacement.",
      ],
    },
    { type: "heading", text: "Les signes de disques de frein usés ou endommagés" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Vibrations dans la pédale.** Des pulsations pendant le freinage, souvent plus nettes à vitesse élevée, peuvent résulter de variations d'épaisseur ou de dépôts irréguliers sur le disque. Le volant peut aussi vibrer.",
        "**Bruit de frottement métallique.** Une plaquette usée jusqu'au support métallique peut endommager très rapidement le disque. Faites examiner les freins sans délai.",
        "**Distance d'arrêt plus longue.** Si la voiture freine nettement moins bien, il faut contrôler l'ensemble du système : c'est un enjeu direct de sécurité.",
        "**Voiture qui tire d'un côté au freinage.** Un étrier grippé, une usure dissymétrique des plaquettes ou un état différent des disques peut provoquer ce comportement.",
        "**Rainures profondes.** Les stries causées par une plaquette usée signalent des dommages. Une légère rouille superficielle qui disparaît après quelques freinages est différente d'une surface profondément abîmée.",
        "**Sifflement aigu.** Il peut venir des indicateurs d'usure, du matériau des plaquettes ou d'un problème de surface. Ce signe seul ne permet pas d'identifier le disque comme cause.",
      ],
    },
    { type: "heading", text: "Risques d'un remplacement retardé" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Un contact métal contre métal détruit rapidement la surface des disques et use les composants associés.",
        "Un freinage dégradé augmente la distance d'arrêt et le risque d'accident.",
        "Un disque très usé peut se fissurer sous contrainte thermique et compromettre brutalement le freinage.",
        "Une intervention tardive peut coûter davantage, notamment si les étriers sont également endommagés.",
      ],
    },
    { type: "heading", text: "Comment suivre les remplacements des disques ?" },
    { type: "paragraph", text: "Notez la **date**, le **kilométrage**, l'**essieu concerné** (avant, arrière ou les deux), les **pièces montées**, le remplacement éventuel des **plaquettes** et les **symptômes** ayant motivé l'intervention. CarCare Diary permet de consigner ces informations dans les notes et de suivre la prochaine inspection prévue." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
        { label: "Quand changer les plaquettes ?", href: "/fr/blog/quand-changer-plaquettes-frein" },
        { label: "Liquide de frein", href: "/fr/blog/quand-changer-liquide-de-frein" },
        { label: "Tableau d'entretien", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les disques de frein",
  faqs: [...faqs],
  ctaSlug: "quand-changer-disques-frein",
  cta: {
    kind: "replacement",
    headline: "Enregistrez vos changements de disques de frein",
    endHeadline: "Gardez votre historique de freinage au même endroit",
    image: "log",
    subtitle: "Conservez les dates, les références des pièces et les observations dans l'historique du véhicule.",
    endSubtitle: "Retrouvez les interventions sur les plaquettes et les disques quand vous en avez besoin.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Disques de frein : quand les changer et quels signes surveiller ?",
    description: "Épaisseur minimale, vibrations, rainures et freinage : apprenez quand remplacer les disques et comment suivre leur entretien.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/when-to-replace-brake-rotors" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/when-to-replace-brake-rotors" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whenToReplaceBrakeRotorsFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
