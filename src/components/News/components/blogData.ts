// src/data/blogData.ts

export interface BlogContent {
  type: "paragraph" | "subheading" | "list" | "quote" | "image" | "wrap-section"
  text?: string
  items?: string[]
  url?: string
  caption?: string
}

export interface BlogPost {
  slug: string
  title: string
  category: string
  author: string
  readTime: string
  date: string
  image: string
  excerpt: string
  body: BlogContent[]
}

export const blogs: BlogPost[] = [
  {
    slug: "h2-material-selection",
    title: "Material Selection for Hydrogen Service: Engineering Against Embrittlement",
    category: "Technical Insight",
    author: "Panam Engineering Dept.",
    readTime: "12 min read",
    date: "February 12, 2026",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    excerpt: "Selecting the right alloys for valve bodies is a safety imperative in the growing hydrogen economy.",
    body: [
      { type: "paragraph", text: "Hydrogen molecules are exceptionally small, allowing them to penetrate the crystalline structure of metals. This phenomenon, known as Hydrogen Induced Cracking (HIC), can lead to catastrophic failure in high-pressure systems. As the industry pivots toward a hydrogen-based economy, the demand for high-integrity instrumentation has never been higher." },
      { type: "subheading", text: "The 12% Nickel Rule" },
      {
        type: "wrap-section",
        url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
        text: "For high-pressure hydrogen service, austenitic stainless steels like 316/316L are preferred, but only when the nickel content is strictly controlled to be above 12%. This specific concentration prevents the formation of martensite during cold working, which is a primary gateway for embrittlement.",
      },
      {
        type: "paragraph",
        text: "When nickel levels fall below this threshold, the material's face-centered cubic (FCC) structure becomes less stable. Under the stress of high-pressure hydrogen (often exceeding 700 bar in refueling stations), the metal can undergo a phase transformation. This makes the valve body brittle, leading to microscopic fissures that eventually propagate into a full-scale breach.",
      },
      { type: "paragraph", text: "In addition to nickel content, the surface finish of the internal components plays a vital role. Micro-scratches or machining marks can act as focal points for hydrogen accumulation. At Panam, we utilize specialized electro-polishing techniques to minimize these surface irregularities, ensuring a uniform barrier against molecular penetration." },
      { type: "quote", text: "Safety in hydrogen infrastructure isn't just a design choice; it is found in the chemistry of the metal itself." },
      {
        type: "paragraph",
        text: "Furthermore, engineers must consider the 'Hydrogen Environment Embrittlement' (HEE) factor. Unlike internal HIC, HEE occurs from the outside in, triggered by the pressurized gas in the line. This requires not just high-nickel alloys, but also rigorous testing protocols like slow strain rate testing (SSRT) to validate material performance in real-world conditions.",
      },
      { type: "list", items: ["Verification of Material Test Reports (MTRs) for Ni > 12.5%", "ISO 15848-1 Fugitive Emission Compliance for H2 sealing", "Vickers Hardness testing to ensure levels stay below 22 HRC", "Advanced NDT (Non-Destructive Testing) post-machining"] },
    ],
  },
  {
    slug: "dbb-safety-guide",
    title: "The Critical Role of Double Block & Bleed (DBB) in Maintenance",
    category: "Safety",
    author: "Safety Compliance Div.",
    readTime: "15 min read",
    date: "January 15, 2026",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
    excerpt: "Understanding how DBB valves provide a verifiable safety barrier for downstream work.",
    body: [
      { type: "paragraph", text: "In high-pressure piping, a single valve is often insufficient to guarantee the safety of technicians during downstream maintenance. If a single seat fails, the pressurized medium can leak into the workspace with lethal force. Double Block and Bleed (DBB) systems mitigate this by providing two independent layers of isolation." },
      { type: "subheading", text: "Redundancy and Verifiable Isolation" },
      {
        type: "wrap-section",
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
        text: "The DBB configuration consists of two primary block valves and a third 'bleed' valve located in the cavity between them. This setup replaces the traditional 'spool piece' or double-valve-and-tee method, significantly reducing the physical footprint and weight of the manifold.",
      },
      { type: "paragraph", text: "When maintenance is required, both primary block valves are closed, and the bleed valve is opened to the atmosphere. If the first block valve leaks, the fluid is safely diverted out of the bleed port rather than reaching the secondary valve. This provides a 'zero-energy' state that is essential for Lock-Out Tag-Out (LOTO) procedures." },
      { type: "paragraph", text: "Modern engineering has evolved these into 'Modular DBB' units. By integrating these three functions into a single forged body, we eliminate multiple flanged connections—which are statistically the most likely points for leaks in high-vibration environments such as offshore platforms or gas compression stations." },
      { type: "quote", text: "If the bleed valve shows zero pressure, you have a verified seal—and your crew has a safe workspace." },
      { type: "paragraph", text: "We also see an increasing trend in the use of 'Double Isolation and Bleed' (DIB) valves. While similar to DBB, DIB provides two seats in a single valve that can each block pressure from either direction. This is critical for high-integrity applications where pressure can back-flow from the downstream side." },
    ],
  },
]
