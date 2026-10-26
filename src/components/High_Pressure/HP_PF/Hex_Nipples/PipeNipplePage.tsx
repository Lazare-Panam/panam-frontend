import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  PIPE_NIPPLE_DATA, PIPE_NIPPLE_DESCRIPTION,
  type PipeFittingNippleFilters, EMPTY_NIPPLE_PIPE_FILTERS,
  applyFilters, countBy, type AvailableCountsNipplePipe,
} from './hooks/pipeFittingsNippleData'
import { PipeNippleActiveFilters } from './components/PipeNippleActiveFilters'
import PipeNippleTable from './components/PipeNippleTable'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function PipeNipplePage() {
  const [filters, setFilters] = useState<PipeFittingNippleFilters>(EMPTY_NIPPLE_PIPE_FILTERS)

  const models = useMemo(() => applyFilters(PIPE_NIPPLE_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsNipplePipe>(() => ({
    fittingTypes:    countBy(applyFilters(PIPE_NIPPLE_DATA, filters, 'fittingTypes'),    c => c.fittingType),
    pressureRatings: countBy(applyFilters(PIPE_NIPPLE_DATA, filters, 'pressureRatings'), c => c.pressureRating),
    p1Threads:       countBy(applyFilters(PIPE_NIPPLE_DATA, filters, 'p1Threads'),       c => c.p1Thread),
    p1Sizes:         countBy(applyFilters(PIPE_NIPPLE_DATA, filters, 'p1Sizes'),         c => c.p1Size),
    p2Threads:       countBy(applyFilters(PIPE_NIPPLE_DATA, filters, 'p2Threads'),       c => c.p2Thread),
    p2Sizes:         countBy(applyFilters(PIPE_NIPPLE_DATA, filters, 'p2Sizes'),         c => c.p2Size),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <title>PANAM® HP Hex Nipples & Reducing Hex Nipples | 10,000–15,000 psi</title>
      <meta name="description" content="Panam high pressure hex nipples, reducing hex nipples and long nipples in NPT, BSPT, ISO parallel and 37° JIC, rated 10,000 to 15,000 psi. SS 316, 1/8&quot; to 2&quot;." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/high-pressure/pipe-fittings/hex-nipples" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PANAM® HP Hex Nipples & Reducing Hex Nipples | 10,000–15,000 psi" />
      <meta property="og:description" content="Panam high pressure hex nipples, reducing hex nipples and long nipples in NPT, BSPT, ISO parallel and 37° JIC, rated 10,000 to 15,000 psi. SS 316, 1/8&quot; to 2&quot;." />
      <meta property="og:url" content="https://www.panamvalve.com/high-pressure/pipe-fittings/hex-nipples" />
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          {PIPE_NIPPLE_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {PIPE_NIPPLE_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {PIPE_NIPPLE_DESCRIPTION.specs.map(s => (
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
        <PipeNippleActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <PipeNippleTable
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