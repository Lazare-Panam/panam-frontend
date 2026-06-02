import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Box, Typography, Button, CircularProgress } from '@mui/material'
import { BODY_MATERIAL_LABELS, END_CONNECTION_LABELS, EMPTY_IB_FILTERS } from '../../hooks/types'
import ProductDetailPage from '../../../../Common/ProductDetailPage'
import { useNeedleValvesIB } from '../../hooks/useNeedleValve'
import type { NeedleValveIBDTO } from '../../../../../api/needleValveApi'

export default function IBNeedleValveProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()
  const location = useLocation()

  const stateModel = location.state?.model as NeedleValveIBDTO | undefined

const { data: allModels = [], isLoading } = useNeedleValvesIB(EMPTY_IB_FILTERS)

  if (!stateModel && isLoading) return (
    <Box sx={{ p: 8, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress sx={{ color: '#01B0F0' }} />
    </Box>
  )

  const product = stateModel ?? allModels.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: 'center' }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate('/valves/needle-valves/needle-valves-ib')}>
        Back to IB Needle Valves
      </Button>
    </Box>
  )

  const related = allModels
    .filter(p => p.endConnection === product.endConnection && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.connectionSize} — ${BODY_MATERIAL_LABELS[r.bodyMaterial] ?? r.bodyMaterial}`,
      image: r.imageUrl,
      href: `/valves/needle-valves/needle-valves-ib/${r.partNumber}`,
      chipLabel: r.configuration,
      chipColor: '#01B0F0',
    }))

  return (
    <ProductDetailPage
      backHref="/valves/needle-valves/needle-valves-ib"
      backLabel="IB Needle Valves"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={`IB Needle Valve — ${product.configuration}`}
      description={`Panam IB Series Needle Valve ${product.partNumber}. ${BODY_MATERIAL_LABELS[product.bodyMaterial] ?? product.bodyMaterial}, ${product.threadType}, ${END_CONNECTION_LABELS[product.endConnection] ?? product.endConnection}, ${product.connectionSize}.`}
      chips={[
        { label: product.configuration,                                              color: '#01B0F0', variant: 'outlined' },
        { label: BODY_MATERIAL_LABELS[product.bodyMaterial] ?? product.bodyMaterial, color: '#01B0F0' },
      ]}
      specs={[
        { label: 'Part Number',    value: product.partNumber },
        { label: 'Material',       value: BODY_MATERIAL_LABELS[product.bodyMaterial] ?? product.bodyMaterial },
        { label: 'Thread Type',    value: product.threadType },
        { label: 'End Connection', value: END_CONNECTION_LABELS[product.endConnection] ?? product.endConnection },
        { label: 'Size',           value: product.connectionSize },
        { label: 'Configuration',  value: product.configuration },
        { label: 'Stem Seal',      value: product.stemSeal },
        { label: 'Step Tip',       value: product.stepTip },
        { label: 'Handle',         value: product.handle },
        { label: 'Options',        value: product.options },
      ].filter(s => s.value)}
      cartItem={{
        cartItemId: product.partNumber,
        id: String(product.id),
        name: `IB Needle Valve — ${product.partNumber}`,
        image: product.imageUrl,
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          'Part Number':    product.partNumber,
          'Material':       BODY_MATERIAL_LABELS[product.bodyMaterial] ?? product.bodyMaterial,
          'Thread Type':    product.threadType,
          'End Connection': END_CONNECTION_LABELS[product.endConnection] ?? product.endConnection,
          'Size':           product.connectionSize,
          'Configuration':  product.configuration,
          'Stem Seal':      product.stemSeal,
          'Step Tip':       product.stepTip,
          'Handle':         product.handle,
          'Options':        product.options,
        },
      }}
      related={related}
    />
  )
}