'use client'
import { useMemo, useState, useCallback } from 'react'
import { Box, Stack, Typography, Button, Chip } from '@mui/material'
import { alpha } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { AgGridReact } from 'ag-grid-react'
import { type ColDef, type ICellRendererParams, type IsFullWidthRowParams } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { useCartStore } from '../../../../store/useCartStore'
import {
  BODY_MATERIAL_LABELS, END_CONNECTION_LABELS,
  VALVE_TYPE_LABELS, SB_SEAT_LABELS,
} from '../../hooks/types'
import { type NeedleValveSBDTO } from '../../../../../api/needleValveApi'
const BRAND_BLUE = '#01B0F0'

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25 }}>
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function DetailPanelRenderer({ data }: ICellRendererParams) {
  const addItem = useCartStore(s => s.addItem)
  const v = data as NeedleValveSBDTO

  const specs: Record<string, string> = {
    'Part Number': v.partNumber,
    'Valve Type': VALVE_TYPE_LABELS[v.valveType] ?? v.valveType,
    'Seat': SB_SEAT_LABELS[v.seat] ?? v.seat,
    'Body Material': BODY_MATERIAL_LABELS[v.bodyMaterial] ?? v.bodyMaterial,
    'Thread Type': v.threadType,
    'End Connection': END_CONNECTION_LABELS[v.endConnection] ?? v.endConnection,
    'Connection Size': v.connectionSize,
    'Working Pressure': v.workingPressure,
    'Options': v.options,
  }

  return (
    <Box sx={{
      p: 3, minHeight: 180,
      bgcolor: alpha(BRAND_BLUE, 0.02),
      borderLeft: `4px solid ${BRAND_BLUE}`,
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      width: '100%'
    }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
        {v.imageUrl && (
          <Box sx={{
            width: 120, height: 120, flexShrink: 0,
            border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px',
            overflow: 'hidden', bgcolor: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <img src={v.imageUrl} alt={v.partNumber}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </Box>
        )}
        <Box sx={{ flex: 1 }}>
          <Typography variant="caption" fontWeight={900}
            sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_BLUE }}>
            SPECIFICATIONS
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
            {Object.entries(specs).map(([k, val]) => <Spec key={k} label={k} value={val} />)}
          </Stack>
          <Button variant="contained"
            onClick={() => addItem({
              cartItemId: v.partNumber,
              id: String(v.id),
              name: `SB Needle Valve — ${v.partNumber}`,
              image: v.imageUrl,
              quantity: 1,
              partNumber: v.partNumber,
              specs,
            })}
            sx={{
              textTransform: 'none', fontWeight: 700, borderRadius: '6px',
              bgcolor: BRAND_BLUE, '&:hover': { bgcolor: '#0199d4' }
            }}>
            Add to Quote
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

function ExpandCellRenderer({ data, context }: ICellRendererParams) {
  if (data?._isDetail) return null
  const isOpen = context?.openRows?.has(data?._rowId)
  return (
    <Box onClick={(e) => { e.stopPropagation(); context?.toggleRow(data?._rowId) }}
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 24, height: 24, cursor: 'pointer',
        border: `1px solid ${isOpen ? BRAND_BLUE : 'rgba(0,0,0,0.2)'}`,
        borderRadius: '4px', color: isOpen ? BRAND_BLUE : 'text.disabled',
        '&:hover': { borderColor: BRAND_BLUE, color: BRAND_BLUE }
      }}>
      {isOpen ? <RemoveIcon sx={{ fontSize: 12 }} /> : <AddIcon sx={{ fontSize: 12 }} />}
    </Box>
  )
}

function QuoteCellRenderer({ data }: ICellRendererParams) {
  const addItem = useCartStore(s => s.addItem)
  if (data?._isDetail) return null
  const v = data as NeedleValveSBDTO
  return (
    <Button size="small" variant="contained"
      onClick={(e) => {
        e.stopPropagation()
        addItem({
          cartItemId: v.partNumber,
          id: String(v.id),
          name: `SB Needle Valve — ${v.partNumber}`,
          image: v.imageUrl,
          quantity: 1,
          partNumber: v.partNumber,
          specs: {
            'Part Number': v.partNumber,
            'Valve Type': VALVE_TYPE_LABELS[v.valveType] ?? v.valveType,
            'Seat': SB_SEAT_LABELS[v.seat] ?? v.seat,
            'Body Material': BODY_MATERIAL_LABELS[v.bodyMaterial] ?? v.bodyMaterial,
            'Thread Type': v.threadType,
            'End Connection': END_CONNECTION_LABELS[v.endConnection] ?? v.endConnection,
            'Connection Size': v.connectionSize,
            'Working Pressure': v.workingPressure,
          },
        })
      }}
      sx={{
        fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5,
        borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap',
        bgcolor: BRAND_BLUE, boxShadow: 'none',
        '&:hover': { bgcolor: '#0199d4', boxShadow: 'none' }
      }}>
      Add to Quote
    </Button>
  )
}

function ValveTypeChip({ data }: ICellRendererParams) {
  if (data?._isDetail) return null
  const colors = data?.valveType === 'PBB'
    ? { bg: '#FFF3E0', text: '#E65100' }
    : { bg: alpha(BRAND_BLUE, 0.12), text: '#0277BD' }
  return (
    <Chip label={VALVE_TYPE_LABELS[data?.valveType] ?? data?.valveType} size="small"
      sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: colors.bg, color: colors.text }} />
  )
}

function SeatChip({ data }: ICellRendererParams) {
  if (data?._isDetail) return null
  const isHard = data?.seat === 'H'
  return (
    <Chip label={SB_SEAT_LABELS[data?.seat] ?? data?.seat} size="small"
      sx={{
        fontSize: '0.65rem', fontWeight: 700,
        bgcolor: isHard ? '#E8F5E9' : '#F3E5F5',
        color: isHard ? '#2E7D32' : '#6A1B9A'
      }} />
  )
}

export default function SBTable({ models, isFetching }: { models: NeedleValveSBDTO[]; isFetching?: boolean }) {
  const [openRows, setOpenRows] = useState<Set<string>>(new Set())

  const toggleRow = useCallback((rowId: string) => {
    setOpenRows(prev => {
      const next = new Set(prev)
      next.has(rowId) ? next.delete(rowId) : next.add(rowId)
      return next
    })
  }, [])

  const rowData = useMemo(() => {
    const rows: any[] = []
    models.forEach((p, i) => {
      const rowId = `${p.partNumber}-${i}`
      rows.push({ ...p, _rowId: rowId, _isDetail: false })
      if (openRows.has(rowId)) rows.push({ ...p, _rowId: rowId, _isDetail: true })
    })
    return rows
  }, [models, openRows])

  const colDefs: ColDef[] = useMemo(() => [
    {
      headerName: '', width: 40, pinned: 'left' as const, sortable: false,
      cellRenderer: 'expandCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' } as any
    },
    {
      field: 'partNumber', headerName: 'Part Number', width: 230, pinned: 'left' as const,
      cellStyle: { fontFamily: 'monospace', fontWeight: '700', color: BRAND_BLUE, fontSize: '0.8rem' } as any
    },
    {
      field: 'valveType', headerName: 'Valve Type', width: 150,
      cellRenderer: 'valveTypeChip',
      cellStyle: { display: 'flex', alignItems: 'center' } as any
    },
    {
      field: 'seat', headerName: 'Seat', width: 180,
      cellRenderer: 'seatChip',
      cellStyle: { display: 'flex', alignItems: 'center' } as any
    },
    {
      field: 'bodyMaterial', headerName: 'Material', width: 180,
      valueFormatter: (p: any) => BODY_MATERIAL_LABELS[p.value] ?? p.value
    },
    { field: 'threadType', headerName: 'Thread', width: 130 },
    {
      field: 'endConnection', headerName: 'End Connection', width: 160,
      valueFormatter: (p: any) => END_CONNECTION_LABELS[p.value] ?? p.value
    },
    { field: 'connectionSize', headerName: 'Size', width: 120 },
    { field: 'workingPressure', headerName: 'Pressure', width: 100 },
    {
      headerName: 'Quote', width: 140, sortable: false, pinned: 'right' as const,
      cellRenderer: 'quoteCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' } as any
    },
  ], [])

  const defaultColDef = useMemo(() => ({ sortable: true, resizable: true, filter: false }), [])
  const isFullWidthRow = useCallback((p: IsFullWidthRowParams) => p.rowNode.data?._isDetail === true, [])
  const gridContext = useMemo(() => ({ openRows, toggleRow }), [openRows, toggleRow])

  return (
    <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
      {isFetching && (
        <Box sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backdropFilter: 'blur(2px)', bgcolor: 'rgba(255,255,255,0.4)',
          zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Box sx={{
            bgcolor: 'background.paper', px: 3, py: 1.5, borderRadius: '20px', boxShadow: 2,
            display: 'flex', alignItems: 'center', gap: 1
          }}>
            <Box sx={{
              width: 8, height: 8, borderRadius: '50%', bgcolor: BRAND_BLUE,
              animation: 'pulse 1s ease-in-out infinite',
              '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.3 } }
            }} />
            <Typography variant="caption" fontWeight={700} sx={{ color: BRAND_BLUE }}>UPDATING</Typography>
          </Box>
        </Box>
      )}
      <Box className="ag-theme-alpine" sx={{
        width: '100%',
        opacity: isFetching ? 0.6 : 1,
        transition: 'opacity 0.2s ease',
        '& .ag-root-wrapper': { border: 'none', borderRadius: 0 },
        '& .ag-header': { bgcolor: alpha(BRAND_BLUE, 0.04), borderBottom: `2px solid ${BRAND_BLUE}` },
        '& .ag-header-cell-text': { fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' },
        '& .ag-row': { borderBottom: '1px solid rgba(0,0,0,0.06)' },
        '& .ag-row:hover': { bgcolor: `${alpha(BRAND_BLUE, 0.03)} !important` },
        '& .ag-row-even': { bgcolor: 'background.paper' },
        '& .ag-row-odd': { bgcolor: alpha(BRAND_BLUE, 0.01) },
        '& .ag-cell': { fontSize: '0.82rem' },
        '& .ag-paging-panel': { borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' },
        '& .ag-full-width-row': { bgcolor: 'transparent !important' },
      }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          suppressColumnVirtualisation
          components={{
            expandCellRenderer: ExpandCellRenderer,
            detailPanelRenderer: DetailPanelRenderer,
            quoteCellRenderer: QuoteCellRenderer,
            valveTypeChip: ValveTypeChip,
            seatChip: SeatChip,
          }}
          context={gridContext}
          isFullWidthRow={isFullWidthRow}
          fullWidthCellRenderer="detailPanelRenderer"
          getRowHeight={(params) => params.data?._isDetail ? 240 : 44}
          pagination
          paginationPageSize={20}
          domLayout="autoHeight"
        />
      </Box>
    </Box>
  )
}