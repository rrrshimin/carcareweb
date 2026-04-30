export type GuideArticle = {
  path: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
};

export const guides: GuideArticle[] = [
  {
    path: "/blog/car-maintenance-checklist",
    title: "Car Maintenance Checklist",
    description:
      "A practical checklist covering oil, brakes, tires, filters, fluids, and inspections - with guidance on how often each item needs attention.",
    category: "Maintenance",
    readTime: "6 min read",
  },
  {
    path: "/blog/how-to-track-car-maintenance",
    title: "How To Track Car Maintenance",
    description:
      "A step-by-step guide to building a simple, consistent system for logging services, tracking mileage, and keeping vehicle records that hold up over time.",
    category: "Guides",
    readTime: "5 min read",
  },
  {
    path: "/blog/what-to-include-in-a-car-service-history",
    title: "What To Include In A Car Service History",
    description:
      "What belongs in every service record - from date and mileage to parts, fluids, notes, and observations. A practical guide to keeping a complete vehicle history.",
    category: "Guides",
    readTime: "5 min read",
  },
  {
    path: "/blog/how-to-keep-car-service-records-organized",
    title: "How To Keep Car Service Records Organized",
    description:
      "A practical guide to organizing car service records - what to keep, how to structure your log, and the habits that stop a record system from falling apart over time.",
    category: "Guides",
    readTime: "5 min read",
  },
  {
    path: "/blog/best-car-maintenance-apps",
    title: "Best Car Maintenance Apps in 2026",
    description:
      "A feature comparison of ten car maintenance apps - covering service history, mileage tracking, reminders, multi-vehicle support, and shareable records.",
    category: "Comparison",
    readTime: "8 min read",
  },
  {
    path: "/blog/when-to-change-engine-oil",
    title: "When To Change Engine Oil",
    description:
      "Learn when to change engine oil, how mileage and oil type affect intervals, warning signs to watch for, and how to track oil changes.",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    path: "/blog/when-to-replace-brake-pads",
    title: "When To Replace Brake Pads",
    description:
      "Brake pad lifespan, warning signs like squealing or grinding, front vs rear wear, and how to track brake service history.",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    path: "/blog/when-to-rotate-tires",
    title: "When To Rotate Tires",
    description:
      "Tire rotation intervals, FWD/RWD/AWD wear patterns, signs of uneven wear, and how to track tire rotations with mileage reminders.",
    category: "Maintenance",
    readTime: "5 min read",
  },
];
