'use client'
import { useState } from 'react'
import {
  Box, Typography, CircularProgress,
  useMediaQuery, Drawer, IconButton
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useNeedleValvesSB, useNeedleValveSBFilterOptions } from'../hooks/useNeedleValve'
import { SBSidebar } from './components/SBSidebar'
import { SBActiveFilters } from './components/SBActiveFilters'
import SBTable from './components/SBTable'
import { type NeedleValveSBFilters, EMPTY_SB_FILTERS, SERIES_DESCRIPTIONS } from '../hooks/types'

const BRAND_BLUE = '#01B0F0'

export default function NeedleValveSBPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<NeedleValveSBFilters>(EMPTY_SB_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useNeedleValveSBFilterOptions()
  const { data: models = [], isLoading, isFetching } = useNeedleValvesSB(filters)

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)
  const { title, description, specs } = SERIES_DESCRIPTIONS.SB

  const sidebar = (
    <SBSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <>
    <title>PANAM® SB Series Bar Stock Needle Valves | 10,000 psig </title>
<meta name="description" content="PANAM® SB Series bar stock needle valves rated to 10,000 psig, metal or soft seat. SS316, Duplex, Monel, Hastelloy with NPT, BSPP, BSPT and tube ends." />
<meta name="keywords" content="bar stock needle valve, SB series needle valve, 10000 psi needle valve, heavy duty needle valve, metal seat needle valve, soft seat needle valve, SS316 bar stock valve, high pressure bar stock valve, instrumentation needle valve" />
<meta property="og:title" content="SB Series Bar Stock Needle Valves | 10,000 psig | PANAM®" />
<meta property="og:description" content="Heavy-duty bar stock needle valves to 10,000 psig. Metal and soft seat. SS316, Duplex, Monel, Hastelloy." />
<meta property="og:type" content="website" />
<link rel="canonical" href="https://www.panamvalve.com/valves/needle-valves/needle-valves-sb" />
<meta name="robots" content="index, follow" />
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SB Series Heavy-Duty Bar Stock Needle Valves",
    description: "PANAM® SB Series bar stock needle valves rated to 10,000 psig, metal or soft seat. SS316, Duplex, Monel, Hastelloy with NPT, BSPP, BSPT and tube ends.",
  })}
</script>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {specs.map(s => (
            <Box key={s} sx={{
              px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600,
              bgcolor: alpha(BRAND_BLUE, 0.08), color: '#0277BD',
              border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
            }}>{s}</Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}><FilterListIcon /></IconButton>}
        <SBActiveFilters filters={filters} setFilters={setFilters} />
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
            <SBTable models={models} isFetching={isFetching} />
          )}
        </Box>
        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box></>

  )
}