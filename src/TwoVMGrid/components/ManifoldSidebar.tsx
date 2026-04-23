import {
  Box, Stack, Typography, Chip, Divider,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox, Skeleton
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {type ManifoldFilters, EMPTY_MANIFOLD_FILTERS } from '../hooks/types'
import {type TwoWayManifoldFilterOptions } from '../../api/manifoldApi'
const BRAND_BLUE = '#01B0F0'

interface Props {
  filters: ManifoldFilters
  setFilters: React.Dispatch<React.SetStateAction<ManifoldFilters>>
  filterOptions?: TwoWayManifoldFilterOptions
  filtersLoading: boolean
  activeCount: number
}

function FilterGroup({ title, count, children }: {
  title: string; count?: number; children: React.ReactNode
}) {
  return (
    <Accordion defaultExpanded disableGutters elevation={0}
      sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
        sx={{ px: 0, minHeight: 40, '& .MuiAccordionSummary-content': { my: 1 } }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? (
            <Chip label={count} size="small"
              sx={{ height: 16, fontSize: '0.65rem', bgcolor: BRAND_BLUE, color: '#fff' }} />
          ) : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function MultiCheckbox({ options, selected, onChange, loading }: {
  options: string[]
  selected: string[]
  onChange: (val: string) => void
  loading?: boolean
}) {
  if (loading) return <Skeleton height={60} />
  if (options.length === 0) return (
    <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  )
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={opt}
          control={
            <Checkbox size="small"
              checked={selected.includes(opt)}
              onChange={() => onChange(opt)}
              sx={{ '&.Mui-checked': { color: BRAND_BLUE } }}
            />
          }
          label={<Typography variant="body2">{opt}</Typography>}
        />
      ))}
    </>
  )
}

export function ManifoldSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const toggle = (key: keyof ManifoldFilters, val: string) => {
    setFilters(prev => {
      const current = prev[key]
      const updated = current.includes(val)
        ? current.filter(v => v !== val)
        : [...current, val]
      return { ...prev, [key]: updated }
    })
  }

  return (
    <Box sx={{
      width: 280, minHeight: '100vh', p: 3,
      borderRight: '1px solid', borderColor: 'divider',
      bgcolor: 'background.paper', position: 'sticky', top: 0,
      alignSelf: 'flex-start', maxHeight: '100vh',
      overflowY: 'auto', overflowX: 'hidden',
      flexShrink: 0, boxSizing: 'border-box',
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">
          FIND YOUR MANIFOLD
        </Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700}
            sx={{ cursor: 'pointer', color: BRAND_BLUE }}
            onClick={() => setFilters(EMPTY_MANIFOLD_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="MAX PRESSURE" count={filters.maxPressures.length || undefined}>
        <MultiCheckbox
          options={filterOptions?.maxPressures ?? []}
          selected={filters.maxPressures}
          onChange={v => toggle('maxPressures', v)}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
            <FilterGroup title="CONNECTION SIZE" count={filters.connectionSizes.length || undefined}>
        <MultiCheckbox
          options={filterOptions?.connectionSizes ?? []}
          selected={filters.connectionSizes}
          onChange={v => toggle('connectionSizes', v)}
          loading={filtersLoading}
        />
      </FilterGroup>
      

   <Divider sx={{ my: 1 }} />
      <FilterGroup title="CONNECTION TYPE" count={filters.connectionTypes.length || undefined}>
        <MultiCheckbox
          options={filterOptions?.connectionTypes ?? []}
          selected={filters.connectionTypes}
          onChange={v => toggle('connectionTypes', v)}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="MOUNTING" count={filters.mountings.length || undefined}>
        <MultiCheckbox
          options={filterOptions?.mountings ?? []}
          selected={filters.mountings}
          onChange={v => toggle('mountings', v)}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

<FilterGroup title="CONFIGURATION" count={filters.configurations.length || undefined}>
  <MultiCheckbox
    options={filterOptions?.configurations ?? []}
    selected={filters.configurations}
    onChange={v => toggle('configurations', v)}
    loading={filtersLoading}
  />
</FilterGroup>
<Divider sx={{ my: 1 }} />

<FilterGroup title="VENT HOLE SIZE" count={filters.ventHoleSizes.length || undefined}>
  <MultiCheckbox
    options={filterOptions?.ventHoleSizes ?? []}
    selected={filters.ventHoleSizes}
    onChange={v => toggle('ventHoleSizes', v)}
    loading={filtersLoading}
  />
</FilterGroup>
   

    </Box>
  )
}