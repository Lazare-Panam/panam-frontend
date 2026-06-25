import { useParams, useNavigate, useLocation } from "react-router-dom"
import { Box, Typography, Button, CircularProgress } from "@mui/material"
import { INLET_OUTLET_LABELS, MATERIAL_LABELS } from "../hooks/types"
import ProductDetailPage from "../../Common/ProductDetailPage"
import { usePCVs } from "../hooks/usePCV"
import { type PCVDto } from "../../../api/checkValveApi"

const BRAND_BLUE = "#01B0F0"
const FALLBACK_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/products/check-valves/c1.png"

export default function PCVProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()
  const location = useLocation()

  const stateModel = location.state?.model as PCVDto | undefined

  const { data: all = [], isLoading } = usePCVs({})

  if (!stateModel && isLoading) return (
    <Box sx={{ p: 8, display: "flex", justifyContent: "center" }}>
      <CircularProgress sx={{ color: BRAND_BLUE }} />
    </Box>
  )

  const valve = stateModel ?? all.find(v => v.partNumber === partNumber)

  if (!valve) return (
    <Box sx={{ p: 8, textAlign: "center" }}>
      <Typography variant="h5" mb={2}>Product not found</Typography>
      <Button onClick={() => navigate("/valves/check-valves")}>
        Back to Check Valves
      </Button>
    </Box>
  )

  const image = valve.imageUrl ?? FALLBACK_IMAGE
  const materialLabel = MATERIAL_LABELS[valve.material] ?? valve.material
  const inletLabel = INLET_OUTLET_LABELS[valve.inlet] ?? valve.inlet
  const outletLabel = valve.outlet ? (INLET_OUTLET_LABELS[valve.outlet] ?? valve.outlet) : null

  const related = all
    .filter(v => v.inlet === valve.inlet && v.partNumber !== valve.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.inletTubeOD} — ${MATERIAL_LABELS[r.material] ?? r.material}`,
      image: r.imageUrl ?? FALLBACK_IMAGE,
      href: `/valves/check-valves/${r.partNumber}`,
      chipLabel: INLET_OUTLET_LABELS[r.inlet] ?? r.inlet,
      chipColor: BRAND_BLUE,
    }))

  return (
    <ProductDetailPage
      backHref="/valves/check-valves"
      backLabel="PCV Check Valves"
      image={image}
      partNumber={valve.partNumber}
      title={`PCV Check Valve — ${valve.inletTubeOD}`}
      description={`Panam PCV Series inline check valve ${valve.partNumber}. ${materialLabel}, ${inletLabel} inlet${outletLabel ? `, ${outletLabel} outlet` : ""}, ${valve.inletTubeOD}. Rated to 6,000 psig. Hydrogen service rated, NACE MR0175 available.`}
      chips={[
        { label: "PCV Series", color: BRAND_BLUE },
        { label: materialLabel, color: "#0277BD", variant: "outlined" as const },
      ]}
      specs={[
        { label: "Part Number",       value: valve.partNumber },
        { label: "Material",          value: materialLabel },
        { label: "Inlet Connection",  value: inletLabel },
        { label: "Inlet Size",        value: valve.inletTubeOD },
        ...(outletLabel        ? [{ label: "Outlet Connection", value: outletLabel }]        : []),
        ...(valve.outletTubeOD ? [{ label: "Outlet Size",       value: valve.outletTubeOD }] : []),
        { label: "Max Pressure",      value: "6,000 psig" },
      ]}
      cartItem={{
        cartItemId: valve.partNumber,
        id: String(valve.id),
        name: `PCV Check Valve — ${valve.partNumber}`,
        image,
        quantity: 1,
        partNumber: valve.partNumber,
        specs: {
          "Part Number":       valve.partNumber,
          "Material":          materialLabel,
          "Inlet Connection":  inletLabel,
          "Inlet Size":        valve.inletTubeOD,
          "Outlet Connection": outletLabel ?? "—",
          "Outlet Size":       valve.outletTubeOD ?? "—",
        },
      }}
      related={related}
    />
  )
}