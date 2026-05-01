'use client'
import { useState, useMemo } from 'react'
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TablePagination, TableSortLabel, Collapse, Chip, Stack,
  IconButton, Button, Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox, Divider, Tabs, Tab
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useMediaQuery, Drawer } from '@mui/material'
import { DIELECTRIC_DATA, GASKET_DATA, type DielectricItem, type GasketItem } from './dielectricGasketData'
import { useCartStore } from '../store/useCartStore'

const BRAND_BLUE = '#01B0F0'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const GASKET_TYPES = [
  'PRS — ISO Parallel (G)',
  'PRS — Metric Parallel',
  'PRP — ISO Parallel (RP)',
  'PRP — Metric Parallel',
  'PRG — ISO Internal (G)',
  'PRG — Metric Internal',
]

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

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

// ── DIELECTRIC SECTION ──
interface DielectricFilters { fittingTypes: string[]; tubeODUnits: string[] }
const EMPTY_DFILTERS: DielectricFilters = { fittingTypes: [], tubeODUnits: [] }

function DielectricSidebar({ filters, setFilters, activeCount }: { filters: DielectricFilters; setFilters: React.Dispatch<React.SetStateAction<DielectricFilters>>; activeCount: number }) {
  const toggle = (key: keyof DielectricFilters, val: string) =>
    setFilters(prev => ({ ...prev, [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val] }))

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', overflowY: 'auto' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary" fontFamily={PRIMARY_FONT}>FILTER</Typography>
        {activeCount > 0 && <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: BRAND_BLUE, fontFamily: PRIMARY_FONT }} onClick={() => setFilters(EMPTY_DFILTERS)}>Clear all</Typography>}
      </Stack>
      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        {(['Union', 'Male Connector'] as const).map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.fittingTypes.includes(opt)} onChange={() => toggle('fittingTypes', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_BLUE } }} />}
            label={<Typography variant="body2" fontSize="0.78rem" fontFamily={PRIMARY_FONT}>{opt}</Typography>}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="UNIT SYSTEM" count={filters.tubeODUnits.length || undefined}>
        {(['Imperial', 'Metric'] as const).map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.tubeODUnits.includes(opt)} onChange={() => toggle('tubeODUnits', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_BLUE } }} />}
            label={<Typography variant="body2" fontSize="0.78rem" fontFamily={PRIMARY_FONT}>{opt}</Typography>}
          />
        ))}
      </FilterGroup>
    </Box>
  )
}

function DielectricRow({ row }: { row: DielectricItem }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)
  const unitFull = row.tubeODUnit === 'Imperial' ? 'inch' : 'mm'
  const unitShort = row.tubeODUnit === 'Imperial' ? 'in' : 'mm'

  const specs: Record<string, string> = {
    'Part Number': row.partNumber,
    'Fitting Type': row.fittingType,
    'Tube OD': `${row.tubeOD} ${unitFull}`,
    ...(row.pipeNPT ? { 'NPT Thread': row.pipeNPT } : {}),
  }

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_BLUE, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(BRAND_BLUE, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: BRAND_BLUE, fontSize: '0.8rem', py: 1 }}>{row.partNumber}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.fittingType} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: '#0277BD' }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>
          {row.tubeOD}<Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>({unitShort})</Typography>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.pipeNPT ?? '—'}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.tubeODUnit} size="small" sx={{ fontSize: '0.65rem', fontWeight: 600, bgcolor: alpha('#4CAF50', 0.1), color: '#2E7D32' }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); addItem({ cartItemId: row.partNumber, id: String(row.id), name: `${row.fittingType} Dielectric — ${row.partNumber}`, image: row.imageUrl, quantity: 1, partNumber: row.partNumber, specs }) }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_BLUE, boxShadow: 'none', fontFamily: PRIMARY_FONT, '&:hover': { bgcolor: '#0199d4', boxShadow: 'none' } }}>
            Add to Quote
          </Button>
        </TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={7} sx={{ p: 0, borderBottom: 'none' }}>
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
                      <Spec label="Fitting Type" value={row.fittingType} />
                      <Spec label="Tube OD" value={`${row.tubeOD} ${unitFull}`} />
                      {row.pipeNPT && <Spec label="NPT Thread" value={row.pipeNPT} />}
                      <Spec label="Unit System" value={row.tubeODUnit === 'Imperial' ? 'Imperial (inch)' : 'Metric (mm)'} />
                      <Spec label="Material" value="SS316 + Polyamideimide Insulator" />
                      <Spec label="Pressure Rating" value="34.47 MPa (5000 PSI)" />
                      <Spec label="Temp Rating" value="-40°C to 93°C" />
                    </Stack>
                    <Button variant="contained"
                      onClick={() => addItem({ cartItemId: row.partNumber, id: String(row.id), name: `${row.fittingType} Dielectric — ${row.partNumber}`, image: row.imageUrl, quantity: 1, partNumber: row.partNumber, specs })}
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

// ── GASKET SECTION ──
interface GasketFilters { gasketTypes: string[]; threadUnits: string[] }
const EMPTY_GFILTERS: GasketFilters = { gasketTypes: [], threadUnits: [] }

function GasketSidebar({ filters, setFilters, activeCount }: { filters: GasketFilters; setFilters: React.Dispatch<React.SetStateAction<GasketFilters>>; activeCount: number }) {
  const toggle = (key: keyof GasketFilters, val: string) =>
    setFilters(prev => ({ ...prev, [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val] }))

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', overflowY: 'auto' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary" fontFamily={PRIMARY_FONT}>FILTER</Typography>
        {activeCount > 0 && <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: BRAND_BLUE, fontFamily: PRIMARY_FONT }} onClick={() => setFilters(EMPTY_GFILTERS)}>Clear all</Typography>}
      </Stack>
      <FilterGroup title="GASKET TYPE" count={filters.gasketTypes.length || undefined}>
        {GASKET_TYPES.map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.gasketTypes.includes(opt)} onChange={() => toggle('gasketTypes', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_BLUE } }} />}
            label={<Typography variant="body2" fontSize="0.75rem" fontFamily={PRIMARY_FONT}>{opt}</Typography>}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="THREAD UNIT" count={filters.threadUnits.length || undefined}>
        {(['Imperial', 'Metric'] as const).map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.threadUnits.includes(opt)} onChange={() => toggle('threadUnits', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_BLUE } }} />}
            label={<Typography variant="body2" fontSize="0.78rem" fontFamily={PRIMARY_FONT}>{opt}</Typography>}
          />
        ))}
      </FilterGroup>
    </Box>
  )
}

function GasketRow({ row }: { row: GasketItem }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)

  const specs: Record<string, string> = {
    'Part Number (SS316)': row.partNumber,
    ...(row.carbonSteelPN ? { 'Part Number (Carbon Steel)': row.carbonSteelPN } : {}),
    'Gasket Type': row.gasketType,
    'Thread Size': row.threadSize,
  }

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_BLUE, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(BRAND_BLUE, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: BRAND_BLUE, fontSize: '0.8rem', py: 1 }}>{row.partNumber}</TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.78rem', py: 1, color: 'text.secondary' }}>{row.carbonSteelPN ?? '—'}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.gasketType} size="small" sx={{ fontSize: '0.62rem', fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: '#0277BD' }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: 'monospace', fontWeight: 600 }}>{row.threadSize}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.threadUnit} size="small" sx={{ fontSize: '0.65rem', fontWeight: 600, bgcolor: alpha('#4CAF50', 0.1), color: '#2E7D32' }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); addItem({ cartItemId: row.partNumber, id: String(row.id), name: `Gasket ${row.gasketType} — ${row.partNumber}`, image: row.imageUrl, quantity: 1, partNumber: row.partNumber, specs }) }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_BLUE, boxShadow: 'none', fontFamily: PRIMARY_FONT, '&:hover': { bgcolor: '#0199d4', boxShadow: 'none' } }}>
            Add to Quote
          </Button>
        </TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={7} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_BLUE, 0.02), borderLeft: `4px solid ${BRAND_BLUE}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 140, height: 140, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                    <img src={row.imageUrl} alt={row.partNumber} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number (SS316)" value={row.partNumber} />
                      {row.carbonSteelPN && <Spec label="Part Number (Carbon Steel)" value={row.carbonSteelPN} />}
                      <Spec label="Gasket Type" value={row.gasketType} />
                      <Spec label="Thread Size" value={row.threadSize} />
                      <Spec label="Thread Unit" value={row.threadUnit} />
                      <Spec label="Material" value="SS316 / Carbon Steel / Copper" />
                    </Stack>
                    <Button variant="contained"
                      onClick={() => addItem({ cartItemId: row.partNumber, id: String(row.id), name: `Gasket ${row.gasketType} — ${row.partNumber}`, image: row.imageUrl, quantity: 1, partNumber: row.partNumber, specs })}
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

// ── MAIN PAGE ──
export default function DielectricGasketPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [tab, setTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Dielectric state
  const [dFilters, setDFilters] = useState<DielectricFilters>(EMPTY_DFILTERS)
  const [dPage, setDPage] = useState(0)
  const [dRowsPerPage, setDRowsPerPage] = useState(25)
  const [dSortKey, setDSortKey] = useState('partNumber')
  const [dSortDir, setDSortDir] = useState<'asc' | 'desc'>('asc')

  // Gasket state
  const [gFilters, setGFilters] = useState<GasketFilters>(EMPTY_GFILTERS)
  const [gPage, setGPage] = useState(0)
  const [gRowsPerPage, setGRowsPerPage] = useState(25)
  const [gSortKey, setGSortKey] = useState('partNumber')
  const [gSortDir, setGSortDir] = useState<'asc' | 'desc'>('asc')

  const filteredD = useMemo(() => DIELECTRIC_DATA.filter(r => {
    if (dFilters.fittingTypes.length && !dFilters.fittingTypes.includes(r.fittingType)) return false
    if (dFilters.tubeODUnits.length && !dFilters.tubeODUnits.includes(r.tubeODUnit)) return false
    return true
  }), [dFilters])

  const sortedD = [...filteredD].sort((a, b) => {
    const av = (a as any)[dSortKey] ?? '', bv = (b as any)[dSortKey] ?? ''
    if (av < bv) return dSortDir === 'asc' ? -1 : 1
    if (av > bv) return dSortDir === 'asc' ? 1 : -1
    return 0
  })

  const filteredG = useMemo(() => GASKET_DATA.filter(r => {
    if (gFilters.gasketTypes.length && !gFilters.gasketTypes.includes(r.gasketType)) return false
    if (gFilters.threadUnits.length && !gFilters.threadUnits.includes(r.threadUnit)) return false
    return true
  }), [gFilters])

  const sortedG = [...filteredG].sort((a, b) => {
    const av = (a as any)[gSortKey] ?? '', bv = (b as any)[gSortKey] ?? ''
    if (av < bv) return gSortDir === 'asc' ? -1 : 1
    if (av > bv) return gSortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginatedD = sortedD.slice(dPage * dRowsPerPage, dPage * dRowsPerPage + dRowsPerPage)
  const paginatedG = sortedG.slice(gPage * gRowsPerPage, gPage * gRowsPerPage + gRowsPerPage)

  const dActiveCount = dFilters.fittingTypes.length + dFilters.tubeODUnits.length
  const gActiveCount = gFilters.gasketTypes.length + gFilters.threadUnits.length

  const headerSx = { bgcolor: alpha(BRAND_BLUE, 0.04), borderBottom: `2px solid ${BRAND_BLUE}`, fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase' as const, letterSpacing: '0.05em', fontFamily: PRIMARY_FONT }

  const dSidebar = <DielectricSidebar filters={dFilters} setFilters={setDFilters} activeCount={dActiveCount} />
  const gSidebar = <GasketSidebar filters={gFilters} setFilters={setGFilters} activeCount={gActiveCount} />

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          Dielectric Fittings & Gaskets
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
          Stainless steel dielectric tube fittings for electrical isolation, and precision thread sealing gaskets for parallel and internal threads.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['SS316', '5000 PSI', 'Polyamideimide Insulator', 'ISO Parallel', 'Metric Thread', 'Copper Gaskets'].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(BRAND_BLUE, 0.08), color: '#0277BD', border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, fontFamily: PRIMARY_FONT }}>{s}</Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid rgba(0,0,0,0.08)', px: 4 }}>
        <Tabs value={tab} onChange={(_, v) => { setTab(v); setMobileOpen(false) }}
          sx={{ '& .MuiTab-root': { fontFamily: PRIMARY_FONT, fontWeight: 700, textTransform: 'none', fontSize: '0.9rem' }, '& .Mui-selected': { color: `${BRAND_BLUE} !important` }, '& .MuiTabs-indicator': { bgcolor: BRAND_BLUE } }}>
          <Tab label={`Dielectric Fittings (${filteredD.length})`} />
          <Tab label={`Gaskets (${filteredG.length})`} />
        </Tabs>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}><FilterListIcon /></IconButton>}

        {tab === 0 && (
          <>
            {dActiveCount > 0 && (
              <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
                <Typography variant="caption" color="text.secondary" fontWeight={700} fontFamily={PRIMARY_FONT}>ACTIVE FILTERS:</Typography>
                {dFilters.fittingTypes.map(v => <Chip key={v} label={v} size="small" variant="outlined" sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }} onDelete={() => setDFilters(p => ({ ...p, fittingTypes: p.fittingTypes.filter(x => x !== v) }))} />)}
                {dFilters.tubeODUnits.map(v => <Chip key={v} label={v} size="small" variant="outlined" sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }} onDelete={() => setDFilters(p => ({ ...p, tubeODUnits: p.tubeODUnits.filter(x => x !== v) }))} />)}
              </Stack>
            )}
            <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>{filteredD.length} CONFIGURATIONS</Typography>
            <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
              {!isMobile && dSidebar}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <TableContainer>
                  <Table size="small" stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ ...headerSx, width: 40 }} />
                        {[
                          { key: 'partNumber', label: 'Part Number' },
                          { key: 'fittingType', label: 'Type' },
                          { key: 'tubeOD', label: 'Tube OD' },
                          { key: null, label: 'NPT Thread' },
                          { key: 'tubeODUnit', label: 'Unit' },
                          { key: null, label: 'Quote' },
                        ].map((h, i) => (
                          <TableCell key={i} sx={headerSx}>
                            {h.key ? <TableSortLabel active={dSortKey === h.key} direction={dSortKey === h.key ? dSortDir : 'asc'} onClick={() => { if (dSortKey === h.key) setDSortDir(d => d === 'asc' ? 'desc' : 'asc'); else { setDSortKey(h.key!); setDSortDir('asc') } }}>{h.label}</TableSortLabel> : h.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {paginatedD.length === 0
                        ? <TableRow><TableCell colSpan={7} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No dielectric fittings found.</Typography></TableCell></TableRow>
                        : paginatedD.map(row => <DielectricRow key={row.id} row={row} />)
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination component="div" count={sortedD.length} page={dPage} rowsPerPage={dRowsPerPage}
                  onPageChange={(_, p) => setDPage(p)} onRowsPerPageChange={e => { setDRowsPerPage(parseInt(e.target.value)); setDPage(0) }}
                  rowsPerPageOptions={[25, 50, 100]} sx={{ borderTop: '1px solid rgba(0,0,0,0.06)' }} />
              </Box>
            </Box>
            <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{dSidebar}</Drawer>
          </>
        )}

        {tab === 1 && (
          <>
            {gActiveCount > 0 && (
              <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
                <Typography variant="caption" color="text.secondary" fontWeight={700} fontFamily={PRIMARY_FONT}>ACTIVE FILTERS:</Typography>
                {gFilters.gasketTypes.map(v => <Chip key={v} label={v} size="small" variant="outlined" sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }} onDelete={() => setGFilters(p => ({ ...p, gasketTypes: p.gasketTypes.filter(x => x !== v) }))} />)}
                {gFilters.threadUnits.map(v => <Chip key={v} label={v} size="small" variant="outlined" sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }} onDelete={() => setGFilters(p => ({ ...p, threadUnits: p.threadUnits.filter(x => x !== v) }))} />)}
              </Stack>
            )}
            <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>{filteredG.length} CONFIGURATIONS</Typography>
            <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
              {!isMobile && gSidebar}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <TableContainer>
                  <Table size="small" stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ ...headerSx, width: 40 }} />
                        {[
                          { key: 'partNumber', label: 'Part No. (SS316)' },
                          { key: 'carbonSteelPN', label: 'Part No. (Carbon Steel)' },
                          { key: 'gasketType', label: 'Gasket Type' },
                          { key: 'threadSize', label: 'Thread Size' },
                          { key: 'threadUnit', label: 'Unit' },
                          { key: null, label: 'Quote' },
                        ].map((h, i) => (
                          <TableCell key={i} sx={headerSx}>
                            {h.key ? <TableSortLabel active={gSortKey === h.key} direction={gSortKey === h.key ? gSortDir : 'asc'} onClick={() => { if (gSortKey === h.key) setGSortDir(d => d === 'asc' ? 'desc' : 'asc'); else { setGSortKey(h.key!); setGSortDir('asc') } }}>{h.label}</TableSortLabel> : h.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {paginatedG.length === 0
                        ? <TableRow><TableCell colSpan={7} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No gaskets found.</Typography></TableCell></TableRow>
                        : paginatedG.map(row => <GasketRow key={row.id} row={row} />)
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination component="div" count={sortedG.length} page={gPage} rowsPerPage={gRowsPerPage}
                  onPageChange={(_, p) => setGPage(p)} onRowsPerPageChange={e => { setGRowsPerPage(parseInt(e.target.value)); setGPage(0) }}
                  rowsPerPageOptions={[25, 50, 100]} sx={{ borderTop: '1px solid rgba(0,0,0,0.06)' }} />
              </Box>
            </Box>
            <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{gSidebar}</Drawer>
          </>
        )}
      </Box>
    </Box>
  )
}