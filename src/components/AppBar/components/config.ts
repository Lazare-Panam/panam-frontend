export const navConfig = {
  products: [
    {
      id: "hydrogen",
      label: "Hydrogen",
      link: "/products/hydrogen",
      items: [
        { name: "Hydrogen Valves", link: "/products/hydrogen/valves" },
        { name: "Hydrogen Manifolds", link: "/products/hydrogen/manifolds" },
        { name: "Hydrogen Block & Bleed", link: "/products/hydrogen/block-bleed" },
        { name: "Hydrogen Filters", link: "/products/hydrogen/filters" },
        { name: "Hydrogen HP Fittings", link: "/products/hydrogen/hp-fittings" },
      ],
    },
    {
      id: "instrumentation",
      label: "Instrumentation Fittings",
      link: "/products/instrumentation",
      items: [
        { name: "Tube Fittings", link: "/products/instrumentation/tube-fittings" },
        { name: "37° JIC Fittings", link: "/products/instrumentation/jic-fittings" },
        { name: "Pipe Fittings", link: "/products/instrumentation/pipe-fittings" },
        { name: "Weld Fittings", link: "/products/instrumentation/weld-fittings" },
        { name: "Swivel Gauge Adaptors", link: "/products/instrumentation/gauge-adaptors" },
      ],
    },
    {
      id: "valves",
      label: "Instrumentation Valves",
      link: "/products/valves",
      items: [
        { name: "Needle Valves", link: "/products/valves/needle" },
        { name: "Ball Valves", link: "/products/valves/ball" },
        { name: "Check Valves", link: "/products/valves/check" },
        { name: "Relief Valves", link: "/products/valves/relief" },
        { name: "Gauge Root Valves", link: "/products/valves/gauge-root" },
      ],
    },
    {
      id: "manifolds",
      label: "Manifolds",
      link: "/products/manifolds",
      items: [
        { name: "2-Valve Manifolds", link: "/products/manifolds/2-valve" },
        { name: "3-Valve Manifolds", link: "/products/manifolds/3-valve" },
        { name: "5-Valve Manifolds", link: "/products/manifolds/5-valve" },
        { name: "Air Header", link: "/products/manifolds/monoflanges" },
      ],
    },
    {
      id: "dbb",
      label: "Double Block and Bleed",
      link: "/products/dbb",
      items: [
        { name: "Flange to Flange", link: "/products/dbb/flange-to-flange" },
        { name: "Flange to Pipe", link: "/products/dbb/flange-to-pipe" },
        { name: "Pipe to Pipe", link: "/products/dbb/pipe-to-pipe" },
        { name: "Injection Quills", link: "/products/dbb/injection-quills" },
      ],
    },
    {
      id: "filter",
      label: "Filters",
      link: "/products/filter",
      items: [
        { name: "T-Type Filter", link: "/products/filter/t-type" },
        { name: "In-Line Filter", link: "/products/filter/inline" },
      ],
    },
    {
      id: "couplings",
      label: "Hose & Quick Coupling",
      link: "/products/couplings",
      items: [
        { name: "ISO-A & ISO-B", link: "/products/couplings/iso" },
        { name: "ISO 16028 Flat Face", link: "/products/couplings/flat-face" },
        { name: "Screw Type Couplers", link: "/products/couplings/screw-type" },
        { name: "High Pressure Hoses", link: "/products/couplings/hoses" },
      ],
    },

    {
      id: "tubing",
      label: "Tubing and Integrated Systems",
      link: "/products/tubing",
      items: [
        { name: "Tubing", link: "/products/regulators/pressure" },
        { name: "Tube Clamp", link: "/products/regulators/air-headers" },
        { name: "Pre-Fabricated Hook ups", link: "/products/regulators/condensate-pots" },
        { name: "Gas Grab Sampling", link: "/products/regulators/condensate-pots" },
        { name: "Condensate Pots", link: "/products/regulators/condensate-pots" },
      ],
    },
    {
      id: "regulators",
      label: "Regulator And Others",
      link: "/products/regulators",
      items: [
        { name: "Pressure Regulators", link: "/products/regulators/pressure" },
        { name: "Pressure Transmitter", link: "/products/regulators/pressure" },
        { name: "Pressure Gauges", link: "/products/regulators/pressure" },
        { name: "Temperature Gauges", link: "/products/regulators/air-headers" },
        { name: "Thermowell", link: "/products/regulators/flange-adaptors" },
        { name: "Pressure Transmitter", link: "/products/regulators/flange-adaptors" },
        { name: "Temperature Transmitter", link: "/products/regulators/flange-adaptors" },
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
