// Edit this file to update the portfolio. All paths work on your own domain.
export const profile = {
  name: "Astha Singh",
  title: "Fashion Management · Merchandising · Brand",
  email: "asthasingh1098@gmail.com",
  phone: "+91 8527165152",
  phoneHref: "tel:+918527165152",
  location: "Delhi, India",
  linkedin: "https://www.linkedin.com/in/asthasingh1098/",
  resume: "/documents/astha-singh-resume.pdf",
  summary:
    "Fashion Management professional with experience across product development, merchandising, e-commerce and brand operations. Experienced in supporting product development for American Eagle, managing e-commerce operations and executing brand and experiential projects. Brings a combination of fashion knowledge, commercial understanding and hands-on execution.",
};

export const education = [
  {
    period: "2024 - 2026",
    degree: "Master of Fashion Management",
    institution: "National Institute of Fashion Technology, Mumbai",
    detail:
      "Best Graduation Project Award - International Business / Export Merchandising",
  },
  {
    period: "2018 - 2021",
    degree: "B.A. (Hons.) Economics",
    institution: "Kamala Nehru College, Delhi University",
    detail:
      "An analytical foundation for understanding markets, consumers and commercial decisions.",
  },
];

export const skillGroups = [
  {
    title: "Product & merchandising",
    description:
      "The details that move a product from development to approval.",
    skills: [
      "Product Development",
      "Export Merchandising",
      "Sampling Lifecycle Management",
      "Vendor Management",
      "Assortment Planning",
    ],
  },
  {
    title: "E-commerce & consumer",
    description:
      "Connecting the product assortment with the customer experience.",
    skills: [
      "Shopify Operations",
      "Visual Merchandising",
      "Influencer Marketing",
      "Social Media Management",
      "Market Research",
    ],
  },
  {
    title: "Brand & execution",
    description:
      "Translating research and creative thinking into practical delivery.",
    skills: [
      "Brand Communication",
      "Client Servicing",
      "Project Execution",
      "Trend Analysis",
    ],
  },
];

export const experiences = [
  {
    company: "NeoNiche",
    fullCompany: "NeoNiche Integrated Solutions Private Ltd.",
    role: "Management Trainee - Client Servicing",
    period: "Jun 2026 - Sept 2026",
    discipline: "Brand experiences",
    slug: "neoniche-brand-experiences",
    summary:
      "From client briefs to consumer experiences: research, creative development and on-ground coordination for experiential marketing and brand activations.",
    highlights: [
      "Supported 15+ experiential marketing and brand activation briefs across automotive, mobility and consumer brands including Bentley, Ducati, Renault, Toyota, Hero, Honda and Sharp.",
      "Developed research, concept and ideation decks, translating client objectives into themes, consumer experiences, visual references and execution plans.",
      "Supported 4–5 project executions, coordinating with internal teams, vendors and venues across planning, spatial layouts and on-ground execution.",
      "Contributed to the private preview of the Bentley Continental GTS in India and a 250-attendee Sharp Partner Meet and awards ceremony.",
    ],
    metrics: [
      { value: "15+", label: "Brand & activation briefs" },
      { value: "4–5", label: "Project executions supported" },
      { value: "250", label: "Attendees at Sharp Partner Meet" },
    ],
    certificate: null,
  },
  {
    company: "Triburg",
    fullCompany: "Triburg",
    role: "Product Development & Merchandising Intern",
    period: "Dec 2025 - Apr 2026",
    discipline: "Product development",
    slug: "triburg-market-diversification",
    summary:
      "Supported product development and merchandising for American Eagle, with primary exposure to dresses and the sampling-to-approval lifecycle.",
    highlights: [
      "Coordinated approximately 500 styles across the sampling and product development lifecycle, supporting development through approval stages.",
      "Coordinated with 6 India-based vendors and tracked 30–40 samples at each sampling stage to support timely sampling and approvals.",
      "Supported sample approvals, lab dips, strike-offs, merchandising trackers and BOM/T&A processes.",
      "Received the Best Graduation Project Award - International Business / Export Merchandising.",
    ],
    metrics: [
      { value: "~500", label: "Styles coordinated" },
      { value: "6", label: "India-based vendors" },
      { value: "30–40", label: "Samples tracked per stage" },
    ],
    certificate: "/images/triburg-certificate.webp",
  },
  {
    company: "House of Kosha",
    fullCompany: "House of Kosha",
    role: "E-Commerce Intern",
    period: "Jun 2025 - Nov 2025",
    discipline: "E-commerce",
    slug: "house-of-kosha",
    summary:
      "Hands-on e-commerce operations, online visual merchandising, marketplace outreach and customer engagement for a handcrafted accessories brand.",
    highlights: [
      "Managed 250–300 products/SKUs on Shopify through product uploads, categorisation, inventory updates and online visual merchandising.",
      "Conducted outreach to 50+ marketplaces and retail partners, contributing to collaborations with 10+ marketplace and distribution partners.",
      "Conducted outreach to 150+ influencers, stylists and celebrities and supported customer engagement through a 400+ customer database.",
    ],
    metrics: [
      { value: "250–300", label: "Products / SKUs managed" },
      { value: "50+", label: "Marketplace & retail outreach" },
      { value: "150+", label: "Influencer, stylist & celebrity outreach" },
    ],
    certificate: "/images/kosha-certificate.webp",
  },
];

export type Project = {
  number: number;
  slug: string;
  title: string;
  shortTitle: string;
  category: "Industry" | "Brand strategy" | "Research" | "Merchandising";
  context: string;
  period: string;
  role: string;
  summary: string;
  intro: string;
  cover:
    | "triburg"
    | "kosha"
    | "avora"
    | "neoniche"
    | "export"
    | "research"
    | "rolex"
    | "sourcing"
    | "marketing"
    | "supply";
  tags: string[];
  sections: { title: string; body: string }[];
  outcome: string;
  metrics?: { value: string; label: string }[];
  resources: { title: string; href: string; format: string }[];
  preview?: { src: string; alt: string; caption: string };
  note?: string;
};

export const projects: Project[] = [
  {
    number: 1,
    slug: "triburg-market-diversification",
    title: "A framework for smarter market diversification.",
    shortTitle: "Trade, risk & the next market",
    category: "Research",
    context: "Triburg · Graduation project",
    period: "2026",
    role: "Individual graduation research",
    cover: "triburg",
    summary:
      "An award-winning graduation project exploring when Indian apparel buying houses should diversify across export markets.",
    intro:
      "Trade Agreements and Strategic Market Diversification: Creating a Decision Framework for Indian Apparel Buying Houses. Developed during my graduation project at Triburg, this study connects fashion sourcing with strategic decision-making.",
    tags: [
      "International business",
      "Export merchandising",
      "Decision framework",
    ],
    sections: [
      {
        title: "The question",
        body: "When does market diversification become strategically justified? The study examines how reliance on a small number of export markets and buyers can expose apparel buying houses to trade disruptions and sourcing uncertainty.",
      },
      {
        title: "The research",
        body: "An exploratory mixed-method approach combined secondary trade and industry research with four semi-structured interviews with buying-house decision-makers. Thematic analysis connected industry evidence with operational realities.",
      },
      {
        title: "The framework",
        body: "The Diversification Threshold Model brings together risk pressure, opportunity signals and the cost or feasibility of diversification. It translates these considerations into structured strategic outcomes, from maintaining the existing structure to phased or strategic diversification.",
      },
    ],
    outcome:
      "Best Graduation Project Award - International Business / Export Merchandising. The resulting framework offers a structured way to consider risk, opportunity and implementation feasibility together.",
    metrics: [
      { value: "4", label: "Primary research interviews" },
      { value: "3", label: "Decision dimensions" },
      { value: "2026", label: "Graduation project" },
    ],
    resources: [
      {
        title: "Graduation presentation",
        href: "/documents/triburg-graduation-project.pdf",
        format: "PDF",
      },
      {
        title: "Research poster",
        href: "/documents/triburg-research-poster.pdf",
        format: "PDF",
      },
      {
        title: "Graduation project award",
        href: "/images/graduation-award.webp",
        format: "Image",
      },
    ],
    preview: {
      src: "/images/triburg-preview.webp",
      alt: "Diversification Threshold Model from Astha’s graduation project",
      caption: "The decision framework from the graduation presentation.",
    },
    note: "Academic research completed in 2026. Trade-policy observations reflect the study period; the model is a research framework, not a claim of implemented business results.",
  },
  {
    number: 2,
    slug: "house-of-kosha",
    title: "Craft, commerce & customer connection.",
    shortTitle: "House of Kosha",
    category: "Industry",
    context: "House of Kosha · Internship",
    period: "Jun - Nov 2025",
    role: "E-Commerce Intern",
    cover: "kosha",
    summary:
      "Bringing operational structure and a customer-focused approach to a handcrafted accessories brand’s online presence.",
    intro:
      "At House of Kosha, I worked across the Shopify catalogue, visual merchandising, marketplace outreach and customer engagement. My internship project explored a framework for improving the customer experience.",
    tags: ["Shopify", "Visual merchandising", "Customer engagement"],
    sections: [
      {
        title: "A stronger online storefront",
        body: "Reviewed the desktop and mobile website and supported improvements to search, product information, variants and online presentation. Managed product uploads, categorisation and inventory updates across 250–300 products/SKUs.",
      },
      {
        title: "Connecting with the market",
        body: "Reached out to 50+ marketplaces and retail partners, contributing to collaborations with 10+ marketplace and distribution partners. Supported brand outreach to 150+ influencers, stylists and celebrities.",
      },
      {
        title: "The operations behind the experience",
        body: "Supported engagement using a 400+ customer database, alongside line sheets, inventory records and product information. The project connected backend consistency with a more considered customer journey.",
      },
    ],
    outcome:
      "Practical experience connecting product information, visual presentation, partner outreach and customer communication across a D2C fashion business.",
    metrics: [
      { value: "250–300", label: "Products / SKUs managed" },
      { value: "10+", label: "Partner collaborations contributed to" },
      { value: "400+", label: "Customer database supported" },
    ],
    resources: [
      {
        title: "Internship project presentation",
        href: "/documents/house-of-kosha-portfolio.pdf",
        format: "PDF",
      },
      {
        title: "Internship certificate",
        href: "/images/kosha-certificate.webp",
        format: "Image",
      },
    ],
    preview: {
      src: "/images/kosha-preview.webp",
      alt: "House of Kosha website review and product-page examples",
      caption:
        "Storefront observations and product-page improvements from the internship presentation.",
    },
  },
  {
    number: 3,
    slug: "avora-brand-strategy",
    title: "Building a world around a brand.",
    shortTitle: "AVORA - elegance in motion",
    category: "Brand strategy",
    context: "NIFT Mumbai · Academic group project",
    period: "MFM · 2024–2026",
    role: "Group project contributor",
    cover: "avora",
    summary:
      "A luxury footwear concept connecting positioning, brand identity, personality and future brand extensions.",
    intro:
      "AVORA is an academic luxury footwear brand concept centred on movement, craftsmanship and contemporary elegance. Our team developed the strategic foundations and a coherent visual and verbal brand world.",
    tags: ["Brand positioning", "Brand identity", "Luxury footwear"],
    sections: [
      {
        title: "Positioning the concept",
        body: "Defined a vision, mission and values around expressive movement, craft and a refined wearing experience. The concept brings heritage-inspired craftsmanship into a contemporary luxury positioning.",
      },
      {
        title: "Making identity tangible",
        body: "Used a brand identity prism, personality frameworks and archetypes to connect the intended customer with the brand’s visual language, tone and experience.",
      },
      {
        title: "Thinking beyond the first product",
        body: "Explored brand architecture, positioning choices and possible extensions into related product and lifestyle categories. These were strategic proposals developed for the academic brief.",
      },
    ],
    outcome:
      "A comprehensive brand-management presentation connecting an original footwear concept with established strategy frameworks.",
    resources: [
      {
        title: "AVORA brand-management presentation",
        href: "/documents/avora-brand-management.pdf",
        format: "PDF",
      },
    ],
    preview: {
      src: "/images/avora-preview.webp",
      alt: "AVORA brand identity prism",
      caption:
        "Brand identity prism developed as part of the AVORA group project.",
    },
    note: "Academic group concept, not a commercially launched brand. The attached presentation credits the complete project team; individual task ownership is not specified in the source material.",
  },
  {
    number: 4,
    slug: "neoniche-brand-experiences",
    title: "Turning brand briefs into experiences.",
    shortTitle: "NeoNiche - brand experiences",
    category: "Industry",
    context: "NeoNiche · Client servicing",
    period: "Jun - Sept 2026",
    role: "Management Trainee - Client Servicing",
    cover: "neoniche",
    summary:
      "Research, concept development and execution support across automotive, mobility and consumer-brand activations.",
    intro:
      "At NeoNiche Integrated Solutions, I supported experiential marketing and brand activation projects, connecting client objectives with concepts, visual references, spatial planning and delivery.",
    tags: [
      "Client servicing",
      "Experiential marketing",
      "Project coordination",
    ],
    sections: [
      {
        title: "Understanding the brief",
        body: "Supported 15+ briefs involving brands including Bentley, Ducati, Renault, Toyota, Hero, Honda and Sharp. Research and ideation decks translated objectives into themes and consumer-experience directions.",
      },
      {
        title: "Developing the experience",
        body: "Helped assemble concept decks, references and execution plans, connecting creative direction with the practical considerations of venues, spatial layouts and internal-team coordination.",
      },
      {
        title: "Supporting delivery",
        body: "Supported 4–5 project executions and contributed to the private preview of the Bentley Continental GTS in India, alongside a 250-attendee Sharp Partner Meet and awards ceremony.",
      },
    ],
    outcome:
      "Experience moving between research, client-facing concepts and the coordination required for on-ground delivery.",
    metrics: [
      { value: "15+", label: "Briefs supported" },
      { value: "4–5", label: "Executions supported" },
      { value: "250", label: "Attendees at Sharp Partner Meet" },
    ],
    resources: [
      {
        title: "Experience in the resume",
        href: "/documents/astha-singh-resume.pdf",
        format: "PDF",
      },
    ],
  },
  {
    number: 5,
    slug: "apparel-export-merchandising",
    title: "From purchase order to shipment.",
    shortTitle: "The apparel export lifecycle",
    category: "Merchandising",
    context: "NIFT Mumbai · Academic group project",
    period: "MFM · 2024–2026",
    role: "Group project contributor",
    cover: "export",
    summary:
      "An apparel export-order study connecting sampling, costing, production planning and shipment documentation.",
    intro:
      "This academic project follows the steps of an apparel export order and the responsibilities that connect buyers, buying houses, vendors and production teams.",
    tags: ["BOM", "Cost sheets", "Time & action planning"],
    sections: [
      {
        title: "Mapping the order lifecycle",
        body: "Studied the sequence from receipt of a purchase order through sampling, material sourcing, production, quality checks and final shipment.",
      },
      {
        title: "Planning the detail",
        body: "The coursework brings together a time-and-action plan, bill of materials, garment costing and export/import documentation to show how commercial and operational decisions connect.",
      },
      {
        title: "Quality as part of delivery",
        body: "Supporting coursework includes a quality-assurance manual covering factory visits, documentation, inspection and garment-quality considerations.",
      },
    ],
    outcome:
      "A practical academic foundation in the documentation and coordination that support apparel export merchandising.",
    resources: [
      {
        title: "Export-merchandising presentation",
        href: "/documents/apparel-export-merchandising.pdf",
        format: "PDF",
      },
      {
        title: "Garment cost sheet",
        href: "/documents/garment-cost-sheet.xlsx",
        format: "XLSX",
      },
      {
        title: "Quality-assurance coursework",
        href: "/documents/quality-assurance-manual.pdf",
        format: "PDF",
      },
    ],
    preview: {
      src: "/images/export-preview.webp",
      alt: "Apparel supply-chain stages from the export-merchandising presentation",
      caption: "Mapping the apparel supply chain in the group presentation.",
    },
    note: "Academic coursework and production simulation; this is not a claim of managing a commercial export order independently.",
  },
  {
    number: 6,
    slug: "apparel-consumer-research",
    title: "Understanding the small-brand consumer.",
    shortTitle: "What makes shoppers choose?",
    category: "Research",
    context: "NIFT Mumbai · Academic group research",
    period: "MFM · 2024–2026",
    role: "Group research contributor",
    cover: "research",
    summary:
      "Primary research with 211 respondents exploring consumer preferences and challenges facing small apparel brands.",
    intro:
      "The Evolving Environment of Small Apparel Brands: Current Trends and Market Dynamics examines purchase behaviour, pricing, product preferences, brand discovery and the role of trust.",
    tags: ["Consumer behaviour", "Primary research", "Market insight"],
    sections: [
      {
        title: "Listening to consumers",
        body: "The team studied responses from 211 participants to understand preferences across apparel categories, purchase channels, price bands and factors influencing brand choice.",
      },
      {
        title: "Connecting evidence to decisions",
        body: "The report examines product quality, pricing, customer reviews, social-media discovery and return experiences as considerations in the customer journey.",
      },
      {
        title: "Recommendations with context",
        body: "Recommendations use the marketing mix to connect product value, pricing, channels and promotion. The report acknowledges a limited sample and a concentration of younger respondents, so findings are interpreted within that context.",
      },
    ],
    outcome:
      "A research report translating survey observations into recommendations for small apparel brands, with the study’s limitations explicitly considered.",
    metrics: [{ value: "211", label: "Survey respondents" }],
    resources: [
      {
        title: "Consumer-research report",
        href: "/documents/apparel-consumer-research.docx",
        format: "DOCX",
      },
    ],
    note: "Academic group research. Findings reflect the study sample and should not be treated as representative of all apparel consumers.",
  },
  {
    number: 7,
    slug: "rolex-luxury-brand-analysis",
    title: "Reading the codes of enduring luxury.",
    shortTitle: "Rolex - the language of luxury",
    category: "Brand strategy",
    context: "NIFT Mumbai · Academic analysis",
    period: "MFM · 2024–2026",
    role: "Luxury brand-management coursework",
    cover: "rolex",
    summary:
      "An academic study of brand heritage, identity and the positioning of an established luxury watchmaker.",
    intro:
      "This luxury brand-management presentation examines Rolex as a case study in heritage, craftsmanship, brand meaning and long-term positioning.",
    tags: ["Luxury management", "Brand heritage", "Positioning"],
    sections: [
      {
        title: "Heritage as an asset",
        body: "The presentation traces milestones in the brand’s history and examines how its identity draws on precision, craftsmanship and achievement.",
      },
      {
        title: "Interpreting brand meaning",
        body: "Explores the relationship between product characteristics, recognition and the symbolic value associated with a luxury brand.",
      },
      {
        title: "A management perspective",
        body: "Uses the case to develop a more considered understanding of how an established luxury brand communicates distinction and continuity.",
      },
    ],
    outcome:
      "An academic lens on the strategic role of heritage and consistent brand meaning in luxury management.",
    resources: [
      {
        title: "Luxury brand-analysis presentation",
        href: "/documents/rolex-brand-analysis.pdf",
        format: "PDF",
      },
    ],
    preview: {
      src: "/images/rolex-preview.webp",
      alt: "Opening slide of the Rolex luxury brand-management coursework",
      caption: "Opening visual from the academic brand-analysis presentation.",
    },
    note: "Independent academic analysis; no employment, client relationship or affiliation with Rolex is implied.",
  },
  {
    number: 8,
    slug: "global-sourcing-strategy",
    title: "Sourcing decisions in a changing world.",
    shortTitle: "Global sourcing & trade",
    category: "Research",
    context: "NIFT Mumbai · Academic group project",
    period: "2025",
    role: "Group project contributor",
    cover: "sourcing",
    summary:
      "Exploring trade, shipping disruption, supplier relationships and the commercial implications of sourcing choices.",
    intro:
      "This global-sourcing coursework combines a hypothetical shipping-disruption scenario with broader research into trade relationships and apparel sourcing.",
    tags: ["Global sourcing", "Trade research", "Supply-chain risk"],
    sections: [
      {
        title: "Working through disruption",
        body: "A hypothetical Threadly London apparel-order scenario examines how shipping delays and increased landed costs affect launch timing, margins and buyer–supplier negotiations.",
      },
      {
        title: "Balancing commercial interests",
        body: "The group explores risk sharing, sourcing relationships, flexibility and sustainability as interconnected dimensions of global sourcing.",
      },
      {
        title: "Trade in context",
        body: "An accompanying India–EU research paper considers the evolution of trade negotiations and areas of collaboration as understood during the 2025 study period.",
      },
    ],
    outcome:
      "Coursework connecting global events to the cost, timing and relationship decisions faced by apparel businesses.",
    resources: [
      {
        title: "Global-sourcing presentation",
        href: "/documents/global-sourcing.pdf",
        format: "PDF",
      },
      {
        title: "India–EU trade research",
        href: "/documents/india-eu-trade-research.pdf",
        format: "PDF",
      },
    ],
    preview: {
      src: "/images/sourcing-preview.webp",
      alt: "Hypothetical Threadly London sourcing scenario",
      caption:
        "A hypothetical apparel-order scenario from the group coursework.",
    },
    note: "Academic analysis prepared in 2025. The scenario is hypothetical and policy references reflect the source period.",
  },
  {
    number: 9,
    slug: "global-fashion-marketing",
    title: "Global brands. Local market choices.",
    shortTitle: "Mango & Forever 21",
    category: "Brand strategy",
    context: "NIFT Mumbai · Academic group project",
    period: "MFM · 2024–2026",
    role: "Group project contributor",
    cover: "marketing",
    summary:
      "A comparative marketing study of Mango and Forever 21, with recommendations for the Indian market.",
    intro:
      "This global-marketing presentation compares two fashion brands through their marketing mix, positioning and approach to Indian consumers.",
    tags: ["Marketing mix", "Competitive analysis", "Indian market"],
    sections: [
      {
        title: "Comparing market approaches",
        body: "Studied product, price, place and promotion to understand how the brands approach assortment, retail formats, digital channels and consumer relevance.",
      },
      {
        title: "Identifying opportunities",
        body: "The group explored Gen Z relevance, market expansion, channel choices and sustainability communication as possible areas for strategic development.",
      },
      {
        title: "From analysis to proposals",
        body: "Recommendations included smaller store formats, localised communication, capsule concepts and stronger digital approaches. These are coursework proposals, not implemented brand initiatives.",
      },
    ],
    outcome:
      "A comparative presentation translating brand observations into market-specific strategic recommendations.",
    resources: [
      {
        title: "Global-marketing presentation",
        href: "/documents/global-marketing.pdf",
        format: "PDF",
      },
    ],
    preview: {
      src: "/images/marketing-preview.webp",
      alt: "Product and price analysis in the marketing-mix study",
      caption: "A marketing-mix comparison from the academic presentation.",
    },
    note: "Academic analysis of the source period; no client relationship with either brand is implied.",
  },
  {
    number: 10,
    slug: "apparel-supply-chain",
    title: "Seeing the system behind the product.",
    shortTitle: "Apparel supply-chain management",
    category: "Merchandising",
    context: "NIFT Mumbai · Academic group project",
    period: "MFM · 2024–2026",
    role: "Group project contributor",
    cover: "supply",
    summary:
      "A supply-chain and e-commerce management study centred on Optus Impex and apparel operations.",
    intro:
      "This group project examines a women’s-wear manufacturing and trading business to understand the connections between sourcing, operations and distribution.",
    tags: ["Supply-chain management", "Apparel operations", "Sourcing"],
    sections: [
      {
        title: "Understanding the business",
        body: "The presentation introduces Optus Impex and its role in manufacturing, trading and connecting with domestic and global suppliers.",
      },
      {
        title: "Following the product",
        body: "The coursework studies the operational context of apparel supply chains and the coordination needed across the businesses involved.",
      },
      {
        title: "Connecting functions",
        body: "The project builds a systems-level understanding of how sourcing and supply-chain decisions connect with the wider fashion business.",
      },
    ],
    outcome:
      "A group presentation applying supply-chain and e-commerce management coursework to an apparel-business case.",
    resources: [
      {
        title: "Supply-chain management presentation",
        href: "/documents/supply-chain-management.pdf",
        format: "PDF",
      },
    ],
    preview: {
      src: "/images/supply-chain-preview.webp",
      alt: "Supply-chain and e-commerce management presentation cover with team credits",
      caption:
        "The group’s supply-chain and e-commerce management presentation.",
    },
  },
];
