import { useState } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton, Chip } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import SecurityIcon from "@mui/icons-material/Security"
import TuneIcon from "@mui/icons-material/Tune"
import VerifiedIcon from "@mui/icons-material/Verified"
import { useReliefValves, useReliefValveFilterOptions } from "./hooks/useReliefValve"
import { ReliefValveSidebar } from "./components/ReliefValveSidebar"
import { ReliefValveActiveFilters } from "./components/ReliefValveActiveFilters"
import ReliefValveTable from "./components/ReliefValveTable"
import { type ReliefValveFilters, EMPTY_RELIEF_VALVE_FILTERS } from "./hooks/types"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const HIGHLIGHT_STATS = [
  { label: "Max Pressure", value: "6,000 psig" },
  { label: "Size Range", value: '1/4" – 2"' },
  { label: "Materials", value: "SS316, Duplex, Monel" },
  { label: "Certifications", value: "NACE / CE" },
]

const FEATURE_COLUMNS = [
  {
    icon: <SecurityIcon sx={{ fontSize: 22, color: BRAND_BLUE }} />,
    title: "Overpressure Protection",
    body:
      "PANAM® Relief Valves are engineered to protect pipelines, vessels, and instrumentation from dangerous pressure surges. Available in direct-acting and pilot-operated configurations for broad application coverage.",
  },
  {
    icon: <TuneIcon sx={{ fontSize: 22, color: BRAND_BLUE }} />,
    title: "Materials & Customisation",
    body:
      "Manufactured in SS316, Duplex, Monel, and Hastelloy for superior corrosion resistance. Seat and seal materials include PTFE, Viton, and PEEK — selectable for chemical compatibility and temperature range.",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 22, color: BRAND_BLUE }} />,
    title: "Quality & Traceability",
    body:
      "Full heat-code traceability and material certification on every valve. NACE MR0175 compliance available on request. Each unit is factory set and tested to the specified cracking pressure before shipment.",
  },
]

export default function ReliefValvePage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<ReliefValveFilters>(EMPTY_RELIEF_VALVE_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useReliefValveFilterOptions()
  const { data: models = [], isLoading, isFetching } = useReliefValves(filters)

  const activeCount =
    filters.series.length +
    filters.bodyMaterials.length +
    filters.connectionSizes.length +
    filters.threadTypes.length +
    filters.connectionTypes.length +
    filters.springs.length +
    filters.sealMaterials.length

  const sidebar = (
    <ReliefValveSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <> 
    <title>PANAM Relief Valves | Overpressure Protection | 6,000 psig | PANAM®</title>
<meta name="description" content="PANAM® relief valves rated to 6,000 psig. Direct-acting and pilot-operated configurations. Factory-set cracking pressure. SS316, Duplex, Monel and Hastelloy. PTFE, Viton, PEEK seals. NACE MR0175 available." />
<meta name="keywords" content="instrumentation relief valve, pressure relief valve, safety relief valve, overpressure protection valve, direct acting relief valve, pilot operated relief valve, 6000 psi relief valve, SS316 relief valve, NACE MR0175 relief valve, PTFE seat relief valve, Viton seal relief valve" />
<meta property="og:title" content="Relief Valves | Overpressure Protection | 6,000 psig | PANAM®" />
<meta property="og:description" content="Direct-acting and pilot-operated relief valves to 6,000 psig. Factory-set cracking pressure. SS316, Duplex, Monel, Hastelloy. NACE MR0175 available." />
<meta property="og:type" content="website" />
<link rel="canonical" href="https://www.panamvalve.com/valves/relief-valves" />
<meta name="robots" content="index, follow" />
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Relief Valves",
    description: "PANAM® relief valves rated to 6,000 psig. Direct-acting and pilot-operated configurations. Factory-set cracking pressure. SS316, Duplex, Monel and Hastelloy. PTFE, Viton, PEEK seals. NACE MR0175 available.",
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
              variant="h4"
              component="h1"
              fontWeight={800}
              sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT, letterSpacing: "-0.5px" }}
            >
              Relief Valves
            </Typography>
            <Typography variant="body2" sx={{ color: "#888", fontFamily: PRIMARY_FONT, mt: 0.5 }}>
              Direct-acting &amp; pilot-operated · Factory-set cracking pressure
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
        <Box sx={{ height: "1px", bgcolor: alpha(BRAND_BLUE, 0.12), mb: 0 }} />

        {/* Feature columns */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 0,
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
               <Typography variant="body2" fontWeight={700} sx={{ fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
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

        <ReliefValveActiveFilters filters={filters} setFilters={setFilters} />

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
            <ReliefValveTable models={models} isFetching={isFetching} />
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