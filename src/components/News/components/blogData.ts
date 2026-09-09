// src/data/blogData.ts

export interface BlogPost {
  slug: string
  title: string
  category: string
  author: string
  readTime: string
  date: string
  image: string
  excerpt: string
}

export const blogs: BlogPost[] = [
  {
    slug: "how-to-specify-industrial-and-control-valves",
    title: "How to Specify Industrial and Control Valves: From Cv and Pressure Class to Materials",
    category: "Technical Guide",
    author: "Steven Kassi",
    date: "Aug 20, 2026",
    readTime: "8 min read",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/reflief-valves/relief-cover.jpg",
    excerpt: "A fast, defensible route from application to purchase order — start with the function, then decode Cv and pressure drop, know when to move to MP/HP cone & thread ratings, and lock down end connections, seats and metallurgy. Mapped throughout to Panam ranges, with a full specifier's FAQ.",
  },
  {
    slug: "check-valve-guide",
    title: "Check Valves for High-Pressure Instrumentation: PCV Series Guide",
    category: "Technical Guide",
    author: "Steven Kassi",
    date: "June 22, 2026",
    readTime: "7 min read",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/check-valves/c1.png",
    excerpt: "Panam's PCV Series check valves are engineered for backflow prevention up to 6,000 psig in SS316, Duplex, Monel, and Hastelloy. This guide covers cracking pressures, end connections, hydrogen and NACE service options, and how to specify a complete check valve package from UK stock.",
  },
  {
    slug: "stainless-steel-ball-valve-guide",
    title: "Stainless Steel Ball Valves: 2-Way, 3-Way and High Pressure Guide",
    category: "Technical Guide",
    author: "Steven Kassi",
    date: "June 22, 2026",
    readTime: "8 min read",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-2-S-04-FF-1.png",
    excerpt: "Panam designs and manufactures precision-engineered SS316 ball valves in 2-way, 3-way, high-bore and high pressure configurations up to 20,000 psi. This guide covers specifications, seat materials, end connections, HP series pressure ratings, and how to specify correctly for hydrogen, oil & gas, and process service.",
  },
  {
    slug: "uk-industrial-valves-buyers-guide",
    title: "UK Buyer's Guide to Industrial Valves: Types, Standards, Materials and Fast-Track Supply",
    category: "Technical Guide",
    author: "Steven Kassi",
    date: "June 22, 2026",
    readTime: "9 min read",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-3-S-O4-OD-A.png",
    excerpt: "This UK-focused buyer's guide explains how to select industrial valves by function, standards and materials across energy, process, hydrogen and utilities. Covers key valve types, API and EN documentation, Cv and sizing, high-pressure and cryogenic duties, plus installation and lifecycle planning — with guidance on fast-track procurement from UK stock.",
  },
  {
    slug: "manifold-valves-for-accurate-safe-instrumentation",
    title: "Smarter Instrumentation: Choosing the Right Manifolds for Accurate, Safe Measurement",
    category: "Technical Guide",
    author: "Steven Kassi",
    date: "May 25, 2026",
    readTime: "8 min read",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/5VM/5VM_Cover.jpg",
    excerpt:
      "This guide explains how to choose and install manifolds for reliable DP flow, level, and pressure measurements. It compares 2-, 3-, and 5-valve configurations, monoflange versus traditional builds, and integral double block and bleed options. You'll also learn hydrogen and gas-specific considerations, installation best practices, and how close-coupled mounting and standardised architectures can boost accuracy and reduce maintenance effort.",
  },
  {
    slug: "npt-vs-bspp-vs-bspt-thread-standards",
    title: "NPT vs BSPP vs BSPT Threads for Instrumentation Fittings",
    category: "Technical Guide",
    author: "Steven Kassi",
    date: "May 27, 2026",
    readTime: "8 min read",
    image: "https://pblol2.blob.core.windows.net/panam-images/website-media/thread-thumbnail.jpg",
    excerpt: "This guide explains how NPT, BSPP and BSPT pipe threads differ in form, taper and sealing so you can identify them quickly in the field. It covers practical steps for thread ID, proven seal methods, common compatibility myths, and when to use adapters.",
  },

  // ─── POST 5 ───────────────────────────────────────────────────────────────
  {
    slug: "panam-valves-rg-fluid-power-partnership",
    title: "Announcing a Strategic Partnership between Panam Valves and R&G Fluid Power Group",
    category: "News",
    author: "Sejal Raina",
    date: "March 5, 2026",
    readTime: "4 min read",
    image: "https://pblol2.blob.core.windows.net/panam-images/about/leadership-image.jpeg",
    excerpt: "Panam Valves and R&G Fluid Power Group announce a new strategic partnership, uniting trusted products, industry expertise, and a shared commitment to reliability, quality, and performance.",
  },
  {
    slug: "double-blog-and-bleed",
    title: "Double Block and Bleed Valves for Positive Isolation in Critical Service",
    category: "Technical Guide",
    author: "Sejal Raina",
    date: "March 23, 2026",
    readTime: "6 min read",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB-pxp.jpg", // Add your Cloudinary or hosted URL here
    excerpt: "Achieve zero energy and protect your team during shutdowns. This guide provides a safety-led foundation for specifying and executing Double Block and Bleed (DB&B) correctly.",
  },
  {
    slug: "check-valves-blog",
    title: "Industrial Valve Basics: What Do Check Valves Do and Why They Matter",
    category: "Technical Guide",
    author: "Steven Kassi",
    date: "March 25, 2026",
    readTime: "6 min read",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/check-valves/c-cover.png",
    excerpt: "Explore the mechanics of non-return valves (NRV), from cracking pressure to backflow prevention, and learn why they are the quiet guardians of industrial piping.",
  },
  {
    slug: "hydrogen-blog",
    title: "Hydrogen Valves: Engineering for High-Pressure Net-Zero Infrastructure",
    category: "Technical Guide",
    author: "Sejal Raina",
    date: "March 31, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1200",
    excerpt: "As the global energy sector pivots toward H₂, specialized valving is critical. Learn about the material science and engineering required to mitigate embrittlement and leakage in high-pressure hydrogen systems.",
  },
  {
    slug: "swivel-gauge-blog",
    title: "Swivel Gauge Adapters – Essential Guide to Pressure Gauge Positioning",
    category: "Technical Guide",
    author: "Sejal Raina",
    date: "April 2026",
    readTime: "6 min read",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/swivel-gauge/PSGA-8N-SS - JPG.jpg",
    excerpt: "In precision instrumentation, the reliability of a pressure measurement system depends on every component in the connection chain. Learn how swivel gauge adapters enable 360° positioning, prevent mechanical stress, and ensure measurement accuracy in demanding industrial environments.",
  },
  {
    slug: "three-way-valve-l-port-t-port-guide",
    title: "Three-Way Valves Made Simple: Functions, Flow Paths and Real-World Uses",
    category: "Technical Guide",
    author: "Steven Kassi",
    date: "April 24, 2026",
    readTime: "7 min read",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-3-S-O4-OD-A.png",
    excerpt: "Get the porting right and you reduce leak paths, speed up maintenance and cut panel space. This guide breaks down L-port vs T-port internals, typical flow paths and real-world applications — plus a full specifying checklist and commissioning tips to avoid the most common mistakes.",
  },
  {
    slug: "hp-series-needle-valves-high-pressure-flow-control",
    title: "Built for Extreme Pressure: A Closer Look at the PANAM HP Series Needle Valves",
    category: "Technical Guide",
    author: "Sejal Raina",
    date: "May 5, 2026",
    readTime: "8 min read",
    image: "https://pblol2.blob.core.windows.net/panam-images/blog/needle-valve-blog.jpeg",
    excerpt: "When pressure climbs past 30,000 PSI, ordinary flow control hardware stops being an option. This guide breaks down the PANAM HP Series — five pressure tiers up to 60,000 PSI, stem tip selection, materials, packing, and where these valves earn their keep in oil and gas, hydraulics, and instrumentation.",
  },
]
