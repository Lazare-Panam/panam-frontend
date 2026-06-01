import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { HP_BALL_VALVE_DATA } from '../hooks/hpBallValveData'
import ProductDetailPage from '../../../Common/ProductDetailPage'

const SERIES_COLORS: Record<string, string> = {
  'HP':  '#01B0F0',
  'HP1': '#7B61FF',
  'HP2': '#FF6B35',
}

export default function HPBallValveProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = HP_BALL_VALVE_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/high-pressure/ball-valves')}>
        Back to Ball Valves
      </Button>
    </Box>
  )

  const color = SERIES_COLORS[product.series] ?? '#01B0F0'

  const related = HP_BALL_VALVE_DATA
    .filter(p => p.series === product.series && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.configuration} — ${r.connectionSize}`,
      image: r.imageUrl,
      href: `/high-pressure/ball-valves/${r.partNumber}`,
      chipLabel: r.pressureRating,
      chipColor: SERIES_COLORS[r.series] ?? '#01B0F0',
    }))

  return (
    <ProductDetailPage
      backHref="/high-pressure/ball-valves"
      backLabel="HP Ball Valves"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={`HP Ball Valve — ${product.configuration}`}
      description={product.description}
      chips={[
        { label: product.series,         color, variant: 'outlined' },
        { label: product.pressureRating, color },
      ]}
      specs={[
        { label: 'Part Number',     value: product.partNumber },
        { label: 'Series',          value: product.series },
        { label: 'Pressure Rating', value: product.pressureRating },
        { label: 'Configuration',   value: product.configuration },
        { label: 'Material',        value: product.material },
        { label: 'Connection Size', value: product.connectionSize },
        { label: 'Connection Type', value: product.connectionType },
      ]}
      cartItem={{
        cartItemId: product.partNumber,
        id: product.id,
        name: `Panam HP Ball Valve — ${product.partNumber}`,
        image: product.imageUrl,
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          'Part Number':   product.partNumber,
          'Series':        product.series,
          'Pressure':      product.pressureRating,
          'Configuration': product.configuration,
          'Material':      product.material,
          'Size':          product.connectionSize,
          'Connection':    product.connectionType,
        },
      }}
      related={related}
    />
  )
}