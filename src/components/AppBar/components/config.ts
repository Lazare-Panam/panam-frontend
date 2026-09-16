export interface NavSubItem {
  name: string
  link?: string
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
        { name: "High Pressure Fittings", link: "/high-pressure/fittings" },
        { name: "High Pressure Pipe Fittings", link: "/high-pressure/pipe-fittings" },
      ],
    },
    {
      id: "instrumentation",
      label: "Instrumentation Fittings",
      link: "/instrumentation-fittings",
      items: [
        { name: "Tube Fittings", link: "/instrumentation-fittings/tube-fittings" },
        { name: "37° JIC Fittings", link: "/instrumentation-fittings/jic-fittings" },
        { name: "Pipe Fittings", link: "/instrumentation-fittings/pipe-fittings" },
        { name: "Weld Fittings", link: "/instrumentation-fittings/weld-fittings" },

        { name: "Tube Clamps", link: "/instrumentation-fittings/tube-clamps" },
      ],
    },
    {
      id: "valves",
      label: "Valves",
      link: "/valves",
      items: [
        { name: "Needle Valves", link: "/valves/needle-valves" },
        { name: "Ball Valves", link: "/valves/ball-valves" },
        { name: "Check Valves", link: "/valves/check-valves" },
        { name: "Relief Valves", link: "/valves/relief-valves" },
        { name: "Gauge Root Valves", link: "/products/gauge-root-valves" },
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
        { name: "UK Industrial Valves Buyer's Guide", link: "/blog/uk-industrial-valves-buyers-guide" },
        { name: "Manifold Valves for Accurate, Safe Instrumentation Measurement", link: "/blog/manifold-valves-for-accurate-safe-instrumentation" },
        { name: "New Partnership", link: "/blog/panam-valves-rg-fluid-power-partnership" },
        { name: "Double Block And Bleed Valves", link: "/blog/double-blog-and-bleed" },
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
        { name: "Registrations & Approvals", link: "/certificates/registrations" },
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
