import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { FILTER_ELEMENT_DATA } from '../hooks/filterElementData'
import ProductDetailPage from '../../Common/ProductDetailPage'

export default function PSEProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = FILTER_ELEMENT_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/filters/elements')}>
        Back to Filter Elements
      </Button>
    </Box>
  )

  const related = FILTER_ELEMENT_DATA
    .filter(p =>
      p.sizeGroup === product.sizeGroup &&
      p.filterElement === product.filterElement &&
      p.partNumber !== product.partNumber
    )
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.sizeGroup} — ${r.poreSize}μm ${r.filterElement}`,
      image: r.imageUrl ?? '',
      href: `/filters/elements/${r.partNumber}`,
      chipLabel: `${r.poreSize} μm`,
      chipColor: r.filterElement === 'Mesh' ? '#FF6B35' : '#01B0F0',
    }))

  return (
    <ProductDetailPage
      backHref="/filters/elements"
      backLabel="Filter Elements"
      image={product.imageUrl ?? ''}
      partNumber={product.partNumber}
      title={`${product.sizeGroup} — ${product.poreSize}μm ${product.filterElement}`}
      description={product.description}
      chips={[
        { label: product.sizeGroup, color: '#01B0F0' },
        { label: product.filterElement, color: product.filterElement === 'Mesh' ? '#FF6B35' : '#01B0F0', variant: 'outlined' },
      ]}
      specs={[
        { label: 'Part Number',       value: product.partNumber },
        { label: 'Size Group',        value: product.sizeGroup },
        { label: 'Compatible Series', value: product.compatibleSeries.join(', ') },
        { label: 'Filter Element',    value: product.filterElement },
        { label: 'Pore Size',         value: `${product.poreSize} μm` },
        { label: 'Material',          value: 'Stainless Steel 316' },
      ]}
      cartItem={{
        cartItemId: product.id,
        id: product.id,
        name: `Panam Replacement Filter Element — ${product.partNumber}`,
        image: product.imageUrl ?? '',
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          'Part Number':       product.partNumber,
          'Size Group':        product.sizeGroup,
          'Compatible Series': product.compatibleSeries.join(', '),
          'Filter Element':    product.filterElement,
          'Pore Size':         `${product.poreSize} μm`,
          'Material':          'Stainless Steel 316',
        },
      }}
      related={related}
    />
  )
}
