import { useMemo, useState } from "react"
import { fitTitle } from "../../data/seoMetaRules"
import { Link as RouterLink, useParams } from "react-router-dom"
import { Box, Button, Container, Divider, TextField, Typography } from "@mui/material"
import { PRODUCT_SECTIONS } from "../../productRoutes"

// A per-section product directory (/product-index/<slug>). Every SKU in the section is rendered as a
// real <a href> link server-side (so crawlers get focused, hub-and-spoke inbound links to deep
// product pages), grouped by sub-category. The search box only *filters* the already-rendered list
// on the client — the links exist without JS, which is what makes them crawlable.
const SectionIndexPage = () => {
  const { section: slug } = useParams()
  const section = useMemo(() => PRODUCT_SECTIONS.find(s => s.slug === slug), [slug])
  const [query, setQuery] = useState("")

  if (!section) {
    return (
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography component="h1" variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
          Section not found
        </Typography>
        <Button component={RouterLink} to="/product-index" variant="outlined" sx={{ textTransform: "none" }}>
          ← Back to the full product index
        </Button>
      </Container>
    )
  }

  const q = query.trim().toLowerCase()

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <title>{fitTitle(`${section.label}: Product Index | Panam Valves`)}</title>
      <meta
        name="description"
        content={`Browse every ${section.label} product from Panam Valves — a complete directory of part numbers with direct links to each product page.`}
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`https://www.panamvalve.com${section.base}`} />

      <Typography component="h1" variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
        {section.label} — Product Index
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 3 }}>
        Every {section.label.toLowerCase()} part number, with a direct link to each product page.
      </Typography>

      <TextField
        fullWidth
        size="small"
        placeholder={`Search ${section.label} part numbers…`}
        value={query}
        onChange={e => setQuery(e.target.value)}
        sx={{ mb: 4, maxWidth: 480 }}
        slotProps={{ htmlInput: { "aria-label": `Search ${section.label} part numbers` } }}
      />

      <Divider sx={{ mb: 4 }} />

      {section.groups.map(group => {
        const matches = q ? group.partNumbers.filter(pn => pn.toLowerCase().includes(q)) : group.partNumbers
        if (matches.length === 0) return null
        return (
          <Box component="section" key={group.base} sx={{ mb: 5 }}>
            <Typography component="h2" variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              {group.label}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {matches.map(partNumber => (
                <Button
                  key={partNumber}
                  component={RouterLink}
                  to={`${group.base}/${partNumber}`}
                  variant="outlined"
                  size="small"
                  sx={{ textTransform: "none" }}
                >
                  {partNumber}
                </Button>
              ))}
            </Box>
          </Box>
        )
      })}

      <Divider sx={{ mb: 3 }} />
      <Button component={RouterLink} to="/product-index" variant="text" sx={{ textTransform: "none" }}>
        ← Browse the full product index
      </Button>
    </Container>
  )
}

export default SectionIndexPage
