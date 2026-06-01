import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { HP_NEEDLE_VALVE_DATA } from '../hooks/hpNeedleValveData'
import ProductDetailPage from '../../../Common/ProductDetailPage'

const SERIES_COLORS: Record<string, string> = {
  'HP':  '#01B0F0',
  'HP1': '#7B61FF',
  'HP2': '#FF6B35',
  'HP3': '#E91E8C',
  'HP6': '#D32F2F',
}

export default function HPNeedleValveProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = HP_NEEDLE_VALVE_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/high-pressure/needle-valves')}>
        Back to Needle Valves
      </Button>
    </Box>
  )

  const color = SERIES_COLORS[product.series] ?? '#01B0F0'

  const related = HP_NEEDLE_VALVE_DATA
    .filter(p => p.series === product.series && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.connectionSize} — ${r.connectionType}`,
      image: r.imageUrl,
      href: `/high-pressure/needle-valves/${r.partNumber}`,
      chipLabel: r.pressureRating,
      chipColor: SERIES_COLORS[r.series] ?? '#01B0F0',
    }))

  return (
    <ProductDetailPage
      backHref="/high-pressure/needle-valves"
      backLabel="HP Needle Valves"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={`HP Needle Valve — ${product.series} Series`}
      description={product.description}
      chips={[
        { label: product.series,         color, variant: 'outlined' },
        { label: product.pressureRating, color },
      ]}
      specs={[
        { label: 'Part Number',     value: product.partNumber },
        { label: 'Series',          value: product.series },
        { label: 'Pressure Rating', value: product.pressureRating },
        { label: 'Material',        value: product.material },
        { label: 'Connection Size', value: product.connectionSize },
        { label: 'Connection Type', value: product.connectionType },
        { label: 'Configuration',   value: product.configuration },
      ]}
      cartItem={{
        cartItemId: product.partNumber,
        id: product.id,
        name: `Panam HP Needle Valve — ${product.partNumber}`,
        image: product.imageUrl,
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          'Part Number':     product.partNumber,
          'Series':          product.series,
          'Pressure Rating': product.pressureRating,
          'Material':        product.material,
          'Connection Size': product.connectionSize,
          'Connection Type': product.connectionType,
          'Configuration':   product.configuration,
        },
      }}
      related={related}
    />
  )
}