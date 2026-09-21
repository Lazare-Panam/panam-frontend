import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  HP_MANIFOLD_DATA, HP_MANIFOLD_DESCRIPTION,
  type HPManifoldFilters, EMPTY_MANIFOLD_FILTERS,
  applyFilters, countBy, type AvailableCountsManifold,
} from './hooks/hpManifoldData'
import { HPManifoldActiveFilters } from './components/HPManifoldActiveFilters'
import HPManifoldTable from './components/HPManifoldTable'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function HPManifoldPage() {
  const [filters, setFilters] = useState<HPManifoldFilters>(EMPTY_MANIFOLD_FILTERS)

  const models = useMemo(() => applyFilters(HP_MANIFOLD_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsManifold>(() => ({
    pressureRatings: countBy(applyFilters(HP_MANIFOLD_DATA, filters, 'pressureRatings'), c => c.pressureRating),
    connectionSizes: countBy(applyFilters(HP_MANIFOLD_DATA, filters, 'connectionSizes'), c => c.connectionSize),
    connectionTypes: countBy(applyFilters(HP_MANIFOLD_DATA, filters, 'connectionTypes'), c => c.connectionType),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <title>PANAM® High Pressure 2-Valve Manifolds | 15,000–20,000 psi | SS 316</title>
      <meta name="description" content="Panam high pressure 2-valve manifolds rated 15,000 to 20,000 psi in SS 316, with NPT and MP cone & thread connections for gauge and instrument isolation." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/high-pressure/2-valve-manifolds" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PANAM® High Pressure 2-Valve Manifolds | 15,000–20,000 psi | SS 316" />
      <meta property="og:description" content="Panam high pressure 2-valve manifolds rated 15,000 to 20,000 psi in SS 316, with NPT and MP cone & thread connections for gauge and instrument isolation." />
      <meta property="og:url" content="https://www.panamvalve.com/high-pressure/2-valve-manifolds" />
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          {HP_MANIFOLD_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {HP_MANIFOLD_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {HP_MANIFOLD_DESCRIPTION.specs.map(s => (
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
        <HPManifoldActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <HPManifoldTable
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