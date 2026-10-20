import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Button} from "@mui/material"
import ProductDetailPage from "../../../Common/ProductDetailPage"

import { MATERIAL_LABELS } from "../hooks/types"
import { MANIFOLDS_DATA } from "../hooks/manifoldData"

const BRAND_BLUE = "#01B0F0"
const FALLBACK_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/valve-manifolds/2VM/2VM-1.jpg"

export default function TwoVMProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const manifold = MANIFOLDS_DATA.find(m => m.partNumber === partNumber)

  if (!manifold)
    return (
      <Box sx={{ p: 8, textAlign: "center" }}>
        <Typography variant="h5" mb={2}>
          Product not found
        </Typography>
        <Button onClick={() => navigate("/manifolds/2VM")}>Back to 2-Valve Manifolds</Button>
      </Box>
    )

  const image = manifold.imageUrl ?? FALLBACK_IMAGE
  const materialLabel = MATERIAL_LABELS[manifold.material] ?? manifold.material

  const related = MANIFOLDS_DATA.filter(m => m.mounting === manifold.mounting && m.partNumber !== manifold.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${MATERIAL_LABELS[r.material] ?? r.material} — ${r.connectionSize}`,
      image: r.imageUrl ?? FALLBACK_IMAGE,
      href: `/manifolds/2VM/${r.partNumber}`,
      chipLabel: r.mounting,
      chipColor: BRAND_BLUE,
    }))

  return (
    <ProductDetailPage
      backHref="/manifolds/2VM"
      backLabel="2-Valve Manifolds"
      image={image}
      partNumber={manifold.partNumber}
      title={`2-Valve Manifold — ${materialLabel}`}
      description={manifold.description}
      chips={[{ label: "2-Valve Manifold", color: BRAND_BLUE }, { label: manifold.mounting, color: "#0277BD", variant: "outlined" as const }, ...(manifold.maxPressure === "10000 psi" ? [{ label: "10,000 psi", color: "#B71C1C", variant: "outlined" as const }] : [])]}
      specs={[
        { label: "Part Number", value: manifold.partNumber },
        { label: "Material", value: materialLabel },
        { label: "Connection Size", value: manifold.connectionSize },
        { label: "Connection Type", value: manifold.connectionType },
        { label: "Mounting", value: manifold.mounting },
        { label: "Configuration", value: manifold.configuration },
        { label: "Max Pressure", value: manifold.maxPressure },
        ...(manifold.specialService.length ? [{ label: "Special Service", value: manifold.specialService.join(", ") }] : []),
      ]}
      cartItem={{
        cartItemId: manifold.partNumber,
        id: manifold.partNumber,
        name: `2-Valve Manifold — ${manifold.partNumber}`,
        image,
        quantity: 1,
        partNumber: manifold.partNumber,
        specs: {
          Material: materialLabel,
          "Connection Size": manifold.connectionSize,
          "Connection Type": manifold.connectionType,
          Mounting: manifold.mounting,
          Configuration: manifold.configuration,
          "Max Pressure": manifold.maxPressure,
          ...(manifold.specialService.length ? { "Special Service": manifold.specialService.join(", ") } : {}),
        },
      }}
      related={related}
    />
  )
}
