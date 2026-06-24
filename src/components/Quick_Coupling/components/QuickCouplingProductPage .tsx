import { useParams, useNavigate } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"
import { QUICK_COUPLING_DATA } from "../hooks/quickCouplingData"
import ProductDetailPage from "../../Common/ProductDetailPage"

export default function QuickCouplingProductPage() {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const product = QUICK_COUPLING_DATA.find(p => p.partNumber === partNumber)

  if (!product)
    return (
      <Box sx={{ p: 8, textAlign: "center" }}>
        <Typography variant="h5" mb={2}>
          Product not found
        </Typography>
        <Button onClick={() => navigate("/quick-couplings")}>Back to Quick Couplings</Button>
      </Box>
    )

  const related = QUICK_COUPLING_DATA.filter(p => p.series === product.series && p.connectionType === product.connectionType && p.partNumber !== product.partNumber)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNumber,
      label: `${r.type} — ${r.connectionType}`,
      image: r.imageUrl ?? "",
      href: `/quick-couplings/${r.partNumber}`,
      chipLabel: r.type,
      chipColor: "#7B61FF",
    }))

  return (
    <ProductDetailPage
      backHref="/quick-couplings"
      backLabel="Quick Couplings"
      image={product.imageUrl ?? ""}
      partNumber={product.partNumber}
      title={`${product.series} — ${product.connectionType} ${product.type}`}
      description={product.description}
      chips={[
        { label: product.series, color: "#01B0F0" },
        { label: product.type, color: "#7B61FF", variant: "outlined" },
        { label: product.bodyMaterial, color: "#01B0F0", variant: "outlined" },
      ]}
      specs={[
        { label: "Part Number", value: product.partNumber },
        { label: "Series", value: product.series },
        { label: "Body Material", value: product.bodyMaterial },
        { label: "Connection", value: product.connectionType },
        { label: "Type", value: product.type },
      ]}
      cartItem={{
        cartItemId: product.id,
        id: product.id,
        name: `Quick Coupling — ${product.partNumber}`,
        image: product.imageUrl ?? "",
        quantity: 1,
        partNumber: product.partNumber,
        specs: {
          "Part Number": product.partNumber,
          Series: product.series,
          "Body Material": product.bodyMaterial,
          "Connection Type": product.connectionType,
          Type: product.type,
        },
      }}
      related={related}
    />
  )
}
