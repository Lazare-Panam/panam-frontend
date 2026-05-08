import React, { useState } from 'react'
import {
  Box, Stack, Typography, Button, Chip,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, IconButton, Drawer,
  useMediaQuery, 
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { type WeldFittingDTO, type WeldFittingFilterOptions } from '../../../api/weldFittingApi'

import { type WeldFittingFilters, WELD_FITTING_TYPE_LABELS, WELD_P1_TYPE_LABELS, WELD_P2_TYPE_LABELS } from '../hooks/weldFittingTypes'
import { WeldFittingSidebar } from './WeldFittingSidebar'
import { useCartStore } from '../../store/useCartStore'

const BRAND_BLUE = '#01B0F0'

function Spec({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function Row({ model }: { model: WeldFittingDTO }) {
  const [open, setOpen] = useState(false)
  const addToCart = useCartStore(s => s.addItem)

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{
        cursor: 'pointer',
        bgcolor: open ? alpha(BRAND_BLUE, 0.04) : 'inherit',
        '&:hover': { bgcolor: `${alpha(BRAND_BLUE, 0.03)} !important` },
      }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: BRAND_BLUE, fontSize: '0.8rem', py: 1 }}>
          {model.partNo}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={WELD_FITTING_TYPE_LABELS[model.fittingType] ?? model.fittingType} size="small"
            sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: BRAND_BLUE }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.material}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>
          {model.p1Size} {model.p1Unit === 'mm' ? 'mm' : '"'}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{WELD_P1_TYPE_LABELS[model.p1Type] ?? model.p1Type}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>
          {model.p2Size ? `${model.p2Size} ${model.p2Unit === 'mm' ? 'mm' : '"'}` : '—'}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>
          {model.p2Type ? (WELD_P2_TYPE_LABELS[model.p2Type] ?? model.p2Type) : '—'}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); addToCart({
            cartItemId: model.partNo,
            id: model.partNo,
            partNumber: model.partNo,
            name: `${WELD_FITTING_TYPE_LABELS[model.fittingType] ?? model.fittingType} — ${model.partNo}`,
            image: model.imageUrl ?? undefined,
            quantity: 1,
            specs: {
                'Fitting Type': WELD_FITTING_TYPE_LABELS[model.fittingType] ?? model.fittingType,
                'Tube OD': `${model.p1Size} ${model.p1Unit === 'mm' ? 'mm' : '"'}`,
                'Weld Type': WELD_P1_TYPE_LABELS[model.p1Type] ?? model.p1Type,
                ...(model.p2Size ? { 'Pipe Size': `${model.p2Size} ${model.p2Unit === 'mm' ? 'mm' : '"'}` } : {}),
                ...(model.p2Type ? { 'Pipe Thread': WELD_P2_TYPE_LABELS[model.p2Type] ?? model.p2Type } : {}),
            },
            }) }}
                        sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', bgcolor: BRAND_BLUE, textTransform: 'none', whiteSpace: 'nowrap', boxShadow: 'none', '&:hover': { bgcolor: '#0090c8', boxShadow: 'none' } }}>
            Add to Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={9} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_BLUE, 0.02), borderLeft: `4px solid ${BRAND_BLUE}`, borderBottom: '1px solid #eee' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  {model.imageUrl && (
                    <Box sx={{ width: 140, height: 140, flexShrink: 0, border: '1px solid #eee', borderRadius: 1, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                      <Box component="img" src={model.imageUrl} alt={model.partNo}
                        sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ color: BRAND_BLUE, display: 'block', mb: 2, letterSpacing: 1 }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part No" value={model.partNo} />
                      <Spec label="Fitting Type" value={WELD_FITTING_TYPE_LABELS[model.fittingType] ?? model.fittingType} />
                      <Spec label="Material" value={model.material} />
                      <Spec label="Tube OD" value={`${model.p1Size} ${model.p1Unit === 'mm' ? 'mm' : '"'}`} />
                      <Spec label="Weld Type" value={WELD_P1_TYPE_LABELS[model.p1Type] ?? model.p1Type} />
                      <Spec label="Unit System" value={model.p1Unit === 'mm' ? 'Metric' : 'Imperial'} />
                      {model.p2Size && <Spec label="Pipe Size" value={`${model.p2Size} ${model.p2Unit === 'mm' ? 'mm' : '"'}`} />}
                      {model.p2Type && <Spec label="Pipe Thread" value={WELD_P2_TYPE_LABELS[model.p2Type] ?? model.p2Type} />}
                    </Stack>
                    <Button variant="contained" size="small"
                      onClick={() =>addToCart({
                        cartItemId: model.partNo,
                        id: model.partNo,
                        partNumber: model.partNo,
                        name: `${WELD_FITTING_TYPE_LABELS[model.fittingType] ?? model.fittingType} — ${model.partNo}`,
                        image: model.imageUrl ?? undefined,
                        quantity: 1,
                        specs: {
                            'Fitting Type': WELD_FITTING_TYPE_LABELS[model.fittingType] ?? model.fittingType,
                            'Tube OD': `${model.p1Size} ${model.p1Unit === 'mm' ? 'mm' : '"'}`,
                            'Weld Type': WELD_P1_TYPE_LABELS[model.p1Type] ?? model.p1Type,
                            ...(model.p2Size ? { 'Pipe Size': `${model.p2Size} ${model.p2Unit === 'mm' ? 'mm' : '"'}` } : {}),
                            ...(model.p2Type ? { 'Pipe Thread': WELD_P2_TYPE_LABELS[model.p2Type] ?? model.p2Type } : {}),
                        },
                        })}
                      sx={{ bgcolor: BRAND_BLUE, textTransform: 'none', fontWeight: 700, borderRadius: '4px', '&:hover': { bgcolor: '#0090c8' } }}>
                      Add to Quote
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

type SortKey = 'partNo' | 'fittingType' | 'material' | 'p1Size' | 'p1Type' | 'p2Size' | 'p2Type'

export default function WeldFittingTable({
  models, isFetching, filters, setFilters, filterOptions, filtersLoading, activeCount,
}: {
  models: WeldFittingDTO[]
  isFetching?: boolean
  filters: WeldFittingFilters
  setFilters: React.Dispatch<React.SetStateAction<WeldFittingFilters>>
  filterOptions?: WeldFittingFilterOptions
  filtersLoading: boolean
  activeCount: number
}) {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(50)
  const [sortKey, setSortKey] = useState<SortKey>('partNo')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = [...models].sort((a, b) => {
    const av = (a[sortKey] ?? '') as string
    const bv = (b[sortKey] ?? '') as string
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(BRAND_BLUE, 0.04),
    borderBottom: `2px solid ${BRAND_BLUE}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  }

  const sidebar = (
    <WeldFittingSidebar
      filters={filters} setFilters={setFilters}
      filterOptions={filterOptions} filtersLoading={filtersLoading} activeCount={activeCount}
    />
  )

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: '8px', bgcolor: '#fff' }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>

      <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
        {isMobile && (
          <Box sx={{ p: 1, borderBottom: '1px solid #eee' }}>
            <IconButton onClick={() => setMobileOpen(true)}><FilterListIcon /></IconButton>
          </Box>
        )}
        {isFetching && (
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backdropFilter: 'blur(2px)', bgcolor: 'rgba(255,255,255,0.4)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ bgcolor: '#fff', px: 3, py: 1.5, borderRadius: '20px', boxShadow: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: BRAND_BLUE, animation: 'pulse 1s ease-in-out infinite', '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.3 } } }} />
              <Typography variant="caption" fontWeight={700} sx={{ color: BRAND_BLUE }}>UPDATING</Typography>
            </Box>
          </Box>
        )}
        <TableContainer sx={{ opacity: isFetching ? 0.6 : 1, transition: 'opacity 0.2s ease' }}>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...headerSx, width: 40 }} />
                {([
                  { key: 'partNo' as SortKey,      label: 'Part No' },
                  { key: 'fittingType' as SortKey, label: 'Fitting Type' },
                  { key: 'material' as SortKey,    label: 'Material' },
                  { key: 'p1Size' as SortKey,      label: 'Tube OD' },
                  { key: 'p1Type' as SortKey,      label: 'Weld Type' },
                  { key: 'p2Size' as SortKey,      label: 'Pipe Size' },
                  { key: 'p2Type' as SortKey,      label: 'Pipe Thread' },
                  { key: null,                      label: 'Quote' },
                ]).map((h, i) => (
                  <TableCell key={i} sx={headerSx}>
                    {h.key ? (
                      <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : 'asc'} onClick={() => handleSort(h.key!)}>
                        {h.label}
                      </TableSortLabel>
                    ) : h.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} align="center" sx={{ py: 6 }}>
                    <Typography variant="body2" color="text.secondary">No fittings found.</Typography>
                  </TableCell>
                </TableRow>
              ) : paginated.map((model, i) => <Row key={`${model.partNo}-${i}`} model={model} />)}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div" count={sorted.length} page={page} rowsPerPage={rowsPerPage}
          onPageChange={(_, p) => setPage(p)}
          onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
          rowsPerPageOptions={[25, 50, 100]}
          sx={{ borderTop: '1px solid #eee', fontSize: '0.8rem' }}
        />
      </Box>
    </Box>
  )
}