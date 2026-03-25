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
   
  },
  {
    slug: "double-blog-and-bleed",
    title: "Double Block and Bleed Valves for Positive Isolation in Critical Service",
    category: "Technical Guide",
    author: "Panam Valves",
    date: "March 23, 2026",
    readTime: "6 min read",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774281930/1a7621c7-a20d-419d-a0e5-a52262f06ff0_lid0um.jpg", // Add your Cloudinary or hosted URL here
    excerpt: "Achieve zero energy and protect your team during shutdowns. This guide provides a safety-led foundation for specifying and executing Double Block and Bleed (DB&B) correctly.",
  },
  {
    slug: "check-valves-blog",
    title: "Industrial Valve Basics: What Do Check Valves Do and Why They Matter",
    category: "Technical Guide",
    author: "Steven Kassi",
    date: "March 25, 2026",
    readTime: "6 min read",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768297321/PCV-S-08-FF-PNG_ctuujw.png",
    excerpt: "Explore the mechanics of non-return valves (NRV), from cracking pressure to backflow prevention, and learn why they are the quiet guardians of industrial piping.",
  },
]