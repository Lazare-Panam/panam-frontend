import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Box, Button, ButtonBase, CircularProgress, Container, Grid, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded"
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { getallCatalogPdfs } from "../../../api/productApi"
import { CategoryPage, CtaBand } from "../../Common/CategoryIndexKit"
import { Eyebrow } from "../../Landing2/homeStyles"
import { C, GRADIENT, RADIUS, btn, cardSx } from "../../Landing2/homeTokens"

interface Catalog {
  id: number
  title: string
  blobUrl: string
  thumbnailUrl?: string
  category?: string
}

const CATEGORIES = ["All", "Valves", "Fittings", "Manifolds", "Instrumentation", "Other"] as const
type Category = (typeof CATEGORIES)[number]

// Bucket a catalog by its backend `category` if present, otherwise by keywords in its title.
const classifyCatalog = (catalog: Catalog): Exclude<Category, "All"> => {
  const text = `${catalog.category ?? ""} ${catalog.title ?? ""}`.toLowerCase()
  if (text.includes("manifold")) return "Manifolds"
  if (text.includes("fitting")) return "Fittings"
  if (text.includes("valve")) return "Valves"
  if (/transmitter|gauge|regulator/.test(text)) return "Instrumentation"
  return "Other"
}

// Front cover, page count and file size per catalog PDF, keyed by the PDF's file name.
// Covers are page 1 of each PDF, rendered into public/images/catalogs/; a catalog not listed here
// (e.g. one added later through the admin) still shows, with a generic cover and no page count.
const CATALOG_META: Record<string, { cover: string; pages: number; sizeMb: number }> = {
  "PANAM - BALL VALVES - 300 SERIES - PDF.pdf": { cover: "ball-valves-300-series", pages: 20, sizeMb: 2.4 },
  "PANAM - BALL VALVES - HB SERIES 10K PSI- PDF.pdf": { cover: "ball-valves-hb-series", pages: 20, sizeMb: 2.0 },
  "PANAM - DOUBLE BLOCK AND BLEED VALVES - PDF.pdf": { cover: "double-block-bleed-valves", pages: 28, sizeMb: 2.6 },
  "PANAM - NEEDLE VALVE - IB SERIES 6K PSI- PDF.pdf": { cover: "needle-valves-ib-series", pages: 16, sizeMb: 1.9 },
  "PANAM - NEEDLE VALVES - HP SERIES 20K PSI- PDF.pdf": { cover: "needle-valves-hp-series", pages: 20, sizeMb: 2.0 },
  "PANAM - NEEDLE VALVES - SB SERIES 10K PSI- PDF.pdf": { cover: "needle-valves-sb-series", pages: 16, sizeMb: 1.7 },
  "PANAM - NEEDLE VALVES MINI SERIES - PDF (1).pdf": { cover: "needle-valves-mini-series", pages: 2, sizeMb: 3.1 },
  "PANAM - SAFETY RELIEF VALVES - PDF.pdf": { cover: "relief-valves", pages: 16, sizeMb: 2.1 },
  "PANAM  - GAUGE ROOT VALVES - PDF (1).pdf": { cover: "gauge-root-valves", pages: 2, sizeMb: 1.0 },
  "PANAM - CHECK VALVES - PDF.pdf": { cover: "check-valves", pages: 4, sizeMb: 1.0 },
  "PANAM - PIPE FITTINGS  (1).pdf": { cover: "pipe-fittings", pages: 32, sizeMb: 2.7 },
  "PANAM - TUBE FITTINGS - PDF (1).pdf": { cover: "tube-fittings", pages: 96, sizeMb: 4.5 },
  "WELD FITTINGS - PDF.pdf": { cover: "weld-fittings", pages: 36, sizeMb: 8.4 },
  "PANAM - FLARE FITTINGS - PDF (1).pdf": { cover: "flare-jic-fittings", pages: 36, sizeMb: 2.7 },
  "PANAM - VALVE MANIFOLDS - PDF (1).pdf": { cover: "valve-manifolds", pages: 40, sizeMb: 5.2 },
  "PANAM PRESSURE TRANSMITTERS & DIFFERENTIAL PRESSURE TRANSMITTERS -2025-R1.pdf": { cover: "pressure-differential-pressure-transmitters", pages: 36, sizeMb: 21.3 },
  "PANAM TEMPERATURE GAUGES - Rev.01.25.pdf": { cover: "temperature-gauges", pages: 14, sizeMb: 9.5 },
  "PANAM - PRESSURE REGULATORS - PDF.pdf": { cover: "pressure-regulators", pages: 4, sizeMb: 1.3 },
  "SWIVEL GAUGE ADAPTERS - PDF.pdf": { cover: "swivel-gauge-adapters", pages: 8, sizeMb: 2.5 },
  "PANAM - GAUGE SAVERS - PDF.pdf": { cover: "gauge-savers", pages: 8, sizeMb: 1.6 },
  "PANAM - PREFABRICATED INSTRUMENTATION HOOK UPS - PDF.pdf": { cover: "prefabricated-instrumentation-hook-ups", pages: 12, sizeMb: 5.9 },
  "PANAM - FILTERS - PDF.pdf": { cover: "filters", pages: 12, sizeMb: 1.5 },
  "PANAM - CONDENSATE POTS - PDF.pdf": { cover: "condensate-pots", pages: 12, sizeMb: 2.4 },
  "PANAM - AIR HEADERS - PDF.pdf": { cover: "air-header", pages: 12, sizeMb: 2.3 },
}

const metaOf = (catalog: Catalog) => {
  const fileName = decodeURIComponent(catalog.blobUrl?.split("/").pop() ?? "")
  return CATALOG_META[fileName]
}

const linkSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.5,
  fontSize: "0.85rem",
  fontWeight: 600,
  color: C.brandDark,
  textDecoration: "none",
  "& svg": { fontSize: 17 },
  "&:hover": { color: C.brandDeep, textDecoration: "underline", textUnderlineOffset: "3px" },
} as const

const CatalogCard = ({ catalog, headingLevel }: { catalog: Catalog; headingLevel: "h2" | "h3" }) => {
  const meta = metaOf(catalog)
  const title = catalog.title.trim()

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Cover, drawn as a document on a small stack of pages */}
      <Box
        component="a"
        href={catalog.blobUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} catalog (PDF)`}
        sx={{
          position: "relative",
          display: "block",
          aspectRatio: "456 / 640",
          mr: "6px",
          borderRadius: "4px",
          bgcolor: C.white,
          boxShadow: "0 1px 2px rgba(15,23,42,0.08), 0 10px 24px rgba(15,23,42,0.10)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          "&::before, &::after": { content: '""', position: "absolute", inset: 0, borderRadius: "4px", bgcolor: C.white, border: `1px solid ${C.border}`, zIndex: -1, transition: "transform 0.25s ease" },
          "&::before": { transform: "translate(3px, 3px)" },
          "&::after": { transform: "translate(6px, 6px)", zIndex: -2 },
          "&:hover": { transform: "translateY(-6px)", boxShadow: "0 2px 4px rgba(15,23,42,0.08), 0 22px 40px rgba(15,23,42,0.16)" },
          "&:hover::before": { transform: "translate(4px, 5px)" },
          "&:hover::after": { transform: "translate(8px, 10px)" },
          "&:hover .catalog-open": { opacity: 1, transform: "translate(-50%, 0)" },
          "&:focus-visible": { outline: `3px solid ${C.brand}`, outlineOffset: 3 },
        }}>
        <Box sx={{ position: "absolute", inset: 0, borderRadius: "4px", overflow: "hidden", border: `1px solid ${C.border}` }}>
          {meta ? (
            <Box component="img" src={`/images/catalogs/${meta.cover}.jpg`} alt={`${title} catalog cover`} loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          ) : (
            <Stack justifyContent="space-between" sx={{ height: "100%", p: 2, boxSizing: "border-box", background: GRADIENT.brand, color: C.white }}>
              <PictureAsPdfRoundedIcon sx={{ fontSize: 32, opacity: 0.9 }} />
              <Typography sx={{ fontWeight: 800, fontSize: "1.05rem", lineHeight: 1.2 }}>{title}</Typography>
            </Stack>
          )}
        </Box>
        <Box className="catalog-open" sx={{ position: "absolute", left: "50%", bottom: 14, transform: "translate(-50%, 6px)", opacity: 0, transition: "opacity 0.2s ease, transform 0.2s ease", px: 1.5, py: 0.6, borderRadius: RADIUS.pill, bgcolor: C.ink, color: C.white, fontSize: "0.78rem", fontWeight: 600, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 0.5 }}>
          Open PDF <NorthEastRoundedIcon sx={{ fontSize: 14 }} />
        </Box>
      </Box>

      <Box sx={{ mt: 2, flexGrow: 1 }}>
        <Typography component={headingLevel} sx={{ fontWeight: 700, fontSize: { xs: "0.95rem", sm: "1rem" }, color: C.ink, lineHeight: 1.35 }}>
          {title}
        </Typography>
        <Typography sx={{ mt: 0.5, fontSize: "0.8rem", color: C.muted }}>{meta ? `PDF · ${meta.pages} ${meta.pages === 1 ? "page" : "pages"} · ${meta.sizeMb} MB` : "PDF"}</Typography>
      </Box>
      <Stack direction="row" spacing={2} sx={{ mt: 1.25 }}>
        <Box component="a" href={catalog.blobUrl} target="_blank" rel="noopener noreferrer" sx={linkSx}>
          View <NorthEastRoundedIcon />
        </Box>
        <Box component="a" href={catalog.blobUrl} download target="_blank" rel="noopener noreferrer" aria-label={`Download ${title} catalog`} sx={linkSx}>
          Download <FileDownloadOutlinedIcon />
        </Box>
      </Stack>
    </Box>
  )
}

const CatalogGrid = ({ items, headingLevel }: { items: Catalog[]; headingLevel: "h2" | "h3" }) => (
  <Grid container columnSpacing={{ xs: 2.5, md: 4 }} rowSpacing={{ xs: 4, md: 5 }}>
    {items.map(catalog => (
      <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2.4 }} key={catalog.id}>
        <CatalogCard catalog={catalog} headingLevel={headingLevel} />
      </Grid>
    ))}
  </Grid>
)

const CatalogPdfs = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const {
    data: catalogs,
    isLoading,
    isError,
  } = useQuery<Catalog[]>({
    queryKey: ["catalogs"],
    queryFn: getallCatalogPdfs,
    staleTime: 1000 * 60 * 10,
  })

  const counts = useMemo(() => {
    const result: Record<Category, number> = { All: catalogs?.length ?? 0, Valves: 0, Fittings: 0, Manifolds: 0, Instrumentation: 0, Other: 0 }
    catalogs?.forEach(catalog => result[classifyCatalog(catalog)]++)
    return result
  }, [catalogs])

  const filteredCatalogs = catalogs?.filter(catalog => catalog.title.toLowerCase().includes(searchTerm.trim().toLowerCase()) && (activeCategory === "All" || classifyCatalog(catalog) === activeCategory))

  const isBrowsingAll = activeCategory === "All" && !searchTerm.trim()

  const resetFilters = () => {
    setSearchTerm("")
    setActiveCategory("All")
  }

  // The prerendered HTML is captured in the loading state (the catalog list comes from the API),
  // so the hero must render in every state — otherwise crawlers report "H1 tag missing".
  const hero = (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: GRADIENT.heroBg, pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2.5} sx={{ maxWidth: 760 }}>
          <Box>
            <Eyebrow>Technical Library</Eyebrow>
          </Box>
          <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.05, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.5rem" } }}>
            Product{" "}
            <Box component="span" sx={{ display: "inline-block", pb: "0.08em", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Catalogs
            </Box>
          </Typography>
          <Typography sx={{ color: C.muted, fontSize: { xs: "1.02rem", md: "1.12rem" }, lineHeight: 1.75 }}>Dimensions, pressure ratings, materials and ordering codes for Panam's high pressure valves, instrumentation fittings, manifolds and accessories. Open any catalog in your browser or download the PDF.</Typography>
        </Stack>
      </Container>
    </Box>
  )

  if (isLoading) {
    return (
      <CategoryPage>
        <title>Product Catalogs & Technical PDFs | Panam Valves</title>
        <meta name="description" content="Download Panam Valves product catalogs and technical datasheets for high pressure valves, fittings, manifolds and filters." />
        <meta name="robots" content="index, follow" />
        {hero}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
          <CircularProgress sx={{ color: C.brand }} />
        </Box>
      </CategoryPage>
    )
  }

  if (isError) {
    return (
      <CategoryPage>
        {hero}
        <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
          <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "1.15rem" }}>We couldn't load the catalogs right now.</Typography>
          <Typography sx={{ mt: 1, color: C.muted }}>Please refresh the page, or email sales@panamvalves.co.uk and we'll send the PDF you need.</Typography>
        </Container>
      </CategoryPage>
    )
  }

  return (
    <>
      <title>Product Catalogs | Panam Valve</title>
      <meta name="description" content="Access Panam Valve's full range of technical product catalogs and engineering documentation. Registered partners get full access to high-resolution PDFs." />
      <link rel="canonical" href="https://www.panamvalve.com/catalogPdfs" />
      <meta property="og:title" content="Product Catalogs | Panam Valve" />
      <meta property="og:description" content="Technical catalogs and engineering specs for Panam Valve's full product range." />
      <meta property="og:url" content="https://www.panamvalve.com/catalogPdfs" />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Product Catalogs | Panam Valve",
          description: "Access Panam Valve's full range of technical product catalogs and engineering documentation. Registered partners get full access to high-resolution PDFs.",
          ...(catalogs && catalogs.length > 0
            ? {
                mainEntity: {
                  "@type": "ItemList",
                  itemListElement: catalogs.map((catalog, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: catalog.title,
                    url: catalog.blobUrl,
                  })),
                },
              }
            : {}),
        })}
      </script>
      <CategoryPage>
        {hero}

        <Box component="section" sx={{ bgcolor: C.white, py: { xs: 4, md: 6 }, minHeight: "50vh" }}>
          <Container maxWidth="lg">
            {/* Search + category filters */}
            <Box sx={{ ...cardSx, p: { xs: 2, md: 2.5 }, mb: { xs: 3, md: 4 } }}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems={{ md: "center" }}>
                <TextField
                  placeholder="Search catalogs, e.g. needle valves"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  size="small"
                  sx={{ width: { xs: "100%", md: 320 }, flex: "none" }}
                  slotProps={{
                    htmlInput: { "aria-label": "Search catalogs" },
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchRoundedIcon sx={{ color: C.muted }} />
                        </InputAdornment>
                      ),
                      endAdornment: searchTerm ? (
                        <InputAdornment position="end">
                          <ButtonBase onClick={() => setSearchTerm("")} aria-label="Clear search" sx={{ borderRadius: "50%", p: 0.25, color: C.muted }}>
                            <CloseRoundedIcon fontSize="small" />
                          </ButtonBase>
                        </InputAdornment>
                      ) : null,
                      sx: {
                        borderRadius: RADIUS.button,
                        bgcolor: C.white,
                        "& fieldset": { borderColor: C.border },
                        "&:hover fieldset": { borderColor: "rgba(1,176,240,0.5)" },
                        "&.Mui-focused fieldset": { borderColor: C.brand },
                      },
                    },
                  }}
                />
                <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                  {CATEGORIES.filter(category => category === "All" || counts[category] > 0).map(category => {
                    const isActive = activeCategory === category
                    return (
                      <ButtonBase
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        aria-pressed={isActive}
                        sx={{
                          gap: 0.75,
                          px: 1.75,
                          py: 0.75,
                          borderRadius: RADIUS.pill,
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          border: `1px solid ${isActive ? C.brand : C.border}`,
                          bgcolor: isActive ? C.brand : C.white,
                          color: isActive ? C.white : C.inkSoft,
                          transition: "all 0.2s ease",
                          "&:hover": { borderColor: C.brand, color: isActive ? C.white : C.brandDark },
                        }}>
                        {category}
                        <Box component="span" sx={{ fontSize: "0.75rem", fontWeight: 700, px: 0.75, borderRadius: RADIUS.pill, bgcolor: isActive ? "rgba(255,255,255,0.22)" : C.surface, color: isActive ? C.white : C.muted }}>
                          {counts[category]}
                        </Box>
                      </ButtonBase>
                    )
                  })}
                </Stack>
              </Stack>
            </Box>

            <Typography aria-live="polite" sx={{ mb: { xs: 3, md: 4 }, fontSize: "0.9rem", color: C.muted }}>
              Showing {filteredCatalogs?.length ?? 0} of {catalogs?.length ?? 0} catalogs
            </Typography>

            {filteredCatalogs && filteredCatalogs.length > 0 ? (
              isBrowsingAll ? (
                // Default view: a library shelf per product family
                <Stack spacing={{ xs: 6, md: 8 }}>
                  {CATEGORIES.filter(category => category !== "All" && counts[category] > 0).map(category => (
                    <Box component="section" key={category} aria-labelledby={`catalogs-${category}`}>
                      <Stack direction="row" alignItems="baseline" spacing={1.5} sx={{ mb: 3, pb: 1.5, borderBottom: `1px solid ${C.border}` }}>
                        <Typography id={`catalogs-${category}`} component="h2" sx={{ fontWeight: 800, fontSize: { xs: "1.3rem", md: "1.5rem" }, color: C.ink, letterSpacing: "-0.02em" }}>
                          {category}
                        </Typography>
                        <Typography sx={{ fontSize: "0.85rem", color: C.muted }}>
                          {counts[category]} {counts[category] === 1 ? "catalog" : "catalogs"}
                        </Typography>
                      </Stack>
                      <CatalogGrid items={filteredCatalogs.filter(catalog => classifyCatalog(catalog) === category)} headingLevel="h3" />
                    </Box>
                  ))}
                </Stack>
              ) : (
                <CatalogGrid items={filteredCatalogs} headingLevel="h2" />
              )
            ) : (
              <Box sx={{ ...cardSx, py: 8, px: 3, textAlign: "center" }}>
                <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "1.1rem" }}>No catalogs match your search</Typography>
                <Typography sx={{ mt: 1, color: C.muted }}>Try a different term, or ask us for the document you need.</Typography>
                <Button onClick={resetFilters} sx={{ ...btn.secondary, mt: 3 }}>
                  Clear filters
                </Button>
              </Box>
            )}
          </Container>
        </Box>

        <CtaBand title="Can't find the document you need?" text="We hold datasheets, drawings and material certificates beyond these catalogs. Tell us the product or part number and our technical team will send it over." primary={{ label: "Email Technical Sales", href: "mailto:sales@panamvalves.co.uk" }} secondary={{ label: "Request Quote", to: "/enquiry" }} />
      </CategoryPage>
    </>
  )
}

export default CatalogPdfs
