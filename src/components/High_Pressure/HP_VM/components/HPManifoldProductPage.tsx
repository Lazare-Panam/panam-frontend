import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { HP_MANIFOLD_DATA } from '../hooks/hpManifoldData'
import ProductDetailPage from '../../../Common/ProductDetailPage'

const PRESSURE_COLORS: Record<number, string> = {
  15000: '#01B0F0',
  20000: '#FF6B35',
}

export default function HPManifoldProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = HP_MANIFOLD_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/high-pressure/2-valve-manifolds')}>
        Back to Manifolds
      </Button>
    </Box>
  )

  const color = PRESSURE_COLORS[product.pressurePsi] ?? '#01B0F0'

  const related = HP_MANIFOLD_DATA
    .filter(p => p.connectionType === product.connectionType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.connectionSize} — ${r.connectionType}`,
      image: r.imageUrl,
      href: `/high-pressure/2-valve-manifolds/${r.partNumber}`,
      chipLabel: r.pressureRating,
      chipColor: PRESSURE_COLORS[r.pressurePsi] ?? '#01B0F0',
    }))

  return (
    <ProductDetailPage
      backHref="/high-pressure/2-valve-manifolds"
      backLabel="2-Valve Manifolds"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={`2-Valve Manifold — ${product.connectionSize} ${product.connectionType}`}
      description={product.description}
      chips={[
        { label: product.pressureRating, color },
        { label: product.connectionType, color, variant: 'outlined' },
      ]}
      specs={[
        { label: 'Part Number',     value: product.partNumber },
        { label: 'Pressure Rating', value: product.pressureRating },
        { label: 'Connection Size', value: product.connectionSize },
        { label: 'Connection Type', value: product.connectionType },
        { label: 'Material',        value: product.material },
      ]}
      cartItem={{
        cartItemId: product.partNumber,
        id: product.id,
        name: `Panam 2-Valve Manifold — ${product.partNumber}`,
        image: product.imageUrl,
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          'Part Number':     product.partNumber,
          'Pressure Rating': product.pressureRating,
          'Connection Size': product.connectionSize,
          'Connection Type': product.connectionType,
          'Material':        product.material,
        },
      }}
      related={related}
    />
  )
}