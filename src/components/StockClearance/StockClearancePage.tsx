import { useState } from "react"
import { Box, Container, Typography, Chip, Button, Link, IconButton, Tooltip, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded"
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded"
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined"
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded"
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded"
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded"
import type { ReactNode } from "react"
import { CategoryPage, CategoryHero, HeroBadge, CtaBand } from "../Common/CategoryIndexKit"
import { C, FONT, RADIUS, SHADOW } from "../Landing2/homeTokens"
import { useCartStore } from "../store/useCartStore"
import { STOCK_CATEGORIES, STOCK_TOTAL_LINES, STOCK_TOTAL_CATEGORIES, type StockItem } from "./stockClearanceData"

const HERO_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/website-media/aleon3004-6z0IreU7EnI-unsplash.jpg"
const SALES_EMAIL = "sales@panamvalves.co.uk"

const stockMailto = (subject: string) => `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}`
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
// Short tab label — drop the parenthetical, e.g. "Unions (straight & bulkhead)" -> "Unions".
const shortLabel = (s: string) => s.replace(/\s*\(.*\)$/, "")
// Representative image for a category = the first line that resolved an image.
const categoryImage = (items: StockItem[]) => items.find(i => i.image)?.image

const TRUST: { icon: ReactNode; text: string }[] = [
  { icon: <LocalShippingRoundedIcon />, text: "Delivered in 2–3 days from Purchase Order" },
  { icon: <LocalOfferRoundedIcon />, text: "Clearance prices — cheaper than ever" },
  { icon: <VerifiedRoundedIcon />, text: "Genuine PANAM® ex-stock, ready to ship" },
]

const StockRow = ({ item }: { item: StockItem }) => {
  const addItem = useCartStore(s => s.addItem)

  const addToCart = () =>
    addItem({
      cartItemId: item.code,
      id: item.code,
      name: item.description || item.code,
      image: item.image,
      quantity: 1,
      partNumber: item.code,
      specs: { Description: item.description, "In stock": `${item.stock} pcs` },
    })

  return (
    <TableRow hover>
      <TableCell sx={{ whiteSpace: "nowrap" }}>
        <Stack direction="row" alignItems="center" spacing={1.25}>
          {item.image && (
            <Box
              component="img"
              src={item.image}
              alt={item.code}
              loading="lazy"
              sx={{ width: 36, height: 36, objectFit: "contain", borderRadius: "6px", bgcolor: C.surface, border: `1px solid ${C.border}`, flexShrink: 0 }}
            />
          )}
          {item.url ? (
            <Link component={RouterLink} to={item.url} sx={{ fontFamily: "monospace", fontWeight: 700, color: C.brandDark, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              {item.code}
            </Link>
          ) : (
            <Box component="span" sx={{ fontFamily: "monospace", fontWeight: 700, color: C.ink }}>{item.code}</Box>
          )}
        </Stack>
      </TableCell>
      <TableCell sx={{ color: C.text }}>{item.description}</TableCell>
      <TableCell align="center">
        <Chip label={`${item.stock} pcs`} size="small" sx={{ fontWeight: 700, bgcolor: C.brandTint, color: C.brandDark }} />
      </TableCell>
      <TableCell align="right">
        <Stack direction="row" spacing={0.5} justifyContent="flex-end" alignItems="center">
          <Tooltip title="Add to quote cart">
            <IconButton size="small" aria-label={`Add ${item.code} to cart`} onClick={addToCart} sx={{ color: C.brandDark, "&:hover": { bgcolor: C.brandTint } }}>
              <AddShoppingCartRoundedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Button
            size="small"
            href={stockMailto(`Stock enquiry: ${item.code}`)}
            sx={{ textTransform: "none", fontWeight: 700, color: C.brandDark, whiteSpace: "nowrap", "&:hover": { bgcolor: C.brandTint } }}>
            Enquire
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  )
}

// Just the table of rows — reused by the single-category tab view and the accordion details.
const StockGrid = ({ items }: { items: StockItem[] }) => (
  <TableContainer component={Paper} elevation={0} sx={{ border: `1px solid ${C.border}`, borderRadius: RADIUS.card, overflowX: "auto" }}>
    <Table size="small" sx={{ minWidth: 680 }}>
      <TableHead>
        <TableRow sx={{ bgcolor: C.surface }}>
          <TableCell sx={{ fontWeight: 700, color: C.ink }}>Panam Code</TableCell>
          <TableCell sx={{ fontWeight: 700, color: C.ink }}>Description</TableCell>
          <TableCell sx={{ fontWeight: 700, color: C.ink }} align="center">In Stock</TableCell>
          <TableCell sx={{ fontWeight: 700, color: C.ink }} align="right">Order</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(item => (
          <StockRow key={item.code} item={item} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

// Heading + table — used when a single category tab is selected.
const StockTable = ({ category, items }: { category: string; items: StockItem[] }) => (
  <Box component="section" id={slug(category)} sx={{ mb: 6, scrollMarginTop: "90px" }}>
    <Stack direction="row" alignItems="baseline" spacing={1.5} sx={{ mb: 2 }}>
      <Typography component="h2" sx={{ fontFamily: FONT, fontWeight: 800, color: C.ink, fontSize: { xs: "1.3rem", md: "1.5rem" } }}>
        {category}
      </Typography>
      <Typography sx={{ color: C.muted, fontSize: "0.9rem" }}>
        {items.length} {items.length === 1 ? "line" : "lines"}
      </Typography>
    </Stack>
    <StockGrid items={items} />
  </Box>
)

// Collapsible category — used in the "All" view, with a representative image in the header.
const StockAccordion = ({ category, items, defaultExpanded }: { category: string; items: StockItem[]; defaultExpanded?: boolean }) => {
  const image = categoryImage(items)
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      disableGutters
      elevation={0}
      sx={{
        mb: 2,
        border: `1px solid ${C.border}`,
        borderRadius: `${RADIUS.card} !important`,
        "&:before": { display: "none" },
        overflow: "hidden",
        transition: "box-shadow 0.2s ease, border-color 0.2s ease",
        "&:hover": { borderColor: "rgba(1,176,240,0.35)", boxShadow: SHADOW.card },
        "&.Mui-expanded": { boxShadow: SHADOW.card, borderColor: "rgba(1,176,240,0.35)" },
      }}>
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon sx={{ color: C.brandDark }} />}
        sx={{
          px: { xs: 1.5, md: 2 },
          py: 1,
          "& .MuiAccordionSummary-content": { alignItems: "center", gap: 2, my: 1 },
        }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            flexShrink: 0,
            borderRadius: "14px",
            overflow: "hidden",
            display: "grid",
            placeItems: "center",
            bgcolor: C.surface,
            border: `1px solid ${C.border}`,
          }}>
          {image ? (
            <Box component="img" src={image} alt={category} loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "contain", p: 0.5 }} />
          ) : (
            <Inventory2OutlinedIcon sx={{ color: C.brand }} />
          )}
        </Box>
        <Box>
          <Typography component="h2" sx={{ fontFamily: FONT, fontWeight: 800, color: C.ink, fontSize: { xs: "1.1rem", md: "1.25rem" }, lineHeight: 1.2 }}>
            {category}
          </Typography>
          <Typography sx={{ color: C.muted, fontSize: "0.85rem", mt: 0.25 }}>
            {items.length} {items.length === 1 ? "line" : "lines"} in stock
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ p: { xs: 1, md: 2 }, pt: 0 }}>
        <StockGrid items={items} />
      </AccordionDetails>
    </Accordion>
  )
}

const StockClearancePage = () => {
  const [tab, setTab] = useState(0) // 0 = All, 1..N = category index + 1
  const pageTitle = "End of Year Stock Clear-Out | Ex-Stock Instrumentation Fittings | PANAM®"
  const pageUrl = "https://www.panamvalve.com/stock-clearance"
  const description = `${STOCK_TOTAL_LINES} ex-stock lines of genuine PANAM® stainless steel 316 instrumentation fittings and valves at clearance prices — cheaper than ever and delivered in 2–3 days from Purchase Order. Unions, tees, elbows, connectors, nipples, valves and more. Enquire to reserve while stocks last.`

  return (
    <CategoryPage>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PANAM®" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={HERO_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />

      <CategoryHero
        eyebrow="Clearance Prices • While Supplies Last"
        titleMain="End of Year"
        titleAccent="Stock Clear-Out"
        description="Genuine PANAM® stainless steel 316 instrumentation fittings and valves at our lowest prices ever — cheaper than ever and delivered in just 2–3 days from your Purchase Order. Add lines to your quote cart or enquire to reserve, first come, first served."
        image={HERO_IMAGE}
        imageAlt="PANAM stainless steel instrumentation fittings available to clear"
        primary={{ label: "Enquire about stock", to: "/enquiry" }}
        secondary={{ label: "Email sales", href: stockMailto("End of year stock clearance enquiry") }}
        stats={[
          { value: String(STOCK_TOTAL_LINES), label: "Ex-stock lines" },
          { value: String(STOCK_TOTAL_CATEGORIES), label: "Product categories" },
          { value: "SS 316", label: "Stainless steel" },
          { value: "2–3 days", label: "Dispatch from PO" },
        ]}
        badge={
          <HeroBadge>
            <Stack direction="row" spacing={1} alignItems="center">
              <Inventory2OutlinedIcon sx={{ color: C.brand }} />
              <Box>
                <Typography sx={{ fontWeight: 800, color: C.ink, fontSize: "0.95rem", lineHeight: 1.1 }}>Clearance</Typography>
                <Typography sx={{ color: C.muted, fontSize: "0.78rem" }}>While stocks last</Typography>
              </Box>
            </Stack>
          </HeroBadge>
        }
      />

      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 760, mb: 3.5 }}>
            <Typography sx={{ fontFamily: FONT, color: C.text, fontSize: "1.05rem", lineHeight: 1.8 }}>
              Everything below is genuine PANAM® stock, held in our warehouse and ready to dispatch. Quantities are
              limited and sold on a first-come, first-served basis. Click a code to view the product, add lines to your
              quote cart, or send the full list of codes you need to{" "}
              <Box component="a" href={stockMailto("End of year stock clearance enquiry")} sx={{ color: C.brandDark, fontWeight: 700, textDecoration: "none" }}>{SALES_EMAIL}</Box>.
            </Typography>
          </Box>

          {/* Trust / delivery strip */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mb: 5 }}>
            {TRUST.map(t => (
              <Stack
                key={t.text}
                direction="row"
                spacing={1.25}
                alignItems="center"
                sx={{ flex: 1, px: 2, py: 1.5, borderRadius: RADIUS.card, bgcolor: C.tintBg, border: `1px solid ${C.border}` }}>
                <Box sx={{ color: C.brandDark, display: "flex", "& svg": { fontSize: 22 } }}>{t.icon}</Box>
                <Typography sx={{ fontWeight: 700, color: C.inkSoft, fontSize: "0.9rem", lineHeight: 1.3 }}>{t.text}</Typography>
              </Stack>
            ))}
          </Stack>

          {/* Category tabs */}
          <Tabs
            value={tab}
            onChange={(_e, v) => setTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              mb: 5,
              borderBottom: `1px solid ${C.border}`,
              "& .MuiTab-root": { textTransform: "none", fontWeight: 700, color: C.muted, minHeight: 48 },
              "& .Mui-selected": { color: `${C.brandDark} !important` },
              "& .MuiTabs-indicator": { bgcolor: C.brand, height: 3 },
            }}>
            <Tab label={`All (${STOCK_TOTAL_LINES})`} />
            {STOCK_CATEGORIES.map(c => (
              <Tab key={c.category} label={`${shortLabel(c.category)} (${c.items.length})`} />
            ))}
          </Tabs>

          {tab === 0
            ? STOCK_CATEGORIES.map((c, i) => (
                <StockAccordion key={c.category} category={c.category} items={c.items} defaultExpanded={i === 0} />
              ))
            : (
              <StockTable
                category={STOCK_CATEGORIES[tab - 1].category}
                items={STOCK_CATEGORIES[tab - 1].items}
              />
            )}

          <Box sx={{ mt: 2, p: 2.5, borderRadius: RADIUS.card, bgcolor: C.surface, border: `1px solid ${C.border}`, boxShadow: SHADOW.card }}>
            <Typography sx={{ color: C.muted, fontSize: "0.88rem", lineHeight: 1.6 }}>
              Stock quantities shown are indicative and subject to prior sale. Material certificates are available on
              request. Confirm availability and lead time at enquiry.
            </Typography>
          </Box>
        </Container>
      </Box>

      <CtaBand
        title="Reserve your stock before it's gone"
        text="Send us the codes you need and our team will confirm availability, pricing and dispatch — usually within 24 hours."
        primary={{ label: "Email Sales", href: stockMailto("End of year stock clearance enquiry") }}
        secondary={{ label: "Request a Quote", to: "/enquiry" }}
      />
    </CategoryPage>
  )
}

export default StockClearancePage
