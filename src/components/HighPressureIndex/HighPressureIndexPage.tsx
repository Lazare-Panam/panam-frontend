import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Box, Button, Container, Divider, TextField, Typography } from "@mui/material"
import { PRODUCT_GROUPS } from "../../productRoutes"

// Focused, crawlable directory of EVERY high-pressure category and SKU. Each part number renders as a
// real <a href> so crawlers reach the deep product pages that were otherwise orphaned (0 inlinks). This
// is the high-pressure-specific counterpart to /product-index — a tighter hub-and-spoke path surfaced by
// its own button on the homepage, so the HP tail isn't buried inside the single 2,400-link global index.
const HP_GROUPS = PRODUCT_GROUPS.filter(group => group.base.startsWith("/high-pressure"))

const ButtonGroup = ({ title, links }: { title: string; links: { label: string; to: string }[] }) => (
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

const HighPressureIndexPage = () => {
  const [query, setQuery] = useState("")
  const q = query.trim().toLowerCase()

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <title>High Pressure Index: All HP Valves & Fittings | Panam Valves</title>
      <meta
        name="description"
        content="Directory of every Panam high pressure product: valves, manifolds, fittings and pipe fittings up to 60,000 psi. Browse or search every HP part number."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/high-pressure-index" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="High Pressure Index: All HP Valves & Fittings | Panam Valves" />
      <meta
        property="og:description"
        content="Complete directory of every Panam high pressure product — valves, manifolds, fittings and pipe fittings up to 60,000 psi."
      />
      <meta property="og:url" content="https://www.panamvalve.com/high-pressure-index" />

      <Typography component="h1" variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
        High Pressure Index
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 3 }}>
        A complete directory of every Panam high pressure product. Search a part number or browse by category below.
      </Typography>

      <TextField
        fullWidth
        size="small"
        placeholder="Search any high pressure part number…"
        value={query}
        onChange={e => setQuery(e.target.value)}
        sx={{ mb: 4, maxWidth: 480 }}
        slotProps={{ htmlInput: { "aria-label": "Search any high pressure part number" } }}
      />

      <Divider sx={{ mb: 4 }} />

      {HP_GROUPS.map(group => {
        const matches = q ? group.partNumbers.filter(pn => pn.toLowerCase().includes(q)) : group.partNumbers
        if (matches.length === 0) return null
        return (
          <ButtonGroup
            key={group.base}
            title={group.label}
            links={matches.map(partNumber => ({ label: partNumber, to: `${group.base}/${partNumber}` }))}
          />
        )
      })}
    </Container>
  )
}

export default HighPressureIndexPage
