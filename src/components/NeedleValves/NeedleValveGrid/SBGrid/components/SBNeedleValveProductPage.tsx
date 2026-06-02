import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Box, Typography, Button, CircularProgress } from '@mui/material'
import { BODY_MATERIAL_LABELS, END_CONNECTION_LABELS, VALVE_TYPE_LABELS, SB_SEAT_LABELS, EMPTY_SB_FILTERS } from '../../hooks/types'
import ProductDetailPage from '../../../../Common/ProductDetailPage'
import { useNeedleValvesSB } from '../../hooks/useNeedleValve'
import type { NeedleValveSBDTO } from '../../../../../api/needleValveApi'

export default function SBNeedleValveProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()
  const location = useLocation()

  const stateModel = location.state?.model as NeedleValveSBDTO | undefined

  const { data: allModels = [], isLoading } = useNeedleValvesSB(EMPTY_SB_FILTERS)

  if (!stateModel && isLoading) return (
    <Box sx={{ p: 8, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress sx={{ color: '#01B0F0' }} />
    </Box>
  )

  const product = stateModel ?? allModels.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/valves/needle-valves/needle-valves-sb')}>
        Back to SB Needle Valves
      </Button>
    </Box>
  )

  const isBlockBleed = product.valveType === 'PBB'
  const isHardSeat = product.seat === 'H'

  const related = allModels
    .filter(p => p.endConnection === product.endConnection && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.connectionSize} — ${BODY_MATERIAL_LABELS[r.bodyMaterial] ?? r.bodyMaterial}`,
      image: r.imageUrl,
      href: `/valves/needle-valves/needle-valves-sb/${r.partNumber}`,
      chipLabel: VALVE_TYPE_LABELS[r.valveType] ?? r.valveType,
      chipColor: r.valveType === 'PBB' ? '#E65100' : '#01B0F0',
    }))

  return (
    <ProductDetailPage
      backHref="/valves/needle-valves/needle-valves-sb"
      backLabel="SB Needle Valves"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={`SB ${VALVE_TYPE_LABELS[product.valveType] ?? product.valveType} — ${product.connectionSize}`}
      description={`Panam SB Series ${VALVE_TYPE_LABELS[product.valveType] ?? product.valveType} ${product.partNumber}. ${BODY_MATERIAL_LABELS[product.bodyMaterial] ?? product.bodyMaterial}, ${SB_SEAT_LABELS[product.seat] ?? product.seat}, ${END_CONNECTION_LABELS[product.endConnection] ?? product.endConnection}, ${product.connectionSize}, ${product.workingPressure}.`}
      chips={[
        { label: VALVE_TYPE_LABELS[product.valveType] ?? product.valveType, color: isBlockBleed ? '#E65100' : '#01B0F0', variant: 'outlined' },
        { label: SB_SEAT_LABELS[product.seat] ?? product.seat,              color: isHardSeat   ? '#2E7D32' : '#6A1B9A' },
      ]}
      specs={[
        { label: 'Part Number',      value: product.partNumber },
        { label: 'Valve Type',       value: VALVE_TYPE_LABELS[product.valveType] ?? product.valveType },
        { label: 'Seat',             value: SB_SEAT_LABELS[product.seat] ?? product.seat },
        { label: 'Material',         value: BODY_MATERIAL_LABELS[product.bodyMaterial] ?? product.bodyMaterial },
        { label: 'Thread Type',      value: product.threadType },
        { label: 'End Connection',   value: END_CONNECTION_LABELS[product.endConnection] ?? product.endConnection },
        { label: 'Size',             value: product.connectionSize },
        { label: 'Working Pressure', value: product.workingPressure },
        { label: 'Options',          value: product.options },
      ].filter(s => s.value)}
      cartItem={{
        cartItemId: product.partNumber,
        id: String(product.id),
        name: `SB Needle Valve — ${product.partNumber}`,
        image: product.imageUrl,
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          'Part Number':      product.partNumber,
          'Valve Type':       VALVE_TYPE_LABELS[product.valveType] ?? product.valveType,
          'Seat':             SB_SEAT_LABELS[product.seat] ?? product.seat,
          'Material':         BODY_MATERIAL_LABELS[product.bodyMaterial] ?? product.bodyMaterial,
          'Thread Type':      product.threadType,
          'End Connection':   END_CONNECTION_LABELS[product.endConnection] ?? product.endConnection,
          'Size':             product.connectionSize,
          'Working Pressure': product.workingPressure,
          'Options':          product.options,
        },
      }}
      related={related}
    />
  )
}