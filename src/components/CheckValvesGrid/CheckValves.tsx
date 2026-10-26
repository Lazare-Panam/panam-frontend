import { useState } from "react"
import {
  Box, Typography, CircularProgress,
  useMediaQuery, Drawer, IconButton, Chip
} from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import BuildCircleIcon from "@mui/icons-material/BuildCircle"
import TuneIcon from "@mui/icons-material/Tune"
import VerifiedIcon from "@mui/icons-material/Verified"
import { usePCVs, usePCVFilterOptions } from "./hooks/usePCV"
import { PCVSidebar } from "./components/PCVActiveFilters"
import { PCVActiveFilters } from "./components/PCVSidebar"
import PCVTable from "./components/PCVTable"
import { type PCVFilters, EMPTY_PCV_FILTERS } from "./hooks/types"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const HIGHLIGHT_STATS = [
  { label: "Max Pressure", value: "6,000 psig" },
  { label: "Size Range", value: '1/8" – 1"' },
  { label: "Materials", value: "SS316, Duplex, Monel" },
  { label: "Documentation", value: "Material certificates available on request" },
]

const FEATURE_COLUMNS = [
  {
    icon: <BuildCircleIcon sx={{ fontSize: 22, color: BRAND_BLUE }} />,
    title: "Materials & Connections",
    body: "Manufactured in SS316, Duplex, Monel, and Hastelloy for excellent corrosion resistance in demanding industrial and hydrogen service environments. End connections include male/female NPT, BSPP, BSPT, and PANAM® tube fitting.",
  },
  {
    icon: <TuneIcon sx={{ fontSize: 22, color: BRAND_BLUE }} />,
    title: "Cracking Pressure Options",
    body: "Supports working pressures up to 6,000 psig (414 bar) in sizes from 1/8\" to 1\". Eight cracking pressure options — 1/3, 1, 5, 10, 25, 50, 75, and 100 psig — for precise control across gas, liquid, and high purity applications.",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 22, color: BRAND_BLUE }} />,
    title: "Quality & Documentation",
    body: "Material certificates are available on request. For sour service, tell us your requirement at enquiry and we will confirm what can be supplied.",
  },
]

export default function PCVPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<PCVFilters>(EMPTY_PCV_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = usePCVFilterOptions()
  const { data: models = [], isLoading, isFetching } = usePCVs(filters)

  const activeCount =
    filters.materials.length +
    filters.inlets.length +
    filters.inletTubeODs.length +
    filters.outlets.length +
    filters.outletTubeODs.length

  const sidebar = (
    <PCVSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <>
    <title>PANAM Check Valves | Inline Backflow Prevention | 6,000 psig</title>
    <meta name="description" content="PANAM® PCV inline check valves rated to 6,000 psig, with eight cracking pressures from 1/3 to 100 psig. SS316, Duplex, Monel, Hastelloy. Hydrogen rated." />
    <meta name="keywords" content="instrumentation check valve, inline check valve, backflow prevention valve, PCV check valve, 6000 psi check valve, hydrogen service check valve, SS316 check valve, Duplex check valve, cracking pressure valve, non return valve instrumentation" />
    <meta property="og:title" content="PCV Series Check Valves | 6,000 psig | PANAM®" />
    <meta property="og:description" content="Inline check valves to 6,000 psig. Eight cracking pressure options. SS316, Duplex, Monel, Hastelloy. Hydrogen service rated." />
    <meta property="og:type" content="website" />
    <link rel="canonical" href="https://www.panamvalve.com/valves/check-valves" />
    <meta name="robots" content="index, follow" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "PCV Series Check Valves",
        description: "PANAM® PCV inline check valves rated to 6,000 psig, with eight cracking pressures from 1/3 to 100 psig. SS316, Duplex, Monel, Hastelloy. Hydrogen rated.",
      })}
    </script>
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>

    {/* ── HEADER ── */}
    <Box sx={{
    px: { xs: 3, md: 6 },
    pt: 5,
    pb: 0,
    borderBottom: "1px solid rgba(0,0,0,0.08)",
    bgcolor: "background.paper",
    }}>
    {/* Title + stat chips */}
    <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 2, mb: 3 }}>
      <Box>
        <Typography
          component="h1"
          variant="h4"
          fontWeight={800}
          sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT, letterSpacing: "-0.5px" }}
        >
          PCV Series Check Valves
        </Typography>
        <Typography variant="body2" sx={{ color: "#888", fontFamily: PRIMARY_FONT, mt: 0.5 }}>
          Inline backflow prevention · 8 cracking pressure options · Hydrogen service rated
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {HIGHLIGHT_STATS.map((s) => (
          <Chip
            key={s.label}
            label={
              <Box sx={{ display: "flex", gap: 0.75, alignItems: "center" }}>
                <Typography variant="caption" sx={{ color: "#888", fontFamily: PRIMARY_FONT, fontWeight: 600, textTransform: "uppercase", fontSize: "0.65rem" }}>
                  {s.label}
                </Typography>
                <Typography variant="caption" sx={{ color: "#1a1a1a", fontFamily: PRIMARY_FONT, fontWeight: 700 }}>
                  {s.value}
                </Typography>
              </Box>
            }
            size="small"
            sx={{
              bgcolor: alpha(BRAND_BLUE, 0.07),
              border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
              borderRadius: "6px",
              height: 28,
              "& .MuiChip-label": { px: 1.25 },
            }}
          />
        ))}
      </Box>
    </Box>

    {/* Divider */}
    <Box sx={{ height: "1px", bgcolor: alpha(BRAND_BLUE, 0.12) }} />

    {/* Feature columns */}
    <Box sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
    }}>
      {FEATURE_COLUMNS.map((col, i) => (
        <Box
          key={col.title}
          sx={{
            px: 3,
            py: 2.5,
            borderRight: i < 2 ? { xs: "none", md: `1px solid ${alpha(BRAND_BLUE, 0.12)}` } : "none",
            borderBottom: { xs: i < 2 ? `1px solid ${alpha(BRAND_BLUE, 0.12)}` : "none", md: "none" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            {col.icon}
            <Typography component="h2" variant="body2" fontWeight={700} sx={{ fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
              {col.title}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontFamily: PRIMARY_FONT, fontSize: "0.82rem" }}>
            {col.body}
          </Typography>
        </Box>
      ))}
    </Box>
    </Box>

    {/* ── CONTENT ── */}
    <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
    {isMobile && (
      <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
        <FilterListIcon />
      </IconButton>
    )}

    <PCVActiveFilters filters={filters} setFilters={setFilters} />

    <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: "block", mb: 1, fontFamily: PRIMARY_FONT }}>
      {isFetching && !isLoading ? "UPDATING..." : isLoading ? "LOADING..." : `${models.length} CONFIGURATIONS`}
    </Typography>

    <Box sx={{
      display: "flex", alignItems: "stretch",
      border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
      borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper",
    }}>
      {!isMobile && sidebar}
      {isLoading ? (
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 300 }}>
          <CircularProgress sx={{ color: BRAND_BLUE }} />
        </Box>
      ) : (
        <PCVTable models={models} isFetching={isFetching} />
      )}
    </Box>

    <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
      {sidebar}
    </Drawer>
    </Box>
    </Box>
    </>

  )
}