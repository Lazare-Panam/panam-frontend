export const navConfig = {
  products: [
    {
      id: "hydrogen",
      label: "Hydrogen",
      link: "/products/hydrogen",
      items: [
        { name: "Hydrogen Valves", link: "/products/hydrogen-valve" },
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
        { name: "Tube Fittings", link: "/products/fittings" },
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
      link: "/products/filter",
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
        { name: "High Pressure Tubinh", link: "/products/tubing" },
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
      link: "/industries/marine",
      items: [
        { name: "Shipbuilding", link: "/industries/marine/shipbuilding" },
        { name: "Propulsion Systems", link: "/industries/marine/propulsion" },
        { name: "Ballast Water Treatment", link: "/industries/marine/ballast" },
        { name: "Marine Engine Components", link: "/industries/marine/engine" },
      ],
    },
    {
      id: "oil-gas",
      label: "Oil & Gas",
      link: "/industries/oil-gas",
      items: [
        { name: "Upstream Exploration", link: "/industries/oil-gas/upstream" },
        { name: "Midstream Pipelines", link: "/industries/oil-gas/midstream" },
        { name: "Downstream Refining", link: "/industries/oil-gas/downstream" },
        { name: "Petrochemical Plants", link: "/industries/oil-gas/petrochemical" },
        { name: "Gas Processing", link: "/industries/oil-gas/gas-processing" },
      ],
    },
    {
      id: "Hydrogen",
      label: "Hydrogen",
      link: "/industries/oil-gas",
      items: [
        { name: "Upstream Exploration", link: "/industries/oil-gas/upstream" },
        { name: "Midstream Pipelines", link: "/industries/oil-gas/midstream" },
        { name: "Downstream Refining", link: "/industries/oil-gas/downstream" },
        { name: "Petrochemical Plants", link: "/industries/oil-gas/petrochemical" },
        { name: "Gas Processing", link: "/industries/oil-gas/gas-processing" },
      ],
    },
    {
      id: "renewables",
      label: "Aerospace & Defense",
      link: "/industries/renewables",
      items: [
        { name: "Hydrogen Electrolysers", link: "/industries/renewables/hydrogen" },
        { name: "Wind Turbine Hydraulics", link: "/industries/renewables/wind" },
        { name: "Solar Thermal Systems", link: "/industries/renewables/solar" },
        { name: "Biofuel Processing", link: "/industries/renewables/biofuel" },
        { name: "Geothermal Energy", link: "/industries/renewables/geothermal" },
      ],
    },
    {
      id: "automotive",
      label: "Food & Beverages",
      link: "/industries/automotive",
      items: [
        { name: "Testing Rigs", link: "/industries/automotive/testing" },
        { name: "Fuel Injection Systems", link: "/industries/automotive/fuel-injection" },
        { name: "Brake Line Fittings", link: "/industries/automotive/brake" },
        { name: "Cooling Systems", link: "/industries/automotive/cooling" },
        { name: "Assembly Line Automation", link: "/industries/automotive/assembly" },
      ],
    },
    {
      id: "agriculture",
      label: "Chemicals & Petrochemical",
      link: "/industries/agriculture",
      items: [
        { name: "Irrigation Systems", link: "/industries/agriculture/irrigation" },
        { name: "Fertilizer Spraying", link: "/industries/agriculture/fertilizer" },
        { name: "Tractor Hydraulics", link: "/industries/agriculture/tractor" },
        { name: "Grain Processing", link: "/industries/agriculture/grain" },
        { name: "Pesticide Handling", link: "/industries/agriculture/pesticide" },
      ],
    },
  ],
  about: [
    {
      id: "company",
      label: "Our Company",
      link: "/about/company",
      items: [
        { name: "Mission & Vision", link: "/about/mission" },
        { name: "Manufacturing Excellence", link: "/about/manufacturing" },
        { name: "Global Presence", link: "/about/global" },
        { name: "Quality Control", link: "/about/global" },
      ],
    },
  ],
  news: [
    {
      id: "updates",
      label: "Latest News",
      link: "/news/updates",
      items: [
        { name: "Product Launches", link: "/news/product-launches" },
        { name: "Exhibitions 2024", link: "/news/exhibitions" },
        { name: "Corporate Events", link: "/news/events" },
      ],
    },
    {
      id: "resources",
      label: "Resources",
      link: "/news/resources",
      items: [
        { name: "Technical Blogs", link: "/news/blogs" },
        { name: "White Papers", link: "/news/white-papers" },
        { name: "Case Studies", link: "/news/case-studies" },
      ],
    },
  ],
}
