import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"
import ProductDetailPage from "../../../Common/ProductDetailPage"
import { MANIFOLDS_3VM_DATA } from "../hooks/manifold3vmData"

const BRAND_BLUE = "#01B0F0"
const FALLBACK_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/3VM/3VM-1.jpg"

export default function ThreeVMProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const manifold = MANIFOLDS_3VM_DATA.find(m => m.partNumber === partNumber)

  if (!manifold)
    return (
      <Box sx={{ p: 8, textAlign: "center" }}>
        <Typography variant="h5" mb={2}>Product not found</Typography>
        <Button onClick={() => navigate("/manifolds/3VM")}>Back to 3-Valve Manifolds</Button>
      </Box>
    )

  const image = manifold.imageUrl ?? FALLBACK_IMAGE

  const related = MANIFOLDS_3VM_DATA
    .filter(m => m.mounting === manifold.mounting && m.partNumber !== manifold.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.connectionSize} — ${r.connectionType}`,
      image: r.imageUrl ?? FALLBACK_IMAGE,
      href: `/manifolds/3VM/${r.partNumber}`,
      chipLabel: r.mounting,
      chipColor: BRAND_BLUE,
    }))

  return (
    <ProductDetailPage
      backHref="/manifolds/3VM"
      backLabel="3-Valve Manifolds"
      image={image}
      partNumber={manifold.partNumber}
      title={`3-Valve Manifold — ${manifold.connectionSize}`}
      description={manifold.description}
      chips={[
        { label: "3-Valve Manifold", color: BRAND_BLUE },
        { label: manifold.mounting, color: "#0277BD", variant: "outlined" as const },
        ...(manifold.maxPressure === "10000 psi"
          ? [{ label: "10,000 psi", color: "#B71C1C", variant: "outlined" as const }]
          : []),
        ...manifold.specialService.map(s => ({
          label: s, color: "#2E7D32", variant: "outlined" as const,
        })),
      ]}
      specs={[
        { label: "Part Number",     value: manifold.partNumber },
        { label: "Material",        value: "Stainless Steel 316" },
        { label: "Connection Size", value: manifold.connectionSize },
        { label: "Connection Type", value: manifold.connectionType },
        { label: "Mounting",        value: manifold.mounting },
        { label: "Drain Hole",      value: manifold.drainHoleSize },
        { label: "Max Pressure",    value: manifold.maxPressure },
        ...(manifold.specialService.length
          ? [{ label: "Special Service", value: manifold.specialService.join(", ") }]
          : []),
      ]}
      cartItem={{
        cartItemId: manifold.partNumber,
        id:         manifold.partNumber,
        name:       `3-Valve Manifold — ${manifold.partNumber}`,
        image,
        quantity:   1,
        partNumber: manifold.partNumber,
        specs: {
          "Material":        "Stainless Steel 316",
          "Connection Size": manifold.connectionSize,
          "Connection Type": manifold.connectionType,
          "Mounting":        manifold.mounting,
          "Drain Hole":      manifold.drainHoleSize,
          "Max Pressure":    manifold.maxPressure,
          ...(manifold.specialService.length
            ? { "Special Service": manifold.specialService.join(", ") }
            : {}),
        },
      }}
      related={related}
    />
  )
}