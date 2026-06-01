import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { HP_NIPPLE_DATA } from '../hooks/hpNippleData'
import ProductDetailPage from '../../../Common/ProductDetailPage'

const PRESSURE_COLORS: Record<number, string> = {
  20000: '#FF6B35',
  60000: '#D32F2F',
}

export default function HPNippleProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = HP_NIPPLE_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/high-pressure/cones-threaded-nipples')}>
        Back to Nipples
      </Button>
    </Box>
  )

  const color = PRESSURE_COLORS[product.pressurePsi] ?? '#01B0F0'

  const related = HP_NIPPLE_DATA
    .filter(p => p.connectionType === product.connectionType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.tubeOD} — ${r.length}`,
      image: r.imageUrl,
      href: `/high-pressure/cones-threaded-nipples/${r.partNumber}`,
      chipLabel: r.pressureRating,
      chipColor: PRESSURE_COLORS[r.pressurePsi] ?? '#01B0F0',
    }))

  return (
    <ProductDetailPage
      backHref="/high-pressure/cones-threaded-nipples"
      backLabel="HP Cone & Threaded Nipples"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={`HP Nipple — ${product.connectionType}`}
      description={product.description}
      chips={[
        { label: product.pressureRating,  color },
        { label: product.connectionType,  color, variant: 'outlined' },
      ]}
      specs={[
        { label: 'Part Number',     value: product.partNumber },
        { label: 'Connection Type', value: product.connectionType },
        { label: 'Tube OD',         value: product.tubeOD },
        { label: 'Tube ID',         value: product.tubeID },
        { label: 'Length',          value: product.length },
        { label: 'Pressure Rating', value: product.pressureRating },
        { label: 'Material',        value: product.material },
      ]}
      cartItem={{
        cartItemId: product.partNumber,
        id: product.id,
        name: `Panam HP Nipple — ${product.partNumber}`,
        image: product.imageUrl,
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          'Part Number':     product.partNumber,
          'Connection Type': product.connectionType,
          'Tube OD':         product.tubeOD,
          'Tube ID':         product.tubeID,
          'Length':          product.length,
          'Pressure':        product.pressureRating,
          'Material':        product.material,
        },
      }}
      related={related}
    />
  )
}