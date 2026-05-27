import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button, useMediaQuery, Drawer,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { type TubingDTO, type TubingFilters, type AvailableCountsTubing } from '../hooks/tubingData'
import { TubingSidebar } from './TubingSidebar'
import { useCartStore } from '../../store/useCartStore'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

function TubingRow({ row }: { row: TubingDTO }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)
  const isHP = row.productType === 'High Pressure Tubing'

  const handleAddToCart = () => {
    addItem({
      cartItemId: row.id,
      id: row.id,
      name: `${row.material} Seamless Tubing — ${row.partNumber}`,
      image: row.imageUrl,
      quantity: 1,
      partNumber: row.partNumber,
      specs: {
        'Part Number': row.partNumber,
        'Product Type': row.productType,
        'Material': row.material,
        'Outer Diameter': row.outerDiameter,
        'Wall Thickness': row.wallThickness,
        'Unit System': row.unit === 'imperial' ? 'Imperial' : 'Metric',
        'Working Pressure': `${row.workingPressurePsi.toLocaleString()} psi / ${row.workingPressureBar} bar`,
      },
    })
  }

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
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: BRAND_BLUE, fontSize: '0.75rem', py: 1 }}>{row.partNumber}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={isHP ? 'High Pressure' : 'Standard'} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: isHP ? '#FF6B35' : BRAND_BLUE, color: isHP ? '#FF6B35' : '#0277BD' }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.material}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.unit === 'imperial' ? 'Imperial' : 'Metric'} size="small"
            sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha('#7B61FF', 0.1), color: '#7B61FF' }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.outerDiameter}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.wallThickness}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.workingPressurePsi.toLocaleString()} psi</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.workingPressureBar} bar</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); handleAddToCart() }}
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
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.imageUrl} alt={row.partNumber} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>DESCRIPTION</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, fontFamily: PRIMARY_FONT }}>{row.description}</Typography>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Product Type" value={row.productType} />
                      <Spec label="Material" value={row.material} />
                      <Spec label="Tubing Type" value={row.tubingType} />
                      <Spec label="Outer Diameter" value={row.outerDiameter} />
                      <Spec label="Wall Thickness" value={row.wallThickness} />
                      <Spec label="Unit System" value={row.unit === 'imperial' ? 'Imperial' : 'Metric'} />
                      <Spec label="Working Pressure" value={`${row.workingPressurePsi.toLocaleString()} psi / ${row.workingPressureBar} bar`} />
                    </Stack>
                    <Button variant="contained" onClick={handleAddToCart}
                      sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_BLUE, '&:hover': { bgcolor: '#0199d4' }, fontFamily: PRIMARY_FONT }}>
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

type SortKey = 'partNumber' | 'productType' | 'material' | 'unit' | 'outerDiameter' | 'wallThickness' | 'workingPressurePsi'

export default function TubingTable({ models, filters, setFilters, availableCounts, activeCount }: {
  models: TubingDTO[]
  filters: TubingFilters
  setFilters: React.Dispatch<React.SetStateAction<TubingFilters>>
  availableCounts: AvailableCountsTubing
  activeCount: number
}) {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<SortKey>('partNumber')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = [...models].sort((a, b) => {
    const av = String(a[sortKey] ?? ''), bv = String(b[sortKey] ?? '')
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
    fontFamily: PRIMARY_FONT,
  }

  const sidebar = <TubingSidebar filters={filters} setFilters={setFilters} availableCounts={availableCounts} activeCount={activeCount} />

  return (
    <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
        {isMobile && <Box sx={{ p: 1, borderBottom: '1px solid rgba(0,0,0,0.08)' }}><IconButton onClick={() => setMobileOpen(true)}><FilterListIcon /></IconButton></Box>}
        <TableContainer>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...headerSx, width: 40 }} />
                {([
                  { key: 'partNumber' as SortKey,        label: 'Part Number' },
                  { key: 'productType' as SortKey,       label: 'Type' },
                  { key: 'material' as SortKey,          label: 'Material' },
                  { key: 'unit' as SortKey,              label: 'Unit' },
                  { key: 'outerDiameter' as SortKey,     label: 'OD' },
                  { key: 'wallThickness' as SortKey,     label: 'Wall' },
                  { key: 'workingPressurePsi' as SortKey,label: 'Pressure (psi)' },
                  { key: null,                            label: 'Pressure (bar)' },
                  { key: null,                            label: 'Quote' },
                ]).map((h, i) => (
                  <TableCell key={i} sx={headerSx}>
                    {h.key
                      ? <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : 'asc'} onClick={() => handleSort(h.key!)}>{h.label}</TableSortLabel>
                      : h.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.length === 0
                ? <TableRow><TableCell colSpan={10} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No tubing found.</Typography></TableCell></TableRow>
                : paginated.map(row => <TubingRow key={row.id} row={row} />)
              }
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
          rowsPerPageOptions={[25, 50, 100, 250]}
          sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' }}
        />
      </Box>
    </Box>
  )
}