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
  { label: "Resources", id: "resources", path: "/resources", hasMenu: true },
  { label: "News & Blog", id: "blog", path: "/blog", hasMenu: true },
  { label: "About Us", id: "about", path: "/about", hasMenu: true },
  { label: "My Account", id: "dashboard", path: "/dashboard", hasMenu: true },
  { label: "Contact Us", id: "enquiry", path: "/enquiry", hasMenu: false },
]

// Defining this as a Record ensures we can access it via navConfig[menuId] safely
export const navConfig: Record<string, NavCategory[]> = {
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
        { name: "Pipe Fittings", link: "product-grid/pipe-fittings" },
        { name: "Weld Fittings", link: "/products/weld-fittings" },
        { name: "Tube clamps", link: "/products/tube-clamps" },
      ],
    },
    {
      id: "valves",
      label: "Valves",
      link: "/valves",
      items: [
        { name: "Needle Valves", link: "/needle-valves" },
        { name: "Ball Valves", link: "/product-grid/ball-valves" },
        { name: "Check Valves", link: "/valves/pcv" },
        { name: "Relief Valves", link: "/valves/relief-valves" },
        { name: "Gauge Root Valves", link: "/products/gauge-root-valves" },
      ],
    },
    {
      id: "manifolds",
      label: "Manifolds",
      link: "/products/valve-manifolds",
      items: [
        { name: "2-Valve Manifolds", link: "/product-grid/2-way-manifolds" },
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
        { name: "New Partnership", link: "/blog/panam-valves-rg-fluid-power-partnership" },
        { name: "Double Block And Bleed Valves", link: "/blog/double-blog-and-bleed" },
        { name: "Check Valves Blog", link: "/blog/check-valves-blog" },
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
  ],
}
