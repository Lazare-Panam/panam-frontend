import { useMemo, useState, useCallback } from 'react'
import { Box, Stack, Typography, Button, Chip } from '@mui/material'
import { alpha } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { AgGridReact } from 'ag-grid-react'
import { type ColDef, type ICellRendererParams, type IsFullWidthRowParams } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { type  TwoWayValveManifoldDTO } from '../../api/manifoldApi'

const BRAND_BLUE = '#01B0F0'

const MOUNTING_COLORS: Record<string, { bg: string; text: string }> = {
  R:  { bg: '#E3F4FD', text: '#0277BD' },
  BM: { bg: '#E8F5E9', text: '#2E7D32' },
  T:  { bg: '#FFF3E0', text: '#E65100' },
  BV: { bg: '#F3E5F5', text: '#6A1B9A' },
  H:  { bg: '#E8EAF6', text: '#283593' },
  DM: { bg: '#FCE4EC', text: '#880E4F' },
}

function Spec({ label, value }: { label: string; value: string }) {
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

function MountingCellRenderer({ data }: ICellRendererParams) {
  if (data?._isDetail) return null
  const colors = MOUNTING_COLORS[data?.mountingCode] ?? { bg: '#F5F5F5', text: '#333' }
  return (
    <Chip
      label={data?.mountingCode}
      size="small"
      title={data?.mounting}
      sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: colors.bg, color: colors.text }}
    />
  )
}

function DetailPanelRenderer({ data, context }: ICellRendererParams) {
  const manifold: TwoWayValveManifoldDTO = data
  return (
    <Box sx={{
      p: 3, minHeight: 180,
      bgcolor: alpha(BRAND_BLUE, 0.02),
      borderLeft: `4px solid ${BRAND_BLUE}`,
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      width: '100%'
    }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
        <Box sx={{ flex: 1 }}>
          <Typography variant="caption" fontWeight={900}
            sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_BLUE }}>
            SPECIFICATIONS
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
            <Spec label="Part Number" value={manifold.partNumber} />
            <Spec label="Material" value={manifold.material} />
            <Spec label="Connection Size" value={manifold.connectionSize} />
            <Spec label="Connection Type" value={manifold.connectionType} />
            <Spec label="Mounting" value={manifold.mounting} />
            <Spec label="Configuration" value={manifold.configuration} />
            <Spec label="Vent Hole Size" value={manifold.ventHoleSize} />
            <Spec label="Max Pressure" value={manifold.maxPressure} />
          </Stack>
          <Button
            variant="contained"
            onClick={() => context?.onQuote(manifold)}
            sx={{
              textTransform: 'none', fontWeight: 700, borderRadius: '6px',
              bgcolor: BRAND_BLUE, '&:hover': { bgcolor: '#0199d4' }
            }}
          >
            Request Quote
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

function QuoteCellRenderer({ data, context }: ICellRendererParams) {
  if (data?._isDetail) return null
  return (
    <Button size="small" variant="contained"
      onClick={(e) => { e.stopPropagation(); context?.onQuote(data) }}
      sx={{
        fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5,
        borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap',
        bgcolor: BRAND_BLUE, boxShadow: 'none',
        '&:hover': { bgcolor: '#0199d4', boxShadow: 'none' }
      }}>
      Request Quote
    </Button>
  )
}

export default function ManifoldTable({
  models,
  isFetching,
}: {
  models: TwoWayValveManifoldDTO[]
  isFetching?: boolean
}) {
  const [openRows, setOpenRows] = useState<Set<string>>(new Set())

  const toggleRow = useCallback((rowId: string) => {
    setOpenRows(prev => {
      const next = new Set(prev)
      next.has(rowId) ? next.delete(rowId) : next.add(rowId)
      return next
    })
  }, [])

  const onQuote = useCallback((data: TwoWayValveManifoldDTO) => {
    // Wire to RFQ modal later
    console.log('Quote requested:', data.partNumber)
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
      field: 'partNumber', headerName: 'Part Number', width: 240, pinned: 'left' as const,
      cellStyle: { fontFamily: 'monospace', fontWeight: '700', color: BRAND_BLUE, fontSize: '0.8rem' } as any
    },
    { field: 'connectionSize', headerName: 'Connection Size', width: 220 },
    { field: 'connectionType', headerName: 'Connection Type', width: 180 },
    {
      field: 'mounting', headerName: 'Mounting', width: 100,
      cellRenderer: 'mountingCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center' } as any
    },
    { field: 'configuration', headerName: 'Config', width: 140 },
    { field: 'maxPressure', headerName: 'Max Pressure', width: 160 },
    {
      headerName: 'Quote', width: 150, sortable: false, pinned: 'right' as const,
      cellRenderer: 'quoteCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' } as any
    }
  ], [])

  const defaultColDef: ColDef = useMemo(() => ({ sortable: true, resizable: true, filter: false }), [])
  const isFullWidthRow = useCallback((params: IsFullWidthRowParams) => params.rowNode.data?._isDetail === true, [])
  const gridContext = useMemo(() => ({ openRows, toggleRow, onQuote }), [openRows, toggleRow, onQuote])

  return (
    <Box sx={{ position: 'relative' }}>
      {isFetching && (
        <Box sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backdropFilter: 'blur(2px)', bgcolor: 'rgba(255,255,255,0.4)',
          zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '8px'
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
        '& .ag-root-wrapper': { border: `1px solid rgba(1,176,240,0.3)`, borderRadius: '8px' },
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
            mountingCellRenderer: MountingCellRenderer,
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