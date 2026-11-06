import type { LocalizedGuideContent } from "../../content/guides/types";
import { buildGuideJsonLd } from "../../content/guides/types";
import { SITE_URL } from "../../lib/pageSeoHead";

const PATH = "/fr/blog/pourquoi-freins-voiture-grincent";

const faqs = [
  {
    question: "Un grincement de frein est-il toujours grave ?",
    answer: "Non. Une petite couche de rouille ou l'humidité peut provoquer un bruit qui disparaît après quelques freinages. Mais un sifflement répétitif, un raclement métallique ou tout symptôme affectant le freinage mérite une inspection.",
  },
  {
    question: "À quoi sert le témoin d'usure des plaquettes ?",
    answer: "Sur certaines plaquettes, une petite pièce métallique entre en contact avec le disque lorsque la garniture est presque usée et provoque un sifflement. C'est une alerte destinée à vous faire contrôler les plaquettes avant un contact métal contre métal.",
  },
  {
    question: "Des plaquettes glacées peuvent-elles grincer ?",
    answer: "Oui. Une surface surchauffée et durcie peut produire un bruit aigu et réduire l'efficacité du frottement. Le diagnostic doit déterminer si les plaquettes ou disques peuvent être conservés.",
  },
  {
    question: "Combien de temps peut-on rouler avec des freins qui grincent ?",
    answer: "Il n'existe pas de délai sûr universel. Un bruit bref dû à l'humidité peut être bénin, mais ne continuez pas à rouler en présence de bruit métallique, de pédale anormale, de distance d'arrêt accrue ou de voyant : faites inspecter rapidement la voiture.",
  },
  {
    question: "Des plaquettes neuves peuvent-elles faire du bruit ?",
    answer: "Oui, pendant la période de rodage ou si leurs surfaces sont humides. Le bruit doit normalement s'estomper. Un bruit persistant, des vibrations ou une baisse d'efficacité exigent un contrôle du montage et de l'état des disques.",
  },
  {
    question: "Comment garder l'historique des réparations de freins ?",
    answer: "Notez dates, kilométrages, disques et plaquettes concernés, références des pièces, liquide de frein et problèmes constatés. CarCare Diary permet de conserver ces données avec vos autres entretiens.",
  },
] as const;

const base: Omit<LocalizedGuideContent, "seo"> & {
  seo: Omit<LocalizedGuideContent["seo"], "jsonLd">;
} = {
  breadcrumbTitle: "Pourquoi les freins de ma voiture grincent-ils ?",
  hero: {
    category: "Diagnostic",
    readTime: "5 min de lecture",
    title: "Pourquoi les freins de ma voiture grincent-ils ?",
    lede: "Les bruits de freinage peuvent être anodins ou indiquer un problème urgent. Un léger couinement ponctuel après la pluie ou lors des premiers freinages du matin peut être normal. En revanche, un sifflement persistant, un bruit de frottement métallique, des vibrations dans la pédale ou une dégradation du freinage demandent une inspection. **Les freins sont un organe de sécurité essentiel.**",
  },
  prefaceCallout: {
    title: "Important",
    body: "Ces explications ne constituent pas un diagnostic. Si le freinage se dégrade, que la voiture tire d'un côté, qu'un voyant s'allume ou qu'un bruit métal contre métal apparaît, arrêtez-vous dès que cela est possible en sécurité et faites contrôler le véhicule.",
  },
  shortAnswer: {
    label: "Réponse rapide",
    body: "Les causes fréquentes comprennent **l'indicateur d'usure des plaquettes, la poussière, l'humidité de surface, des plaquettes ou disques glacés, et des pièces de fixation desserrées**. Un bruit bref après la pluie n'est pas forcément grave. Un bruit persistant, métallique ou accompagné d'une baisse d'efficacité doit être examiné rapidement.",
  },
  blocks: [
    { type: "heading", text: "Quand faut-il faire contrôler les freins sans délai ?" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "Bruit de frottement métallique pendant le freinage.",
        "Distance d'arrêt nettement allongée.",
        "Voiture qui tire à gauche ou à droite lorsque vous freinez.",
        "Pédale molle, spongieuse ou qui s'enfonce anormalement.",
        "Vibrations ou pulsations marquées dans la pédale.",
        "Voyant d'alerte de freinage allumé.",
      ],
    },
    { type: "heading", text: "Causes fréquentes des grincements de frein" },
    {
      type: "list",
      variant: "bullet",
      items: [
        "**Témoin d'usure des plaquettes.** Certaines plaquettes possèdent une languette métallique qui touche le disque lorsque la garniture s'amincit et produit un sifflement aigu régulier. Faites mesurer l'épaisseur restante.",
        "**Humidité et légère rouille superficielle.** De la rouille peut se former sur les disques après une nuit humide. Les premiers freinages la retirent souvent et le bruit disparaît rapidement.",
        "**Poussière ou petit débris.** Une particule entre la plaquette et le disque peut provoquer un couinement, parfois temporaire ; un nettoyage lors d'une inspection peut être nécessaire.",
        "**Plaquettes ou disques glacés.** Une surchauffe ou un freinage prolongé peut durcir la surface de friction. Les freins peuvent grincer et être moins efficaces ; un professionnel déterminera s'il faut changer les pièces.",
        "**Plaquettes trop usées.** Lorsque le support métallique entre en contact avec le disque, un bruit de raclement remplace souvent le couinement. C'est une situation plus urgente.",
        "**Fixations ou accessoires desserrés.** Clips, ressorts, tôles antibruit ou composants d'étrier peuvent être corrodés ou mal fixés, créant des vibrations ou des bruits.",
        "**Rodage de plaquettes neuves.** Un léger bruit peut apparaître pendant les premiers centaines de kilomètres après remplacement. Il doit s'atténuer ; tout changement d'efficacité impose un contrôle.",
      ],
    },
    { type: "heading", text: "Ce que l'historique d'entretien peut révéler" },
    { type: "paragraph", text: "Retrouvez **la date et le kilométrage** du dernier remplacement des plaquettes, la dernière inspection ou le changement des disques, la date de remplacement du liquide de frein et les anciennes observations (vibration, déport, bruit). Notez aussi la distance parcourue depuis la dernière intervention : ces détails aideront le garagiste à orienter le diagnostic." },
    { type: "heading", text: "Comment suivre l'entretien du système de freinage ?" },
    { type: "paragraph", text: "Enregistrez chaque contrôle ou réparation avec le kilométrage, l'essieu concerné, les pièces remplacées et les symptômes observés avant et après l'intervention. CarCare Diary peut regrouper ces entrées dans l'historique du véhicule." },
    {
      type: "links",
      intro: "À lire également :",
      links: [
        { label: "Plaquettes de frein", href: "/fr/blog/quand-changer-plaquettes-frein" },
        { label: "Disques de frein", href: "/fr/blog/quand-changer-disques-frein" },
        { label: "Liquide de frein", href: "/fr/blog/quand-changer-liquide-de-frein" },
        { label: "Suivi d'entretien", href: "/car-maintenance-tracker" },
      ],
    },
  ],
  faqHeading: "Questions fréquentes sur les bruits de freinage",
  faqs: [...faqs],
  ctaSlug: "pourquoi-freins-voiture-grincent",
  cta: {
    kind: "symptom",
    headline: "Retrouvez le dernier entretien de vos freins",
    endHeadline: "Un historique utile pour le prochain passage au garage",
    image: "log",
    subtitle: "Consignez plaquettes, disques et contrôles avec dates et kilométrage.",
    endSubtitle: "Gardez une trace des symptômes et des réparations effectuées sur votre voiture.",
    imageAlt: "Écran CarCare Diary pour ajouter une intervention d'entretien",
  },
  seo: {
    title: "Freins qui grincent : causes possibles et signes d'urgence",
    description: "Sifflement, grincement ou bruit métallique au freinage : découvrez les causes possibles, les alertes de sécurité et comment suivre les réparations.",
    path: PATH,
    ogType: "article",
    lang: "fr",
    ogLocale: "fr_FR",
    alternates: [
      { hreflang: "en", path: "/blog/why-are-my-brakes-squeaking" },
      { hreflang: "fr", path: PATH },
      { hreflang: "x-default", path: "/blog/why-are-my-brakes-squeaking" },
    ],
    datePublished: "2026-04-30",
    dateModified: "2026-11-05",
  },
};

export const whyAreMyBrakesSqueakingFr: LocalizedGuideContent = {
  ...base,
  seo: {
    ...base.seo,
    jsonLd: buildGuideJsonLd({ ...base, seo: base.seo }, `${SITE_URL}${PATH}`),
  },
};
