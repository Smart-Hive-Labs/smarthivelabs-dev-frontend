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
  type:
    | "Client Build"
    | "Internal Product"
    | "Open Source"
    | "Prototype"
    | "Platform"
    | "Management System";
  visibility: "Public" | "Curated";
  status:
    | "Live"
    | "Active Build"
    | "Shipping"
    | "Maintained"
    | "Exploration"
    | "Coming Soon";
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

export interface CareerTrack {
  title: string;
  audience: string;
  summary: string;
  highlights: string[];
}

export const studioStats = [
  { label: "Core focus", value: "Software, AI, and game development" },
  { label: "Engagement model", value: "Custom product and project delivery" },
  { label: "Working style", value: "Product-led engineering with clear execution" },
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
    slug: "errands4me",
    title: "Errands4Me",
    type: "Platform",
    visibility: "Public",
    status: "Live",
    summary:
      "A delivery and errands platform where users request errands and carriers complete jobs for payment.",
    description:
      "Errands4Me is a multi-layer delivery and errands product that supports standard user-to-carrier errands, delivery-as-a-service operations, and merchant storefront participation inside the broader ecosystem.",
    capabilities: [
      "Marketplace product design",
      "Mobile product delivery",
      "Operational workflow modelling",
      "Service platform architecture",
    ],
    tags: ["Delivery", "DAAS", "Marketplace", "Mobile Apps"],
    metrics: [
      { label: "Apps", value: "Carrier and user mobile apps" },
      { label: "Model", value: "Errands, delivery, and storefront services" },
    ],
  },
  {
    slug: "errands4me-console",
    title: "Errands4Me Console",
    type: "Management System",
    visibility: "Public",
    status: "Live",
    summary:
      "A mobile management system built to operate and coordinate the Errands4Me delivery-as-a-service ecosystem.",
    description:
      "Errands4Me Console provides the management layer for operational control, service oversight, and administration across the delivery-as-a-service side of the Errands4Me platform.",
    capabilities: [
      "Operational tooling",
      "Admin workflow design",
      "Platform management systems",
      "Mobile-first control interfaces",
    ],
    tags: ["Operations", "Management", "DAAS", "Mobile System"],
    metrics: [
      { label: "Focus", value: "Platform administration" },
      { label: "Supports", value: "Errands4Me DAAS workflows" },
    ],
  },
  {
    slug: "yuno",
    title: "Yuno",
    type: "Platform",
    visibility: "Public",
    status: "Live",
    summary:
      "A student community app for school content, class updates, Q&A, and academic planning.",
    description:
      "Yuno is a mobile application designed for students to engage with their school communities, publish educational content, follow class updates, ask and answer questions, and stay organized with academic planning tools.",
    capabilities: [
      "Community product design",
      "Mobile app delivery",
      "Content and interaction systems",
      "Academic planning workflows",
    ],
    tags: ["EdTech", "Student Community", "Mobile App", "Planner"],
    metrics: [
      { label: "Audience", value: "Students and school communities" },
      { label: "Core features", value: "Content, Q&A, updates, planner" },
    ],
  },
  {
    slug: "hivedemia",
    title: "Hivedemia",
    type: "Internal Product",
    visibility: "Public",
    status: "Shipping",
    summary:
      "An AI-powered learning platform designed around study workflows, educational assistance, and smart academic tools.",
    description:
      "Hivedemia is one of Smart Hive Labs' core internal product initiatives, built to support learning, AI-assisted academic interaction, and education-focused workflows through a modern platform experience.",
    capabilities: [
      "AI product design",
      "Learning workflows",
      "Platform architecture",
      "Product strategy",
    ],
    tags: ["EdTech", "AI", "Internal Product", "Platform"],
    metrics: [
      { label: "Focus", value: "AI-powered education workflows" },
      { label: "Position", value: "Internal flagship product" },
    ],
  },
  {
    slug: "prepskora",
    title: "PREPSKORA",
    type: "Platform",
    visibility: "Public",
    status: "Coming Soon",
    summary:
      "An AI-powered career development platform for interview practice, CV improvement, skill analysis, and career intelligence.",
    description:
      "PREPSKORA is being built as a modern web platform with AI-powered APIs to help individuals and organizations accelerate career development through guided insights, interview preparation, and decision support.",
    capabilities: [
      "AI workflow integration",
      "Career intelligence interfaces",
      "Modern web platform delivery",
      "Interactive assessment systems",
    ],
    tags: ["CareerTech", "AI", "Next.js", "Web Platform"],
    metrics: [
      { label: "Status", value: "Coming soon" },
      { label: "Purpose", value: "Career acceleration through AI guidance" },
    ],
  },
  {
    slug: "votyhive",
    title: "VotyHive",
    type: "Platform",
    visibility: "Public",
    status: "Coming Soon",
    summary:
      "A multi-workspace voting platform where organizations run their own branded voting systems with optional paid or free voting.",
    description:
      "VotyHive is being designed as a workspace-driven voting platform where each organization controls its own voting environment, settings, workflows, and subdomain presence for both paid and non-paid voting experiences.",
    capabilities: [
      "Multi-tenant platform design",
      "Workspace architecture",
      "Subdomain-based product systems",
      "Configurable voting workflows",
    ],
    tags: ["Voting", "SaaS", "Multi-Workspace", "Platform"],
    metrics: [
      { label: "Structure", value: "Organization-owned workspaces" },
      { label: "Modes", value: "Paid and non-paid voting flows" },
    ],
  },
  {
    slug: "civiclink",
    title: "CivicLink",
    type: "Open Source",
    visibility: "Public",
    status: "Exploration",
    summary:
      "An AI-powered civic technology platform for transparency, participation, accountability, and electoral insight in Ghana.",
    description:
      "CivicLink is built to serve voters, candidates, and electoral bodies through voter education, data-driven civic insight, real-time electoral tracking, and stronger transparency across democratic processes.",
    capabilities: [
      "Civic data experience design",
      "AI-assisted information systems",
      "Public participation tooling",
      "Research-led product framing",
    ],
    tags: ["Civic Tech", "AI", "Transparency", "Open Source"],
    links: [{ href: "https://github.com/Smart-Hive-Labs/civiclink", label: "Repository" }],
    metrics: [
      { label: "Focus", value: "Transparency and civic participation" },
      { label: "Region", value: "Ghana" },
    ],
  },
  {
    slug: "unilinkspace",
    title: "UniLinkSpace",
    type: "Platform",
    visibility: "Public",
    status: "Active Build",
    summary:
      "A smart QR platform that turns one QR code into an editable digital experience with analytics, redirects, branding, and conversion tools.",
    description:
      "UniLinkSpace allows users to create purpose-driven QR experiences that lead to contact cards, link hubs, portfolios, business pages, files, ticket pages, payment flows, or custom mini-sites, all with trackable performance and adaptable destination logic.",
    capabilities: [
      "QR-based product design",
      "Analytics and redirect systems",
      "Landing page generation",
      "Conversion-focused workflows",
    ],
    tags: ["QR Platform", "Analytics", "Landing Pages", "Business Tools"],
    metrics: [
      { label: "Core model", value: "Editable QR experiences" },
      { label: "Supports", value: "Profiles, files, payments, pages, events" },
    ],
  },
  {
    slug: "dropp-marketplace",
    title: "Dropp Marketplace",
    type: "Platform",
    visibility: "Public",
    status: "Coming Soon",
    summary:
      "An e-commerce marketplace that brings together storefronts from Errands4Me with instant delivery as a core experience.",
    description:
      "Dropp Marketplace is being developed as the commerce-facing layer that aggregates merchant storefronts connected to Errands4Me and pairs them with instant delivery for faster ordering and fulfilment.",
    capabilities: [
      "Marketplace architecture",
      "Storefront aggregation",
      "Commerce product systems",
      "Delivery-linked checkout experiences",
    ],
    tags: ["E-commerce", "Marketplace", "Delivery", "Coming Soon"],
    metrics: [
      { label: "Source", value: "Storefronts from Errands4Me" },
      { label: "Promise", value: "Instant delivery" },
    ],
  },
];

export const developerProfiles: DeveloperProfile[] = [
  {
    name: "Mensah Isaac Nana Sam",
    role: "Founder, Owner and General Manager",
    discipline: "Product direction, frontend systems, AI product thinking",
    bio: "Mensah Isaac Nana Sam is the sole founder and owner of Smart Hive Labs, leading product direction, delivery decisions, frontend systems, business management, and the overall direction of the company.",
    specialties: [
      "Product direction",
      "Frontend systems",
      "AI product thinking",
      "Company leadership",
    ],
    image: "/mins.jpg",
  },
  {
    name: "Engineering Team",
    role: "Delivery and Implementation",
    discipline: "Product delivery across frontend, backend, and supporting execution",
    bio: "Smart Hive Labs works with a supporting team of employees across implementation and delivery. Individual team profiles will be published later as the company updates this frontend.",
    specialties: ["Frontend delivery", "Backend support", "Product execution", "Team operations"],
    image: "/team.jpg",
  },
  {
    name: "Operations and Support Team",
    role: "Studio Support",
    discipline: "Execution support, coordination, and project assistance",
    bio: "Additional team capacity supports operations, coordination, and delivery across active projects while core leadership and direction remain under the founder.",
    specialties: ["Project support", "Coordination", "Execution assistance", "Studio operations"],
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
      "Working knowledge of TypeScript",
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
      "Experience with Node.js and API architecture",
      "Understanding of API design and backend workflows",
      "Comfort working across product requirements and engineering constraints",
      "Working knowledge of PostgreSQL and TypeScript",
    ],
    applyUrl: "/contact",
  },
  {
    title: "Social Media Manager",
    team: "Creative and Marketing",
    level: "Entry to Mid-Level",
    location: "Remote / Ghana-friendly",
    status: "Open",
    summary: "Plan and execute social media strategy, publishing workflows, and campaign performance tracking across company products and channels.",
    requirements: [
      "Experience running social calendars and campaign plans",
      "Strong writing and audience communication",
      "Comfort working with analytics and growth reporting",
    ],
    applyUrl: "/contact",
  },
  {
    title: "Content Creator",
    team: "Creative and Marketing",
    level: "Entry to Mid-Level",
    location: "Remote / Ghana-friendly",
    status: "Open",
    summary: "Create short-form and long-form content for product storytelling, social distribution, and campaign communication.",
    requirements: [
      "Content planning and script writing",
      "Ability to create platform-ready educational and marketing content",
      "Comfort collaborating with product and design teams",
    ],
    applyUrl: "/contact",
  },
  {
    title: "Video Editor",
    team: "Creative and Marketing",
    level: "Project-based",
    location: "Remote",
    status: "Open",
    summary: "Edit high-quality video content for campaigns, product demos, learning content, and social media.",
    requirements: [
      "Proficiency in Premiere Pro and CapCut",
      "Strong pacing, storytelling, and post-production sense",
      "Ability to package edits for multiple channels and aspect ratios",
    ],
    applyUrl: "/contact",
  },
  {
    title: "Motion Graphics Designer",
    team: "Creative and Marketing",
    level: "Project-based",
    location: "Remote",
    status: "Pipeline",
    summary: "Design motion assets for branded campaigns, product explainers, social releases, and launch communication.",
    requirements: [
      "Proficiency in After Effects",
      "Solid typography and layout animation skills",
      "Ability to align creative assets with product and brand goals",
    ],
  },
  {
    title: "Creative Visual Designer",
    team: "Creative and Marketing",
    level: "Project-based",
    location: "Remote",
    status: "Closed",
    summary: "Design visual systems and campaign assets across digital marketing, social publishing, and product storytelling.",
    requirements: [
      "Proficiency in Photoshop and Illustrator",
      "Good visual hierarchy and brand consistency",
      "Ability to design creative assets for web and social formats",
    ],
  },
  {
    title: "Videography and Photography Assistant",
    team: "Creative and Marketing",
    level: "Project-based",
    location: "Hybrid / Ghana",
    status: "Pipeline",
    summary: "Support media capture, camera operation, and production logistics for product, campaign, and studio content.",
    requirements: [
      "Camera operation and production setup",
      "Photography and videography fundamentals",
      "Ability to support all-round content capture and delivery",
    ],
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
    title: "CivicLink",
    summary: "A civic-tech initiative focused on public access to clearer information, participation tools, and digital transparency.",
    focus: "Research-led civic software",
    stack: ["Next.js", "Node.js", "Prototype systems"],
    repository: "https://github.com/Smart-Hive-Labs/civiclink",
    contributionUrl: "https://github.com/Smart-Hive-Labs/civiclink",
    issuesUrl: "https://github.com/Smart-Hive-Labs/civiclink/issues",
  },
];

export const studioPrinciples = [
  "Business problems translated into software that teams can operate",
  "Premium interfaces backed by practical engineering decisions",
  "Selective project visibility with clear positioning and trust",
  "Reusable systems that support shipping, maintenance, and growth",
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

export const careerTracks: CareerTrack[] = [
  {
    title: "Internship Program",
    audience: "Students and early builders",
    summary: "Hands-on learning tracks for people building strength in frontend, backend, AI, product systems, and technical execution.",
    highlights: [
      "Mentored project work",
      "Portfolio-building delivery",
      "Frontend, backend, AI, and product exposure",
    ],
  },
  {
    title: "Entry-Level Roles",
    audience: "Junior talent",
    summary: "Structured opportunities for emerging engineers who can contribute to production work and grow with active builds.",
    highlights: [
      "Junior frontend and backend paths",
      "Applied engineering on real products",
      "Growth through active delivery work",
    ],
  },
  {
    title: "NSS / Attachment",
    audience: "Placement candidates",
    summary: "Practical placements for candidates who want real software and product delivery experience inside a focused engineering environment.",
    highlights: [
      "Meaningful technical contribution",
      "Exposure to live products and internal systems",
      "Structured support and direction",
    ],
  },
  {
    title: "General Applications",
    audience: "Future hires and collaborators",
    summary: "If your profile fits the way Smart Hive Labs builds, you can still register interest even when a direct vacancy is not open.",
    highlights: [
      "Talent pool for future projects",
      "Specialist and project-based interest",
      "Flexible route for strong candidates",
    ],
  },
];

export const careerApplicationRoles = [
  "Frontend Engineer",
  "Backend Engineer",
  "Social Media Manager",
  "Content Creator",
  "Video Editor",
  "Motion Graphics Designer",
  "Creative Visual Designer",
  "Videography and Photography Assistant",
  "Gameplay Developer",
  "Frontend Internship",
  "Backend Internship",
  "AI / Automation Internship",
  "Marketing Internship",
  "Creative Internship",
  "NSS / Attachment",
  "General Application",
];
