export type ServiceCategory =
  | "Product Engineering"
  | "Applications"
  | "AI Systems"
  | "Game Development"
  | "Support"
  | "Advisory";

export interface ServiceOffer {
  title: string;
  category: ServiceCategory;
  positioning: string;
  businessValue: string;
  deliverables: string[];
  technologies: string[];
  useCases?: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  type: "Client Build" | "Internal Product" | "Open Source" | "Prototype";
  visibility: "Public" | "Curated";
  status: "Active Build" | "Shipping" | "Maintained" | "Exploration";
  summary: string;
  description: string;
  capabilities: string[];
  tags: string[];
  metrics?: ProjectMetric[];
  links?: {
    href: string;
    label: string;
  }[];
  confidentialityNote?: string;
}

export interface DeveloperProfile {
  name: string;
  role: string;
  discipline: string;
  bio: string;
  specialties: string[];
  image: string;
  links?: {
    href: string;
    label: string;
  }[];
}

export interface Vacancy {
  title: string;
  team: string;
  level: string;
  location: string;
  status: "Open" | "Pipeline" | "Closed";
  summary: string;
  requirements: string[];
  applyUrl?: string;
}

export interface OpenSourceEntry {
  title: string;
  summary: string;
  focus: string;
  stack: string[];
  repository: string;
  contributionUrl?: string;
  issuesUrl?: string;
}

export const studioStats = [
  { label: "Studio focus", value: "Software and game development" },
  { label: "Delivery model", value: "Curated builds for businesses" },
  { label: "Operating style", value: "Design-led engineering" },
];

export const serviceOffers: ServiceOffer[] = [
  {
    title: "Product Engineering",
    category: "Product Engineering",
    positioning: "End-to-end build ownership for products that need a technical partner, not just implementation hours.",
    businessValue:
      "Turn an idea, internal workflow, or startup concept into a production-ready product with clear milestones and execution depth.",
    deliverables: [
      "Product architecture",
      "Technical planning",
      "Frontend and backend delivery",
      "Launch hardening",
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "Postgres"],
    useCases: ["SaaS platforms", "Operations tooling", "Client portals"],
  },
  {
    title: "Web Applications",
    category: "Applications",
    positioning: "High-trust web experiences for products, dashboards, and business platforms.",
    businessValue:
      "Ship interfaces that feel premium, load fast, and support real business workflows instead of brochure pages.",
    deliverables: [
      "Marketing and product frontends",
      "Admin dashboards",
      "Role-based platforms",
      "API integrations",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "REST", "GraphQL"],
    useCases: ["Client portals", "E-commerce operations", "Member platforms"],
  },
  {
    title: "Mobile and Cross-Platform Apps",
    category: "Applications",
    positioning: "Cross-platform mobile products built around reach, reliability, and maintainable release cycles.",
    businessValue:
      "Launch mobile experiences without splitting your product quality across multiple codebases.",
    deliverables: [
      "Mobile product design support",
      "Cross-platform app development",
      "Backend connectivity",
      "Store release preparation",
    ],
    technologies: ["React Native", "Expo", "Firebase", "Node.js"],
    useCases: ["Field apps", "Consumer apps", "Internal business tools"],
  },
  {
    title: "AI-Enabled Systems",
    category: "AI Systems",
    positioning: "Applied AI features built into usable products, not demo-only experiments.",
    businessValue:
      "Add automation, document intelligence, assistant flows, and decision support to products your team already needs.",
    deliverables: [
      "AI workflows",
      "Document and knowledge tools",
      "Internal assistants",
      "Automation pipelines",
    ],
    technologies: ["Python", "OpenAI-compatible tooling", "Vector search", "Workflow automation"],
    useCases: ["Knowledge bases", "Support workflows", "Internal copilots"],
  },
  {
    title: "Game Development",
    category: "Game Development",
    positioning: "Interactive game concepts and playable experiences for education, entertainment, and branded engagement.",
    businessValue:
      "Use game mechanics to create products or experiences that teach, market, or entertain with stronger retention.",
    deliverables: [
      "Gameplay prototypes",
      "UI systems",
      "Interactive worlds",
      "Release-ready polishing",
    ],
    technologies: ["Unity", "C#", "Blender", "Narrative systems"],
    useCases: ["Educational games", "Brand activations", "Experimental titles"],
  },
  {
    title: "Maintenance and Growth",
    category: "Support",
    positioning: "Post-launch engineering support for teams that need continuity after release.",
    businessValue:
      "Improve reliability, performance, and iteration speed without rebuilding your entire delivery setup.",
    deliverables: [
      "Feature continuation",
      "Bug fixing",
      "Performance tuning",
      "Technical cleanup",
    ],
    technologies: ["Monitoring", "Analytics", "CI/CD", "Refactoring"],
    useCases: ["Existing products", "Legacy modernization", "Growth sprints"],
  },
  {
    title: "Technical Advisory",
    category: "Advisory",
    positioning: "Early-stage direction for teams deciding what to build, how to scope it, and which stack is realistic.",
    businessValue:
      "Reduce waste before development starts by aligning scope, architecture, and launch priorities.",
    deliverables: [
      "Discovery sessions",
      "Roadmaps",
      "Architecture recommendations",
      "MVP scope definition",
    ],
    technologies: ["Architecture reviews", "Product discovery", "Estimation"],
    useCases: ["New ventures", "Internal digital transformation", "Investor demos"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "hivedemia",
    title: "Hivedemia",
    type: "Internal Product",
    visibility: "Public",
    status: "Shipping",
    summary: "An AI-assisted learning platform designed around study workflows, content interaction, and guided learning support.",
    description:
      "Built as an internal product initiative to explore AI-assisted education workflows, learner support, and document-driven study tools.",
    capabilities: [
      "Product strategy",
      "Full-stack delivery",
      "AI workflow design",
      "UX architecture",
    ],
    tags: ["EdTech", "AI", "Platform", "Internal Product"],
    metrics: [
      { label: "Focus", value: "AI learning workflows" },
      { label: "Build type", value: "Internal product" },
    ],
    links: [
      { href: "https://github.com/smarthivelabs/hivedemia", label: "Repository" },
    ],
  },
  {
    slug: "enterprise-ops-suite",
    title: "Enterprise Operations Suite",
    type: "Client Build",
    visibility: "Curated",
    status: "Active Build",
    summary: "A private operational platform for managing requests, approvals, reporting, and internal workflows.",
    description:
      "A curated client engagement showing Smart Hive Labs' ability to translate complex business operations into a practical software system.",
    capabilities: [
      "Product architecture",
      "Dashboard UX",
      "Backend workflow modelling",
      "Role-based access design",
    ],
    tags: ["B2B", "Operations", "Dashboard", "Private Client"],
    metrics: [
      { label: "Audience", value: "Internal business teams" },
      { label: "Visibility", value: "Curated public summary only" },
    ],
    confidentialityNote:
      "Detailed implementation and client identity are intentionally withheld.",
  },
  {
    slug: "civiclink",
    title: "CivicLink",
    type: "Prototype",
    visibility: "Public",
    status: "Exploration",
    summary: "A civic-tech prototype exploring public information access, tracking, and transparency tools.",
    description:
      "An R&D initiative used to test how public-interest digital systems can communicate complex civic information more clearly.",
    capabilities: [
      "Rapid prototyping",
      "Interface systems",
      "Research-led feature framing",
    ],
    tags: ["Civic Tech", "Prototype", "Research"],
    links: [{ href: "https://github.com/smarthivelabs/civiclink", label: "Repository" }],
  },
  {
    slug: "learning-game-lab",
    title: "Learning Game Lab",
    type: "Prototype",
    visibility: "Curated",
    status: "Active Build",
    summary: "A game development track focused on interactive learning experiences and playable educational systems.",
    description:
      "A studio exploration track for combining game mechanics, learning systems, and visual storytelling into product-ready concepts.",
    capabilities: [
      "Game concept design",
      "Interactive systems",
      "UI for gameplay loops",
      "Rapid iteration",
    ],
    tags: ["Game Dev", "Education", "Prototype"],
    metrics: [{ label: "Mode", value: "Prototype sprinting" }],
  },
];

export const developerProfiles: DeveloperProfile[] = [
  {
    name: "Mensah Isaac Nana Sam",
    role: "Founder and Product Engineer",
    discipline: "Product direction, frontend systems, AI product thinking",
    bio: "Leads Smart Hive Labs across product direction, interface quality, and technical execution with a focus on high-leverage software systems.",
    specialties: ["React", "Next.js", "Product strategy", "AI-enabled products"],
    image: "/mins.jpg",
  },
  {
    name: "Frontend Systems Team",
    role: "Frontend Engineering",
    discipline: "Product interfaces and application architecture",
    bio: "Designs and ships responsive application interfaces with a focus on clarity, performance, and product-grade interaction design.",
    specialties: ["Design systems", "TypeScript", "Responsive UI", "Frontend architecture"],
    image: "/team.jpg",
  },
  {
    name: "Platform and AI Team",
    role: "Backend and Applied AI",
    discipline: "Platform services, APIs, and automation workflows",
    bio: "Builds the underlying systems that power integrations, data flow, automation, and AI-supported product experiences.",
    specialties: ["Node.js", "Python", "APIs", "Workflow automation"],
    image: "/office-environment.webp",
  },
];

export const vacancies: Vacancy[] = [
  {
    title: "Frontend Engineer",
    team: "Applications",
    level: "Junior to Mid-Level",
    location: "Remote / Ghana-friendly",
    status: "Open",
    summary: "Build polished product interfaces for web applications with strong attention to UX quality and implementation detail.",
    requirements: [
      "Experience with React or Next.js",
      "Comfort with responsive UI engineering",
      "Ability to translate design direction into production code",
    ],
    applyUrl: "/contact",
  },
  {
    title: "Backend Engineer",
    team: "Platform",
    level: "Junior to Mid-Level",
    location: "Remote / Ghana-friendly",
    status: "Open",
    summary: "Work on APIs, data modelling, integrations, and backend services that support product delivery across client and internal builds.",
    requirements: [
      "Experience with Node.js or Python",
      "Understanding of API design and backend workflows",
      "Comfort working across product requirements and engineering constraints",
    ],
    applyUrl: "/contact",
  },
  {
    title: "Gameplay Developer",
    team: "Game Development",
    level: "Project-based",
    location: "Remote",
    status: "Pipeline",
    summary: "Join prototype and client-facing game projects focused on interactive systems, educational play, and experimental releases.",
    requirements: [
      "Experience with Unity or similar game engines",
      "Ability to ship playable prototype loops",
      "Comfort collaborating across product and visual direction",
    ],
  },
];

export const openSourceEntries: OpenSourceEntry[] = [
  {
    title: "Hivedemia",
    summary: "AI-assisted education product work built in public where possible.",
    focus: "Learning workflows and intelligent assistance",
    stack: ["Next.js", "Python", "AI tooling"],
    repository: "https://github.com/smarthivelabs/hivedemia",
    contributionUrl: "https://github.com/smarthivelabs/hivedemia",
    issuesUrl: "https://github.com/smarthivelabs/hivedemia/issues",
  },
  {
    title: "CivicLink",
    summary: "A civic-tech exploration around public access to clearer digital information and participation tools.",
    focus: "Research-led civic software",
    stack: ["Next.js", "Node.js", "Prototype systems"],
    repository: "https://github.com/smarthivelabs/civiclink",
    contributionUrl: "https://github.com/smarthivelabs/civiclink",
    issuesUrl: "https://github.com/smarthivelabs/civiclink/issues",
  },
];

export const studioPrinciples = [
  "Software-first positioning with clear business value",
  "Premium interfaces paired with practical engineering",
  "Curated public work instead of noisy portfolio volume",
  "Reusable systems that support shipping and iteration",
];

export const buildProcess = [
  {
    step: "01",
    title: "Discovery",
    description: "Clarify business goals, product scope, and release priorities before building.",
  },
  {
    step: "02",
    title: "System Design",
    description: "Define the product architecture, interface direction, and technical delivery model.",
  },
  {
    step: "03",
    title: "Production",
    description: "Build the product in focused sprints with visible milestones and working software.",
  },
  {
    step: "04",
    title: "Launch and Support",
    description: "Prepare for release, refine the product, and continue delivery where needed.",
  },
];
