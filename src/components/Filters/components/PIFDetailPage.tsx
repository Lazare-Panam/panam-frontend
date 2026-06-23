import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import {  END_CONNECTION_LABELS } from '../hooks/types2'
import { PIF_FILTERS_DATA } from '../hooks/pifData'
import ProductDetailPage from '../../Common/ProductDetailPage'

export default function PIFProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = PIF_FILTERS_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/filters/i-type')}>
        Back to In-Line Filters
      </Button>
    </Box>
  )

  const related = PIF_FILTERS_DATA
    .filter(p =>
      p.series === product.series &&
      p.endConnection === product.endConnection &&
      p.partNumber !== product.partNumber
    )
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.threadSize} — ${r.poreSize}μm ${r.filterElement}`,
      image: r.imageUrl ?? '',
      href: `/filters/i-type/${r.partNumber}`,
      chipLabel: `${r.poreSize} μm`,
      chipColor: r.filterElement === 'Mesh' ? '#FF6B35' : '#01B0F0',
    }))

  return (
    <ProductDetailPage
      backHref="/filters/i-type"
      backLabel="In-Line Filters"
      image={product.imageUrl ?? ''}
      partNumber={product.partNumber}
      title={`${product.series} — ${product.threadSize} ${product.threadStandard === 'OD' ? 'OD' : product.threadStandard} ${END_CONNECTION_LABELS[product.endConnection] ?? product.endConnection}`}
      description={product.description}
      chips={[
        { label: `Series ${product.series}`, color: '#01B0F0' },
        { label: product.filterElement, color: product.filterElement === 'Mesh' ? '#FF6B35' : '#01B0F0', variant: 'outlined' },
      ]}
      specs={[
        { label: 'Part Number',     value: product.partNumber },
        { label: 'Series',          value: product.series },
        { label: 'Thread Standard', value: product.threadStandard },
        { label: 'Thread Size',     value: product.threadSize },
        { label: 'End Connection',  value: END_CONNECTION_LABELS[product.endConnection] ?? product.endConnection },
        { label: 'Filter Element',  value: product.filterElement },
        { label: 'Pore Size',       value: `${product.poreSize} μm` },
        { label: 'Material',        value: 'Stainless Steel 316' },
      ]}
      cartItem={{
        cartItemId: product.id,
        id: product.id,
        name: `Panam In-Line Filter — ${product.partNumber}`,
        image: product.imageUrl ?? '',
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          'Part Number':     product.partNumber,
          'Series':          product.series,
          'Thread Standard': product.threadStandard,
          'Thread Size':     product.threadSize,
          'End Connection':  END_CONNECTION_LABELS[product.endConnection] ?? product.endConnection,
          'Filter Element':  product.filterElement,
          'Pore Size':       `${product.poreSize} μm`,
          'Material':        'Stainless Steel 316',
        },
      }}
      related={related}
    />
  )
}