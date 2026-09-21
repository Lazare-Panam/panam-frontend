import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  HP_NEEDLE_VALVE_DATA, HP_NV_DESCRIPTION,
  type HPNeedleValveFilters, EMPTY_HP_FILTERS,
  applyFilters, countBy, type AvailableCountsHP,
} from './hooks/hpNeedleValveData'
import { HPNVActiveFilters } from './components/HPNVActiveFilters'
import HPNVTable from './components/HPNVTable'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function HPNeedleValvePage() {
  const [filters, setFilters] = useState<HPNeedleValveFilters>(EMPTY_HP_FILTERS)

  const models = useMemo(() => applyFilters(HP_NEEDLE_VALVE_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsHP>(() => ({
    series:          countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'series'),          c => c.series),
    pressureRatings: countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'pressureRatings'), c => c.pressureRating),
    connectionSizes: countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'connectionSizes'), c => c.connectionSize),
    connectionTypes: countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'connectionTypes'), c => c.connectionType),
    configurations:  countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'configurations'),  c => c.configuration),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <title>PANAM® High Pressure Needle Valves | HP, HP1, HP2, HP3 & HP6 Series | 10,000–60,000 psi</title>
      <meta name="description" content="Panam high pressure needle valves in HP, HP1, HP2, HP3 and HP6 series rated 10,000 to 60,000 psi. SS 316, NPT and MP/HP cone & thread ends, with angle, 3-way and replaceable-seat options." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/high-pressure/needle-valves" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PANAM® High Pressure Needle Valves | HP, HP1, HP2, HP3 & HP6 Series | 10,000–60,000 psi" />
      <meta property="og:description" content="Panam high pressure needle valves in HP, HP1, HP2, HP3 and HP6 series rated 10,000 to 60,000 psi. SS 316, NPT and MP/HP cone & thread ends, with angle, 3-way and replaceable-seat options." />
      <meta property="og:url" content="https://www.panamvalve.com/high-pressure/needle-valves" />
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          {HP_NV_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {HP_NV_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {HP_NV_DESCRIPTION.specs.map(s => (
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
        <HPNVActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <HPNVTable
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