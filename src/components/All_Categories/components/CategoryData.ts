import type { ProductforHomePage } from "./CategoryButton"

interface CategoryData {
  title: string
  id: string
  image: string
  products: ProductforHomePage[]
}

export const CATEGORIES: CategoryData[] = [
  {
    title: "Hydrogen Fittings & Valves",
    id: "hydrogen",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835400/street_elbow_-_bspp_-_jpg_hdsoes.jpg",
    products: [
      {
        name: "Hydrogen Valves",
        link: "/products/hydrogen-valve",
        description: "High-precision pressure control solutions designed to manage high-flow hydrogen systems with maximum safety and stability.",
      },
      {
        name: "Hydrogen Manifolds",
        link: "/products/hydrogen-manifolds",
        description: "Durable, leak-proof shut-off and check valves engineered specifically to handle the unique diffusion characteristics of hydrogen gas.",
      },
      {
        name: "Hydrogen Block & Bleed",
        link: "/products/hydrogen-double-block-and-bleed",
        description: "High-integrity connectors and adapters featuring specialized seals to ensure secure, vibration-resistant joins in hydrogen fuel lines.",
      },
      {
        name: "Hydrogen Filters",
        link: "/products/hydrogen-filters",
        description: "High-integrity connectors and adapters featuring specialized seals to ensure secure, vibration-resistant joins in hydrogen fuel lines.",
      },
      {
        name: "Hydrogen HP Fittings",
        link: "/products/hydrogen-high-pressure-fittings",
        description: "High-integrity connectors and adapters featuring specialized seals to ensure secure, vibration-resistant joins in hydrogen fuel lines.",
      },
    ],
  },
  {
    title: "Instrumentation Fittings",
    id: "instrumentation-fittings",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769424806/union_-_jpg_x7siq3.jpg",
    products: [
      { name: "Tube Fittings", id: "tube-fittings", isProduct: true },
      { name: "37 JIC Fittings", id: "37-jic-fittings", isProduct: true },
      { name: "Pipe Fittings", id: "pipe-fittings", isProduct: true },
      { name: "Weld Fittings", id: "weld-fittings", isProduct: true },
      { name: "Swivel Gauge Adaptors", link: "/products/hydrogen/fittings" },
    ],
  },
  {
    title: "Valves",
    id: "valves",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835251/PBV-HB-S-M12-OD_-_JPG_uj1uay.jpg",
    products: [
      { name: "Needle Valves", link: "/products/needle-valves" },
      { name: "Ball Valves", link: "/products/ball-valves" },
      { name: "Check Valves", link: "/products/check-valves" },
      { name: "Relif Valves", link: "/products/relief-valves" },
      { name: "Gauge Root Valves", link: "/products/gauge-root-valves" },
    ],
  },

  {
    title: "Manifolds",
    id: "valve-manifolds",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768834959/3VM-SS-8-T_-_JPG_1_olp12u.jpg",
    products: [
      { name: "2-Valve ", link: "/products/2-way-valve-manifold" }, // Modal
      { name: "3-Valve ", link: "/products/3-way-valve-manifold" },
      { name: "5-Valve ", link: "/products/5-way-valve-manifold" },
    ],
  },

  {
    title: "Double Block and Bleed",
    id: "double-block-and-bleed-valves",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835558/mono_flange_-_1_-_JPEG_1_plsmpe.webp",
    products: [
      { name: "Flange to Flange ", id: "double-block-and-bleed-valves-flange-to-flange", isProduct: true },
      { name: "Flange to Pipe ", id: "double-block-and-bleed-valves-flange-to-pipe", isProduct: true },
      { name: "Pipe to Pipe ", id: "double-block-and-bleed-valves-pipe-to-pipe", isProduct: true },
    ],
  },
  {
    title: "Filters",
    id: "filters",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768988107/PTF-TB-04-15-SS_tujkjw.png",
    products: [
      { name: "T-Type Filter", id: "t-type-filter", isProduct: true },
      { name: "In-Line Filter", id: "in-line-filter", isProduct: true },
    ],
  },
  {
    title: "Quick Coupling & Hoses",
    id: "quick-coupling-and-hoses",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835400/street_elbow_-_bspp_-_jpg_hdsoes.jpg",
    products: [
      { name: "ISO-A", id: "iso-a", isProduct: true },
      { name: "ISO 16028", id: "iso-16028", isProduct: true },
      { name: "ISO 7241A", id: "iso-7241a", isProduct: true },
      { name: "ISO 7241B", id: "iso-7241b", isProduct: true },
      { name: "ISO 5675", id: "iso-5675", isProduct: true },
      { name: "SCREW TYPE", id: "screw-type", isProduct: true },
      { name: "Hoses", id: "hoses", isProduct: true },
    ],
  },

  {
    title: "Regulators And Others",
    id: "hydrogen",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835400/street_elbow_-_bspp_-_jpg_hdsoes.jpg",
    products: [
      { name: "Pressure Regulator", link: "/products/hydrogen/regulators" },
      { name: "Air Headers", link: "/products/hydrogen/valves" },
      { name: "Condensate Pts", link: "/products/hydrogen/fittings" },
      { name: "Flange Adaptors", link: "/products/hydrogen/fittings" },
    ],
  },
]
