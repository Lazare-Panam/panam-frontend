import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"
import { DIELECTRIC_DATA } from "./dielectricGasketData"
import ProductDetailPage from "../../../Common/ProductDetailPage"

export default function DielectricProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = DIELECTRIC_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: "center" }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate("/instrumentation-fittings/tube-fittings/die-electric")}>
        Back to Dielectric Fittings & Gaskets
      </Button>
    </Box>
  )

  const unit = product.tubeODUnit === "Imperial" ? "inch" : "mm"
  const unitLabel = product.tubeODUnit === "Imperial" ? "Imperial (inch)" : "Metric (mm)"

  const related = DIELECTRIC_DATA
    .filter(p => p.fittingType === product.fittingType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.tubeOD} ${r.tubeODUnit === "Imperial" ? "in" : "mm"}${r.pipeNPT ? ` — ${r.pipeNPT} NPT` : ""}`,
      image: r.imageUrl,
      href: `/instrumentation-fittings/tube-fittings/die-electric/${r.partNumber}`,
      chipLabel: r.tubeODUnit,
      chipColor: "#01B0F0",
    }))

  return (
    <ProductDetailPage
      backHref="/instrumentation-fittings/tube-fittings/die-electric"
      backLabel="Dielectric Fittings & Gaskets"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={`${product.fittingType} — Dielectric`}
      description={`PANAM® ${product.fittingType} dielectric tube fitting — ${product.tubeOD} ${unit}${product.pipeNPT ? `, ${product.pipeNPT} NPT thread` : ""}. SS316 with Polyamideimide insulator. Rated to 5000 PSI, -40°C to 93°C.`}
      chips={[
        { label: product.fittingType, color: "#01B0F0", variant: "outlined" },
        { label: "Dielectric", color: "#7B1FA2" },
        { label: product.tubeODUnit, color: "#01B0F0" },
      ]}
      specs={[
        { label: "Part Number",     value: product.partNumber },
        { label: "Fitting Type",    value: product.fittingType },
        { label: "Tube OD",         value: `${product.tubeOD} ${unit}` },
        { label: "Unit System",     value: unitLabel },
        ...(product.pipeNPT ? [{ label: "NPT Thread", value: product.pipeNPT }] : []),
        { label: "Material",        value: "SS316 + Polyamideimide Insulator" },
        { label: "Pressure Rating", value: "34.47 MPa (5000 PSI)" },
        { label: "Temp Rating",     value: "-40°C to 93°C" },
      ]}
      cartItem={{
        cartItemId: product.partNumber,
        id: String(product.id),
        name: `${product.fittingType} Dielectric — ${product.partNumber}`,
        image: product.imageUrl,
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          "Part Number":     product.partNumber,
          "Fitting Type":    product.fittingType,
          "Tube OD":         `${product.tubeOD} ${unit}`,
          ...(product.pipeNPT ? { "NPT Thread": product.pipeNPT } : {}),
          "Pressure Rating": "5000 PSI",
        },
      }}
      related={related}
    />
  )
}