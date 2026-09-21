import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  HP_NIPPLE_DATA, HP_NIPPLE_DESCRIPTION,
  type HPNippleFilters, EMPTY_NIPPLE_FILTERS,
  applyFilters, countBy, type AvailableCountsNipple,
} from './hooks/hpNippleData'
import { HPNippleActiveFilters } from './components/HPNippleActiveFilters'
import HPNippleTable from './components/HPNippleTable'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function HPNipplePage() {
  const [filters, setFilters] = useState<HPNippleFilters>(EMPTY_NIPPLE_FILTERS)

  const models = useMemo(() => applyFilters(HP_NIPPLE_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsNipple>(() => ({
    connectionTypes: countBy(applyFilters(HP_NIPPLE_DATA, filters, 'connectionTypes'), c => c.connectionType),
    tubeODs:         countBy(applyFilters(HP_NIPPLE_DATA, filters, 'tubeODs'),         c => c.tubeOD),
    lengths:         countBy(applyFilters(HP_NIPPLE_DATA, filters, 'lengths'),         c => c.length),
    pressureRatings: countBy(applyFilters(HP_NIPPLE_DATA, filters, 'pressureRatings'), c => c.pressureRating),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <title>PANAM® High Pressure Cone & Thread Nipples | MP & HP | 20,000–60,000 psi | SS 316</title>
      <meta name="description" content="Panam high pressure cone & thread nipples in MP and HP styles, 1/4&quot; to 1&quot; OD, rated 20,000 to 60,000 psi. SS 316, lengths from 2.75&quot; to 12&quot;." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/high-pressure/cones-threaded-nipples" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PANAM® High Pressure Cone & Thread Nipples | MP & HP | 20,000–60,000 psi | SS 316" />
      <meta property="og:description" content="Panam high pressure cone & thread nipples in MP and HP styles, 1/4&quot; to 1&quot; OD, rated 20,000 to 60,000 psi. SS 316, lengths from 2.75&quot; to 12&quot;." />
      <meta property="og:url" content="https://www.panamvalve.com/high-pressure/cones-threaded-nipples" />
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          {HP_NIPPLE_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {HP_NIPPLE_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {HP_NIPPLE_DESCRIPTION.specs.map(s => (
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
        <HPNippleActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <HPNippleTable
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