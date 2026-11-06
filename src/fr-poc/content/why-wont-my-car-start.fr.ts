import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/voiture-ne-demarre-pas-causes";

const faqs = [
  {
    question: "Un cliquetis au démarrage signifie-t-il forcément que la batterie est en cause ?",
    answer: "Non. Des clics rapides évoquent souvent une batterie déchargée ou faible, parce que le démarreur ne reçoit pas assez de courant. Un clic fort unique peut orienter vers un démarreur défectueux ou, plus rarement, un moteur bloqué. Même avec une batterie chargée, une connexion oxydée, une mauvaise masse ou un démarreur défaillant peuvent expliquer les clics.",
  },
  {
    question: "Un alternateur défectueux peut-il empêcher le démarrage ?",
    answer: "Indirectement, oui. L'alternateur recharge la batterie pendant que le moteur fonctionne. S'il ne fournit plus assez d'énergie, la batterie peut se décharger au fil du temps et devenir insuffisante pour démarrer. Si elle se vide à répétition après une recharge, faites contrôler le circuit de charge.",
  },
  {
    question: "Des bougies usées peuvent-elles empêcher le moteur de démarrer ?",
    answer: "Oui, sur les moteurs essence. Des bougies usées ou encrassées peuvent produire une étincelle insuffisante : le démarreur fonctionne, mais le moteur peine à se lancer. Cela se manifeste souvent d'abord par des démarrages difficiles, notamment à froid, ou un ralenti irrégulier. Une dégradation importante peut finir par empêcher le démarrage.",
  },
  {
    question: "Pourquoi le moteur démarre-t-il puis cale-t-il aussitôt ?",
    answer: "Cela peut provenir du boîtier papillon, de la régulation du ralenti, d'une pression de carburant insuffisante, d'une prise d'air ou du système d'antidémarrage. Si le problème se répète, la lecture des codes défaut avec un outil OBD peut aider à orienter un diagnostic professionnel.",
  },
  {
    question: "La clé ou l'antidémarrage peuvent-ils bloquer le démarrage ?",
    answer: "Oui. Beaucoup de voitures disposent d'un système qui reconnaît une puce ou un transpondeur associé à la clé. Une clé non reconnue, un lecteur défectueux ou un problème de télécommande selon le système peuvent empêcher le démarrage. Le moteur peut parfois être entraîné normalement sans se lancer, et un voyant d'antidémarrage peut apparaître.",
  },
  {
    question: "Comment garder une trace des réparations liées au démarrage ?",
    answer: "Notez la date, le kilométrage, les symptômes, le diagnostic et les travaux réalisés. Enregistrez aussi les remplacements de batterie : connaître son âge peut être utile lors d'un futur problème. CarCare Diary permet de conserver ces informations dans les notes d'entretien de chaque voiture.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Voiture ne démarre pas",
  hero: {
    category: "Dépannage",
    readTime: "9 min de lecture",
    title: "Pourquoi ma voiture ne démarre-t-elle pas ?",
    lede: "Ce qui se passe lorsque vous tournez la clé ou appuyez sur le bouton de démarrage est souvent l'indice le plus utile. Aucun bruit peut orienter vers la batterie, un fusible ou le contact. Une succession de clics rapides évoque une batterie faible. Si le moteur est entraîné par le démarreur mais ne se lance pas, il faut notamment examiner l'alimentation en carburant, l'allumage et l'antidémarrage. Chaque symptôme suggère une piste différente, détaillée ci-dessous.",
  },
  lastUpdatedLabel: "Dernière mise à jour : novembre 2026",
  prefaceCallout: {
    title: "Important",
    body: "Ce guide présente des causes possibles, pas un diagnostic. De nombreuses pannes nécessitent un contrôle du véhicule avec les outils adaptés. Si la situation est dangereuse ou si la cause est incertaine, faites examiner la voiture par un professionnel qualifié.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Que se passe-t-il lorsque vous essayez de démarrer ? Aucun bruit ni voyant : batterie déchargée ou mauvaise connexion. Clics rapides : batterie faible ou bornes oxydées. Un seul clic : problème possible de démarreur. Le moteur tourne sans démarrer : carburant, allumage ou antidémarrage. Il démarre puis cale : ralenti, pression de carburant ou système de sécurité.",
  },
  blocks: [
    { type: "heading", text: "Causes fréquentes selon le symptôme" },
    { type: "subheading", text: "Aucun voyant, aucun bruit" },
    { type: "subheading", text: "Batterie complètement déchargée", level: 4 },
    { type: "paragraph", text: "Les systèmes électriques ne reçoivent pas suffisamment d'énergie. La batterie a pu se décharger naturellement ou être vidée par un composant défectueux. Un démarrage avec une source d'appoint compatible peut permettre de repartir ; si cela fonctionne, faites ensuite tester la batterie et le circuit de charge. Respectez les consignes du constructeur pour les véhicules hybrides et les systèmes électriques complexes." },
    { type: "subheading", text: "Fusible principal ou liaison fusible coupée", level: 4 },
    { type: "paragraph", text: "La rupture d'un fusible principal peut couper l'alimentation électrique d'une grande partie du véhicule. C'est moins fréquent, mais cela peut survenir après un défaut électrique." },
    { type: "subheading", text: "Batterie déconnectée ou mauvaise connexion aux bornes", level: 4 },
    { type: "paragraph", text: "Un câble desserré, oxydé ou débranché peut empêcher le courant d'alimenter les systèmes. Une vérification visuelle des connexions fait partie des premières pistes, sans manipuler de composants sous tension si vous n'êtes pas compétent." },
    { type: "subheading", text: "Clics rapides, moteur qui ne démarre pas" },
    { type: "subheading", text: "Batterie faible ou déchargée", level: 4 },
    { type: "paragraph", text: "C'est une cause fréquente de clics rapides. Le démarreur reçoit un peu de courant, mais pas assez pour fonctionner correctement ; le solénoïde peut alors claquer à répétition. Recharger la batterie ou procéder à un démarrage d'appoint conforme aux instructions du véhicule peut aider à identifier la cause." },
    { type: "subheading", text: "Bornes de batterie oxydées", level: 4 },
    { type: "paragraph", text: "Une forte corrosion des bornes augmente la résistance électrique et peut empêcher le démarreur de recevoir un courant suffisant, même avec une batterie chargée. Les connexions doivent être vérifiées et nettoyées en respectant les précautions de sécurité." },
    { type: "subheading", text: "Un clic fort, mais le moteur n'est pas entraîné" },
    { type: "subheading", text: "Démarreur défectueux", level: 4 },
    { type: "paragraph", text: "Un claquement unique au démarrage peut signifier que le solénoïde s'actionne sans que le moteur du démarreur ne tourne. Le démarreur peut être défaillant ou bloqué." },
    { type: "subheading", text: "Moteur bloqué", level: 4 },
    { type: "paragraph", text: "C'est rare, mais un moteur grippé, par exemple après un grave manque de lubrification ou une surchauffe, peut refuser de tourner. Le clic provient alors du démarreur qui essaie d'entraîner le moteur immobilisé." },
    { type: "subheading", text: "Le démarreur entraîne le moteur, mais celui-ci ne démarre pas" },
    { type: "subheading", text: "Problème d'alimentation en carburant", level: 4 },
    { type: "paragraph", text: "Le carburant n'arrive peut-être pas jusqu'au moteur : réservoir vide, pompe défaillante ou filtre fortement obstrué sur les véhicules concernés. Sur certains modèles, on peut entendre brièvement la pompe lors de la mise du contact avant le lancement du démarreur." },
    { type: "subheading", text: "Absence d'étincelle : bougies ou bobine d'allumage", level: 4 },
    { type: "paragraph", text: "Sur un moteur essence, si l'alimentation en carburant fonctionne, l'allumage est une autre piste. Des bougies usées ou une bobine défaillante peuvent empêcher le moteur de démarrer. Les codes défaut peuvent aider à identifier le cylindre ou le composant concerné." },
    { type: "subheading", text: "Problème d'antidémarrage électronique", level: 4 },
    { type: "paragraph", text: "Le système peut empêcher le moteur de démarrer, même si le démarreur le fait tourner. Vérifiez l'éventuel voyant de sécurité au tableau de bord, utilisez la bonne clé et, si vous en possédez une, essayez la clé de secours." },
    { type: "subheading", text: "Moteur noyé sur un véhicule essence", level: 4 },
    { type: "paragraph", text: "Après plusieurs tentatives infructueuses, un excès de carburant peut humidifier les bougies et compliquer l'allumage. Selon le modèle, il peut être préférable d'attendre que le carburant s'évapore, de suivre une procédure de démarrage prévue par le constructeur pour un moteur noyé ou de faire inspecter les bougies. La procédure dépend du véhicule : suivez exclusivement le manuel du constructeur et évitez les tentatives répétées si la cause est inconnue." },
    { type: "subheading", text: "Le moteur démarre, puis cale immédiatement" },
    { type: "subheading", text: "Boîtier papillon ou système de régulation du ralenti", level: 4 },
    { type: "paragraph", text: "Un moteur incapable de maintenir le ralenti peut caler presque aussitôt. Un boîtier papillon encrassé, une commande de ralenti défaillante ou une prise d'air figurent parmi les causes possibles." },
    { type: "subheading", text: "Antidémarrage qui coupe l'alimentation après le départ", level: 4 },
    { type: "paragraph", text: "Certains systèmes laissent tourner le moteur quelques secondes avant de couper l'alimentation si la clé n'est pas reconnue. Le moteur démarre brièvement, puis s'arrête." },
    { type: "subheading", text: "Baisse de la pression de carburant", level: 4 },
    { type: "paragraph", text: "Une pompe défaillante ou un régulateur qui laisse chuter la pression peut permettre un court démarrage grâce à la pression résiduelle, puis provoquer un calage." },
    { type: "primaryCta" },
    { type: "heading", text: "Quelles informations d'entretien peuvent aider au diagnostic ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Date du dernier remplacement de batterie : une batterie de plus de 3 à 5 ans peut constituer une piste parmi d'autres.",
        "Historique des bougies d'allumage : des bougies usées peuvent contribuer à un problème de démarrage sur un véhicule essence.",
        "Pannes de démarrage précédentes : symptômes observés et diagnostic posé à l'époque.",
        "Travaux électriques récents : notamment déconnexion de la batterie ou intervention sur le circuit électrique.",
        "Historique des vidanges : un entretien très négligé peut contribuer à certaines défaillances du moteur.",
      ],
    },
    { type: "heading", text: "Comment enregistrer les réparations liées au démarrage ?" },
    { type: "paragraph", text: "CarCare Diary permet de consigner le remplacement d'une batterie, l'entretien des bougies et les réparations effectuées après un problème de démarrage, avec date, kilométrage et observations. Connaître l'âge de la batterie est notamment une information utile lorsqu'une panne similaire survient plus tard." },
  ],
  faqHeading: "Questions fréquentes",
  faqs: [...faqs],
  ctaSlug: "voiture-ne-demarre-pas-causes",
  cta: {
    kind: "symptom",
    headline: "Consignez les remplacements de batterie et les réparations de démarrage",
    endHeadline: "Gardez une trace de chaque réparation",
    image: "log",
    subtitle: "Conservez les travaux réalisés, les pièces utilisées, le kilométrage et vos notes au même endroit pour les retrouver lors d'une prochaine visite au garage.",
    endSubtitle: "Consignez vos interventions, suivez votre kilométrage et retrouvez l'historique de votre voiture sur votre téléphone.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Voiture qui ne démarre pas : symptômes et causes",
    description: "Votre voiture ne démarre pas ? Comparez les symptômes : aucun voyant, clics, démarreur qui tourne, moteur qui cale, et les causes possibles.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-wont-my-car-start" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-wont-my-car-start" },
    ],
    datePublished: "2026-04-16",
    dateModified: "2026-11-04",
  },
};

export const whyWontMyCarStartFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
