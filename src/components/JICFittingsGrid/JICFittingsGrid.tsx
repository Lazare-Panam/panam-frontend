import { useState } from 'react'
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from '@mui/material'
import { alpha } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useJICFittingFilterOptions, useJICFittings } from './hooks/useJICFittings'
import { JICFittingSidebar } from './components/JICFittingSidebar'
import JICFittingTable from './components/JICFittingTable'
import { type JICFittingFilters, EMPTY_JIC_FITTING_FILTERS } from './hooks/types'
import { JICFittingActiveFilters } from './components/JICFittingActiveFilters'

const BRAND_BLUE = '#01B0F0'

export default function JICFittingPage({
  defaultFittingTypes,
  title = '37° Flared JIC Fittings',
  section = 'all',
}: {
  defaultFittingTypes?: string[]
  title?: string
  section?: string
} = {}) {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<JICFittingFilters>({
    ...EMPTY_JIC_FITTING_FILTERS,
    fittingTypes: defaultFittingTypes ?? [],
  })
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useJICFittingFilterOptions()
  const { data: models = [], isLoading, isFetching } = useJICFittings(filters)

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <>
      {/* Page metadata is only rendered for the standalone /all page. The section-specific
          sub-pages (connectors, unions-swivel, elbows, …) embed this grid but supply their own
          <title>/canonical, so emitting it here too would produce duplicate title/canonical tags. */}
      {section === "all" && (
        <>
          <title>37° Flared JIC Fittings | PANAM® Instrumentation</title>
          <meta name="description" content="Configure PANAM® 37° JIC fittings by type, thread standard and size. SS316 connectors, unions, elbows, tees and adapters, 1/8 to 2 inch." />
          <meta name="keywords" content="JIC fittings, 37 degree flare fittings, SS316 JIC, NPT BSPP BSPT fittings, instrumentation tube fittings" />
          <meta property="og:title" content="37° Flared JIC Fittings | PANAM® Instrumentation" />
          <meta property="og:description" content="Configure PANAM® 37° JIC Fittings by type, thread standard, and size. SS316 construction, full range of connectors, unions, elbows, tees and adapters." />
          <meta property="og:type" content="product" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://www.panamvalve.com/instrumentation-fittings/jic-fittings/all" />
          <meta name="robots" content="index, follow" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "37° Flared JIC Fittings",
              description: "Configure PANAM® 37° JIC fittings by type, thread standard and size. SS316 connectors, unions, elbows, tees and adapters, 1/8 to 2 inch.",
              url: "https://www.panamvalve.com/instrumentation-fittings/jic-fittings/all",
            })}
          </script>
        </>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
        <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
          <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
            Male and female connectors, unions, elbows, tees and adapters in 37° JIC flare. Available in NPT, BSPT, BSPP, SAE/MS and Metric thread standards.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {['SS316', '37° JIC Flare', 'NPT / BSPT / BSPP', 'SAE/MS / Metric', '1/8" – 2"'].map(s => (
              <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(BRAND_BLUE, 0.08), color: '#0277BD', border: `1px solid ${alpha(BRAND_BLUE, 0.2)}` }}>
                {s}
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}

          <JICFittingActiveFilters filters={filters} setFilters={setFilters} />

          <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1 }}>
            {isFetching && !isLoading ? 'UPDATING...' : isLoading ? 'LOADING...' : `${models.length} CONFIGURATIONS`}
          </Typography>

          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 300 }}>
              <CircularProgress sx={{ color: BRAND_BLUE }} />
            </Box>
          ) : (
            <JICFittingTable
              models={models}
              isFetching={isFetching}
              filters={filters}
              setFilters={setFilters}
              filterOptions={filterOptions}
              filtersLoading={filtersLoading}
              activeCount={activeCount}
              isMobile={isMobile}
              section={section}
            />
          )}

          <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
            <JICFittingSidebar
              filters={filters}
              setFilters={setFilters}
              filterOptions={filterOptions}
              filtersLoading={filtersLoading}
              activeCount={activeCount}
            />
          </Drawer>
        </Box>
      </Box>
    </>
  )
}