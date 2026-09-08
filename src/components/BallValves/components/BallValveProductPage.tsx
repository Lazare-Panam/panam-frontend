import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button, CircularProgress } from '@mui/material'
import { useBallValves } from './useBallValve'
import { SERIES_LABELS, BODY_MATERIAL_LABELS } from './types'
import ProductDetailPage from '../../Common/ProductDetailPage'

const SERIES_HREF: Record<string, string> = {
  '2W': '/valves/ball-valves/two-way',
  '3W': '/valves/ball-valves/three-way',
  'HB': '/valves/ball-valves/high-bore',
}

export default function BallValveProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const { data, isLoading } = useBallValves({})

  if (isLoading) {
    return (
      <Box sx={{ p: 8, textAlign: 'center' }}>
        <CircularProgress size={28} />
      </Box>
    )
  }

  const product = data?.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/valves/ball-valves')}>
        Back to Ball Valves
      </Button>
    </Box>
  )

  const seriesLabel = SERIES_LABELS[product.series] ?? product.series
  const bodyMaterialLabel = BODY_MATERIAL_LABELS[product.bodyMaterial] ?? product.bodyMaterial
  const backHref = SERIES_HREF[product.series] ?? '/valves/ball-valves'

  const related = (data ?? [])
    .filter(p => p.series === product.series && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.connectionSize} — ${r.endConnectionType}`,
      image: r.imageUrl ?? '',
      href: `${SERIES_HREF[r.series] ?? '/valves/ball-valves'}/${r.partNumber}`,
      chipLabel: SERIES_LABELS[r.series] ?? r.series,
      chipColor: '#01B0F0',
    }))

  const description = `Panam ${seriesLabel} Ball Valve, ${bodyMaterialLabel}, ${product.connectionSize} ${product.endConnectionType}, ${product.configuration} configuration, ${product.seatMaterial} seat, ${product.handle} handle${product.pressureRating ? `, ${product.pressureRating}` : ''}.`

  return (
    <ProductDetailPage
      backHref={backHref}
      backLabel={`${seriesLabel} Ball Valves`}
      image={product.imageUrl ?? ''}
      partNumber={product.partNumber}
      title={`${seriesLabel} — ${product.connectionSize} ${product.endConnectionType}`}
      description={description}
      chips={[
        { label: seriesLabel, color: '#01B0F0' },
        ...(product.pressureRating ? [{ label: product.pressureRating, color: '#880E4F', variant: 'outlined' as const }] : []),
      ]}
      specs={[
        { label: 'Part Number',     value: product.partNumber },
        { label: 'Series',          value: seriesLabel },
        { label: 'Body Material',   value: bodyMaterialLabel },
        { label: 'Thread Type',     value: product.threadType },
        { label: 'End Connection',  value: product.endConnectionType },
        { label: 'Connection Size', value: product.connectionSize },
        { label: 'Configuration',   value: product.configuration },
        { label: 'Seat Material',   value: product.seatMaterial },
        { label: 'Handle',          value: product.handle },
        ...(product.pressureRating ? [{ label: 'Pressure Rating', value: product.pressureRating }] : []),
        ...(product.options ? [{ label: 'Options', value: product.options }] : []),
      ]}
      cartItem={{
        cartItemId: product.partNumber,
        id: String(product.id),
        name: `${seriesLabel} Ball Valve — ${product.partNumber}`,
        image: product.imageUrl ?? '',
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          'Part Number':     product.partNumber,
          'Series':          seriesLabel,
          'Body Material':   bodyMaterialLabel,
          'Thread Type':     product.threadType,
          'End Connection':  product.endConnectionType,
          'Connection Size': product.connectionSize,
          'Configuration':   product.configuration,
          'Seat Material':   product.seatMaterial,
          'Handle':          product.handle,
          ...(product.pressureRating ? { 'Pressure Rating': product.pressureRating } : {}),
          ...(product.options ? { 'Options': product.options } : {}),
        },
      }}
      related={related}
    />
  )
}
