import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  HP_DBB_DATA, HP_DBB_DESCRIPTION,
  type HPDBBFilters, EMPTY_HPDBB_FILTERS,
  applyFilters, countBy, type AvailableCountsHPDBB,
} from './hooks/hpDBBData'
import { HPDBBActiveFilters } from './components/HPDBBActiveFilters'
import HPDBBTable from './components/HPDBBTable'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function HPDBBPage() {
  const [filters, setFilters] = useState<HPDBBFilters>(EMPTY_HPDBB_FILTERS)

  const models = useMemo(() => applyFilters(HP_DBB_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsHPDBB>(() => ({
    pressureRatings:  countBy(applyFilters(HP_DBB_DATA, filters, 'pressureRatings'),  c => c.pressureRating),
    configurations:   countBy(applyFilters(HP_DBB_DATA, filters, 'configurations'),   c => c.configuration),
    inletOutletSizes: countBy(applyFilters(HP_DBB_DATA, filters, 'inletOutletSizes'), c => c.inletOutletSize),
    inletOutletTypes: countBy(applyFilters(HP_DBB_DATA, filters, 'inletOutletTypes'), c => c.inletOutletType),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <title>PANAM® HP Double Block & Bleed Valves | 15,000–20,000 psi</title>
      <meta name="description" content="Panam high pressure double block & bleed valves, ball-needle-ball and needle-needle, 15,000–20,000 psi. SS 316 with NPT and MP cone & thread ends." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/high-pressure/double-block-and-valves" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PANAM® HP Double Block & Bleed Valves | 15,000–20,000 psi" />
      <meta property="og:description" content="Panam high pressure double block & bleed valves, ball-needle-ball and needle-needle, 15,000–20,000 psi. SS 316 with NPT and MP cone & thread ends." />
      <meta property="og:url" content="https://www.panamvalve.com/high-pressure/double-block-and-valves" />
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          {HP_DBB_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {HP_DBB_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {HP_DBB_DESCRIPTION.specs.map(s => (
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
        <HPDBBActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <HPDBBTable
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