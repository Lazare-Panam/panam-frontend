import type { ProductforHomePage } from "./CategoryButton"

interface CategoryData {
  title: string
  id: string
  image: string
  products: ProductforHomePage[]
}

export const CATEGORIES: CategoryData[] = [
  //Fittings
  {
    title: "Instrumentation Fittings",
    id: "instrumentation-fittings",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769424806/union_-_jpg_x7siq3.jpg",
    products: [
      { name: "Tube Fittings", link: "/products/instrumentation-fittings/tube-fittings" },
      { name: "37 JIC Fittings", link: "/products/instrumentation-fittings/37-jic-fittings" },
      { name: "Pipe Fittings", link: "/products/instrumentation-fittings/pipe-fittings" },
      { name: "Weld Fittings", link: "/products/instrumentation-fittings/weld-fittings" },
      { name: "High Pressure Fittings", link: "/products/instrumentation-fittings/pipe-fittings-high-pressure" },
    ],
  },
  
  //filters
  {
    title: "Filters",
    id: "filters",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768988107/PTF-TB-04-15-SS_tujkjw.png",
    products: [
      { name: "T-Type Filter", link: "/products/filters" },
      { name: "In-Line Filter", link: "/products/filters" },
    ],
  },

  //quick couplings
  {
    title: "Quick Coupling & Hoses",
    id: "quick-coupling-and-hoses",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835400/street_elbow_-_bspp_-_jpg_hdsoes.jpg",
    products: [
      { name: "ISO-A", link: "/products/quick-coupling-and-hoses" },
      { name: "ISO 16028", link: "/products/quick-coupling-and-hoses" },
      { name: "ISO 7241A", link: "/products/quick-coupling-and-hoses" },
      { name: "ISO 7241B", link: "/products/quick-coupling-and-hoses" },
      { name: "ISO 5675", link: "/products/quick-coupling-and-hoses" },
      { name: "SCREW TYPE", link: "/products/quick-coupling-and-hoses" },
      { name: "Hoses", link: "/products/quick-coupling-and-hoses" },
    ],
  },

  //hydrogen
  {
    title: "Hydrogen Fittings & Valves",
    id: "hydrogen",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835400/street_elbow_-_bspp_-_jpg_hdsoes.jpg",
    products: [
      {
        name: "Hydrogen Valves",
        link: "/products/hydrogen/hydrogen-valves",
        description: "High-precision pressure control solutions designed to manage high-flow hydrogen systems with maximum safety and stability.",
      },
      {
        name: "Hydrogen Manifolds",
        link: "/products/hydrogen/hydrogen-manifolds",
        description: "Durable, leak-proof shut-off and check valves engineered specifically to handle the unique diffusion characteristics of hydrogen gas.",
      },
      {
        name: "Hydrogen Block & Bleed",
        link: "/products/hydrogen/hydrogen-double-block-and-bleed",
        description: "High-integrity connectors and adapters featuring specialized seals to ensure secure, vibration-resistant joins in hydrogen fuel lines.",
      },
      {
        name: "Hydrogen Filters",
        link: "/products/hydrogen/hydrogen-filters",
        description: "High-integrity connectors and adapters featuring specialized seals to ensure secure, vibration-resistant joins in hydrogen fuel lines.",
      },
      {
        name: "Hydrogen HP Fittings",
        link: "/products/hydrogen/pipe-fittings-hydrogen",
        description: "High-integrity connectors and adapters featuring specialized seals to ensure secure, vibration-resistant joins in hydrogen fuel lines.",
      },
    ],
  },

  //valves
  {
    title: "Valves",
    id: "valves",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835251/PBV-HB-S-M12-OD_-_JPG_uj1uay.jpg",
    products: [
      { name: "Needle Valves", link: "/products/valves/needle-valves" },
      { name: "Ball Valves", link: "/products/valves/ball-valves" },
      { name: "Check Valves", link: "/products/valves/check-valves" },
      { name: "Relief Valves", link: "/products/valves/relief-valves" },
      { name: "Gauge Root Valves", link: "/products/valves/gauge-root-valves" },
       { name: "Purge Valves", link: "/products/valves/purge-valves" },
    ],
  },

  //manifolds
  {
    title: "Manifolds",
    id: "valve-manifolds",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768834959/3VM-SS-8-T_-_JPG_1_olp12u.jpg",
    products: [
      { name: "2-Valve ", link: "/products/valve-manifolds/2-way-valve-manifold" }, // Modal
      { name: "3-Valve ", link: "/products/valve-manifolds/3-way-valve-manifold" },
      { name: "5-Valve ", link: "/products/valve-manifolds/5-way-valve-manifold" },
    ],
  },
  //tubing
  {
    title: "Tubing",
    id: "tubing",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770718728/HP_Tubings_chk8ms.jpg",
    products: [
      { name: "Tubing", link: "/products/tubing"},
      { name: "High Pressure Tubing", link: "/products/tubing"},
    ],
  },
  //dbb
  {
    title: "Double Block and Bleed",
    id: "double-block-and-bleed-valves",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835558/mono_flange_-_1_-_JPEG_1_plsmpe.webp",
    products: [
      { name: "Flange to Flange ", link: "/products/double-block-and-bleed-valves" },
      { name: "Flange to Pipe ", link: "/products/double-block-and-bleed-valves"},
      { name: "Pipe to Pipe ", link: "/products/double-block-and-bleed-valves"},
    ],
  },
 
  //regulators
  {
    title: "Regulators & Transmitter",
    id: "pressure-regulator-transmitter",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770726940/PRESSURE_TRANSMITTERS_-_2_-_JPEG_gu0les.jpg",
    products: [
      { name: "Pressure Transmitter", link: "/products/pressure-transmitter" },
    ],
  },

  
  //syustem integration
  {
    title: "System Integration",
    id: "system-integration",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1770727010/GRAB-SAMPLING-SYSTEM-PNG_n3glyc.png",
    products: [
      { name: "Grab Sampling System", link:"/products/system-integration"},
      { name: "Air Header", link:"/products/system-integration" },
      { name: "Condensate Pots", link:"/products/system-integration"},
      { name: "Flange Adaptors", link:"/products/system-integration" },
    ],
  },
]
