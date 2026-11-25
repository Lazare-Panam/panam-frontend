import { Link as RouterLink } from "react-router-dom"
import { Box, Button, Container, Divider, Typography } from "@mui/material"
import { PRODUCT_GROUPS, PRODUCT_SECTIONS } from "../../productRoutes"

// HTML sitemap: one crawlable hub linking every page on the site — all structural pages (categories,
// listings, industries, guides, directories) AND every individual product SKU, grouped by category.
// Linked sitewide from the footer and by a button on the homepage, so pages that previously had a
// single inbound link gain another from a well-linked page. Rendered with the same headings +
// outlined-button links as the Product Index so the styling/typography matches the rest of the site.
interface SitemapLink {
  label: string
  to: string
}

const ButtonGroup = ({ title, links }: { title: string; links: SitemapLink[] }) => (
  <Box component="section" sx={{ mb: 5 }}>
    <Typography component="h2" variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
      {title}
    </Typography>
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {links.map(({ label, to }) => (
        <Button key={to} component={RouterLink} to={to} variant="outlined" size="small" sx={{ textTransform: "none" }}>
          {label}
        </Button>
      ))}
    </Box>
  </Box>
)

// ── Structural (non-SKU) pages ──────────────────────────────────────────────
const STRUCTURAL_GROUPS: { title: string; links: SitemapLink[] }[] = [
  {
    title: "Main",
    links: [
      { label: "Home", to: "/" },
      { label: "Products", to: "/products" },
      { label: "Product Index (all products)", to: "/product-index" },
      { label: "High Pressure Index", to: "/high-pressure-index" },
      { label: "About", to: "/about" },
      { label: "Industries", to: "/industries" },
      { label: "Blog", to: "/blog" },
      { label: "Catalogues (PDF)", to: "/catalogPDFs" },
    ],
  },
  {
    title: "Certificates",
    links: [
      { label: "Certificates", to: "/certificates" },
      { label: "Quality Management System", to: "/certificates/qms" },
      { label: "Type Test Reports", to: "/certificates/type-reports" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Marine & Subsea", to: "/industries/marine-subsea" },
      { label: "Oil & Gas", to: "/industries/oil-gas" },
      { label: "Hydrogen", to: "/industries/hydrogen" },
      { label: "Aerospace & Defense", to: "/industries/aerospace-defense" },
      { label: "Chemicals & Petrochemical", to: "/industries/chemicals-petrochemical" },
      { label: "Food & Beverages", to: "/industries/food-beverages" },
    ],
  },
  {
    title: "Valves",
    links: [
      { label: "Valves", to: "/valves" },
      { label: "Needle Valves", to: "/valves/needle-valves" },
      { label: "Needle Valves — IB", to: "/valves/needle-valves/needle-valves-ib" },
      { label: "Needle Valves — HB", to: "/valves/needle-valves/needle-valves-hb" },
      { label: "Needle Valves — HP", to: "/valves/needle-valves/needle-valves-hp" },
      { label: "Needle Valves — SB", to: "/valves/needle-valves/needle-valves-sb" },
      { label: "Needle Valves — Mini", to: "/valves/needle-valves/needle-valves-mini" },
      { label: "Ball Valves", to: "/valves/ball-valves" },
      { label: "Ball Valves — Two-Way", to: "/valves/ball-valves/two-way" },
      { label: "Ball Valves — Three-Way", to: "/valves/ball-valves/three-way" },
      { label: "Ball Valves — High Bore", to: "/valves/ball-valves/high-bore" },
      { label: "Check Valves", to: "/valves/check-valves" },
      { label: "Relief Valves", to: "/valves/relief-valves" },
    ],
  },
  {
    title: "Instrumentation Fittings",
    links: [
      { label: "Instrumentation Fittings", to: "/instrumentation-fittings" },
      { label: "Tube Fittings", to: "/instrumentation-fittings/tube-fittings" },
      { label: "Tube Fittings — Connectors", to: "/instrumentation-fittings/tube-fittings/connectors" },
      { label: "Tube Fittings — Union", to: "/instrumentation-fittings/tube-fittings/union" },
      { label: "Tube Fittings — Reducer", to: "/instrumentation-fittings/tube-fittings/reducer" },
      { label: "Tube Fittings — Adapter", to: "/instrumentation-fittings/tube-fittings/adapter" },
      { label: "Tube Fittings — Port Connector", to: "/instrumentation-fittings/tube-fittings/port-connector" },
      { label: "Tube Fittings — Weld Gauge", to: "/instrumentation-fittings/tube-fittings/weld-gauge" },
      { label: "Tube Fittings — Accessories", to: "/instrumentation-fittings/tube-fittings/accessories" },
      { label: "Tube Fittings — Die-Electric", to: "/instrumentation-fittings/tube-fittings/die-electric" },
      { label: "JIC Fittings", to: "/instrumentation-fittings/jic-fittings" },
      { label: "JIC Fittings — All", to: "/instrumentation-fittings/jic-fittings/all" },
      { label: "JIC Fittings — Connectors", to: "/instrumentation-fittings/jic-fittings/connectors" },
      { label: "JIC Fittings — Unions & Swivel", to: "/instrumentation-fittings/jic-fittings/unions-swivel" },
      { label: "JIC Fittings — Adapters & Reducers", to: "/instrumentation-fittings/jic-fittings/adapters-reducers" },
      { label: "JIC Fittings — Elbows", to: "/instrumentation-fittings/jic-fittings/elbows" },
      { label: "JIC Fittings — Tees", to: "/instrumentation-fittings/jic-fittings/tees" },
      { label: "JIC Fittings — Plugs, Caps & Nuts", to: "/instrumentation-fittings/jic-fittings/plugs-caps-nuts" },
      { label: "Pipe Fittings", to: "/instrumentation-fittings/pipe-fittings" },
      { label: "Pipe Fittings — All", to: "/instrumentation-fittings/pipe-fittings/all" },
      { label: "Pipe Fittings — Nipples & Couplings", to: "/instrumentation-fittings/pipe-fittings/nipples-couplings" },
      { label: "Pipe Fittings — Adapters & Plugs", to: "/instrumentation-fittings/pipe-fittings/adapters-plugs" },
      { label: "Pipe Fittings — Unions & Connectors", to: "/instrumentation-fittings/pipe-fittings/unions-connectors" },
      { label: "Pipe Fittings — Elbows", to: "/instrumentation-fittings/pipe-fittings/elbows" },
      { label: "Pipe Fittings — Tees & Cross", to: "/instrumentation-fittings/pipe-fittings/tees-cross" },
      { label: "Weld Fittings", to: "/instrumentation-fittings/weld-fittings" },
      { label: "Weld Fittings — All", to: "/instrumentation-fittings/weld-fittings/all" },
      { label: "Weld Fittings — Connectors", to: "/instrumentation-fittings/weld-fittings/connectors" },
      { label: "Weld Fittings — Elbows", to: "/instrumentation-fittings/weld-fittings/elbows" },
      { label: "Weld Fittings — Tees", to: "/instrumentation-fittings/weld-fittings/tees" },
      { label: "Tube Clamps", to: "/instrumentation-fittings/tube-clamps" },
      { label: "Tube Clamps — Twin Series", to: "/instrumentation-fittings/tube-clamps/twin-series" },
      { label: "Tube Clamps — Single Layer", to: "/instrumentation-fittings/tube-clamps/single-layer" },
      { label: "Tube Clamps — Double Layer", to: "/instrumentation-fittings/tube-clamps/double-layer" },
      { label: "Tube Clamps — Heavy Single Layer", to: "/instrumentation-fittings/tube-clamps/heavy-single-layer" },
      { label: "Tube Clamps — Heavy Double Layer", to: "/instrumentation-fittings/tube-clamps/heavy-double-layer" },
      { label: "Swivel Gauge Adaptors", to: "/instrumentation-fittings/swivel-gauge-adaptors" },
    ],
  },
  {
    title: "Filters",
    links: [
      { label: "Filters", to: "/filters" },
      { label: "T-Type Filters", to: "/filters/t-type" },
      { label: "I-Type Filters", to: "/filters/i-type" },
      { label: "Filter Elements", to: "/filters/elements" },
    ],
  },
  {
    title: "Manifolds",
    links: [
      { label: "Manifolds", to: "/manifolds" },
      { label: "2-Valve Manifolds", to: "/manifolds/2VM" },
      { label: "3-Valve Manifolds", to: "/manifolds/3VM" },
      { label: "5-Valve Manifolds", to: "/manifolds/5VM" },
    ],
  },
  {
    title: "Double Block & Bleed",
    links: [
      { label: "Double Block & Bleed Valves", to: "/double-block-and-bleed-valves" },
      { label: "Pipe to Pipe", to: "/double-block-and-bleed-valves/pipe-to-pipe" },
      { label: "Flange to Pipe", to: "/double-block-and-bleed-valves/flange-to-pipe" },
      { label: "Flange to Flange", to: "/double-block-and-bleed-valves/flange-to-flange" },
    ],
  },
  {
    title: "Single Block & Bleed",
    links: [
      { label: "Single Block & Bleed Valves", to: "/single-block-and-bleed-valves" },
      { label: "Monoflange", to: "/single-block-and-bleed-valves/monoflange" },
      { label: "Flange to Pipe", to: "/single-block-and-bleed-valves/flange-to-pipe" },
      { label: "Block & Bleed", to: "/single-block-and-bleed-valves/block-and-bleed" },
    ],
  },
  {
    title: "High Pressure — Categories",
    links: [
      { label: "High Pressure (hub)", to: "/high-pressure" },
      { label: "Needle Valves", to: "/high-pressure/needle-valves" },
      { label: "Double Block & Valves", to: "/high-pressure/double-block-and-valves" },
      { label: "Ball Valves", to: "/high-pressure/ball-valves" },
      { label: "Cones & Threaded Nipples", to: "/high-pressure/cones-threaded-nipples" },
      { label: "2-Valve Manifolds", to: "/high-pressure/2-valve-manifolds" },
      { label: "Fittings", to: "/high-pressure/fittings" },
      { label: "Fittings — Connectors", to: "/high-pressure/fittings/connectors" },
      { label: "Fittings — Unions", to: "/high-pressure/fittings/unions" },
      { label: "Fittings — Adaptors", to: "/high-pressure/fittings/adaptors" },
      { label: "Fittings — Elbows, Tees & Cross", to: "/high-pressure/fittings/elbows-tees-cross" },
      { label: "Fittings — End Connections", to: "/high-pressure/fittings/end-connections" },
      { label: "Fittings — Seals & Glands", to: "/high-pressure/fittings/seals-glads" },
      { label: "Pipe Fittings", to: "/high-pressure/pipe-fittings" },
      { label: "Pipe Fittings — Hex Nipples", to: "/high-pressure/pipe-fittings/hex-nipples" },
      { label: "Pipe Fittings — Hex Couplings", to: "/high-pressure/pipe-fittings/hex-couplings" },
      { label: "Pipe Fittings — Adapters", to: "/high-pressure/pipe-fittings/adapters" },
      { label: "Pipe Fittings — Elbows", to: "/high-pressure/pipe-fittings/elbows" },
      { label: "Pipe Fittings — Tees & Crosses", to: "/high-pressure/pipe-fittings/tees-crosses" },
      { label: "Pipe Fittings — Plugs & Caps", to: "/high-pressure/pipe-fittings/plugs-caps" },
    ],
  },
  {
    title: "Product Directories",
    links: [{ label: "Product Index — all products", to: "/product-index" }, { label: "High Pressure Index — all HP products", to: "/high-pressure-index" }, ...PRODUCT_SECTIONS.map(s => ({ label: `Index — ${s.label}`, to: s.base }))],
  },
  {
    title: "Guides & Blog Posts",
    links: [
      { label: "Panam Valves & RG Fluid Power Partnership", to: "/blog/panam-valves-rg-fluid-power-partnership" },
      { label: "Double Block & Bleed", to: "/blog/double-block-and-bleed" },
      { label: "Hydrogen Valves", to: "/blog/hydrogen-blog" },
      { label: "Swivel Gauge Adaptors", to: "/blog/swivel-gauge-blog" },
      { label: "Check Valves", to: "/blog/check-valves-blog" },
      { label: "How to Specify Industrial & Control Valves", to: "/blog/how-to-specify-industrial-and-control-valves" },
      { label: "Check Valve Guide", to: "/blog/check-valve-guide" },
      { label: "Stainless Steel Ball Valve Guide", to: "/blog/stainless-steel-ball-valve-guide" },
      { label: "Three-Way Valve: L-Port vs T-Port Guide", to: "/blog/three-way-valve-l-port-t-port-guide" },
      { label: "UK Industrial Valves Buyer's Guide", to: "/blog/uk-industrial-valves-buyers-guide" },
      { label: "NPT vs BSPP vs BSPT Thread Standards", to: "/blog/npt-vs-bspp-vs-bspt-thread-standards" },
      { label: "Manifold Valves for Accurate, Safe Instrumentation", to: "/blog/manifold-valves-for-accurate-safe-instrumentation" },
      { label: "3-Valve Manifolds Explained: Operation & Fault-Finding", to: "/blog/3-valve-manifold-operation-guide" },
      { label: "HP Series Needle Valves — High Pressure Flow Control", to: "/blog/hp-series-needle-valves-high-pressure-flow-control" },
    ],
  },
  {
    title: "Company & Legal",
    links: [
      { label: "Request a Quote", to: "/enquiry" },
      { label: "Delivery & Returns", to: "/delivery-returns" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Use", to: "/terms-of-use" },
    ],
  },
]

// ── Every product SKU, grouped by category (single source of truth: productRoutes). ─────────────
const PRODUCT_SKU_GROUPS = PRODUCT_GROUPS.map(group => ({
  title: group.label,
  links: group.partNumbers.map(pn => ({ label: pn, to: `${group.base}/${pn}` })),
}))

const SitemapPage = () => (
  <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
    <title>Site Map — All Pages & Products | Panam Valves</title>
    <meta name="description" content="Full site map of Panam Valves — every product category, high pressure range, filter, manifold, industry page, guide and individual part number in one place." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.panamvalve.com/sitemap" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Site Map — All Pages & Products | Panam Valves" />
    <meta property="og:description" content="Full site map of Panam Valves — every category, high pressure range, filter, manifold, industry page, guide and part number." />
    <meta property="og:url" content="https://www.panamvalve.com/sitemap" />

    <Typography component="h1" variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
      Site Map
    </Typography>
    <Typography sx={{ color: "text.secondary", mb: 3 }}>Every page on the Panam Valves site — categories, guides and every individual part number.</Typography>

    <Divider sx={{ mb: 4 }} />

    {[...STRUCTURAL_GROUPS, ...PRODUCT_SKU_GROUPS].map(group => (
      <ButtonGroup key={group.title} title={group.title} links={group.links} />
    ))}
  </Container>
)

export default SitemapPage
