import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"
import { WELD_GAUGE_DATA } from "./weldGaugeData"
import ProductDetailPage from "../../../Common/ProductDetailPage"

const FITTING_TYPE_LABELS: Record<string, string> = {
  "Male Pipe Weld Connector":   "Male Pipe Weld Connector (PMWC)",
  "Male Pipe Weld Elbow":       "Male Pipe Weld Elbow (PMWE)",
  "Tube Socket Weld Connector": "Tube Socket Weld Connector (PSWC)",
  "Tube Socket Weld Elbow":     "Tube Socket Weld Elbow (PSWE)",
  "Gauge Connector":            "Gauge Connector (PGC)",
}

const THREAD_TYPE_LABELS: Record<string, string> = { BSPP: "BSPP", Metric: "Metric" }

export default function WeldGaugeProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = WELD_GAUGE_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: "center" }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate("/instrumentation-fittings/tube-fittings/weld-gauge")}>
        Back to Weld & Gauge Connectors
      </Button>
    </Box>
  )

  const unit = product.tubeODUnit === "Imperial" ? "inch" : "mm"

  const related = WELD_GAUGE_DATA
    .filter(p => p.fittingType === product.fittingType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.tubeOD} ${r.tubeODUnit === "Imperial" ? "in" : "mm"}${r.pipeSize ? ` — ${r.pipeSize}` : ""}`,
      image: r.imageUrl ?? "",
      href: `/instrumentation-fittings/tube-fittings/weld-gauge/${r.partNumber}`,
      chipLabel: r.tubeODUnit,
      chipColor: "#01B0F0",
    }))

  return (
    <ProductDetailPage
      backHref="/instrumentation-fittings/tube-fittings/weld-gauge"
      backLabel="Weld & Gauge Connectors"
      image={product.imageUrl ?? ""}
      partNumber={product.partNumber}
      title={FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType}
      description={`PANAM® ${FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType} — ${product.tubeOD} ${unit} tube OD${product.pipeSize ? `, ${product.pipeSize} pipe size` : ""}${product.threadSize ? `, ${product.threadSize} thread` : ""}. Stainless steel SS 316.`}
      chips={[
        { label: FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType, color: "#01B0F0", variant: "outlined" },
        { label: product.tubeODUnit, color: "#01B0F0" },
        ...(product.threadType ? [{ label: THREAD_TYPE_LABELS[product.threadType] ?? product.threadType, color: "#2E7D32" }] : []),
      ]}
      specs={[
        { label: "Part Number",  value: product.partNumber },
        { label: "Fitting Type", value: FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType },
        { label: "Tube OD",      value: `${product.tubeOD} ${unit}` },
        { label: "Unit System",  value: product.tubeODUnit === "Imperial" ? "Imperial (inch)" : "Metric (mm)" },
        ...(product.pipeSize   ? [{ label: "Pipe Size",   value: product.pipeSize }]   : []),
        ...(product.threadSize ? [{ label: "Thread Size", value: product.threadSize }] : []),
        ...(product.threadType ? [{ label: "Thread Type", value: THREAD_TYPE_LABELS[product.threadType] ?? product.threadType }] : []),
        { label: "Material", value: "SS 316" },
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
          ...(product.pipeSize   ? { "Pipe Size":   product.pipeSize }                              : {}),
          ...(product.threadSize ? { "Thread Size": product.threadSize }                             : {}),
          ...(product.threadType ? { "Thread Type": THREAD_TYPE_LABELS[product.threadType] ?? product.threadType } : {}),
        },
      }}
      related={related}
    />
  )
}