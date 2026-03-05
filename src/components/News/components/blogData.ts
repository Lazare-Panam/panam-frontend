// src/data/blogData.ts

export interface BlogContent {
  type:
    | "paragraph"
    | "subheading"
    | "image"
    | "wrap-image"
    | "quote"
    | "list"
    | "numbered-list"
    | "divider"
  text?: string
  items?: string[]
  url?: string
  caption?: string
  side?: "left" | "right"
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
  takeaways: string[]
  body: BlogContent[]
}

export const blogs: BlogPost[] = [

  // ─── POST 5 ───────────────────────────────────────────────────────────────
  {
    slug: "panam-valves-rg-fluid-power-partnership",
    title: "Announcing a Strategic Partnership between Panam Valves and R&G Fluid Power Group",
    category: "News",
    author: "Panam Valves",
    date: "March 5, 2026",
    readTime: "4 min read",
    image:"https://res.cloudinary.com/dm9rmmemx/image/upload/v1769789155/WhatsApp_Image_2026-01-30_at_3.43.08_PM_stqorr.jpg",
    excerpt: "Panam Valves and R&G Fluid Power Group announce a new strategic partnership, uniting trusted products, industry expertise, and a shared commitment to reliability, quality, and performance.",
    takeaways: [
      "Panam Valves joins R&G's trusted distribution network",
      "50+ years of hydraulic expertise behind the partnership",
      "Integrated solutions for high-pressure applications",
    ],
    body: [
      {
        type: "paragraph",
        text: "We are pleased to announce a new strategic partnership between Panam Valves and R&G Fluid Power Group. Through this collaboration, Panam Valves will supply its Instrumentation Fittings Product to R&G Fluid Power Group, enhancing their portfolio with proven, high-performance solutions engineered for demanding industrial applications. This partnership unites trusted products, industry expertise, and a shared commitment to reliability, quality, and performance.",
      },
      {
        type: "subheading",
        text: "R&G Fluid Power Group – Company Background",
      },
      {
        type: "wrap-image",
        url: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1772714928/6b7891a2-7fb8-4d8b-97fc-5080c08eeca8.png",
        side: "left",
        text: "R&G Fluid Power Group is a group of UK based businesses with four divisions of expertise.  Industrial, Hydraulics, Gaskets and Sealing and Engineering. The hydraulics Division is made up of 8 hydraulic companies.  The hydraulic design and distribution services at R&G Fluid Power Group have been established for more than 50 years, and R&G are now one of the largest specialists in the UK. Supporting customers from concept through to completion, offering design, build, installation, and maintenance of complete hydraulic systems.",
      },
      {
        type: "paragraph",
        text: "From hydraulic hose and components, bespoke power units and cylinder repair to testrigs and manifold blocks, R&G Fluid Power Group combine deep technical knowledge with access to trusted brands.",
      },
      {
        type: "subheading",
        text: "Panam Valves - Company Background",
      },
      {
        type: "paragraph",
        text: "Panam Valves is a leading manufacturer of high-performance Industrial valves and Instrumentation fittings. With decades of engineering expertise, the company has built a strong reputation for delivering reliable, precision-engineered products designed to perform in demanding industrial environments. Their extensive product range includes pipe fittings, tube fittings, flare fittings and weld fittings.",
      },
      {
        type: "paragraph",
        text: "Driven by a focus on performance, safety, and durability, Panam continues to support global customers with products that combine robust design, superior materials, and stringent quality control, making them a trusted name in the valve manufacturing industry.",
      },
      {
        type: "subheading",
        text: "Why R&G Fluid Power Group Has Chosen Panam Valves",
      },
      {
        type: "paragraph",
        text: "Through this collaboration, R&G gains access to a high-quality, trusted range of precision-engineered valves from a well-established and reputable manufacturer. In addition, Panam's expanded product portfolio—now including hoses and quick coupling solutions —aligns closely with R&G's operational requirements and customer needs. Together, these solutions enable R&G to deliver enhanced value and more comprehensive offerings to their customers.",
      },
      {
        type: "paragraph",
        text: "Key benefits include:",
      },
      {
        type: "list",
        items: [
          "High-performance hose products proven in demanding industrial applications",
          "A dependable supply partner committed to consistent, long-term delivery",
          "Enhanced system capability through more complete, integrated solutions",
          "Strengthened technical credibility, enabling support for complex systems and critical applications",
        ],
      },
      {
        type: "subheading",
        text: "Strengthening industry to help customers",
      },
      {
        type: "paragraph",
        text: "Panam Valves and R&G bring together extensive industry experience and a shared commitment to delivering high-performance, reliable solutions. With a strong focus on high-pressure applications, Panam's engineered product portfolio is a natural complement to R&G's existing range, strengthening their ability to provide comprehensive solutions to customers.",
      },
      {
        type: "paragraph",
        text: "For customers already partnered with R&G, this long-term collaboration offers enhanced value by integrating Panam's trusted products into familiar applications. It ensures smoother procurement processes, access to local technical support, and greater confidence in solutions designed for performance-critical systems, ultimately enabling both companies to deliver more complete, high-quality outcomes to their clients.",
      },
      {
        type: "quote",
        text: "We are excited for the future of this collaboration and what it will bring!",
      },
    ],
  },
]