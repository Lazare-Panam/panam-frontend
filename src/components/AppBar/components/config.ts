export interface NavSubItem {
  name: string
  link?: string
  // Optional 3rd menu level: the series/sub-categories that live under this item
  // (e.g. Needle Valves -> IB / HB / HP / SB / Mini). Rendered as a flyout column.
  children?: NavSubItem[]
}
export const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", "Arial", sans-serif'

export interface NavCategory {
  id: string
  label: string
  link: string
  items: NavSubItem[]
}
// Add this below your navConfig object
export const NAV_LINKS = [
  { label: "Products", id: "products", path: "/products", hasMenu: true },
  { label: "About Us", id: "about", path: "/about", hasMenu: true },
  { label: "Resources", id: "resources", path: "/resources", hasMenu: true },
  { label: "News & Blog", id: "blog", path: "/blog", hasMenu: true },
  { label: "Contact Us", id: "enquiry", path: "/enquiry", hasMenu: false },
  { label: "My Account", id: "dashboard", path: "/dashboard", hasMenu: true },
]

// Defining this as a Record ensures we can access it via navConfig[menuId] safely
export const navConfig: Record<string, NavCategory[]> = {
  products: [
    {
      id: "hydrogen",
      label: "Hydrogen / High Pressure",
      link: "/high-pressure",
      items: [
        { name: "High Pressure Needle Valves", link: "/high-pressure/needle-valves" },
        { name: "HP Double Block & Bleed", link: "/high-pressure/double-block-and-valves" },
        { name: "HP Ball Valves", link: "/high-pressure/ball-valves" },
        { name: "HP Cone & Threaded Nipples", link: "/high-pressure/cones-threaded-nipples" },
        { name: "HP 2-Valve Manifolds", link: "/high-pressure/2-valve-manifolds" },
        {
          name: "High Pressure Fittings",
          link: "/high-pressure/fittings",
          children: [
            { name: "Connectors", link: "/high-pressure/fittings/connectors" },
            { name: "Unions", link: "/high-pressure/fittings/unions" },
            { name: "Adaptors", link: "/high-pressure/fittings/adaptors" },
            { name: "Elbows, Tees & Cross", link: "/high-pressure/fittings/elbows-tees-cross" },
            { name: "End Connections", link: "/high-pressure/fittings/end-connections" },
            { name: "Seals & Glands", link: "/high-pressure/fittings/seals-glads" },
          ],
        },
        {
          name: "High Pressure Pipe Fittings",
          link: "/high-pressure/pipe-fittings",
          children: [
            { name: "Hex Nipples", link: "/high-pressure/pipe-fittings/hex-nipples" },
            { name: "Hex Couplings", link: "/high-pressure/pipe-fittings/hex-couplings" },
            { name: "Adapters", link: "/high-pressure/pipe-fittings/adapters" },
            { name: "Elbows", link: "/high-pressure/pipe-fittings/elbows" },
            { name: "Tees & Crosses", link: "/high-pressure/pipe-fittings/tees-crosses" },
            { name: "Plugs & Caps", link: "/high-pressure/pipe-fittings/plugs-caps" },
          ],
        },
      ],
    },
    {
      id: "instrumentation",
      label: "Instrumentation Fittings",
      link: "/instrumentation-fittings",
      items: [
        {
          name: "Tube Fittings",
          link: "/instrumentation-fittings/tube-fittings",
          children: [
            { name: "Connectors & Elbows", link: "/instrumentation-fittings/tube-fittings/connectors" },
            { name: "Unions", link: "/instrumentation-fittings/tube-fittings/union" },
            { name: "Reducers", link: "/instrumentation-fittings/tube-fittings/reducer" },
            { name: "Adapters", link: "/instrumentation-fittings/tube-fittings/adapter" },
            { name: "Port Connectors", link: "/instrumentation-fittings/tube-fittings/port-connector" },
            { name: "Weld Gauge Connectors", link: "/instrumentation-fittings/tube-fittings/weld-gauge" },
            { name: "Accessories", link: "/instrumentation-fittings/tube-fittings/accessories" },
            { name: "Dielectric & Gaskets", link: "/instrumentation-fittings/tube-fittings/die-electric" },
          ],
        },
        {
          name: "37° JIC Fittings",
          link: "/instrumentation-fittings/jic-fittings",
          children: [
            { name: "All JIC Fittings", link: "/instrumentation-fittings/jic-fittings/all" },
            { name: "Connectors", link: "/instrumentation-fittings/jic-fittings/connectors" },
            { name: "Unions & Swivels", link: "/instrumentation-fittings/jic-fittings/unions-swivel" },
            { name: "Adapters & Reducers", link: "/instrumentation-fittings/jic-fittings/adapters-reducers" },
            { name: "Elbows", link: "/instrumentation-fittings/jic-fittings/elbows" },
            { name: "Tees", link: "/instrumentation-fittings/jic-fittings/tees" },
            { name: "Plugs, Caps & Nuts", link: "/instrumentation-fittings/jic-fittings/plugs-caps-nuts" },
          ],
        },
        {
          name: "Pipe Fittings",
          link: "/instrumentation-fittings/pipe-fittings",
          children: [
            { name: "All Pipe Fittings", link: "/instrumentation-fittings/pipe-fittings/all" },
            { name: "Nipples & Couplings", link: "/instrumentation-fittings/pipe-fittings/nipples-couplings" },
            { name: "Unions & Connectors", link: "/instrumentation-fittings/pipe-fittings/unions-connectors" },
            { name: "Elbows", link: "/instrumentation-fittings/pipe-fittings/elbows" },
            { name: "Tees & Cross", link: "/instrumentation-fittings/pipe-fittings/tees-cross" },
            { name: "Adapters & Plugs", link: "/instrumentation-fittings/pipe-fittings/adapters-plugs" },
          ],
        },
        {
          name: "Weld Fittings",
          link: "/instrumentation-fittings/weld-fittings",
          children: [
            { name: "All Weld Fittings", link: "/instrumentation-fittings/weld-fittings/all" },
            { name: "Connectors", link: "/instrumentation-fittings/weld-fittings/connectors" },
            { name: "Elbows", link: "/instrumentation-fittings/weld-fittings/elbows" },
            { name: "Tees", link: "/instrumentation-fittings/weld-fittings/tees" },
          ],
        },

        {
          name: "Tube Clamps",
          link: "/instrumentation-fittings/tube-clamps",
          children: [
            { name: "Twin Series", link: "/instrumentation-fittings/tube-clamps/twin-series" },
            { name: "Single Layer", link: "/instrumentation-fittings/tube-clamps/single-layer" },
            { name: "Double Layer", link: "/instrumentation-fittings/tube-clamps/double-layer" },
            { name: "Heavy Single Layer", link: "/instrumentation-fittings/tube-clamps/heavy-single-layer" },
            { name: "Heavy Double Layer", link: "/instrumentation-fittings/tube-clamps/heavy-double-layer" },
          ],
        },
      ],
    },
    {
      id: "valves",
      label: "Valves",
      link: "/valves",
      items: [
        {
          name: "Needle Valves",
          link: "/valves/needle-valves",
          children: [
            { name: "IB Series — Integral Bonnet", link: "/valves/needle-valves/needle-valves-ib" },
            { name: "SB Series — Heavy-Duty Bar Stock", link: "/valves/needle-valves/needle-valves-sb" },
            { name: "HB Series — Block & Bleed", link: "/valves/needle-valves/needle-valves-hb" },
            { name: "HP Series — High Pressure Forged", link: "/valves/needle-valves/needle-valves-hp" },
            { name: "Mini Series — Compact", link: "/valves/needle-valves/needle-valves-mini" },
          ],
        },
        {
          name: "Ball Valves",
          link: "/valves/ball-valves",
          children: [
            { name: "Two-Way Ball Valves", link: "/valves/ball-valves/two-way" },
            { name: "Three-Way Ball Valves", link: "/valves/ball-valves/three-way" },
            { name: "High-Bore Ball Valves", link: "/valves/ball-valves/high-bore" },
          ],
        },
        { name: "Check Valves", link: "/valves/check-valves" },
        { name: "Relief Valves", link: "/valves/relief-valves" },
        { name: "Gauge Root Valves", link: "/products/valves/gauge-root-valves" },
      ],
    },
    {
      id: "manifolds",
      label: "Manifolds",
      link: "/manifolds",
      items: [
        { name: "2-Valve Manifolds", link: "/manifolds/2VM" },
        { name: "3-Valve Manifolds", link: "/manifolds/3VM" },
        { name: "5-Valve Manifolds", link: "/manifolds/5VM" },
      ],
    },
    {
      id: "dbb",
      label: "Double Block and Bleed",
      link: "/double-block-and-bleed-valves",
      items: [
        { name: "Flange to Flange", link: "/double-block-and-bleed-valves/flange-to-flange" },
        { name: "Flange to Pipe", link: "/double-block-and-bleed-valves/flange-to-pipe" },
        { name: "Pipe to Pipe", link: "/double-block-and-bleed-valves/pipe-to-pipe" },
      ],
    },
    {
      id: "sbb",
      label: "Single Block and Bleed",
      link: "/single-block-and-bleed-valves",
      items: [
        { name: "Monoflange", link: "/single-block-and-bleed-valves/monoflange" },
        { name: "Flange to Pipe", link: "/single-block-and-bleed-valves/flange-to-pipe" },
        { name: "Block & Bleed", link: "/single-block-and-bleed-valves/block-and-bleed" },
      ],
    },
    {
      id: "filters",
      label: "Filters",
      link: "/filters",
      items: [
        { name: "T-Type Filter", link: "/filters/t-type" },
        { name: "In-Line Filter", link: "/filters/i-type" },
      ],
    },
    {
      id: "couplings",
      label: "Tubing & Quick Coupling",
      link: "/quick-coupling-and-tubing",
      items: [
        { name: "Quick Coupling", link: "/quick-coupling-and-tubing/quick-coupling" },
        { name: "SS Tubing", link: "/quick-coupling-and-tubing/tubing" },
      ],
    },
    {
      id: "regulators",
      label: "Regulator And Transmitter",
      link: "/system-integration",
      items: [
        { name: "Pressure Regulators", link: "/system-integration" },
        { name: "Pressure Transmitter", link: "/system-integration" },
      ],
    },
  ],
  about: [
    {
      id: "company",
      label: "Our Company",
      link: "/about",
      items: [
        { name: "Mission & Vision", link: "/about#mission" },
        { name: "Manufacturing Excellence", link: "/about#manufacturing" },
        { name: "Quality Control", link: "/about#quality" },
      ],
    },
    {
      id: "industries-nested",
      label: "Industries",
      link: "/industries",
      items: [
        { name: "Marine & Subsea", link: "/industries/marine-subsea" },
        { name: "Oil & Gas", link: "/industries/oil-gas" },
        { name: "Hydrogen", link: "/industries/hydrogen" },
        { name: "Aerospace & Defense", link: "/industries/aerospace-defense" },
      ],
    },
  ],
  blog: [
    {
      id: "updates",
      label: "Latest News",
      link: "/blog",
      items: [
        { name: "3-Valve Manifolds Explained", link: "/blog/3-valve-manifold-operation-guide" },
        { name: "Swagelok Alternative Tube Fittings", link: "/blog/swagelok-alternative-tube-fittings" },
        { name: "UK Industrial Valves Buyer's Guide", link: "/blog/uk-industrial-valves-buyers-guide" },
        { name: "Manifold Valves for Accurate, Safe Instrumentation Measurement", link: "/blog/manifold-valves-for-accurate-safe-instrumentation" },
        { name: "New Partnership", link: "/blog/panam-valves-rg-fluid-power-partnership" },
        { name: "Double Block And Bleed Valves", link: "/blog/double-block-and-bleed" },
        { name: "Check Valves Blog", link: "/blog/check-valves-blog" },
        { name: "Hydrogen Valves Blog", link: "/blog/hydrogen-blog" },
        { name: "Swivel Gauge Adapters Blog", link: "/blog/swivel-gauge-blog" },
        { name: "Ball Valves Blog", link: "/blog/three-way-valve-l-port-t-port-guide" },
        { name: "Needle Valves Blog", link: "/blog/hp-series-needle-valves-high-pressure-flow-control" },
        { name: "NPT vs BSPP vs BSPT Blog", link: "/blog/npt-vs-bspp-vs-bspt-thread-standards" },
      ],
    },
  ],
  dashboard: [
    {
      id: "general-enquiry",
      label: "General Enquiry",
      link: "/enquiry",
      items: [{ name: "New Request", link: "/enquiry" }],
    },
    {
      id: "config-tools",
      label: "Component Configuration",
      link: "/products",
      items: [{ name: "Component Configuration", link: "/products" }],
    },
    {
      id: "order",
      label: "Order Tracking",
      link: "/dashboard",
      items: [{ name: "Track Your Order" }],
    },
    {
      id: "ts",
      label: "Technical Support",
      link: "/catalogPDFs",
      items: [{ name: "Resources" }],
    },
  ],
  resources: [
    {
      id: "certificates",
      label: "Certificates",
      link: "/certificates",
      items: [
        { name: "QMS Certifications", link: "/certificates/qms" },
        { name: "Type Test Reports", link: "/certificates/type-reports" },
      ],
    },
    {
      id: "catalogs",
      label: "Catalogs",
      link: "/catalogPdfs",
      items: [{ name: "All Catalogs", link: "/catalogPdfs" }],
    },
    {
      id: "cad-files",
      label: "CAD & STEP Files",
      link: "/cad-step-files",
      items: [{ name: "Browse by Category", link: "/cad-step-files" }],
    },
  ],
}
