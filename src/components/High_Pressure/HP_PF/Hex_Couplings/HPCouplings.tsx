import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  PIPE_COUPLING_DATA, PIPE_COUPLING_DESCRIPTION,
  type PipeCouplingFilters, EMPTY_COUPLING_FILTERS,
  applyFilters, countBy, type AvailableCountsCoupling,
} from './hooks/pipeFittingsCouplingData'
import { PipeCouplingActiveFilters } from './components/PipeCouplingActiveFilters'
import PipeCouplingTable from './components/PipeCouplingTable'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function PipeCouplingPage() {
  const [filters, setFilters] = useState<PipeCouplingFilters>(EMPTY_COUPLING_FILTERS)

  const models = useMemo(() => applyFilters(PIPE_COUPLING_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsCoupling>(() => ({
    fittingTypes:    countBy(applyFilters(PIPE_COUPLING_DATA, filters, 'fittingTypes'),    c => c.fittingType),
    pressureRatings: countBy(applyFilters(PIPE_COUPLING_DATA, filters, 'pressureRatings'), c => c.pressureRating),
    p1Threads:       countBy(applyFilters(PIPE_COUPLING_DATA, filters, 'p1Threads'),       c => c.p1Thread),
    p1Sizes:         countBy(applyFilters(PIPE_COUPLING_DATA, filters, 'p1Sizes'),         c => c.p1Size),
    p2Threads:       countBy(applyFilters(PIPE_COUPLING_DATA, filters, 'p2Threads'),       c => c.p2Thread),
    p2Sizes:         countBy(applyFilters(PIPE_COUPLING_DATA, filters, 'p2Sizes'),         c => c.p2Size),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <title>PANAM® High Pressure Hex Couplings & Swivel Unions | 10,000–15,000 psi | SS 316</title>
      <meta name="description" content="Panam high pressure hex couplings, reducing hex couplings and swivel unions in NPT, BSPT, ISO parallel and 37° JIC, rated 10,000 to 15,000 psi. SS 316, 1/8&quot; to 1&quot;." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/high-pressure/pipe-fittings/hex-couplings" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PANAM® High Pressure Hex Couplings & Swivel Unions | 10,000–15,000 psi | SS 316" />
      <meta property="og:description" content="Panam high pressure hex couplings, reducing hex couplings and swivel unions in NPT, BSPT, ISO parallel and 37° JIC, rated 10,000 to 15,000 psi. SS 316, 1/8&quot; to 1&quot;." />
      <meta property="og:url" content="https://www.panamvalve.com/high-pressure/pipe-fittings/hex-couplings" />
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          {PIPE_COUPLING_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {PIPE_COUPLING_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {PIPE_COUPLING_DESCRIPTION.specs.map(s => (
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
        <PipeCouplingActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <PipeCouplingTable
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