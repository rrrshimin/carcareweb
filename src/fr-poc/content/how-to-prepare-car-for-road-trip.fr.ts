import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/preparer-voiture-long-trajet";

const faqs = [
  {
    question: "Combien de temps avant un long trajet faut-il contrôler sa voiture ?",
    answer:
      "L'idéal est de s'y prendre une à deux semaines à l'avance : vous pourrez corriger les problèmes constatés sans précipitation. Un contrôle la veille vaut mieux que rien, mais il ne laisse pas toujours le temps de réserver un rendez-vous ou d'attendre une pièce. Les niveaux d'huile et de liquide de refroidissement, les freins et les pneus sont particulièrement importants à vérifier.",
  },
  {
    question: "Faut-il faire une révision avant un long trajet ?",
    answer:
      "Si une vidange ou une autre opération d'entretien doit être effectuée dans les prochains milliers de kilomètres, il peut être judicieux de l'anticiper avant le voyage. Un trajet prolongé ne rend pas systématiquement nécessaire une révision complète, mais il est raisonnable de partir avec les opérations prévues à jour. Le contrôle avant départ doit au minimum couvrir les principaux liquides, les freins et les pneus.",
  },
  {
    question: "Que faire si la voiture tombe en panne pendant le trajet ?",
    answer:
      "Garez-vous dans un endroit sûr, à l'écart de la circulation, dans la mesure du possible, et allumez les feux de détresse. Si le moteur surchauffe, arrêtez-le dès que vous pouvez le faire en sécurité et laissez-le refroidir : n'ouvrez pas le circuit de refroidissement à chaud. Contactez l'assistance routière et respectez les consignes de sécurité propres au lieu de l'arrêt. N'essayez pas de réparer au bord de la route un défaut pouvant compromettre la sécurité. Votre historique CarCare Diary peut aider un mécanicien à voir les interventions récemment enregistrées sur le véhicule.",
  },
  {
    question: "Comment vérifier correctement la pression des pneus ?",
    answer:
      "Mesurez la pression à froid, avant de parcourir plus de quelques kilomètres. La valeur recommandée figure généralement sur l'étiquette du montant de porte conducteur ou dans le manuel. N'utilisez pas la pression maximale inscrite sur le flanc du pneu comme consigne de gonflage : elle ne correspond pas nécessairement à la pression préconisée pour votre véhicule. Vérifiez les quatre pneus et la roue de secours, si vous en disposez.",
  },
  {
    question: "Un long trajet modifie-t-il la fréquence des vidanges ?",
    answer:
      "Une conduite régulière sur autoroute peut, à certains égards, moins solliciter l'huile moteur que de nombreux trajets urbains avec arrêts répétés, car le moteur fonctionne à une température plus stable. Cela ne prolonge toutefois pas automatiquement l'intervalle de vidange prescrit. Si votre huile arrive en fin d'intervalle et qu'un long trajet est prévu, faire la vidange avant le départ est une précaution raisonnable. Suivez toujours le calendrier du constructeur et les indications du véhicule.",
  },
  {
    question: "Comment enregistrer un contrôle avant départ dans CarCare Diary ?",
    answer:
      "Créez une entrée d'entretien avec la date du contrôle et, si vous le connaissez, le kilométrage du véhicule. Notez qu'il s'agit d'une inspection avant un long trajet et décrivez les éléments vérifiés : niveau d'huile, pression des pneus, état des freins, âge ou état de la batterie. Vous conservez ainsi une photographie des observations que vous avez renseignées au départ, qui pourra être utile si un problème survient pendant ou après le voyage.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Préparer sa voiture pour un long trajet",
  hero: {
    category: "Guides",
    readTime: "6 min de lecture",
    title: "Comment préparer sa voiture pour un long trajet ?",
    lede:
      "Un contrôle avant le départ peut prendre moins de 30 minutes pour les vérifications simples et éviter une panne qui transformerait un voyage agréable en dépense imprévue. Beaucoup de problèmes rencontrés sur la route, comme une crevaison, une surchauffe, une batterie déchargée ou des essuie-glaces inefficaces sous une forte pluie, peuvent être liés à des éléments déjà fragilisés avant le trajet. Voici **quoi vérifier, quand le faire et quoi emporter** pour partir plus sereinement.",
  },
  lastUpdatedLabel: "Dernière mise à jour : août 2026",
  shortAnswer: {
    label: "Réponse rapide",
    body: "Avant un long trajet, vérifiez **l'huile moteur, le liquide de refroidissement, le liquide de frein, les pneus (y compris la roue de secours), les freins, la batterie, la courroie d'accessoires, les essuie-glaces et tous les feux**. Faites contrôler ou réparer tout élément présentant une anomalie ou dont l'entretien arrive à échéance, plutôt que d'attendre le retour. Les contrôles visuels peuvent prendre moins de 30 minutes ; une réparation ou un diagnostic professionnel demandera davantage de temps.",
  },
  blocks: [
    { type: "heading", text: "Checklist avant le départ" },
    { type: "subheading", text: "1. Vérifier les niveaux et les liquides", accent: true },
    {
      type: "list",
      variant: "check",
      items: [
        "**Niveau et état de l'huile moteur.** Contrôlez la jauge ou l'indication prévue par le constructeur, selon la procédure du manuel. Si le niveau est insuffisant, corrigez-le avec l'huile prescrite. Si la vidange est en retard ou proche de l'échéance, faites-la avant le départ. Sur un long trajet, il vaut mieux éviter de partir avec un entretien déjà dépassé. [Quand faire la vidange ?](/fr/blog/quand-faire-vidange-voiture)",
        "**Niveau du liquide de refroidissement.** Vérifiez le vase d'expansion **moteur froid**. Un niveau trop bas peut accroître le risque de surchauffe, surtout lors d'un trajet prolongé par temps chaud. En cas de baisse répétée, recherchez une fuite et faites contrôler le circuit avant de partir. **N'ouvrez jamais le bouchon d'un circuit de refroidissement chaud.** [Quand changer le liquide de refroidissement ?](/fr/blog/quand-changer-liquide-refroidissement)",
        "**Niveau du liquide de frein.** Le niveau doit se situer entre les repères MIN et MAX du réservoir lorsque le constructeur en prévoit. Un niveau anormalement bas peut être lié à l'usure des plaquettes ou à une fuite. Faites vérifier la cause, surtout si la pédale ou le freinage vous paraît inhabituel. [Quand changer le liquide de frein ?](/fr/blog/quand-changer-liquide-de-frein)",
        "**Liquide lave-glace.** Remplissez le réservoir avant de partir. Les insectes, projections et poussières peuvent rapidement réduire la visibilité pendant un long trajet. Il est facile d'éviter de tomber à court de lave-glace.",
        "**Liquide de direction assistée, si applicable.** Sur les véhicules équipés d'une direction assistée hydraulique, contrôlez le réservoir selon les indications du constructeur. Beaucoup de voitures modernes disposent d'une assistance électrique, sans liquide de direction à vérifier. [Quand changer le liquide de direction assistée ?](/fr/blog/quand-changer-liquide-direction-assistee)",
      ],
    },
    { type: "subheading", text: "2. Contrôler les pneus, y compris la roue de secours", accent: true },
    {
      type: "list",
      variant: "check",
      items: [
        "**Pression des quatre pneus et de la roue de secours.** Mesurez-la **à froid**, avant de rouler, et respectez les valeurs indiquées sur l'étiquette du véhicule ou dans son manuel, y compris les valeurs prévues pour une voiture chargée. Des pneus sous-gonflés chauffent davantage à vitesse élevée, s'usent plus vite et peuvent augmenter la consommation ainsi que le risque de défaillance. [Quand vérifier la pression des pneus ?](/fr/blog/quand-verifier-pression-pneus)",
        "**Profondeur des sculptures.** Vérifiez les quatre pneus. Si l'un d'eux approche ou dépasse la limite d'usure applicable, remplacez-le avant le trajet. Des pneus usés peuvent devenir particulièrement dangereux sur autoroute mouillée. [Quand changer les pneus ?](/fr/blog/quand-changer-pneus-voiture)",
        "**Coupures, hernies et usure irrégulière.** Inspectez les flancs et la bande de roulement. Une **hernie sur le flanc** est un signe de dommage structurel : ne poursuivez pas le trajet avec ce pneu et faites-le remplacer. Une usure asymétrique peut révéler un problème de géométrie ou de suspension. [Pourquoi les pneus s'usent-ils irrégulièrement ?](/fr/blog/usure-irreguliere-pneus-causes)",
        "**État de la roue de secours.** Vérifiez sa pression et son état : une roue de secours dégonflée ou détériorée ne vous aidera pas en cas de crevaison. Identifiez votre équipement : roue de taille normale, roue galette ou kit anticrevaison. Un kit de réparation n'est adapté qu'à certains petits dommages, conformément à sa notice.",
      ],
    },
    { type: "subheading", text: "3. Examiner les freins et les principaux éléments mécaniques", accent: true },
    {
      type: "list",
      variant: "check",
      items: [
        "**Freins : sensation à la pédale et entretien récent.** Si la pédale est molle, si la voiture tire d'un côté au freinage ou si les freins grincent fortement ou produisent un bruit de frottement métallique, faites-les inspecter avant le départ. Les descentes prolongées et les routes vallonnées sollicitent particulièrement le freinage. [Quand remplacer les plaquettes de frein ?](/fr/blog/quand-changer-plaquettes-frein)",
        "**Âge et état de la batterie.** Une batterie âgée d'environ **4 à 5 ans**, ou ayant récemment présenté des difficultés de démarrage, mérite un contrôle. Une batterie déchargée loin de chez soi est un problème fréquent et parfois évitable par un test avant le trajet. [Quand changer la batterie ?](/fr/blog/quand-changer-batterie-voiture)",
        "**Courroie d'accessoires.** Recherchez les fissures, l'effilochage ou une surface anormalement lisse ou brillante. Selon la conception du véhicule, une rupture peut affecter l'alternateur, certains systèmes de direction assistée ou l'entraînement de la pompe à eau. Faites vérifier toute anomalie avant le départ. [Quand changer la courroie d'accessoires ?](/fr/blog/quand-changer-courroie-accessoires)",
        "**Filtre à air du moteur.** Un filtre très encrassé peut nuire au fonctionnement du moteur et, selon le véhicule, à sa consommation. Si son entretien est en retard ou s'il est fortement obstrué, faites-le contrôler ou remplacer selon les préconisations. [Quand changer le filtre à air moteur ?](/fr/blog/quand-changer-filtre-air-moteur)",
        "**Essuie-glaces.** Testez les balais avant le départ. S'ils laissent des traces, sautillent ou nettoient mal sous une pluie légère, ils peuvent compromettre la visibilité lors d'une forte averse sur autoroute. [Quand changer les essuie-glaces ?](/fr/blog/quand-changer-essuie-glaces-voiture)",
      ],
    },
    { type: "subheading", text: "4. Tester tous les feux", accent: true },
    {
      type: "list",
      variant: "check",
      items: [
        "**Phares : feux de croisement et de route.** Allumez chaque fonction et faites le tour du véhicule. Une ampoule défectueuse réduit la visibilité et peut constituer une infraction selon les règles du pays traversé.",
        "**Feux arrière, feux stop et clignotants.** Demandez à quelqu'un de vérifier leur fonctionnement pendant que vous actionnez les commandes. Un feu stop hors service augmente notamment le risque de collision par l'arrière.",
        "**Antibrouillards, si le véhicule en possède.** Vérifiez qu'ils fonctionnent si votre itinéraire risque de comprendre du brouillard ou des conditions de visibilité difficiles. Utilisez-les uniquement lorsque la réglementation et les conditions le permettent.",
      ],
    },
    { type: "subheading", text: "5. Préparer le matériel à emporter", accent: true },
    {
      type: "list",
      variant: "check",
      items: [
        "**Câbles de démarrage ou booster de batterie.** Un booster compact peut vous permettre de redémarrer sans dépendre immédiatement d'un autre automobiliste. Choisissez un appareil adapté à votre véhicule et suivez sa notice.",
        "**Outillage de base et solution de gonflage.** Un compresseur portable et, selon l'équipement du véhicule, un kit anticrevaison peuvent être utiles pour certains petits incidents. Apprenez à utiliser la roue de secours ou le kit **avant** d'en avoir besoin.",
        "**Corde ou sangle de remorquage.** Son usage dépend du véhicule, de son point de remorquage et des règles locales : **ne tentez pas un remorquage improvisé dans une situation dangereuse** ; privilégiez une assistance professionnelle.",
        "**Lampe torche.** Utile pour inspecter les environs du véhicule ou chercher du matériel de nuit, depuis un emplacement sécurisé.",
        "**Chargeur de téléphone et batterie externe.** La navigation, les appels et l'assistance dépendent d'un téléphone chargé. Une batterie externe est une précaution simple.",
        "**Numéros d'urgence et d'assistance.** Gardez à portée de main les coordonnées de l'assistance routière, de votre assureur et du service de dépannage prévu par votre contrat.",
      ],
    },
    {
      type: "paragraph",
      text: "Vérifiez également les **équipements obligatoires dans les pays traversés** (par exemple, triangle de présignalisation ou gilet de sécurité selon les règles applicables) et les consignes de sécurité en cas d'arrêt d'urgence.",
    },
    { type: "heading", text: "Combien de temps avant le départ faut-il faire les vérifications ?" },
    {
      type: "paragraph",
      text: "Effectuez les contrôles **une à deux semaines avant le départ**, afin d'avoir le temps de prendre rendez-vous au garage ou de commander une pièce si un problème est constaté. Faire le point la veille reste préférable à ne rien vérifier, mais cela laisse peu de temps pour remplacer des pneus, traiter un problème de freinage ou changer une batterie faible.",
    },
    { type: "heading", text: "Avant de partir : enregistrer les vérifications" },
    {
      type: "paragraph",
      text: "Dans CarCare Diary, vous pouvez créer une entrée d'entretien avec la **date**, le **kilométrage** et des **notes** correspondant à votre inspection avant le trajet. Indiquez les niveaux, l'état des pneus, les observations sur les freins ou la batterie, ainsi que les interventions effectuées. Vous disposerez ainsi d'une trace des éléments vérifiés au départ, utile pour votre suivi et pour un professionnel si un problème apparaît pendant ou après le voyage.",
    },
    {
      type: "paragraph",
      text: "Cet historique reflète les informations que vous saisissez dans l'application ; il ne remplace pas une inspection réalisée par un professionnel.",
    },
    {
      type: "links",
      intro: "À lire aussi :",
      links: [
        { label: "Checklist d'entretien automobile", href: "/fr/blog/checklist-entretien-voiture" },
        { label: "Quels liquides vérifier dans une voiture ?", href: "/fr/blog/quels-liquides-verifier-voiture" },
        { label: "Quand vérifier la pression des pneus ?", href: "/fr/blog/quand-verifier-pression-pneus" },
        { label: "Quand changer la batterie ?", href: "/fr/blog/quand-changer-batterie-voiture" },
        { label: "Quand changer les essuie-glaces ?", href: "/fr/blog/quand-changer-essuie-glaces-voiture" },
        { label: "Tableau d'entretien par kilométrage", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
        { label: "Application de rappels d'entretien", href: "/vehicle-service-reminder-app" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes avant un long trajet en voiture",
  faqs: [...faqs],
  ctaSlug: "preparer-voiture-long-trajet",
  cta: {
    kind: "checklist",
    headline: "Notez vos vérifications avant de prendre la route",
    endHeadline: "Gardez l'historique d'entretien de votre voiture sur votre téléphone",
    image: "log",
    subtitle:
      "Enregistrez les contrôles et les entretiens effectués, avec leur date, le kilométrage et vos observations, pour retrouver l'historique de votre voiture.",
    endSubtitle:
      "Retrouvez les services et réparations que vous avez enregistrés dans CarCare Diary, y compris les contrôles réalisés avant un voyage.",
    imageAlt: "Écran CarCare Diary permettant d'ajouter une intervention d'entretien.",
  },
  seo: {
    title: "Préparer sa voiture pour un long trajet : checklist avant le départ",
    description:
      "Avant un long trajet, vérifiez les pneus, les niveaux, les freins, la batterie et l'éclairage. Retrouvez notre checklist et les équipements à emporter.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/how-to-prepare-car-for-road-trip" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/how-to-prepare-car-for-road-trip" },
    ],
    datePublished: "2026-08-06",
    dateModified: "2026-08-06",
  },
};

export const howToPrepareCarForRoadTripFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
