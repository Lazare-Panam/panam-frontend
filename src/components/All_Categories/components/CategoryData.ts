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
      { name: "Hydrogen Regulators", link: "/products/hydrogen/regulators" },
      { name: "Hydrogen Valves", link: "/products/hydrogen/valves" },
      { name: "Hydrogen Fittings", link: "/products/hydrogen/fittings" },
    ],
  },
  {
    title: "Instrumentation & Fittings",
    id: "insturmentation",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835400/street_elbow_-_bspp_-_jpg_hdsoes.jpg",
    products: [
      { name: "Hydrogen Regulators", link: "/products/hydrogen/regulators" },
      { name: "Hydrogen Valves", link: "/products/hydrogen/valves" },
      { name: "Hydrogen Fittings", link: "/products/hydrogen/fittings" },
    ],
  },
  {
    title: "Valves",
    id: "valves",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835251/PBV-HB-S-M12-OD_-_JPG_uj1uay.jpg",
    products: [
      { name: "Needle ", link: "/products/needle-valves" },
      { name: "Ball ", link: "/products/ball-valves" },
      { name: "Check ", link: "/products/check-valves" },
      { name: "Relif ", link: "/products/relief-valves" },
      { name: "Gauge Root ", link: "/products/gauge-root-valves" },
    ],
  },

  {
    title: "Manifolds",
    id: "valve-manifolds",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768834959/3VM-SS-8-T_-_JPG_1_olp12u.jpg",
    products: [
      { name: "2-Valve ", id: "2-way-valve-manifold", isProduct: true }, // Modal
      { name: "3-Valve ", id: "3-way-valve-manifold", isProduct: true },
      { name: "5-Valve ", id: "5-way-valve-manifold", isProduct: true },
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
      { name: "Flange to Flange ", id: "double-block-and-bleed-valves-flange-to-flange", isProduct: true },
      { name: "Flange to Pipe ", id: "double-block-and-bleed-valves-flange-to-pipe", isProduct: true },
      { name: "Pipe to Pipe ", id: "double-block-and-bleed-valves-pipe-to-pipe", isProduct: true },
    ],
  },
  {
    title: "Quick Coupling & Hoses",
    id: "hydrogen",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835400/street_elbow_-_bspp_-_jpg_hdsoes.jpg",
    products: [
      { name: "Hydrogen Regulators", link: "/products/hydrogen/regulators" },
      { name: "Hydrogen Valves", link: "/products/hydrogen/valves" },
      { name: "Hydrogen Fittings", link: "/products/hydrogen/fittings" },
    ],
  },

  {
    title: "Regulators And Others",
    id: "hydrogen",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835400/street_elbow_-_bspp_-_jpg_hdsoes.jpg",
    products: [
      { name: "Hydrogen Regulators", link: "/products/hydrogen/regulators" },
      { name: "Hydrogen Valves", link: "/products/hydrogen/valves" },
      { name: "Hydrogen Fittings", link: "/products/hydrogen/fittings" },
    ],
  },
]
