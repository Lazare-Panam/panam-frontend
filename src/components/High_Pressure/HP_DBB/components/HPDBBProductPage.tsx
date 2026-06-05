import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { HP_DBB_DATA } from '../hooks/hpDBBData'
import ProductDetailPage from '../../../Common/ProductDetailPage'

const PRESSURE_COLORS: Record<number, string> = {
  10000: '#01B0F0',
  20000: '#FF6B35',
}

export default function HPDBBProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = HP_DBB_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/high-pressure/dbb')}>
        Back to DBB Valves
      </Button>
    </Box>
  )

  const color = PRESSURE_COLORS[product.pressurePsi] ?? '#01B0F0'

  const related = HP_DBB_DATA
    .filter(p => p.configuration === product.configuration && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.inletOutletSize} — ${r.inletOutletType}`,
      image: r.imageUrl,
      href: `/high-pressure/double-block-and-valves/${r.partNumber}`,
      chipLabel: r.pressureRating,
      chipColor: PRESSURE_COLORS[r.pressurePsi] ?? '#01B0F0',
    }))

  return (
    <ProductDetailPage
      backHref="/high-pressure/dbb"
      backLabel="HP DBB Valves"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={`HP DBB Valve — ${product.configuration}`}
      description={product.description}
      chips={[
        { label: product.pressureRating, color },
        { label: product.configuration,  color, variant: 'outlined' },
      ]}
      specs={[
        { label: 'Part Number',       value: product.partNumber },
        { label: 'Pressure Rating',   value: product.pressureRating },
        { label: 'Configuration',     value: product.configuration },
        { label: 'Material',          value: product.material },
        { label: 'Inlet/Outlet Size', value: product.inletOutletSize },
        { label: 'Inlet/Outlet Type', value: product.inletOutletType },
        { label: 'Vent Size',         value: product.ventSize },
        { label: 'Vent Type',         value: product.ventType },
      ]}
      cartItem={{
        cartItemId: product.partNumber,
        id: product.id,
        name: `Panam HP DBB Valve — ${product.partNumber}`,
        image: product.imageUrl,
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          'Part Number':       product.partNumber,
          'Pressure Rating':   product.pressureRating,
          'Configuration':     product.configuration,
          'Material':          product.material,
          'Inlet/Outlet Size': product.inletOutletSize,
          'Inlet/Outlet Type': product.inletOutletType,
          'Vent Size':         product.ventSize,
          'Vent Type':         product.ventType,
        },
      }}
      related={related}
    />
  )
}