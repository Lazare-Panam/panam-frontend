import { useParams, useNavigate, useLocation } from "react-router-dom"
import { Box, Typography, Button, CircularProgress } from "@mui/material"
import ProductDetailPage from "../../Common/ProductDetailPage"
import { type WeldFittingDTO } from "../../../api/weldFittingApi"
import { useWeldFittings } from "../hooks/useWeldFittings"
import { EMPTY_WELD_FITTING_FILTERS, WELD_FITTING_TYPE_LABELS, WELD_P1_TYPE_LABELS, WELD_P2_TYPE_LABELS } from "../hooks/weldFittingTypes"

const BRAND_BLUE = "#01B0F0"
const FALLBACK_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/connector-weld.jpg"

export default function WeldFittingProductPage({
  backHref = "/instrumentation-fittings/weld-fittings/all",
  backLabel = "Weld Fittings",
}: {
  backHref?: string
  backLabel?: string
} = {}) {
  const { partNo } = useParams<{ partNo: string }>()
  const navigate = useNavigate()
  const location = useLocation()

  const stateModel = location.state?.model as WeldFittingDTO | undefined

  const { data: all = [], isLoading } = useWeldFittings(EMPTY_WELD_FITTING_FILTERS)

  if (!stateModel && isLoading) return (
    <Box sx={{ p: 8, display: "flex", justifyContent: "center" }}>
      <CircularProgress sx={{ color: BRAND_BLUE }} />
    </Box>
  )

  const fitting = stateModel ?? all.find(f => f.partNo === partNo)

  if (!fitting) return (
    <Box sx={{ p: 8, textAlign: "center" }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate(backHref)}>
        Back to {backLabel}
      </Button>
    </Box>
  )

  const image = fitting.imageUrl ?? FALLBACK_IMAGE
  const typeLabel = WELD_FITTING_TYPE_LABELS[fitting.fittingType] ?? fitting.fittingType
  const weldLabel = WELD_P1_TYPE_LABELS[fitting.p1Type] ?? fitting.p1Type
  const p2Label = fitting.p2Type ? (WELD_P2_TYPE_LABELS[fitting.p2Type] ?? fitting.p2Type) : null
  const tubeOD = `${fitting.p1Size}${fitting.p1Unit === "mm" ? " mm" : '"'}`
  const pipeSize = fitting.p2Size ? `${fitting.p2Size}${fitting.p2Unit === "mm" ? " mm" : '"'}` : null

  const related = all
    .filter(f => f.fittingType === fitting.fittingType && f.partNo !== fitting.partNo)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNo,
      label: `${r.p1Size}${r.p1Unit === "mm" ? " mm" : '"'} — ${WELD_P1_TYPE_LABELS[r.p1Type] ?? r.p1Type}`,
      image: r.imageUrl ?? FALLBACK_IMAGE,
      href: `${backHref}/${r.partNo}`,
      chipLabel: WELD_FITTING_TYPE_LABELS[r.fittingType] ?? r.fittingType,
      chipColor: BRAND_BLUE,
    }))

  return (
    <ProductDetailPage
      backHref={backHref}
      backLabel={backLabel}
      image={image}
      partNumber={fitting.partNo}
      title={`${typeLabel} — ${tubeOD}`}
      description={`Panam ${typeLabel} ${fitting.partNo}. ${fitting.material}, ${weldLabel}, ${tubeOD}${p2Label ? `, ${p2Label}` : ""}${pipeSize ? ` × ${pipeSize}` : ""}. Rated to 10,000 psig.`}
      chips={[
        { label: typeLabel, color: BRAND_BLUE },
        { label: weldLabel, color: "#0277BD", variant: "outlined" as const },
      ]}
      specs={[
        { label: "Part Number",  value: fitting.partNo },
        { label: "Fitting Type", value: typeLabel },
        { label: "Material",     value: fitting.material },
        { label: "Tube OD",      value: tubeOD },
        { label: "Weld Type",    value: weldLabel },
        ...(pipeSize ? [{ label: "Pipe Size",   value: pipeSize }] : []),
        ...(p2Label  ? [{ label: "Pipe Thread", value: p2Label }]  : []),
        { label: "Max Pressure", value: "10,000 psig" },
      ]}
      cartItem={{
        cartItemId: fitting.partNo,
        id: fitting.partNo,
        name: `${typeLabel} — ${fitting.partNo}`,
        image,
        quantity: 1,
        partNumber: fitting.partNo,
        specs: {
          "Part Number":  fitting.partNo,
          "Fitting Type": typeLabel,
          "Material":     fitting.material,
          "Tube OD":      tubeOD,
          "Weld Type":    weldLabel,
          ...(pipeSize ? { "Pipe Size":   pipeSize } : {}),
          ...(p2Label  ? { "Pipe Thread": p2Label }  : {}),
        },
      }}
      related={related}
    />
  )
}