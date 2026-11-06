import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/checklist-achat-voiture-occasion";

const faqs = [
  {
    question: "Faut-il toujours faire inspecter la voiture avant de l'acheter ?",
    answer: "Oui, surtout si l'achat représente une somme importante. Une inspection réalisée par un mécanicien indépendant, idéalement sur pont, permet de détecter des défauts qui échappent à la visite et à l'essai routier. Son coût est souvent modeste par rapport à celui d'une réparation cachée. Cette vérification reste pertinente même chez un professionnel.",
  },
  {
    question: "Quels documents d'entretien faut-il demander au vendeur ?",
    answer: "Idéalement, les preuves de vidanges régulières, de grosses opérations (courroie de distribution, refroidissement, boîte de vitesses), du remplacement des freins et pneus et des réparations réalisées. Un historique cohérent est rassurant ; des périodes sans justificatifs, surtout à fort kilométrage, nécessitent des questions supplémentaires. Demandez factures et carnet si disponibles.",
  },
  {
    question: "Qu'est-ce qu'un historique partagé CarCare Diary ?",
    answer: "Le propriétaire peut générer un lien public vers les entretiens qu'il a enregistrés dans l'application. En tant qu'acheteur, vous pouvez demander ce lien pour consulter les vidanges, réparations et notes renseignées avant la visite. En tant que vendeur, partager cet historique permet d'expliquer les travaux effectués, sans constituer une certification indépendante de leur réalisation.",
  },
  {
    question: "Comment savoir si une voiture a subi un accident ?",
    answer: "Des jeux de carrosserie irréguliers, des différences de peinture et des traces de mastic sont des indices possibles. Selon le marché, des rapports d'historique peuvent recenser certains sinistres, déclarations d'assurance ou changements de propriétaire. Une inspection sur pont peut aussi révéler des réparations structurelles dissimulées par la carrosserie.",
  },
  {
    question: "Quelles réparations coûteuses faut-il particulièrement redouter ?",
    answer: "Une défaillance du joint de culasse ou de la culasse, des problèmes importants de boîte automatique, une rupture de courroie de distribution sur un moteur où les soupapes risquent de rencontrer les pistons, de la corrosion structurelle sérieuse et des fuites importantes touchant le moteur ou la transmission. Une inspection avant achat cherche précisément ce type de problème.",
  },
  {
    question: "Peut-on négocier le prix après une inspection ?",
    answer: "Oui. Les anomalies constatées constituent des éléments objectifs pour demander une réparation avant livraison, discuter une baisse du prix ou renoncer à l'achat. Un diagnostic et un devis écrits rendent la discussion plus claire.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Checklist : que vérifier avant d'acheter une voi",
  hero: {
    category: "Guides",
    readTime: "7 min de lecture",
    title: "Checklist : que vérifier avant d'acheter une voiture d'occasion ?",
    lede: "Acheter une voiture d'occasion demande une certaine confiance. Un véhicule peut être propre et agréable lors d'un essai rapide tout en cachant des entretiens reportés, des dégâts anciens ou des défauts mécaniques qui n'apparaîtront que plus tard. Une inspection méthodique de la carrosserie, de l'habitacle, du compartiment moteur, du dessous du véhicule et du comportement sur route permet de réduire le risque de mauvaises surprises coûteuses.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Avant d'acheter, vérifiez **les jeux entre éléments de carrosserie, la cohérence de la peinture, la corrosion, l'usure des pneus, l'état de l'huile et du liquide de refroidissement, les voyants du tableau de bord, le freinage et la direction pendant l'essai**, ainsi que l'historique d'entretien disponible. Pour tout achat important, faites aussi examiner la voiture par un **mécanicien indépendant**.",
  },
  blocks: [
    { type: "heading", text: "1. Carrosserie et extérieur" },
    {
      type: "list",
      variant: "check",
      items: [
        "**Jeux et alignement des panneaux.** Des écarts irréguliers entre portes, capot et pare-chocs peuvent suggérer un choc réparé. Examinez les bords pour repérer d'éventuelles traces de mastic.",
        "**Cohérence de la peinture.** Une différence de teinte entre deux éléments peut indiquer une remise en peinture. Observez la voiture en lumière naturelle sous différents angles.",
        "**Rouille, cloques et corrosion.** Regardez les passages de roue, bas de caisse, joints de fenêtres et plancher du coffre. La corrosion superficielle peut masquer des dégâts structurels.",
        "**Vitrages.** Contrôlez éclats, fissures et délaminage du pare-brise et des fenêtres. Certaines anomalies affectent la sécurité ou nécessitent un remplacement.",
        "**État et usure des pneus.** Vérifiez la profondeur des sculptures sur les quatre pneus et recherchez une usure irrégulière. Une usure sur le bord intérieur peut évoquer un problème de géométrie ; des creux répétés, des amortisseurs usés. Des marques très différentes méritent une vérification.",
        "**Éclairage.** Recherchez les fissures, infiltrations d'eau et optiques opaques. Des phares ternis éclairent moins bien et certaines détériorations peuvent nécessiter une réparation.",
      ],
    },
    { type: "heading", text: "2. Habitacle et équipements" },
    {
      type: "list",
      variant: "check",
      items: [
        "**Kilométrage et usure générale.** Comparez le compteur à l'âge et à l'état du véhicule. Pédales, volant, sièges et levier très usés sur une voiture annoncée comme peu kilométrée doivent vous interroger.",
        "**Voyants au démarrage.** Mettez le contact : plusieurs témoins doivent s'allumer brièvement pour l'autocontrôle, puis s'éteindre après le démarrage. Notez ceux qui restent allumés ou apparaissent ensuite.",
        "**Climatisation et chauffage.** Testez le froid et le chaud. Un système qui refroidit mal peut nécessiter une recharge, une réparation de compresseur ou d'autres interventions.",
        "**Commandes et équipements électriques.** Essayez toutes les vitres, les réglages de rétroviseurs et sièges, l'infodivertissement et les prises USB. De petits défauts peuvent vite représenter un budget.",
        "**Sièges et réglages.** Vérifiez le blocage et le fonctionnement des réglages, les déchirures et les traces possibles d'humidité.",
        "**Odeur dans l'habitacle.** Une odeur de moisi peut révéler une infiltration ; contrôlez les moquettes et le coffre. L'odeur de cigarette peut être difficile à éliminer.",
        "**Coffre et emplacement de roue de secours.** Soulevez le plancher et recherchez humidité, corrosion, présence d'une roue de secours ou d'un kit de réparation.",
      ],
    },
    { type: "heading", text: "3. Compartiment moteur et fluides" },
    {
      type: "list",
      variant: "check",
      items: [
        "**Niveau et état de l'huile moteur.** Contrôlez selon la procédure prescrite. Un aspect laiteux peut évoquer une contamination par le liquide de refroidissement ; une huile très épaisse et sale peut indiquer un entretien négligé.",
        "**Liquide de refroidissement.** Moteur froid, vérifiez le niveau dans le vase d'expansion. Recherchez contamination, coloration rouille ou film huileux. **N'ouvrez jamais le circuit à chaud.**",
        "**Niveau de liquide de frein.** Une baisse peut provenir de l'usure des plaquettes ou d'une fuite. Un liquide très foncé mérite un examen ; la couleur seule n'est pas un diagnostic.",
        "**Fuites d'huile visibles.** Observez le couvre-culasse, le bloc, le carter et le dessous du véhicule. Un léger suintement est différent d'une fuite active qu'il faudra réparer.",
        "**Courroies.** La courroie d'accessoires ne doit pas présenter de fissures, d'effilochage ou de surface anormalement brillante. Si le moteur possède une courroie de distribution, exigez sa date et son kilométrage de remplacement.",
        "**Bornes de batterie.** Une corrosion blanche ou bleu-vert abondante peut signaler un manque d'entretien ou un problème de charge.",
        "**Filtre à air.** Un filtre très encrassé peut indiquer que plusieurs opérations d'entretien ont été négligées.",
      ],
    },
    { type: "heading", text: "4. Essai routier" },
    {
      type: "list",
      variant: "check",
      items: [
        "**Démarrage à froid.** Le moteur doit démarrer sans insister longtemps, ratés importants ou fumée persistante. Un peu de vapeur blanche par temps froid peut être normal ; un ralenti irrégulier après la mise en température ne l'est pas.",
        "**Freinage.** La voiture doit freiner droit, avec une pédale ferme et progressive. Grincements, vibrations ou déport au freinage nécessitent un contrôle.",
        "**Accélération.** Recherchez une réponse régulière, sans à-coups, hésitations, ratés ou manque anormal de puissance.",
        "**Changement de rapports.** Sur une automatique, les passages doivent être adaptés et sans à-coups anormaux ni retard marqué. Sur une manuelle, les vitesses doivent s'engager proprement, sans craquement.",
        "**Direction.** Sur une route plane, la voiture doit tenir sa trajectoire sans tirer d'un côté. Soyez attentif aux vibrations, claquements et points durs au volant.",
        "**Suspension.** Écoutez les bruits sur les bosses et en tournant lentement : claquements et cognements peuvent venir des amortisseurs, rotules ou silentblocs.",
        "**Voyants pendant la conduite.** Roulez suffisamment longtemps pour laisser les systèmes effectuer leurs vérifications. Tout voyant apparu pendant l'essai mérite une explication et, si nécessaire, un diagnostic.",
      ],
    },
    { type: "heading", text: "Que faire des anomalies relevées ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Faites réaliser une inspection avant achat.** Un mécanicien indépendant avec pont peut détecter corrosion structurelle, réparations de châssis, fuites dissimulées et usure de suspension invisibles lors d'un essai. Prévoyez ce coût dans votre budget.",
        "**Demandez un rapport d'historique du véhicule.** Selon le pays, des services officiels ou privés peuvent fournir des informations sur des sinistres, propriétaires précédents et kilométrages enregistrés. En France, privilégiez les sources disponibles pour le marché concerné. Aucun rapport n'est exhaustif.",
        "**Négociez en fonction des résultats.** Une réparation nécessaire peut justifier une remise ou une intervention avant la vente. Un devis écrit d'un professionnel aide à discuter du coût réel.",
        "**Renoncez à l'achat si plusieurs signaux d'alerte s'accumulent.** L'absence de documents associée à des anomalies sérieuses représente un risque important.",
      ],
    },
    { type: "heading", text: "Après l'achat : commencez à suivre l'entretien immédiatement" },
    { type: "paragraph", text: "Une fois propriétaire, notez le kilométrage à la date d'achat, les opérations connues réalisées avant la vente ou lors de la livraison et les problèmes identifiés pendant l'inspection. CarCare Diary vous aide à constituer un historique des interventions **que vous renseignez**, à partir du jour de l'achat. Vous pourrez le consulter pour votre suivi et le partager plus tard avec un acheteur potentiel." },
    {
      type: "links",
      intro: "À lire aussi :",
      links: [
        { label: "Que doit contenir un historique d'entretien ?", href: "/fr/blog/que-contient-historique-entretien-voiture" },
        { label: "Checklist d'entretien automobile", href: "/fr/blog/checklist-entretien-voiture" },
        { label: "Tableau des entretiens par kilométrage", href: "/fr/blog/tableau-entretien-voiture-kilometrage" },
        { label: "Partager l'historique d'une voiture", href: "/share-car-maintenance-history" },
        { label: "Application d'historique automobile", href: "/car-service-history-app" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur l'achat d'une voiture d'occasion",
  faqs: [...faqs],
  ctaSlug: "checklist-achat-voiture-occasion",
  cta: {
    kind: "records",
    headline: "Commencez l'historique d'entretien dès l'achat",
    endHeadline: "Suivez l'entretien de votre prochaine voiture dès le premier jour",
    image: "log",
    subtitle: "Enregistrez les premières interventions et le kilométrage de votre nouvelle voiture.",
    endSubtitle: "Gardez les opérations connues et les réparations à venir au même endroit.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Checklist voiture d'occasion : 27 points à vérifier avant d'acheter",
    description: "Carrosserie, habitacle, moteur, essai routier et historique d'entretien : la liste des contrôles avant l'achat d'une voiture d'occasion.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/used-car-inspection-checklist" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/used-car-inspection-checklist" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const usedCarInspectionChecklistFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
