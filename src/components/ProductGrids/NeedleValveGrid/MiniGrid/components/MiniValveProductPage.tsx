import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Box, Typography, Button, CircularProgress } from '@mui/material'
import { BODY_MATERIAL_LABELS, END_CONNECTION_LABELS, STEAM_SEAL_LABELS, EMPTY_MINI_FILTERS } from '../../hooks/types'
import ProductDetailPage from '../../../../Common/ProductDetailPage'
import { useMiniValves } from '../../hooks/useNeedleValve'
import type { MiniValveDTO } from '../../../../../api/needleValveApi'

const SEAL_COLORS: Record<string, string> = {
  V:  '#0277BD',
  T:  '#2E7D32',
  HT: '#E65100',
}

export default function MiniValveProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()
  const location = useLocation()

  const stateModel = location.state?.model as MiniValveDTO | undefined
  const { data: allModels = [], isLoading } = useMiniValves(EMPTY_MINI_FILTERS)

  const product = stateModel ?? allModels.find(p => p.partNumber === partNumber)

  if (!product && isLoading) return (
    <Box sx={{ p: 8, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress sx={{ color: '#01B0F0' }} />
    </Box>
  )

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/valves/needle-valves/needle-valves-mini')}>
        Back to Mini Valves
      </Button>
    </Box>
  )

  const sealColor = SEAL_COLORS[product.steamSeal] ?? '#01B0F0'

  const related = allModels
    .filter(p => p.steamSeal === product.steamSeal && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.connectionSize} — ${BODY_MATERIAL_LABELS[r.bodyMaterial] ?? r.bodyMaterial}`,
      image: r.imageUrl,
      href: `/valves/needle-valves/needle-valves-mini/${r.partNumber}`,
      chipLabel: STEAM_SEAL_LABELS[r.steamSeal] ?? r.steamSeal,
      chipColor: SEAL_COLORS[r.steamSeal] ?? '#01B0F0',
    }))

  return (
    <ProductDetailPage
      backHref="/valves/needle-valves/needle-valves-mini"
      backLabel="Mini Valves"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={`Mini Valve — ${STEAM_SEAL_LABELS[product.steamSeal] ?? product.steamSeal}`}
      description={`Panam Mini Valve (PMV Series) ${product.partNumber}. ${BODY_MATERIAL_LABELS[product.bodyMaterial] ?? product.bodyMaterial}, ${product.threadType}, ${END_CONNECTION_LABELS[product.endConnection] ?? product.endConnection}, ${product.connectionSize}.`}
      chips={[
        { label: STEAM_SEAL_LABELS[product.steamSeal] ?? product.steamSeal, color: sealColor },
        { label: BODY_MATERIAL_LABELS[product.bodyMaterial] ?? product.bodyMaterial, color: '#01B0F0', variant: 'outlined' },
      ]}
      specs={[
        { label: 'Part Number',    value: product.partNumber },
        { label: 'Material',       value: BODY_MATERIAL_LABELS[product.bodyMaterial] ?? product.bodyMaterial },
        { label: 'Thread Type',    value: product.threadType },
        { label: 'End Connection', value: END_CONNECTION_LABELS[product.endConnection] ?? product.endConnection },
        { label: 'Size',           value: product.connectionSize },
        { label: 'Steam Seal',     value: STEAM_SEAL_LABELS[product.steamSeal] ?? product.steamSeal },
        { label: 'Options',        value: product.options },
      ].filter(s => s.value)}
      cartItem={{
        cartItemId: product.partNumber,
        id: String(product.id),
        name: `Mini Valve — ${product.partNumber}`,
        image: product.imageUrl,
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          'Part Number':    product.partNumber,
          'Material':       BODY_MATERIAL_LABELS[product.bodyMaterial] ?? product.bodyMaterial,
          'Thread Type':    product.threadType,
          'End Connection': END_CONNECTION_LABELS[product.endConnection] ?? product.endConnection,
          'Size':           product.connectionSize,
          'Steam Seal':     STEAM_SEAL_LABELS[product.steamSeal] ?? product.steamSeal,
          'Options':        product.options,
        },
      }}
      related={related}
    />
  )
}