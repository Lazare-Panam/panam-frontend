export interface ProductforHomePage2 {
  name: string
  link: string
  description?: string
}

export interface CategoryData2 {
  title: string
  id: string
  image: string
  products: ProductforHomePage2[]
  seoDescription?: string
}

export const CATEGORIES2: CategoryData2[] = [

  
   {
      title: "High Pressure Fittings & Valves",
      id: "hydrogen",
      image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/hydrogen/1-removebg-preview.png",
      seoDescription: "Hydrogen-ready fittings, needle valves, ball valves and double block & bleed assemblies rated to 60,000 psi for high-pressure and hydrogen fuel infrastructure.",
      products: [
        {
          name: "High Pressure Fittings",
          link: "/high-pressure/fittings",
          description: "High-integrity connectors and adapters featuring specialized seals to ensure secure, vibration-resistant joins in hydrogen fuel lines.",
        },
        {
          name: "High Pressure Pipe Fittings",
          link: "/high-pressure/pipe-fittings",
          description: "High pressure pipe fittings in SS 316 — hex nipples, reducing hex nipples, couplings and adapters. NPT, ISO Parallel and 37° JIC. 10,000 to 15,000 psi.",
        },
        {
          name: "High Pressure Needle Valves",
          link: "/high-pressure/needle-valves",
          description: "High-precision pressure control solutions designed to manage high-flow hydrogen systems with maximum safety and stability.",
        },
        {
          name: "High Pressure Ball Valves",
          link: "/high-pressure/ball-valves",
          description: "Durable, leak-proof shut-off and check valves engineered specifically to handle the unique diffusion characteristics of hydrogen gas.",
        },
        {
          name: "High Pressure DBB",
          link: "/high-pressure/double-block-and-valves",
          description: "High-integrity double block and bleed assemblies providing safe double isolation and controlled bleed-off for high-pressure hydrogen and process fluid systems.",
        },
        
      ],
  },

  //Fittings
  {
    title: "Instrumentation Fittings",
    id: "instrumentation-fittings",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/weld-fittings/union_elbow_-_jpg-removebg-preview.png",
    seoDescription: "Tube, JIC, pipe and weld fittings in stainless steel for leak-tight instrumentation and process connections across oil & gas, chemical and industrial systems.",
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
    seoDescription: "In-line and T-type instrumentation filters protecting high-pressure gas and liquid systems from particulate contamination.",
    products: [
      { name: "T-Type Filter", link: "/filters/t-type" },
      { name: "In-Line Filter", link: "/filters/i-type" },
      { name: "Filter Elements", link: "/filters/elements" },
    ],
  },

  //quick couplings
  {
    title: "Quick Coupling & Tubing",
    id: "quick-coupling-and-hoses",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/quick-connector/PQC4-04-OD-F-SS.png",
    seoDescription: "Quick-connect couplings and precision tubing for fast, secure fluid and gas line connections in industrial and instrumentation applications.",
    products: [
      { name: "Couplings", link: "/quick-coupling-and-tubing/quick-coupling" },
    ],
  },

  //hydrogen

  //valves
  {
    title: "Valves",
    id: "valves",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/valves/ball-valves/PBV-2-S-04-FF_-_JPG-removebg-preview.png",
    seoDescription: "Needle, ball, check and relief valves in SS316, Duplex and exotic alloys for isolation, throttling and overpressure protection across critical flow control systems.",
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
    seoDescription: "2-, 3- and 5-valve instrument manifolds in 6K and 10K pressure classes for transmitter isolation, calibration and venting.",
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
    seoDescription: "DBB valve assemblies in flange-to-flange, flange-to-pipe and pipe-to-pipe configurations for safe double isolation and pressure bleed-off.",
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
    seoDescription: "Stainless steel instrumentation tubing rated for high-pressure gas and liquid service, compatible with our full tube fitting range.",
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
    seoDescription: "Pressure transmitters and regulation solutions for accurate process monitoring and control in demanding industrial environments.",
    products: [{ name: "Pressure Transmitter", link: "/products/pressure-transmitter" }],
  },

  //syustem integration
  {
    title: "System Integration",
    id: "system-integration",
    image: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/system-integration/Img11695-removebg-preview.png",
    seoDescription: "Grab sampling systems, air headers, condensate pots and flange adaptors engineered for turnkey instrumentation skid integration.",
    products: [
      { name: "Grab Sampling System", link: "/system-integration" },
      { name: "Air Header", link: "/system-integration" },
      { name: "Condensate Pots", link: "/system-integration" },
      { name: "Flange Adaptors", link: "/system-integration" },
    ],
  },
]
