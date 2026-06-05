import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"
import { GASKET_DATA } from "./dielectricGasketData"
import ProductDetailPage from "../../../Common/ProductDetailPage"

export default function GasketProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = GASKET_DATA.find(p => p.partNumber === partNumber)

  if (!product) return (
    <Box sx={{ p: 8, textAlign: "center" }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate("/instrumentation-fittings/tube-fittings/die-electric")}>
        Back to Dielectric Fittings & Gaskets
      </Button>
    </Box>
  )

  const related = GASKET_DATA
    .filter(p => p.gasketType === product.gasketType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: r.threadSize,
      image: r.imageUrl,
      href: `/instrumentation-fittings/tube-fittings/die-electric/gasket/${r.partNumber}`,
      chipLabel: r.threadUnit,
      chipColor: "#01B0F0",
    }))

  return (
    <ProductDetailPage
      backHref="/instrumentation-fittings/tube-fittings/die-electric"
      backLabel="Dielectric Fittings & Gaskets"
      image={product.imageUrl}
      partNumber={product.partNumber}
      title={product.gasketType}
      description={`PANAM® ${product.gasketType} — ${product.threadSize} thread size. Available in SS316, Carbon Steel and Copper. For use with parallel and internal thread connections.`}
      chips={[
        { label: product.gasketType, color: "#01B0F0", variant: "outlined" },
        { label: product.threadUnit, color: "#01B0F0" },
      ]}
      specs={[
        { label: "Part Number (SS316)",        value: product.partNumber },
        ...(product.carbonSteelPN ? [{ label: "Part Number (Carbon Steel)", value: product.carbonSteelPN }] : []),
        { label: "Gasket Type",  value: product.gasketType },
        { label: "Thread Size",  value: product.threadSize },
        { label: "Thread Unit",  value: product.threadUnit },
        { label: "Material",     value: "SS316 / Carbon Steel / Copper" },
      ]}
      cartItem={{
        cartItemId: product.partNumber,
        id: String(product.id),
        name: `Gasket ${product.gasketType} — ${product.partNumber}`,
        image: product.imageUrl,
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          "Part Number (SS316)": product.partNumber,
          ...(product.carbonSteelPN ? { "Part Number (Carbon Steel)": product.carbonSteelPN } : {}),
          "Gasket Type": product.gasketType,
          "Thread Size": product.threadSize,
          "Thread Unit": product.threadUnit,
        },
      }}
      related={related}
    />
  )
}