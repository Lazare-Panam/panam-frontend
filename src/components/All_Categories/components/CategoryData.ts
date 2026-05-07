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
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/weld-fittings/union_elbow_-_jpg-removebg-preview.png",
    products: [
      { name: "Tube Fittings", link: "/products/instrumentation-fittings/tube-fittings" },
      { name: "37 JIC Fittings", link: "/jic-fittings" },
      { name: "Pipe Fittings", link: "/pipe-fittings" },
      { name: "Weld Fittings", link: "/products/instrumentation-fittings/weld-fittings" },
      { name: "High Pressure Fittings", link: "/products/instrumentation-fittings/pipe-fittings-high-pressure" },
    ],
  },

  //filters
  {
    title: "Filters",
    id: "filters",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/filters/PTF-TB-04-15-SS_JPG-removebg-preview.png",
    products: [
      { name: "T-Type Filter", link: "/products/filters" },
      { name: "In-Line Filter", link: "/products/filters" },
    ],
  },

  //quick couplings
  {
    title: "Quick Coupling & Hoses",
    id: "quick-coupling-and-hoses",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/quick-connector/PQC4-04-OD-F-SS.png",
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
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/hydrogen/1-removebg-preview.png",
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
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/valves/ball-valves/PBV-2-S-04-FF_-_JPG-removebg-preview.png",
    products: [
      { name: "Needle Valves", link: "/products/valves/needle-valves" },
      { name: "Ball Valves", link: "/product-grid/ball-valves" },
      { name: "Check Valves", link: "valves/relief-valves" },
      { name: "Relief Valves", link: "/products/valves/relief-valves" },
      { name: "Gauge Root Valves", link: "/products/valves/gauge-root-valves" },
      { name: "Purge Valves", link: "/products/valves/purge-valves" },
    ],
  },

  //manifolds
  {
    title: "Manifolds",
    id: "valve-manifolds",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/manifolds/5VM/5VM-SS-8-R_-_JPG-removebg-preview.png",
    products: [
      { name: "2-Valve ", link: "/product-grid/2-way-manifolds" }, // Modal
      { name: "3-Valve ", link: "/products/valve-manifolds/3-way-valve-manifold" },
      { name: "5-Valve ", link: "/products/valve-manifolds/5-way-valve-manifold" },
    ],
  },

  //dbb
  {
    title: "Double Block and Bleed",
    id: "double-block-and-bleed-valves",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/dbb/dbb-fire-safe-removebg.png",
    products: [
      { name: "Flange to Flange ", link: "/products/double-block-and-bleed-valves" },
      { name: "Flange to Pipe ", link: "/products/double-block-and-bleed-valves" },
      { name: "Pipe to Pipe ", link: "/products/double-block-and-bleed-valves" },
    ],
  },

  //tubing
  {
    title: "Tubing",
    id: "tubing",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/tubing/TUBING_-_2-removebg-preview.png",
    products: [
      { name: "Tubing", link: "/products/tubing" },
      { name: "High Pressure Tubing", link: "/products/tubing" },
    ],
  },

  //regulators
  {
    title: "Regulators & Transmitter",
    id: "pressure-regulator-transmitter",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/pressure-transmitters/DPT-5-removebg-preview.png",
    products: [{ name: "Pressure Transmitter", link: "/products/pressure-transmitter" }],
  },

  //syustem integration
  {
    title: "System Integration",
    id: "system-integration",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/system-integration/Img11695-removebg-preview.png",
    products: [
      { name: "Grab Sampling System", link: "/products/system-integration" },
      { name: "Air Header", link: "/products/system-integration" },
      { name: "Condensate Pots", link: "/products/system-integration" },
      { name: "Flange Adaptors", link: "/products/system-integration" },
    ],
  },
]
