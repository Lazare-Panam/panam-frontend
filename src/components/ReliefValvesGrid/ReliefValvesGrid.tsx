import { useState } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { useReliefValves, useReliefValveFilterOptions } from "./hooks/useReliefValve"
import { ReliefValveSidebar } from "./components/ReliefValveSidebar"
import { ReliefValveActiveFilters } from "./components/ReliefValveActiveFilters"
import ReliefValveTable from "./components/ReliefValveTable"
import { type ReliefValveFilters, EMPTY_RELIEF_VALVE_FILTERS } from "./hooks/types"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

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
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          Relief Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
          RVL low pressure and RVH high pressure relief valves in SS 316, SS 316L and Brass. Available in NPT, BSPT and BSPP thread types with multiple connection configurations and spring ranges up to 15,000 psi.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["RVL Series", "RVH Series", "PRVH-10K", "PRVH-15K", "SS 316 / 316L", "Up to 15,000 psi"].map(s => (
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
  )
}