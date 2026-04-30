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
  {
    path: "/blog/when-to-change-brake-fluid",
    title: "When To Change Brake Fluid",
    description:
      "Why brake fluid absorbs moisture over time, typical 2-year change intervals, warning signs, and how to track brake fluid service.",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    path: "/blog/when-to-change-coolant",
    title: "When To Change Coolant",
    description:
      "Coolant change intervals by fluid type, warning signs of degraded coolant, and how to track coolant service by date and mileage.",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    path: "/blog/when-to-replace-engine-air-filter",
    title: "When To Replace Engine Air Filter",
    description:
      "Engine air filter replacement intervals, visual inspection guide, symptoms of a clogged filter, and how to track replacements.",
    category: "Maintenance",
    readTime: "4 min read",
  },
  {
    path: "/blog/when-to-replace-cabin-air-filter",
    title: "When To Replace Cabin Air Filter",
    description:
      "Cabin air filter replacement intervals, signs of a clogged filter, and how to track cabin filter changes by date and mileage.",
    category: "Maintenance",
    readTime: "4 min read",
  },
  {
    path: "/blog/when-to-replace-spark-plugs",
    title: "When To Replace Spark Plugs",
    description:
      "Spark plug replacement intervals by plug type, signs of worn spark plugs, and how to track spark plug service by mileage.",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    path: "/blog/when-to-change-transmission-fluid",
    title: "When To Change Transmission Fluid",
    description:
      "Transmission fluid intervals for automatic, manual, CVT, and dual-clutch transmissions, signs it may be due, and how to track service history.",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    path: "/blog/when-to-replace-timing-belt",
    title: "When To Replace a Timing Belt",
    description:
      "Timing belt replacement intervals by mileage and age, why timing belt service is critical, and how to track replacement dates.",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    path: "/blog/car-maintenance-schedule-by-mileage",
    title: "Car Maintenance Schedule by Mileage",
    description:
      "A general reference car maintenance schedule by mileage — oil, tires, filters, fluids, brakes, spark plugs, and timing belt.",
    category: "Reference",
    readTime: "6 min read",
  },
  {
    path: "/blog/when-to-replace-car-battery",
    title: "When To Replace a Car Battery",
    description:
      "How long car batteries typically last, warning signs of a failing battery, and how to track battery replacement history.",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    path: "/blog/when-to-replace-windshield-wipers",
    title: "When To Replace Windshield Wipers",
    description:
      "Signs wiper blades need replacing, how often to change them, and why good wipers matter for driving safety.",
    category: "Maintenance",
    readTime: "4 min read",
  },
  {
    path: "/blog/when-to-check-tire-pressure",
    title: "When To Check Tire Pressure",
    description:
      "How often to check tire pressure, cold tire pressure explained, temperature effects on PSI, and what happens when pressure is off.",
    category: "Maintenance",
    readTime: "4 min read",
  },
  {
    path: "/blog/when-to-change-power-steering-fluid",
    title: "When To Change Power Steering Fluid",
    description:
      "Power steering fluid service intervals, signs it may be due, and whether your vehicle has hydraulic or electric steering.",
    category: "Maintenance",
    readTime: "4 min read",
  },
  {
    path: "/blog/when-to-replace-serpentine-belt",
    title: "When To Replace a Serpentine Belt",
    description:
      "Serpentine belt inspection, wear signs to look for, what the belt drives, and how to track belt replacement history.",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    path: "/blog/when-to-replace-headlights",
    title: "When To Replace Headlights",
    description:
      "When to replace headlight bulbs, signs of dim or failing headlights, bulb types explained, and safety tips.",
    category: "Maintenance",
    readTime: "4 min read",
  },
  {
    path: "/blog/when-to-change-fuel-filter",
    title: "When To Change a Fuel Filter",
    description:
      "Fuel filter replacement intervals, symptoms of a clogged filter, serviceable vs in-tank filters, and diesel notes.",
    category: "Maintenance",
    readTime: "4 min read",
  },
  {
    path: "/blog/when-to-get-wheel-alignment",
    title: "When To Get a Wheel Alignment",
    description:
      "Signs wheel alignment is off, when to schedule an alignment check, and how misalignment affects tire wear.",
    category: "Maintenance",
    readTime: "4 min read",
  },
  {
    path: "/blog/when-to-replace-brake-rotors",
    title: "When To Replace Brake Rotors",
    description:
      "Signs of worn or warped brake rotors, when to replace vs resurface, and how to track brake service history.",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    path: "/blog/when-to-replace-tires",
    title: "When To Replace Tires",
    description:
      "Tread depth, tire age, warning signs, and how to track tire replacements and tire maintenance history.",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    path: "/blog/when-to-service-car-ac",
    title: "When To Service Car AC",
    description:
      "Signs your car AC needs service, what to check first, refrigerant notes, and how to track AC maintenance.",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    path: "/blog/when-to-change-oil-filter",
    title: "When To Change Your Oil Filter",
    description:
      "Oil filter change intervals, why the filter matters, signs of an issue, and how to track oil and filter service.",
    category: "Maintenance",
    readTime: "4 min read",
  },
  {
    path: "/blog/why-is-my-car-overheating",
    title: "Why Is My Car Overheating?",
    description:
      "Common causes of engine overheating, what to do safely when it happens, and how to track cooling system maintenance.",
    category: "Troubleshooting",
    readTime: "5 min read",
  },
  {
    path: "/blog/why-are-my-brakes-squeaking",
    title: "Why Are My Brakes Squeaking?",
    description:
      "Common causes of brake squeaking, when it is serious vs normal, and how to track brake service history.",
    category: "Troubleshooting",
    readTime: "5 min read",
  },
  {
    path: "/blog/why-is-my-car-shaking",
    title: "Why Is My Car Shaking?",
    description:
      "Common causes of car vibration organized by situation — high speed, braking, idle, and acceleration.",
    category: "Troubleshooting",
    readTime: "5 min read",
  },
  {
    path: "/blog/what-does-check-engine-light-mean",
    title: "What Does the Check Engine Light Mean?",
    description:
      "What the check engine light means, solid vs flashing explained, common causes, and how to track repairs.",
    category: "Troubleshooting",
    readTime: "5 min read",
  },
  {
    path: "/blog/why-is-my-car-leaking-oil",
    title: "Why Is My Car Leaking Oil?",
    description:
      "Common reasons a car leaks oil, when it may be urgent, what to check safely, and how to track oil service and repairs.",
    category: "Troubleshooting",
    readTime: "5 min read",
  },
  {
    path: "/blog/why-does-my-car-smell-like-gas",
    title: "Why Does My Car Smell Like Gas?",
    description:
      "Common reasons your car may smell like gas, when to stop driving, and how to track fuel-system repairs.",
    category: "Troubleshooting",
    readTime: "4 min read",
  },
  {
    path: "/blog/why-wont-my-car-start",
    title: "Why Won't My Car Start?",
    description:
      "Common reasons a car won't start, organized by symptom — from battery and starter issues to fuel and ignition problems.",
    category: "Troubleshooting",
    readTime: "5 min read",
  },
  {
    path: "/blog/what-car-fluids-should-i-check",
    title: "What Car Fluids Should You Check?",
    description:
      "Essential car fluids checklist — what each fluid does, how to check it, and how to track fluid service history.",
    category: "Maintenance",
    readTime: "5 min read",
  },
];
