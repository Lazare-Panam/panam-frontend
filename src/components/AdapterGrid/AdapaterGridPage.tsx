import { useState } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { useAdapters, useAdapterFilterOptions } from "./hooks/useAdapter"
import { AdapterSidebar } from "./components/AdapterSidebar"
import { AdapterActiveFilters } from "./components/AdapterActiveFilters"
import AdapterTable from "./components/AdapterTable"
import { type AdapterFilters, EMPTY_ADAPTER_FILTERS } from "./hooks/types"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function AdapterPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<AdapterFilters>(EMPTY_ADAPTER_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useAdapterFilterOptions()
  const { data: models = [], isLoading, isFetching } = useAdapters(filters)

  const activeCount =
    filters.fittingTypes.length +
    filters.tubeODs.length +
    filters.tubeODUnits.length +
    filters.threadSizes.length +
    filters.threadTypes.length

  const sidebar = (
    <AdapterSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <>
    <title>Tube Fitting Adapters | Male & Female Thread | PANAM®</title>
      <meta name="description" content={'Stainless steel male & female tube fitting adapters from PANAM®. Imperial & Metric tube OD with NPT, BSPT, BSPP, RP, RG & SAE/MS thread types.'} />
      <link rel="canonical" href="https://www.panamvalves.com/instrumentation-fittings/tube-fittings/adapter" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Tube Fitting Adapters | Male & Female Thread | PANAM®" />
      <meta property="og:description" content={'Stainless steel male & female tube fitting adapters. Imperial & Metric tube OD with NPT, BSPT, BSPP, RP, RG & SAE/MS threads.'} />
      <meta property="og:url" content="https://www.panamvalves.com/instrumentation-fittings/tube-fittings/adapter" />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male_adaptor.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tube Fitting Adapters | Male & Female Thread | PANAM®" />
      <meta name="twitter:description" content={'Stainless steel male & female tube fitting adapters. Imperial & Metric tube OD with NPT, BSPT, BSPP, RP, RG & SAE/MS threads.'} />
      <meta name="twitter:image" content="https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male_adaptor.jpg" />

    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          Tube Fittings — Adapters
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
          Stainless steel male and female adapter fittings. Available in Imperial and Metric tube OD with NPT, BSPT, BSPP, RP, RG and SAE/MS thread types.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["SS 316", "Imperial & Metric", "NPT / BSPT / BSPP", "SAE/MS", "Male & Female"].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, bgcolor: alpha(BRAND_BLUE, 0.08), color: "#0277BD", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, fontFamily: PRIMARY_FONT }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
            <FilterListIcon />
          </IconButton>
        )}

        <AdapterActiveFilters filters={filters} setFilters={setFilters} />

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
            <AdapterTable models={models} isFetching={isFetching} />
          )}
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box></>

  )
}