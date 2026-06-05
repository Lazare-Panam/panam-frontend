import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"
import { ACCESSORY_DATA } from "./accessoryData"
import ProductDetailPage from "../../../Common/ProductDetailPage"

const FITTING_TYPE_LABELS: Record<string, string> = {
  "Tube Plug":     "Tube Plug (PTP)",
  "Tube Cap":      "Tube Cap (PTC)",
  "Nut":           "Nut (PN)",
  "Front Ferrule": "Front Ferrule (PFF)",
  "Back Ferrule":  "Back Ferrule (PBF)",
  "Pipe Insert":   "Pipe Insert (PIN)",
}

export default function AccessoryProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = ACCESSORY_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: "center" }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate("/instrumentation-fittings/tube-fittings/accessories")}>
        Back to Accessories
      </Button>
    </Box>
  )

  const unit = product.tubeODUnit === "Imperial" ? "inch" : "mm"
  const unitLabel = product.tubeODUnit === "Imperial" ? "Imperial (inch)" : "Metric (mm)"

  const related = ACCESSORY_DATA
    .filter(p => p.fittingType === product.fittingType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.tubeOD} ${r.tubeODUnit === "Imperial" ? "in" : "mm"}`,
      image: r.imageUrl,
      href: `/instrumentation-fittings/tube-fittings/accessories/${r.partNumber}`,
      chipLabel: r.tubeODUnit,
      chipColor: "#01B0F0",
    }))

  return (
    <ProductDetailPage
      backHref="/instrumentation-fittings/tube-fittings/accessories"
      backLabel="Accessories"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType}
      description={`PANAM® ${FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType} — ${product.tubeOD} ${unit}${product.tubeID ? `, ${product.tubeID} ${unit} ID` : ""}. Stainless steel SS 316.`}
      chips={[
        { label: FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType, color: "#01B0F0", variant: "outlined" },
        { label: product.tubeODUnit, color: "#01B0F0" },
      ]}
      specs={[
        { label: "Part Number",  value: product.partNumber },
        { label: "Fitting Type", value: FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType },
        { label: "Tube OD",      value: `${product.tubeOD} ${unit}` },
        ...(product.tubeID ? [{ label: "Tube ID", value: `${product.tubeID} ${unit}` }] : []),
        { label: "Unit System",  value: unitLabel },
        { label: "Material",     value: "SS 316" },
      ]}
      cartItem={{
        cartItemId: product.partNumber,
        id: String(product.id),
        name: `${FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType} — ${product.partNumber}`,
        image: product.imageUrl,
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          "Part Number":  product.partNumber,
          "Fitting Type": FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType,
          "Tube OD":      `${product.tubeOD} ${unit}`,
          ...(product.tubeID ? { "Tube ID": `${product.tubeID} ${unit}` } : {}),
        },
      }}
      related={related}
    />
  )
}