import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { type PipeFittingDTO } from '../../api/pipeFittingApi'
import { FITTING_TYPE_LABELS, THREAD_TYPE_LABELS } from '../hooks/types'
import { useCartStore } from '../../components/store/useCartStore'
import { PipeFittingSidebar } from './PipeFittingSidebar'
import { type PipeFittingFilters, } from '../hooks/types'
import { type PipeFittingFilterOptions } from '../../api/pipeFittingApi'

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

function Row({ model }: { model: PipeFittingDTO }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)

  const specs: Record<string, string> = {
    'Part No': model.partNo,
    'Fitting Type': FITTING_TYPE_LABELS[model.fittingType] ?? model.fittingType,
    'Material': model.material,
    'P1 Size': model.p1Size,
    'P1 Thread': THREAD_TYPE_LABELS[model.p1Type] ?? model.p1Type,
    ...(model.p2Size ? { 'P2 Size': model.p2Size } : {}),
    ...(model.p2Type ? { 'P2 Thread': THREAD_TYPE_LABELS[model.p2Type] ?? model.p2Type } : {}),
    ...(model.lengthVariant ? { 'Length': model.lengthVariant } : {}),
  }

  const handleAddToQuote = () => addItem({
    cartItemId: model.partNo,
    id: String(model.id),
    name: `${FITTING_TYPE_LABELS[model.fittingType] ?? model.fittingType} — ${model.partNo}`,
    image: model.imageUrl,
    quantity: 1,
    partNumber: model.partNo,
    specs,
  })

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
          <Chip label={FITTING_TYPE_LABELS[model.fittingType] ?? model.fittingType} size="small"
            sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: BRAND_BLUE }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.material}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.p1Size}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{THREAD_TYPE_LABELS[model.p1Type] ?? model.p1Type}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.p2Size ?? '—'}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.p2Type ? (THREAD_TYPE_LABELS[model.p2Type] ?? model.p2Type) : '—'}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.lengthVariant ?? '—'}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); handleAddToQuote() }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_BLUE, boxShadow: 'none', '&:hover': { bgcolor: '#0199d4', boxShadow: 'none' } }}>
            Add to Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={10} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_BLUE, 0.02), borderLeft: `4px solid ${BRAND_BLUE}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  {model.imageUrl && (
                    <Box sx={{ width: 120, height: 120, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                      <img src={model.imageUrl} alt={model.partNo} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_BLUE }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      {Object.entries(specs).map(([k, v]) => <Spec key={k} label={k} value={v} />)}
                    </Stack>
                    <Button variant="contained" onClick={handleAddToQuote}
                      sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_BLUE, '&:hover': { bgcolor: '#0199d4' } }}>
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

type SortKey = 'partNo' | 'fittingType' | 'material' | 'p1Size' | 'p1Type' | 'p2Size' | 'p2Type' | 'lengthVariant'

export default function PipeFittingTable({
  models,
  isFetching,
  filters,
  setFilters,
  filterOptions,
  filtersLoading,
  activeCount,
  isMobile,
}: {
  models: PipeFittingDTO[]
  isFetching?: boolean
  filters: PipeFittingFilters
  setFilters: React.Dispatch<React.SetStateAction<PipeFittingFilters>>
  filterOptions?: PipeFittingFilterOptions
  filtersLoading: boolean
  activeCount: number
  isMobile: boolean
}) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(20)
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

  return (
// TO:
<Box sx={{
  display: 'flex', alignItems: 'flex-start',
  border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
  borderRadius: '8px',
  bgcolor: 'background.paper',
}}>
      {!isMobile && (
        <PipeFittingSidebar
          filters={filters}
          setFilters={setFilters}
          filterOptions={filterOptions}
          filtersLoading={filtersLoading}
          activeCount={activeCount}
        />
      )}

      <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
        {isFetching && (
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backdropFilter: 'blur(2px)', bgcolor: 'rgba(255,255,255,0.4)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ bgcolor: 'background.paper', px: 3, py: 1.5, borderRadius: '20px', boxShadow: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
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
                  { key: 'partNo' as SortKey,        label: 'Part No' },
                  { key: 'fittingType' as SortKey,   label: 'Fitting Type' },
                  { key: 'material' as SortKey,      label: 'Material' },
                  { key: 'p1Size' as SortKey,        label: 'P1 Size' },
                  { key: 'p1Type' as SortKey,        label: 'P1 Thread' },
                  { key: 'p2Size' as SortKey,        label: 'P2 Size' },
                  { key: 'p2Type' as SortKey,        label: 'P2 Thread' },
                  { key: 'lengthVariant' as SortKey, label: 'Length' },
                  { key: null,                        label: 'Quote' },
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
                  <TableCell colSpan={10} align="center" sx={{ py: 6 }}>
                    <Typography variant="body2" color="text.secondary">No fittings found.</Typography>
                  </TableCell>
                </TableRow>
              ) : paginated.map((model, i) => <Row key={`${model.partNo}-${i}`} model={model} />)}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={sorted.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={(_, p) => setPage(p)}
          onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
          rowsPerPageOptions={[20, 50, 100]}
          sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' }}
        />
      </Box>
    </Box>
  )
}