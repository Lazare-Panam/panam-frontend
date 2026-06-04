import { useState, useMemo } from 'react'
import { Box, Container, Typography, useMediaQuery, Drawer, IconButton } from '@mui/material'
import { alpha } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import {
  SWIVEL_GAUGE_ADAPTORS_DATA,
  SWIVEL_GAUGE_DESCRIPTION,
} from './hooks/swivelGaugeAdaptorsData'
import {
  type SGAFilters,
  type AvailableCountsSGA,
  EMPTY_SGA_FILTERS,
  applyFilters,
  countBy,
} from './components/SGATypes'
import { SGAActiveFilters } from './components/SGAActiveFilters'
import { SGASidebar } from './components/SGASidebar'
import SGATable from './components/SGATable'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function SwivelGaugeAdaptorsPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<SGAFilters>(EMPTY_SGA_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const models = useMemo(() => applyFilters(SWIVEL_GAUGE_ADAPTORS_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsSGA>(() => ({
    types:   countBy(applyFilters(SWIVEL_GAUGE_ADAPTORS_DATA, filters, 'types'),   c => c.type),
    inlets:  countBy(applyFilters(SWIVEL_GAUGE_ADAPTORS_DATA, filters, 'inlets'),  c => c.inlet),
    outlets: countBy(applyFilters(SWIVEL_GAUGE_ADAPTORS_DATA, filters, 'outlets'), c => c.outlet),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  const sidebar = (
    <SGASidebar
      filters={filters}
      setFilters={setFilters}
      availableCounts={availableCounts}
      activeCount={activeCount}
    />
  )

  return (
    <>
      <title>Swivel Gauge Adaptors | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® Swivel Gauge Adaptors — SS316, NPT and BSPP thread options. Configure by type, inlet, and outlet. Request a quote within 24 hours." />
      <meta name="keywords" content="swivel gauge adaptors, gauge adaptors, instrumentation fittings, SS316 gauge adaptors, NPT BSPP gauge adaptors" />
      <meta property="og:title" content="Swivel Gauge Adaptors | PANAM® Instrumentation" />
      <meta property="og:description" content="Configure PANAM® Swivel Gauge Adaptors by type, inlet, and outlet thread standard." />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />

    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>

      {/* HEADER */}
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Container maxWidth="lg" sx={{ px: 0 }}>
          <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
            {SWIVEL_GAUGE_DESCRIPTION.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
            {SWIVEL_GAUGE_DESCRIPTION.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {SWIVEL_GAUGE_DESCRIPTION.specs.map(s => (
              <Box key={s} sx={{
                px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600,
                bgcolor: alpha(BRAND_BLUE, 0.08), color: '#0277BD',
                border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
                fontFamily: PRIMARY_FONT,
              }}>
                {s}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CONTENT */}
      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
            <FilterListIcon />
          </IconButton>
        )}

        <SGAActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: 'flex', alignItems: 'stretch',
          border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
          borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper',
        }}>
          {!isMobile && sidebar}
          <SGATable
            models={models}
            filters={filters}
            setFilters={setFilters}
            availableCounts={availableCounts}
            activeCount={activeCount}
          />
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box></>

  )
}