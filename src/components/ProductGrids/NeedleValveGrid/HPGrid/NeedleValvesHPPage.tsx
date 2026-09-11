'use client'
import { useState } from 'react'
import {
  Box, Typography, CircularProgress,
  useMediaQuery, Drawer, IconButton
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useNeedleValvesHP, useNeedleValveHPFilterOptions } from '../hooks/useNeedleValve'
import { HPActiveFilters } from './components/HPActiveFilters'
import { HPSidebar } from './components/HPSidebar'
import HPTable from './components/HPTable'
import { type NeedleValveHPFilters, EMPTY_HP_FILTERS, SERIES_DESCRIPTIONS } from '../hooks/types'

const BRAND_BLUE = '#01B0F0'

export default function NeedleValveHPPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<NeedleValveHPFilters>(EMPTY_HP_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useNeedleValveHPFilterOptions()
  const { data: models = [], isLoading, isFetching } = useNeedleValvesHP(filters)

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)
  const { title, description, specs } = SERIES_DESCRIPTIONS.HP

  const sidebar = (
    <HPSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <>
      <title>PANAM® HP Series High Pressure Forged Needle Valves | 10,000 psig | PANAM®</title>
      <meta name="description" content="PANAM® HP Series one-piece forged needle valves rated to 10,000 psig and 538°C. SS316, Duplex, Monel and Hastelloy. Optional Graphoil packing for high-temperature service. NACE MR0175 available." />
      <meta name="keywords" content="high pressure forged needle valve, HP series needle valve, 10000 psi forged valve, high temperature needle valve, Graphoil packing needle valve, forged instrumentation valve, NACE MR0175 forged valve, SS316 forged needle valve" />
      <meta property="og:title" content="HP Series Forged Needle Valves | 10,000 psig | PANAM®" />
      <meta property="og:description" content="One-piece forged needle valves to 10,000 psig and 538°C. Graphoil packing option, full traceability, NACE MR0175 available." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.panamvalve.com/valves/needle-valves/needle-valves-hp" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "HP Series High Pressure Forged Needle Valves",
          description: "PANAM® HP Series one-piece forged needle valves rated to 10,000 psig and 538°C. SS316, Duplex, Monel and Hastelloy. Optional Graphoil packing for high-temperature service. NACE MR0175 available.",
        })}
      </script>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>

    {/* Header */}
    <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
      <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {specs.map(s => (
          <Box key={s} sx={{
            px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600,
            bgcolor: alpha(BRAND_BLUE, 0.08),
            color: '#0277BD',
            border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
          }}>
            {s}
          </Box>
        ))}
      </Box>
    </Box>

    {/* Content */}
    <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
      {isMobile && (
        <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
          <FilterListIcon />
        </IconButton>
      )}

      <HPActiveFilters filters={filters} setFilters={setFilters} />

      <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1 }}>
        {isFetching && !isLoading ? 'UPDATING...' : isLoading ? 'LOADING...' : `${models.length} CONFIGURATIONS`}
      </Typography>

      <Box sx={{
        display: 'flex', alignItems: 'flex-start',
        border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
        borderRadius: '8px', overflow: 'hidden',
        bgcolor: 'background.paper',
      }}>
        {!isMobile && sidebar}

        {isLoading ? (
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 300 }}>
            <CircularProgress sx={{ color: BRAND_BLUE }} />
          </Box>
        ) : (
          <HPTable models={models} isFetching={isFetching} />
        )}
      </Box>

      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
    </Box>
      </Box>
    
    </>

  )
}