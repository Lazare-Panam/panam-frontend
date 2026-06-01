import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { HP_SEAL_DATA } from '../hooks/hpSealData'
import ProductDetailPage from '../../../Common/ProductDetailPage'

const PRESSURE_COLOR: Record<string, string> = {
  '20,000 psi': '#FF6B35',
  '60,000 psi': '#D32F2F',
}

export default function HPSealProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = HP_SEAL_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/high-pressure/fittings/seals-glads')}>
        Back to Seals & Glands
      </Button>
    </Box>
  )

  const color = PRESSURE_COLOR[product.pressureRating] ?? '#01B0F0'

  const related = HP_SEAL_DATA
    .filter(p => p.fittingType === product.fittingType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.p1Size} — ${r.p1Thread}`,
      image: r.imageUrl,
      href: `/high-pressure/fittings/seals-glads/${r.partNumber}`,
      chipLabel: r.pressureRating,
      chipColor: PRESSURE_COLOR[r.pressureRating] ?? '#01B0F0',
    }))

  return (
    <ProductDetailPage
      backHref="/high-pressure/fittings/seals-glads"
      backLabel="HP Seals & Glands"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={`${product.fittingType} — ${product.p1Size} ${product.p1Thread}`}
      description={product.description}
      chips={[
        { label: product.pressureRating, color },
        { label: product.fittingType,    color, variant: 'outlined' },
      ]}
      specs={[
        { label: 'Part Number',     value: product.partNumber },
        { label: 'Fitting Type',    value: product.fittingType },
        { label: 'Size',            value: product.p1Size },
        { label: 'Pressure Type',   value: product.p1Thread },
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
          'Size':            product.p1Size,
          'Pressure Type':   product.p1Thread,
          'Pressure Rating': product.pressureRating,
          'Material':        product.material,
        },
      }}
      related={related}
    />
  )
}