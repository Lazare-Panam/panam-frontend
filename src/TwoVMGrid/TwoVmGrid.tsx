import { useState } from 'react'
import {
  Box, Typography, CircularProgress,
  useMediaQuery, Drawer, IconButton
} from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useTwoWayManifoldFilters, useTwoWayManifolds } from './hooks/useManifold'
import { ManifoldSidebar } from './components/ManifoldSidebar'
import { ManifoldActiveFilters } from './components/ManifoldActiveFilters'
import ManifoldTable from './components/ManifoldTable'
import {type ManifoldFilters, EMPTY_MANIFOLD_FILTERS } from './hooks/types'

const BRAND_BLUE = '#01B0F0'

export default function TwoWayManifoldPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<ManifoldFilters>(EMPTY_MANIFOLD_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useTwoWayManifoldFilters()
  const { data: models = [], isLoading, isFetching } = useTwoWayManifolds(filters)

const activeCount =
  filters.connectionSizes.length +
  filters.connectionTypes.length +
  filters.mountings.length +
  filters.maxPressures.length +
  filters.configurations.length +
  filters.ventHoleSizes.length

  const sidebar = (
    <ManifoldSidebar
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
        <Box sx={{
          p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)',
          bgcolor: 'background.paper'
        }}>
          <Typography variant="h4" fontWeight={800} mb={1}
            sx={{ color: BRAND_BLUE }}>
            2-Way Valve Manifold{' '}
            <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>
              — Standard Body
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            316 Stainless Steel. Filter by connection size, type, mounting and pressure rating.
            Expand any row for full specs and to request a quote.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}

          <ManifoldActiveFilters filters={filters} setFilters={setFilters} />

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
            <ManifoldTable models={models} isFetching={isFetching} />
          )}
        </Box>
      </Box>
    </Box>
  )
}