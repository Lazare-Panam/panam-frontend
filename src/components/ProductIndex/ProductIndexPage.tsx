import { Link as RouterLink } from "react-router-dom"
import { Box, Button, Container, Divider, Typography } from "@mui/material"
import { PRODUCT_GROUPS } from "../../productRoutes"

// Non-product pages that the SE Ranking audit also flagged as having no internal links pointing
// to them. Kept here (rather than derived) because they don't share the product data shape.
const INDUSTRY_LINKS = [
  { label: "Marine & Subsea", to: "/industries/marine-subsea" },
  { label: "Oil & Gas", to: "/industries/oil-gas" },
  { label: "Hydrogen", to: "/industries/hydrogen" },
  { label: "Aerospace & Defense", to: "/industries/aerospace-defense" },
  { label: "Chemicals & Petrochemical", to: "/industries/chemicals-petrochemical" },
  { label: "Food & Beverages", to: "/industries/food-beverages" },
]

const BLOG_LINKS = [
  { label: "Panam Valves & RG Fluid Power Partnership", to: "/blog/panam-valves-rg-fluid-power-partnership" },
  { label: "Double Block & Bleed", to: "/blog/double-blog-and-bleed" },
  { label: "Hydrogen Valves", to: "/blog/hydrogen-blog" },
  { label: "Swivel Gauge Adaptors", to: "/blog/swivel-gauge-blog" },
  { label: "Check Valves", to: "/blog/check-valves-blog" },
]

interface IndexLink {
  label: string
  to: string
}

const ButtonGroup = ({ title, links }: { title: string; links: IndexLink[] }) => (
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

const ProductIndexPage = () => (
  <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
    <title>Product Index — All Products & Pages | Panam Valves</title>
    <meta
      name="description"
      content="Complete directory of every Panam Valves product, industry and guide — browse the full catalogue of high pressure valves, fittings, manifolds and filters."
    />
    <meta name="robots" content="index, follow" />
    <Typography component="h1" variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
      Product Index
    </Typography>
    <Typography sx={{ color: "text.secondary", mb: 4 }}>
      A complete directory of every Panam Valves product and page. Browse by category below.
    </Typography>
    <Divider sx={{ mb: 4 }} />

    {PRODUCT_GROUPS.map(group => (
      <ButtonGroup
        key={group.base}
        title={group.label}
        links={group.partNumbers.map(partNumber => ({ label: partNumber, to: `${group.base}/${partNumber}` }))}
      />
    ))}

    <ButtonGroup title="Industries" links={INDUSTRY_LINKS} />
    <ButtonGroup title="Guides & Blog" links={BLOG_LINKS} />
  </Container>
)

export default ProductIndexPage
