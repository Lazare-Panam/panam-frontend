import { useState, useMemo } from 'react'
import { Box, Typography, useMediaQuery, IconButton } from '@mui/material'
import { alpha } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import {
  TUBING_DATA, TUBING_DESCRIPTION,
  type TubingFilters, EMPTY_TUBING_FILTERS,
  applyFilters, countBy, type AvailableCountsTubing,
} from './hooks/tubingData'
import { TubingActiveFilters } from './components/TubingActiveFilters'
import TubingTable from './components/TubingTable'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function TubingPage() {
  const [filters, setFilters] = useState<TubingFilters>(EMPTY_TUBING_FILTERS)

  const models = useMemo(() => applyFilters(TUBING_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsTubing>(() => ({
    productTypes:   countBy(applyFilters(TUBING_DATA, filters, 'productTypes'),   c => c.productType),
    materials:      countBy(applyFilters(TUBING_DATA, filters, 'materials'),      c => c.material),
    units:          countBy(applyFilters(TUBING_DATA, filters, 'units'),          c => c.unit),
    outerDiameters: countBy(applyFilters(TUBING_DATA, filters, 'outerDiameters'), c => c.outerDiameter),
    wallThicknesses:countBy(applyFilters(TUBING_DATA, filters, 'wallThicknesses'),c => c.wallThickness),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          {TUBING_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {TUBING_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {TUBING_DESCRIPTION.specs.map(s => (
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

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <TubingActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <TubingTable
          models={models}
          filters={filters}
          setFilters={setFilters}
          availableCounts={availableCounts}
          activeCount={activeCount}
        />
      </Box>
    </Box>
  )
}