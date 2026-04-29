import { useState } from 'react'
import {
  Box, Typography, CircularProgress,
  useMediaQuery, Drawer, IconButton, Chip
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent'
import PressureIcon from '@mui/icons-material/Speed'
import VerifiedIcon from '@mui/icons-material/Verified'
import { useBallValveFilterOptions, useBallValves } from './components/useBallValve'
import { BallValveSidebar } from './components/BallValveSidebar'
import { BallValveActiveFilters } from './components/BallValvesActiveFilters'
import BallValveTable from './components/BallValveTable'
import { type BallValveFilters, EMPTY_BALL_VALVE_FILTERS } from './components/types'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const HIGHLIGHT_STATS = [
  { label: 'Max Pressure', value: '10,000 psig' },
  { label: 'Size Range', value: '1/8" – 2"' },
  { label: 'Materials', value: 'SS316, Duplex, Monel' },
  { label: 'Certifications', value: 'NACE / CE' },
]

const FEATURE_COLUMNS = [
  {
    icon: <SettingsInputComponentIcon sx={{ fontSize: 22, color: BRAND_BLUE }} />,
    title: 'Configurations & Connections',
    body: 'Available in 2‑way and 3‑way configurations with T‑port and L‑port flow paths. Full range of end connections including male and female NPT, BSPP, BSPT, and PANAM® tube‑fitting connections.',
  },
  {
    icon: <PressureIcon sx={{ fontSize: 22, color: BRAND_BLUE }} />,
    title: 'High-Pressure Performance',
    body: 'Rated up to 10,000 psig (689 bar) in sizes from 1/8" to 2". The floating‑ball design delivers reliable, leak‑proof shut‑off under severe pressure cycling. Seat materials include Delrin, PTFE, PEEK, and KEL‑F.',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 22, color: BRAND_BLUE }} />,
    title: 'Safety & Traceability',
    body: 'Internally loaded anti–blow‑out stem on every valve. Panel‑mounting and lever‑handle options available in selected sizes. NACE certification and full heat‑code traceability available on request.',
  },
]

export default function BallValvePage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<BallValveFilters>(EMPTY_BALL_VALVE_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useBallValveFilterOptions()
  const { data: models = [], isLoading, isFetching } = useBallValves(filters)

  const activeCount =
    filters.series.length +
    filters.bodyMaterials.length +
    filters.threadTypes.length +
    filters.endConnectionTypes.length +
    filters.connectionSizes.length +
    filters.configurations.length +
    filters.seatMaterials.length +
    filters.handles.length +
    filters.pressureRatings.length +
    filters.options.length

  const sidebar = (
    <BallValveSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

        {/* ── HEADER ── */}
        <Box sx={{
          px: { xs: 3, md: 6 },
          pt: 5,
          pb: 0,
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          bgcolor: 'background.paper',
        }}>
          {/* Title + stat chips */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 3 }}>
            <Box>
              <Typography
                component="h1"
                variant="h4"
                fontWeight={800}
                sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT, letterSpacing: '-0.5px' }}
              >
                Ball Valves
              </Typography>
              <Typography variant="body2" sx={{ color: '#888', fontFamily: PRIMARY_FONT, mt: 0.5 }}>
                2‑Way &amp; 3‑Way · T‑port &amp; L‑port · Floating ball design
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {HIGHLIGHT_STATS.map((s) => (
                <Chip
                  key={s.label}
                  label={
                    <Box sx={{ display: 'flex', gap: 0.75, alignItems: 'center' }}>
                      <Typography variant="caption" sx={{ color: '#888', fontFamily: PRIMARY_FONT, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.65rem' }}>
                        {s.label}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#1a1a1a', fontFamily: PRIMARY_FONT, fontWeight: 700 }}>
                        {s.value}
                      </Typography>
                    </Box>
                  }
                  size="small"
                  sx={{
                    bgcolor: alpha(BRAND_BLUE, 0.07),
                    border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
                    borderRadius: '6px',
                    height: 28,
                    '& .MuiChip-label': { px: 1.25 },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Divider */}
          <Box sx={{ height: '1px', bgcolor: alpha(BRAND_BLUE, 0.12) }} />

          {/* Feature columns */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          }}>
            {FEATURE_COLUMNS.map((col, i) => (
              <Box
                key={col.title}
                sx={{
                  px: 3,
                  py: 2.5,
                  borderRight: i < 2 ? { xs: 'none', md: `1px solid ${alpha(BRAND_BLUE, 0.12)}` } : 'none',
                  borderBottom: { xs: i < 2 ? `1px solid ${alpha(BRAND_BLUE, 0.12)}` : 'none', md: 'none' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  {col.icon}
                  <Typography component="h2" variant="body2" fontWeight={700} sx={{ fontFamily: PRIMARY_FONT, color: '#1a1a1a' }}>
                    {col.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.75, fontFamily: PRIMARY_FONT, fontSize: '0.82rem' }}>
                  {col.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── CONTENT ── */}
        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}

          <BallValveActiveFilters filters={filters} setFilters={setFilters} />

          <Typography variant="caption" fontWeight={700} color="text.disabled"
            sx={{ display: 'block', mb: 2 }}>
            {isFetching && !isLoading
              ? 'UPDATING...'
              : isLoading
              ? 'LOADING...'
              : `${models.length} CONFIGURATIONS`}
          </Typography>

          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
              <CircularProgress sx={{ color: BRAND_BLUE }} />
            </Box>
          ) : (
            <BallValveTable models={models} isFetching={isFetching} />
          )}
        </Box>
      </Box>
    </Box>
  )
}