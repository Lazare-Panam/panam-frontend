import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"
import { PORT_CONNECTOR_DATA } from "./portConnectorData"
import ProductDetailPage from "../../../Common/ProductDetailPage"

const FITTING_TYPE_LABELS: Record<string, string> = {
  "Port Connector": "Port Connector (PPC)",
  "Reducing Port Connector": "Reducing Port Connector (PRPC)",
}

export default function PortConnectorProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = PORT_CONNECTOR_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: "center" }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate("/instrumentation-fittings/tube-fittings/port-connector")}>
        Back to Port Connectors
      </Button>
    </Box>
  )

  const unit = product.tubeODUnit === "Imperial" ? "inch" : "mm"
  const unitLabel = product.tubeODUnit === "Imperial" ? "Imperial (inch)" : "Metric (mm)"

  const related = PORT_CONNECTOR_DATA
    .filter(p => p.fittingType === product.fittingType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: r.tubeOD2 ? `${r.tubeOD} × ${r.tubeOD2} ${r.tubeODUnit === "Imperial" ? "in" : "mm"}` : `${r.tubeOD} ${r.tubeODUnit === "Imperial" ? "in" : "mm"}`,
      image: r.imageUrl ?? "",
      href: `/instrumentation-fittings/tube-fittings/port-connector/${r.partNumber}`,
      chipLabel: r.tubeODUnit,
      chipColor: "#01B0F0",
    }))

  return (
    <ProductDetailPage
      backHref="/instrumentation-fittings/tube-fittings/port-connector"
      backLabel="Port Connectors"
      image={product.imageUrl ?? ""}
      partNumber={product.partNumber}
      title={FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType}
      description={`PANAM® ${FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType} — ${product.tubeOD}${product.tubeOD2 ? ` × ${product.tubeOD2}` : ""} ${unit}. Stainless steel SS 316. Direct tube-to-port connection.`}
      chips={[
        { label: FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType, color: "#01B0F0", variant: "outlined" },
        { label: product.tubeODUnit, color: "#01B0F0" },
      ]}
      specs={[
        { label: "Part Number",  value: product.partNumber },
        { label: "Fitting Type", value: FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType },
        { label: "Tube OD",      value: `${product.tubeOD} ${unit}` },
        ...(product.tubeOD2 ? [{ label: "Tube OD 2", value: `${product.tubeOD2} ${unit}` }] : []),
        { label: "Unit System",  value: unitLabel },
        { label: "Material",     value: "SS 316" },
      ]}
      cartItem={{
        cartItemId: product.partNumber,
        id: String(product.id),
        name: `${FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType} — ${product.partNumber}`,
        image: product.imageUrl ?? "",
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          "Part Number":  product.partNumber,
          "Fitting Type": FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType,
          "Tube OD":      `${product.tubeOD} ${unit}`,
          ...(product.tubeOD2 ? { "Tube OD 2": `${product.tubeOD2} ${unit}` } : {}),
        },
      }}
      related={related}
    />
  )
}