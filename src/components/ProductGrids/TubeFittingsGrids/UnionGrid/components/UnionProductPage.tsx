import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { getUnions, type UnionDto } from "../../../../../api/tubefittingApi"
import ProductDetailPage from "../../../../Common/ProductDetailPage"
import { FITTING_TYPE_LABELS, TUBE_OD_UNIT_LABELS } from "../hooks/types"

export default function UnionProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()
  const [allData, setAllData] = useState<UnionDto[]>([])

  useEffect(() => {
    getUnions({}).then(setAllData)
  }, [])

  const product = allData.find(p => p.partNumber === partNumber)

  if (allData.length > 0 && !product) return (
    <Box sx={{ p: 8, textAlign: "center" }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate("/instrumentation-fittings/tube-fittings/union")}>
        Back to Unions
      </Button>
    </Box>
  )

  if (!product) return null

  const unit = product.tubeODUnit === "Imperial" ? "inch" : "mm"
  const odLabel = product.tubeOD2
    ? `${product.tubeOD} × ${product.tubeOD2}${product.tubeOD3 ? ` × ${product.tubeOD3}` : ""}`
    : product.tubeOD

  const related = allData
    .filter(p => p.fittingType === product.fittingType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.tubeOD}${r.tubeOD2 ? ` × ${r.tubeOD2}` : ""} ${unit}`,
      image: r.imageUrl ?? "",
      href: `/instrumentation-fittings/tube-fittings/union/${r.partNumber}`,
      chipLabel: TUBE_OD_UNIT_LABELS[r.tubeODUnit] ?? r.tubeODUnit,
      chipColor: "#01B0F0",
    }))

  return (
    <ProductDetailPage
      backHref="/instrumentation-fittings/tube-fittings/union"
      backLabel="Unions"
      image={product.imageUrl ?? ""}
      partNumber={product.partNumber}
      title={FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType}
      description={`PANAM® ${FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType} — ${odLabel} ${unit} tube OD. Stainless steel SS 316.`}
      chips={[
        { label: FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType, color: "#01B0F0", variant: "outlined" },
        { label: TUBE_OD_UNIT_LABELS[product.tubeODUnit] ?? product.tubeODUnit, color: "#01B0F0" },
      ]}
      specs={[
        { label: "Part Number",  value: product.partNumber },
        { label: "Fitting Type", value: FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType },
        { label: "Tube OD",      value: `${product.tubeOD} ${unit}` },
        ...(product.tubeOD2 ? [{ label: "Tube OD 2", value: `${product.tubeOD2} ${unit}` }] : []),
        ...(product.tubeOD3 ? [{ label: "Tube OD 3", value: `${product.tubeOD3} ${unit}` }] : []),
        { label: "Unit System",  value: TUBE_OD_UNIT_LABELS[product.tubeODUnit] ?? product.tubeODUnit },
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
          ...(product.tubeOD3 ? { "Tube OD 3": `${product.tubeOD3} ${unit}` } : {}),
        },
      }}
      related={related}
    />
  )
}