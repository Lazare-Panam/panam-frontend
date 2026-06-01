import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { HP_JUNCTION_DATA } from '../hooks/hpFittingsJunctionData'
import ProductDetailPage from '../../../../Common/ProductDetailPage'

const PRESSURE_COLOR: Record<string, string> = {
  '10,000 psi': '#01B0F0',
  '15,000 psi': '#7B61FF',
  '20,000 psi': '#FF6B35',
  '60,000 psi': '#D32F2F',
}

export default function HPJunctionProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = HP_JUNCTION_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/high-pressure/fittings/elbows-tees-cross')}>
        Back to Junction Fittings
      </Button>
    </Box>
  )

  const color = PRESSURE_COLOR[product.pressureRating] ?? '#01B0F0'

  const related = HP_JUNCTION_DATA
    .filter(p => p.fittingType === product.fittingType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.p1Size} ${r.p1Thread} → ${r.p2Size} ${r.p2Thread}`,
      image: r.imageUrl,
      href: `/high-pressure/fittings/elbows-tees-cross/${r.partNumber}`,
      chipLabel: r.pressureRating,
      chipColor: PRESSURE_COLOR[r.pressureRating] ?? '#01B0F0',
    }))

  return (
    <ProductDetailPage
      backHref="/high-pressure/fittings/elbows-tees-cross"
      backLabel="Junction Fittings"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={`${product.fittingType} — ${product.p1Size} to ${product.p2Size}`}
      description={product.description}
      chips={[
        { label: product.pressureRating, color },
        { label: product.fittingType,    color, variant: 'outlined' },
      ]}
      specs={[
        { label: 'Part Number',     value: product.partNumber },
        { label: 'Fitting Type',    value: product.fittingType },
        { label: 'P1 Size',         value: product.p1Size },
        { label: 'P1 Thread',       value: product.p1Thread },
        { label: 'P2 Size',         value: product.p2Size },
        { label: 'P2 Thread',       value: product.p2Thread },
        { label: 'Pressure Rating', value: product.pressureRating },
        { label: 'Material',        value: product.material },
      ]}
      cartItem={{
        cartItemId: product.id,
        id: product.id,
        name: `Panam ${product.fittingType} — ${product.partNumber}`,
        image: product.imageUrl,
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          'Part Number':     product.partNumber,
          'Fitting Type':    product.fittingType,
          'P1 Size':         product.p1Size,
          'P1 Thread':       product.p1Thread,
          'P2 Size':         product.p2Size,
          'P2 Thread':       product.p2Thread,
          'Pressure Rating': product.pressureRating,
          'Material':        product.material,
        },
      }}
      related={related}
    />
  )
}