export interface NavSubItem {
  name: string
  link?: string // The '?' makes the link optional!
}

export interface NavCategory {
  id: string
  label: string
  link: string
  items: NavSubItem[]
}

export interface NavConfig {
  products: NavCategory[]
  industries: NavCategory[]
  about: NavCategory[]
  news: NavCategory[]
  account: NavCategory[]
}
export const navConfig: NavConfig = {
  products: [
    {
      id: "hydrogen",
      label: "Hydrogen",
      link: "/products/hydrogen",
      items: [
        { name: "Hydrogen Valves", link: "/products/hydrogen-valves" },
        { name: "Hydrogen Manifolds", link: "/products/hydrogen-manifolds" },
        { name: "Hydrogen Block & Bleed", link: "/products/hydrogen-double-block-and-bleed" },
        { name: "Hydrogen Filters", link: "/products/hydrogen-filters" },
        { name: "Hydrogen HP Fittings", link: "/products/pipe-fittings-hydrogen" },
      ],
    },
    {
      id: "instrumentation",
      label: "Instrumentation Fittings",
      link: "/products/instrumentation-fittings",
      items: [
        { name: "Tube Fittings", link: "/products/tube-fittings" },
        { name: "37° JIC Fittings", link: "/products/37-jic-fittings" },
        { name: "Pipe Fittings", link: "/products/pipe-fittings" },
        { name: "Weld Fittings", link: "/products/weld-fittings" },
      ],
    },
    {
      id: "valves",
      label: "Valves",
      link: "/products/valves",
      items: [
        { name: "Needle Valves", link: "/products/needle-valves" },
        { name: "Ball Valves", link: "/products/ball-valves" },
        { name: "Check Valves", link: "/products/check-valves" },
        { name: "Relief Valves", link: "/products/relief-valves" },
        { name: "Gauge Root Valves", link: "/products/gauge-root-valves" },
      ],
    },
    {
      id: "manifolds",
      label: "Manifolds",
      link: "/products/valve-manifolds",
      items: [
        { name: "2-Valve Manifolds", link: "/products/2-way-valve-manifold" },
        { name: "3-Valve Manifolds", link: "/products/3-way-valve-manifold" },
        { name: "5-Valve Manifolds", link: "/products/5-way-valve-manifold" },
      ],
    },
    {
      id: "dbb",
      label: "Double Block and Bleed",
      link: "/products/double-block-and-bleed-valves",
      items: [
        { name: "Flange to Flange", link: "/products/double-block-and-bleed-valves" },
        { name: "Flange to Pipe", link: "/products/double-block-and-bleed-valves" },
        { name: "Pipe to Pipe", link: "/products/double-block-and-bleed-valves" },
      ],
    },
    {
      id: "filters",
      label: "Filters",
      link: "/products/filters",
      items: [
        { name: "T-Type Filter", link: "/products/filters" },
        { name: "In-Line Filter", link: "/products/filters" },
      ],
    },
    {
      id: "couplings",
      label: "Hose & Quick Coupling",
      link: "/products/quick-coupling-and-hoses",
      items: [
        { name: "ISO-A & ISO-B", link: "/products/quick-coupling-and-hoses" },
        { name: "ISO 16028 Flat Face", link: "/products/quick-coupling-and-hoses" },
        { name: "Screw Type Couplers", link: "/products/quick-coupling-and-hoses" },
        { name: "High Pressure Hoses", link: "/products/quick-coupling-and-hoses" },
      ],
    },
    {
      id: "tubing",
      label: "Tubing and Integrated Systems",
      link: "/products/tubing",
      items: [
        { name: "Tubing", link: "/products/tubing" },
        { name: "High Pressure Tubing", link: "/products/tubing" },
      ],
    },
    {
      id: "regulators",
      label: "Regulator And Transmitter",
      link: "/products/pressure-regulator-transmitter",
      items: [
        { name: "Pressure Regulators", link: "/products/pressure-regulator" },
        { name: "Pressure Transmitter", link: "/products/pressure-transmitter" },
      ],
    },
  ],
  industries: [
    {
      id: "marine",
      label: "Marine & Subsea",
      link: "/industries/marine-subsea",
      items: [
        { name: "Vessel Construction & Integration" },
        { name: "Marine Propulsion Fluid Control" },
        { name: "Ballast & Water Management" },
        { name: "Offshore Platform Instrumentation" }, // Replaced Engine for a broader subsea feel
        { name: "Deep-Sea Pressure Management" },
      ],
    },
    {
      id: "oil-gas",
      label: "Oil & Gas",
      link: "/industries/oil-gas",
      items: [{ name: "Upstream Exploration & Production (E&P)" }, { name: "Midstream Pipeline & Storage Infrastructure" }, { name: "Downstream Refining & Petrochemical Processing" }, { name: "Natural Gas Compression & Liquefaction (LNG)" }, { name: "Fugitive Emission & Environmental Control Systems" }],
    },
    {
      id: "Hydrogen",
      label: "Hydrogen",
      link: "/industries/hydrogen",
      items: [
        { name: "Upstream Exploration" },
        { name: "Midstream Pipelines" },
        { name: "Downstream Refining" },
        { name: "Petrochemical Plants" },
        { name: "Gas Processing"},
      ],
    },
    {
      id: "aerospace-defense",
      label: "Aerospace & Defense",
      link: "/industries/aerospace-defense",
      items: [{ name: "PEM & Alkaline Electrolyzer Stack Integration" }, { name: "High-Pressure Hydrogen Storage & Cascade Systems" }, { name: "Cryogenic Liquid Hydrogen (LH2) Fluid Management" }, { name: "Hydrogen Refuelling Station (HRS) Infrastructure" }, { name: "Fuel Cell Power Plant Instrumentation & Control" }, { name: "H2 Pipeline De-blending & Purification Stations" }],
    },
    {
      id: "food-beverages",
      label: "Food & Beverages",
      link: "/industries/food-beverages",
      items: [{ name: "Sanitary Process Automation & Fluid Control" }, { name: "Hygienic Beverage Distribution & Filling Lines" }, { name: "Clean-In-Place (CIP) & Sterilization Systems" }, { name: "High-Polish Instrumentation for Dairy Processing" }, { name: "Automated Ingredient Batching & Mixing Loops" }, { name: "Brewery & Distillery Fermentation Management" }],
    },
    {
      id: "chemicals-petrochemical",
      label: "Chemicals & Petrochemical",
      link: "/industries/chemicals-petrochemical",
      items: [{ name: "Corrosive & Aggressive Media Management Systems" }, { name: "High-Temperature & High-Pressure Process Loops" }, { name: "Hazardous Chemical Refining & Storage Infrastructure" }, { name: "Critical Instrumentation for Batch Reactor Control" }, { name: "Specialty Polymer & Fertilizer Production Lines" }, { name: "Toxic Gas Leak Detection & Fluid Isolation" }],
    },
  ],
  about: [
    {
      id: "company",
      label: "Our Company",
      link: "/about",
      items: [
        { name: "Mission & Vision",  },
        { name: "Manufacturing Excellence", },

        { name: "Quality Control" },
      ],
    },
  ],
  news: [
    {
      id: "updates",
      label: "Latest News",
      link: "/news",
      items: [
        { name: "Product Launches"},
        { name: "Exhibitions 2024"  },
        { name: "Corporate Events" },
      ],
    },
  ],
  account: [ // Change the key name here
    
    {
    id: "user-accunt",
    label: "General Enquiry",
    link: "/enquiry",
    items: [
      { name: "Profile",},
    ],
  },
   {
    id: "component-configuration",
    label: "Component Configuration",
    link: "/products",
    items: [
      { name: "Profile", },
    ],
  },{
    id: "user-account",
    label: "Order Tracking",
    link: "/account",
    items: [
      { name: "Profile",  },
    ],
  },
   
    
    {
    id: "user-acount",
    label: "Techncial Support",
    link: "/account",
    items: [
      { name: "Profile"},
    ],
  },
  ]
}
