'use client'
import { useState, useMemo } from 'react'
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TablePagination, TableSortLabel, Collapse, Chip, Stack,
  IconButton, Button, Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox, Divider
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useMediaQuery, Drawer } from '@mui/material'
import { TWIN_SERIES_CLAMP_DATA, type TwinSeriesTubeClampItem } from './twinSeriesTubeClampData'
import { useCartStore } from '../../store/useCartStore'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface Filters { dinGroups: string[]; pipeODs: string[] }
const EMPTY_FILTERS: Filters = { dinGroups: [], pipeODs: [] }

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  return (
    <Accordion defaultExpanded disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary" fontFamily={PRIMARY_FONT}>{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: BRAND_BLUE, color: '#fff' }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function Sidebar({ filters, setFilters, activeCount }: {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
  activeCount: number
}) {
  const toggle = (key: keyof Filters, val: string) =>
    setFilters(prev => ({ ...prev, [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val] }))

  const allPipeODs = TWIN_SERIES_CLAMP_DATA
    .map(r => String(r.pipeOD))
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort((a, b) => parseFloat(a) - parseFloat(b))

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', overflowY: 'auto' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary" fontFamily={PRIMARY_FONT}>FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: BRAND_BLUE, fontFamily: PRIMARY_FONT }} onClick={() => setFilters(EMPTY_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>
      <FilterGroup title="DIN GROUP" count={filters.dinGroups.length || undefined}>
        {['1', '2', '3', '4', '5'].map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.dinGroups.includes(opt)} onChange={() => toggle('dinGroups', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_BLUE } }} />}
            label={<Typography variant="body2" fontSize="0.78rem" fontFamily={PRIMARY_FONT}>Group {opt}</Typography>}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="PIPE OD (mm)" count={filters.pipeODs.length || undefined}>
        {allPipeODs.map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.pipeODs.includes(opt)} onChange={() => toggle('pipeODs', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_BLUE } }} />}
            label={<Typography variant="body2" fontSize="0.78rem" fontFamily={PRIMARY_FONT}>{opt} mm</Typography>}
          />
        ))}
      </FilterGroup>
    </Box>
  )
}

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} fontFamily={PRIMARY_FONT}>{value}</Typography>
    </Box>
  )
}

function TwinSeriesRow({ row }: { row: TwinSeriesTubeClampItem }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)

  const specs: Record<string, string> = {
    'Part Number': row.partNumber,
    'DIN Group': String(row.dinGroup),
    'Pipe OD': `${row.pipeOD} mm`,
    'A2': `${row.a2} mm`,
    'A3': `${row.a3} mm`,
    'A1': `${row.a1} mm`,
    'G': `${row.g} mm`,
    'T': `${row.t} mm`,
    'H2': `${row.h2} mm`,
    'Bolt Size': row.boltSize,
  }

  const handleAdd = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    addItem({
      cartItemId: row.partNumber,
      id: String(row.id),
      name: `Twin Series Tube Clamp — ${row.partNumber}`,
      image: row.imageUrl,
      quantity: 1,
      partNumber: row.partNumber,
      specs,
    })
  }

  return (
    <>
      <TableRow
        hover
        onClick={() => setOpen(o => !o)}
        sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_BLUE, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(BRAND_BLUE, 0.03)} !important` } }}
      >
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={`Group ${row.dinGroup}`} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: '#0277BD' }} />
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: BRAND_BLUE, fontSize: '0.8rem', py: 1 }}>{row.partNumber}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: 'monospace', fontWeight: 600 }}>{row.pipeOD}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.a2}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.a3}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.a1}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.g}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.t}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.h2}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.boltSize}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={handleAdd}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_BLUE, boxShadow: 'none', fontFamily: PRIMARY_FONT, '&:hover': { bgcolor: '#0199d4', boxShadow: 'none' } }}>
            Add to Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={12} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_BLUE, 0.02), borderLeft: `4px solid ${BRAND_BLUE}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 140, height: 140, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                    <img src={row.imageUrl} alt={row.partNumber} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="DIN Group" value={String(row.dinGroup)} />
                      <Spec label="Pipe OD" value={`${row.pipeOD} mm`} />
                      <Spec label="A2" value={`${row.a2} mm`} />
                      <Spec label="A3" value={`${row.a3} mm`} />
                      <Spec label="A1" value={`${row.a1} mm`} />
                      <Spec label="G" value={`${row.g} mm`} />
                      <Spec label="T" value={`${row.t} mm`} />
                      <Spec label="H2" value={`${row.h2} mm`} />
                      <Spec label="Bolt Size" value={row.boltSize} />
                      <Spec label="Note" value="ONE SET = Top Plate + Bottom Plate + 1 Hex bolt + One Pair of PP Jaws" />
                    </Stack>
                    <Button variant="contained" onClick={handleAdd}
                      sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_BLUE, fontFamily: PRIMARY_FONT, '&:hover': { bgcolor: '#0199d4' } }}>
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

export default function TwinSeriesTubeClampPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState('pipeOD')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const filtered = useMemo(() => TWIN_SERIES_CLAMP_DATA.filter(r => {
    if (filters.dinGroups.length && !filters.dinGroups.includes(String(r.dinGroup))) return false
    if (filters.pipeODs.length && !filters.pipeODs.includes(String(r.pipeOD))) return false
    return true
  }), [filters])

  const sorted = [...filtered].sort((a, b) => {
    const av = (a as any)[sortKey] ?? 0
    const bv = (b as any)[sortKey] ?? 0
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  const activeCount = filters.dinGroups.length + filters.pipeODs.length

  const headerSx = {
    bgcolor: alpha(BRAND_BLUE, 0.04),
    borderBottom: `2px solid ${BRAND_BLUE}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  const handleSort = (key: string) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sidebar = <Sidebar filters={filters} setFilters={setFilters} activeCount={activeCount} />

  return (
    <>
         <title>Twin Series Tube Clamps | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® Twin Series Tube Clamps — DIN Groups 1 to 5, 6mm to 42mm OD, M6 and M8 bolts, PP jaws included. Each set includes top plate, bottom plate, hex bolt, and PP jaws. Request a quote." />
      <meta name="keywords" content="twin series tube clamps, DIN tube clamps, instrumentation tube clamps, pipe clamps DIN, PP jaw clamps" />
      <meta property="og:title" content="Twin Series Tube Clamps | PANAM® Instrumentation" />
      <meta property="og:description" content="Precision tube clamps in DIN Groups 1 to 5. 6mm to 42mm OD, M6 and M8 bolts, PP jaws included." />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://www.panamvalve.com/instrumentation-fittings/tube-clamps/twin-series" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PANAM® Twin Series Tube Clamps",
          description: "Precision tube clamps in DIN Groups 1 to 5. 6mm to 42mm OD, M6 and M8 bolts, PP jaws included. Each set includes one top plate, one bottom plate, one hex bolt, and one pair of PP jaws.",
          brand: { "@type": "Brand", name: "PANAM" },
          category: "Instrumentation Tube Clamps",
          additionalProperty: ['DIN Groups 1–5', '6mm – 42mm OD', 'M6 / M8 Bolts', 'PP Jaws Included', 'Dimensions in mm'].map(s => ({
            "@type": "PropertyValue",
            name: "Specification",
            value: s,
          })),
        })}
      </script>
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          Twin Series Tube Clamps
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
          Precision tube clamps in DIN Groups 1–5. Each set includes one top plate, one bottom plate, one hex bolt, and one pair of PP jaws.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['DIN Groups 1–5', '6mm – 42mm OD', 'M6 / M8 Bolts', 'PP Jaws Included', 'Dimensions in mm'].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(BRAND_BLUE, 0.08), color: '#0277BD', border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, fontFamily: PRIMARY_FONT }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}><FilterListIcon /></IconButton>}

        {activeCount > 0 && (
          <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
            <Typography variant="caption" color="text.secondary" fontWeight={700} fontFamily={PRIMARY_FONT}>ACTIVE FILTERS:</Typography>
            {filters.dinGroups.map(v => (
              <Chip key={v} label={`Group ${v}`} size="small" variant="outlined"
                sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}
                onDelete={() => setFilters(p => ({ ...p, dinGroups: p.dinGroups.filter(x => x !== v) }))} />
            ))}
            {filters.pipeODs.map(v => (
              <Chip key={v} label={`${v} mm`} size="small" variant="outlined"
                sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}
                onDelete={() => setFilters(p => ({ ...p, pipeODs: p.pipeODs.filter(x => x !== v) }))} />
            ))}
          </Stack>
        )}

        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {filtered.length} CONFIGURATIONS
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          {!isMobile && sidebar}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <TableContainer>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ ...headerSx, width: 40 }} />
                    {[
                      { key: 'dinGroup',   label: 'DIN Group' },
                      { key: 'partNumber', label: 'Part Number' },
                      { key: 'pipeOD',     label: 'Pipe OD (mm)' },
                      { key: 'a2',         label: 'A2' },
                      { key: 'a3',         label: 'A3' },
                      { key: 'a1',         label: 'A1' },
                      { key: 'g',          label: 'G' },
                      { key: 't',          label: 'T' },
                      { key: 'h2',         label: 'H2' },
                      { key: 'boltSize',   label: 'Bolt Size' },
                      { key: null,         label: 'Quote' },
                    ].map((h, i) => (
                      <TableCell key={i} sx={headerSx}>
                        {h.key
                          ? <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : 'asc'} onClick={() => handleSort(h.key!)}>{h.label}</TableSortLabel>
                          : h.label
                        }
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginated.length === 0
                    ? <TableRow><TableCell colSpan={12} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No clamps found.</Typography></TableCell></TableRow>
                    : paginated.map(row => <TwinSeriesRow key={row.id} row={row} />)
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination component="div" count={sorted.length} page={page} rowsPerPage={rowsPerPage}
              onPageChange={(_, p) => setPage(p)}
              onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
              rowsPerPageOptions={[25, 50, 100]}
              sx={{ borderTop: '1px solid rgba(0,0,0,0.06)' }} />
          </Box>
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box>
    </>

  )
}