import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { getConnectorElbows, type ConnectorElbowDto } from"../../../../../api/tubefittingApi"
import ProductDetailPage from "../../../../Common/ProductDetailPage"
import { FITTING_TYPE_LABELS, THREAD_TYPE_LABELS, TUBE_OD_UNIT_LABELS } from "../hooks/types"
export default function ConnectorElbowProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()
  const [allData, setAllData] = useState<ConnectorElbowDto[]>([])

  useEffect(() => {
    getConnectorElbows({}).then(setAllData)
  }, [])

  const product = allData.find(p => p.partNumber === partNumber)

  if (allData.length > 0 && !product) return (
    <Box sx={{ p: 8, textAlign: "center" }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate("/instrumentation-fittings/tube-fittings/connectors")}>
        Back to Connectors & Elbows
      </Button>
    </Box>
  )

  if (!product) return null

  const unit = product.tubeODUnit === "Imperial" ? "inch" : "mm"

  const related = allData
    .filter(p => p.fittingType === product.fittingType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.tubeOD} ${unit} — ${r.threadDimension}`,
      image: r.imageUrl ?? "",
      href: `/instrumentation-fittings/tube-fittings/connectors/${r.partNumber}`,
      chipLabel: THREAD_TYPE_LABELS[r.threadType] ?? r.threadType,
      chipColor: "#01B0F0",
    }))

  return (
    <ProductDetailPage
      backHref="/instrumentation-fittings/tube-fittings/connectors"
      backLabel="Connectors & Elbows"
      image={product.imageUrl ?? ""}
      partNumber={product.partNumber}
      title={FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType}
      description={`PANAM® ${FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType} — ${product.tubeOD} ${unit} tube OD with ${product.threadDimension} ${THREAD_TYPE_LABELS[product.threadType] ?? product.threadType} thread. Stainless steel SS 316.${product.isPositionable ? " Positionable." : ""}${product.hasORingSeal ? " O-Ring seal." : ""}`}
      chips={[
        { label: FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType, color: "#01B0F0", variant: "outlined" },
        { label: THREAD_TYPE_LABELS[product.threadType] ?? product.threadType, color: "#01B0F0" },
        ...(product.isPositionable ? [{ label: "Positionable", color: "#7B1FA2" }] : []),
        ...(product.hasORingSeal ? [{ label: "O-Ring Seal", color: "#E65100" }] : []),
      ]}
      specs={[
        { label: "Part Number",      value: product.partNumber },
        { label: "Fitting Type",     value: FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType },
        { label: "Tube OD",          value: `${product.tubeOD} ${unit}` },
        { label: "Unit System",      value: TUBE_OD_UNIT_LABELS[product.tubeODUnit] ?? product.tubeODUnit },
        { label: "Thread Dimension", value: product.threadDimension },
        { label: "Thread Type",      value: THREAD_TYPE_LABELS[product.threadType] ?? product.threadType },
        ...(product.isPositionable ? [{ label: "Positionable", value: "Yes" }] : []),
        ...(product.hasORingSeal ? [{ label: "O-Ring Seal", value: "Yes" }] : []),
      ]}
      cartItem={{
        cartItemId: product.partNumber,
        id: String(product.id),
        name: `${FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType} — ${product.partNumber}`,
        image: product.imageUrl ?? "",
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          "Part Number":      product.partNumber,
          "Fitting Type":     FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType,
          "Tube OD":          `${product.tubeOD} ${unit}`,
          "Thread Dimension": product.threadDimension,
          "Thread Type":      THREAD_TYPE_LABELS[product.threadType] ?? product.threadType,
        },
      }}
      related={related}
    />
  )
}