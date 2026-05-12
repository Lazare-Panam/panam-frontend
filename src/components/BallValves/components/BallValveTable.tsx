import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { type BallValveDTO, type BallValveFilterOptions } from '../../../api/ballValveApi'
import { SERIES_LABELS, BODY_MATERIAL_LABELS, type BallValveFilters } from './types'
import { useCartStore } from '../../../components/store/useCartStore'
import { BallValveSidebar } from './BallValveSidebar'

const BRAND_BLUE = '#01B0F0'

const SERIES_COLORS: Record<string, { bg: string; text: string }> = {
  '2W': { bg: '#E3F4FD', text: '#0277BD' },
  '3W': { bg: '#E8F5E9', text: '#2E7D32' },
  'HB': { bg: '#FFF3E0', text: '#E65100' },
}

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

function Row({ model }: { model: BallValveDTO }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)

  const seriesColors = SERIES_COLORS[model.series] ?? { bg: '#F5F5F5', text: '#333' }
  const seriesLabel = SERIES_LABELS[model.series] ?? model.series
  const bodyMaterialLabel = BODY_MATERIAL_LABELS[model.bodyMaterial] ?? model.bodyMaterial

  const specs: Record<string, string> = {
    'Part Number': model.partNumber,
    'Series': seriesLabel,
    'Body Material': bodyMaterialLabel,
    'Thread Type': model.threadType,
    'End Connection': model.endConnectionType,
    'Connection Size': model.connectionSize,
    'Configuration': model.configuration,
    'Seat Material': model.seatMaterial,
    'Handle': model.handle,
    ...(model.pressureRating ? { 'Pressure Rating': model.pressureRating } : {}),
    ...(model.options ? { 'Options': model.options } : {}),
  }

  const handleAddToQuote = () => addItem({
    cartItemId: model.partNumber,
    id: String(model.partNumber),
    name: `${seriesLabel} Ball Valve — ${model.partNumber}`,
    image: model.imageUrl,
    quantity: 1,
    partNumber: model.partNumber,
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
          {model.partNumber}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={seriesLabel} size="small"
            sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: seriesColors.bg, color: seriesColors.text }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.threadType}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.endConnectionType}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.connectionSize}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.configuration}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.seatMaterial}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.handle}</TableCell>
        <TableCell sx={{ py: 1 }}>
          {model.pressureRating ? (
            <Chip label={model.pressureRating} size="small"
              sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: '#FCE4EC', color: '#880E4F' }} />
          ) : (
            <Typography variant="caption" color="text.disabled">—</Typography>
          )}
        </TableCell>
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
          <TableCell colSpan={11} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_BLUE, 0.02), borderLeft: `4px solid ${BRAND_BLUE}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  {model.imageUrl && (
                    <Box sx={{ width: 120, height: 120, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                      <img src={model.imageUrl} alt={model.partNumber} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
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

type SortKey = 'partNumber' | 'series' | 'threadType' | 'endConnectionType' | 'connectionSize' | 'configuration' | 'seatMaterial' | 'handle' | 'pressureRating'

export default function BallValveTable({
  models,
  isFetching,
  filters,
  setFilters,
  filterOptions,
  filtersLoading,
  activeCount,
  isMobile,
}: {
  models: BallValveDTO[]
  isFetching?: boolean
  filters: BallValveFilters
  setFilters: React.Dispatch<React.SetStateAction<BallValveFilters>>
  filterOptions?: BallValveFilterOptions
  filtersLoading: boolean
  activeCount: number
  isMobile: boolean
}) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(20)
  const [sortKey, setSortKey] = useState<SortKey>('partNumber')
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
    <Box sx={{
      display: 'flex', alignItems: 'flex-start',
      border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
      borderRadius: '8px',
      bgcolor: 'background.paper',
    }}>
      {!isMobile && (
        <BallValveSidebar
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
                  { key: 'partNumber' as SortKey,        label: 'Part Number' },
                  { key: 'series' as SortKey,            label: 'Series' },
                  { key: 'threadType' as SortKey,        label: 'Thread' },
                  { key: 'endConnectionType' as SortKey, label: 'End Connection' },
                  { key: 'connectionSize' as SortKey,    label: 'Size' },
                  { key: 'configuration' as SortKey,     label: 'Config' },
                  { key: 'seatMaterial' as SortKey,      label: 'Seat' },
                  { key: 'handle' as SortKey,            label: 'Handle' },
                  { key: 'pressureRating' as SortKey,    label: 'Pressure' },
                  { key: null,                            label: 'Quote' },
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
                  <TableCell colSpan={11} align="center" sx={{ py: 6 }}>
                    <Typography variant="body2" color="text.secondary">No valves found.</Typography>
                  </TableCell>
                </TableRow>
              ) : paginated.map((model, i) => <Row key={`${model.partNumber}-${i}`} model={model} />)}
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