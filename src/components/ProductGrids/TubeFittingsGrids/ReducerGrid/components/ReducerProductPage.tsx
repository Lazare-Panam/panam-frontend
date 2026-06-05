import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { getReducers, type ReducerDto } from "../../../../../api/tubefittingApi" 
import ProductDetailPage from "../../../../Common/ProductDetailPage"
import { FITTING_TYPE_LABELS, TUBE_OD_UNIT_LABELS } from "../hook/types"

export default function ReducerProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()
  const [allData, setAllData] = useState<ReducerDto[]>([])

  useEffect(() => {
    getReducers({}).then(setAllData)
  }, [])

  const product = allData.find(p => p.partNumber === partNumber)

  if (allData.length > 0 && !product) return (
    <Box sx={{ p: 8, textAlign: "center" }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate("/instrumentation-fittings/tube-fittings/reducer")}>
        Back to Reducers
      </Button>
    </Box>
  )

  if (!product) return null

  const unit1 = product.tubeODUnit === "Imperial" ? "inch" : "mm"
  const unit2 = product.tubeOD2Unit === "Imperial" ? "inch" : "mm"
  const isMixed = product.tubeODUnit !== product.tubeOD2Unit

  const related = allData
    .filter(p => p.fittingType === product.fittingType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.tubeOD} × ${r.tubeOD2} ${r.tubeODUnit === "Imperial" ? "in" : "mm"}`,
      image: r.imageUrl ?? "",
      href: `/instrumentation-fittings/tube-fittings/reducer/${r.partNumber}`,
      chipLabel: r.tubeODUnit !== r.tubeOD2Unit ? "Mixed" : TUBE_OD_UNIT_LABELS[r.tubeODUnit] ?? r.tubeODUnit,
      chipColor: r.tubeODUnit !== r.tubeOD2Unit ? "#E65100" : "#01B0F0",
    }))

  return (
    <ProductDetailPage
      backHref="/instrumentation-fittings/tube-fittings/reducer"
      backLabel="Reducers"
      image={product.imageUrl ?? ""}
      partNumber={product.partNumber}
      title={FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType}
      description={`PANAM® ${FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType} — ${product.tubeOD} ${unit1} × ${product.tubeOD2} ${unit2}. Stainless steel SS 316.${isMixed ? " Mixed Metric × Imperial configuration." : ""}`}
      chips={[
        { label: FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType, color: "#01B0F0", variant: "outlined" },
        { label: isMixed ? "Mixed Units" : TUBE_OD_UNIT_LABELS[product.tubeODUnit] ?? product.tubeODUnit, color: isMixed ? "#E65100" : "#01B0F0" },
      ]}
      specs={[
        { label: "Part Number",  value: product.partNumber },
        { label: "Fitting Type", value: FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType },
        { label: "Tube OD",      value: `${product.tubeOD} ${unit1}` },
        { label: "Tube OD 2",   value: `${product.tubeOD2} ${unit2}` },
        { label: "Unit System",  value: isMixed ? "Mixed (Metric × Imperial)" : TUBE_OD_UNIT_LABELS[product.tubeODUnit] ?? product.tubeODUnit },
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
          "Tube OD":      `${product.tubeOD} ${unit1}`,
          "Tube OD 2":    `${product.tubeOD2} ${unit2}`,
        },
      }}
      related={related}
    />
  )
}