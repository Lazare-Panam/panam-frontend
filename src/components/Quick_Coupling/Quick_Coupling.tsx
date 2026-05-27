import { useState, useMemo } from 'react'
import { Box, Typography, useMediaQuery, Drawer, IconButton } from '@mui/material'
import { alpha } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import {
  QUICK_COUPLING_DATA,
  QC_DESCRIPTION,
  type QuickCouplingFilters,
  EMPTY_QC_FILTERS,
} from './hooks/quickCouplingData'
import { type AvailableCountsQC, applyFilters, countBy } from './components/QCTypes'
import { QCActiveFilters } from './components/QCActiveFilters'
import { QCSidebar } from './components/QCSidebar'
import QCTable from './components/QCTable'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function QuickCouplingPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<QuickCouplingFilters>(EMPTY_QC_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const models = useMemo(() => applyFilters(QUICK_COUPLING_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsQC>(() => ({
    series:          countBy(applyFilters(QUICK_COUPLING_DATA, filters, 'series'),          c => c.series),
    bodyMaterials:   countBy(applyFilters(QUICK_COUPLING_DATA, filters, 'bodyMaterials'),   c => c.bodyMaterial),
    connectionTypes: countBy(applyFilters(QUICK_COUPLING_DATA, filters, 'connectionTypes'), c => c.connectionType),
    types:           countBy(applyFilters(QUICK_COUPLING_DATA, filters, 'types'),           c => c.type),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  const sidebar = (
    <QCSidebar
      filters={filters}
      setFilters={setFilters}
      availableCounts={availableCounts}
      activeCount={activeCount}
    />
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>

      {/* HEADER */}
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          {QC_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {QC_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {QC_DESCRIPTION.specs.map(s => (
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
      </Box>

      {/* CONTENT */}
      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
            <FilterListIcon />
          </IconButton>
        )}

        <QCActiveFilters filters={filters} setFilters={setFilters} />

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
          <QCTable
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
    </Box>
  )
}