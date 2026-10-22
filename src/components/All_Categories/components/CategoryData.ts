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
      { name: "Tube Fittings", link: "/instrumentation-fittings/tube-fittings" },
      { name: "37 JIC Fittings", link: "/instrumentation-fittings/jic-fittings" },
      { name: "Pipe Fittings", link: "/instrumentation-fittings/pipe-fittings" },
      { name: "Weld Fittings", link: "/instrumentation-fittings/weld-fittings" },
    ],
  },

  //filters
  {
    title: "Filters",
    id: "filters",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/filters/PTF-TB-04-15-SS_JPG-removebg-preview.png",
    products: [
      { name: "T-Type Filter", link: "/filters" },
      { name: "In-Line Filter", link: "/filters" },
      { name: "Filter Elements", link: "/filters" },
    ],
  },

  //quick couplings
  {
    title: "Quick Coupling & Tubing",
    id: "quick-coupling-and-hoses",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/quick-connector/PQC4-04-OD-F-SS.png",
    products: [
      { name: "Copulings", link: "/quick-coupling-and-hoses/quick-couplings" },
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
      link: "/high-pressure/needle-valves",
      description: "High-precision pressure control solutions designed to manage high-flow hydrogen systems with maximum safety and stability.",
    },
    {
      name: "Hydrogen Manifolds",
      link: "/high-pressure/2-valve-manifolds",
      description: "Durable, leak-proof shut-off and check valves engineered specifically to handle the unique diffusion characteristics of hydrogen gas.",
    },
    {
      name: "High Pressure Double Block & Bleed",
      link: "/high-pressure/double-block-and-valves",
      description: "High-integrity connectors and adapters featuring specialized seals to ensure secure, vibration-resistant joins in hydrogen fuel lines.",
    },
    {
      name: "Hydrogen Filters",
      link: "/high-pressure/cones-threaded-nipples",
      description: "High-integrity connectors and adapters featuring specialized seals to ensure secure, vibration-resistant joins in hydrogen fuel lines.",
    },
    {
      name: "High Pressure Fittings",
      link: "/high-pressure/ball-valves",
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
      { name: "Needle Valves", link: "/valves/needle-valves" },
      { name: "Ball Valves", link: "/valves/ball-valves" },
      { name: "Check Valves", link: "/valves/check-valves" },
      { name: "Relief Valves", link: "/valves/relief-valves" },
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
      { name: "2-Valve ", link: "/manifolds/2VM" }, // Modal
      { name: "3-Valve ", link: "/manifolds/3VM" },
      { name: "5-Valve ", link: "/manifolds/5VM" },
    ],
  },

  //dbb
  {
    title: "Double Block and Bleed",
    id: "double-block-and-bleed-valves",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/dbb/dbb-fire-safe-removebg.png",
    products: [
      { name: "Flange to Flange ", link: "/double-block-and-bleed-valves/flange-to-flange" },
      { name: "Flange to Pipe ", link: "/double-block-and-bleed-valves/flange-to-pipe" },
      { name: "Pipe to Pipe ", link: "/double-block-and-bleed-valves/pipe-to-pipe" },
    ],
  },

  //tubing
  {
    title: "Tubing",
    id: "tubing",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/tubing/TUBING_-_2-removebg-preview.png",
    products: [
      { name: "Tubing", link: "/quick-coupling-and-tubing/tubing" },
      { name: "High Pressure Tubing", link: "/quick-coupling-and-tubing/tubing" },
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
      { name: "Grab Sampling System", link: "/system-integration" },
      { name: "Air Header", link: "/system-integration" },
      { name: "Condensate Pots", link: "/system-integration" },
      { name: "Flange Adaptors", link: "/system-integration" },
    ],
  },
]
