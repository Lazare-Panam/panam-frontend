import { useParams, useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { Box, Typography, Button, CircularProgress } from "@mui/material"
import { FITTING_TYPE_LABELS, THREAD_TYPE_LABELS } from "../hooks/types"
import ProductDetailPage from "../../components/Common/ProductDetailPage"
import { getPipeFittings } from "../../api/pipeFittingApi"

const BRAND_BLUE = "#01B0F0"

const SECTION_CONFIG: Record<string, { backLabel: string; backHref: string }> = {
  "nipples-couplings": {
    backLabel: "Pipe Nipples & Couplings",
    backHref: "/instrumentation-fittings/pipe-fittings/nipples-couplings",
  },
  "unions-connectors": {
    backLabel: "Pipe Unions & Connectors",
    backHref: "/instrumentation-fittings/pipe-fittings/unions-connectors",
  },
  "tees-cross": {
    backLabel: "Pipe Tees & Crosses",
    backHref: "/instrumentation-fittings/pipe-fittings/tees-cross",
  },
  elbows: {
    backLabel: "Pipe Elbows",
    backHref: "/instrumentation-fittings/pipe-fittings/elbows",
  },
  "adapters-plugs": {
    backLabel: "Pipe Adapters & Plugs",
    backHref: "/instrumentation-fittings/pipe-fittings/adapters-plugs",
  },
  all: {
    backLabel: "All Pipe Fittings",
    backHref: "/instrumentation-fittings/pipe-fittings",
  },
}

interface Props {
  section: string
}

export default function PipeFittingProductPage({ section }: Props) {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()
  const config = SECTION_CONFIG[section] ?? SECTION_CONFIG["all"]

  // Always fetch ALL — no filter — so any partNo is always found
  const { data: fittings = [], isLoading } = useQuery({
    queryKey: ["pipe-fittings-all"],
    queryFn: () => getPipeFittings({}),
    staleTime: 1000 * 60 * 5,
  })

  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
        <CircularProgress sx={{ color: BRAND_BLUE }} />
      </Box>
    )

  const product = fittings.find(p => p.partNo === partNumber)

  if (!product)
    return (
      <Box sx={{ p: 8, textAlign: "center" }}>
        <Typography variant="h5" mb={2}>
          Product not found
        </Typography>
        <Button onClick={() => navigate(config.backHref)}>Back to {config.backLabel}</Button>
      </Box>
    )

  const fittingTypeLabel = FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType
  const p1TypeLabel = THREAD_TYPE_LABELS[product.p1Type] ?? product.p1Type
  const p2TypeLabel = product.p2Type ? (THREAD_TYPE_LABELS[product.p2Type] ?? product.p2Type) : null

  const description = [
    `Panam ${fittingTypeLabel}`,
    `${product.p1Size} ${p1TypeLabel}`,
    p2TypeLabel ? `× ${product.p2Size} ${p2TypeLabel}` : null,
    product.lengthVariant ? `Length: ${product.lengthVariant}` : null,
    product.material,
  ]
    .filter(Boolean)
    .join(", ")

  // Related: same fitting type, different part
  const related = fittings
    .filter(p => p.fittingType === product.fittingType && p.partNo !== product.partNo)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNo,
      label: `${r.p1Size}${r.p2Size ? ` × ${r.p2Size}` : ""}`,
      image: r.imageUrl ?? "",
      href: `${config.backHref}/${r.partNo}`,
      chipLabel: FITTING_TYPE_LABELS[r.fittingType] ?? r.fittingType,
      chipColor: BRAND_BLUE,
    }))

  const specs = [
    { label: "Part Number", value: product.partNo },
    { label: "Fitting Type", value: fittingTypeLabel },
    { label: "Material", value: product.material },
    { label: "P1 Size", value: product.p1Size },
    { label: "P1 Thread", value: p1TypeLabel },
    ...(product.p2Size ? [{ label: "P2 Size", value: product.p2Size }] : []),
    ...(p2TypeLabel ? [{ label: "P2 Thread", value: p2TypeLabel }] : []),
    ...(product.lengthVariant ? [{ label: "Length Variant", value: product.lengthVariant }] : []),
  ]

  return (
    <ProductDetailPage
      backHref={config.backHref}
      backLabel={config.backLabel}
      image={product.imageUrl ?? ""}
      partNumber={product.partNo}
      title={`${fittingTypeLabel} — ${product.p1Size} ${p1TypeLabel}${p2TypeLabel ? ` × ${product.p2Size} ${p2TypeLabel}` : ""}`}
      description={description}
      chips={[
        { label: fittingTypeLabel, color: BRAND_BLUE },
        { label: product.material, color: BRAND_BLUE, variant: "outlined" },
      ]}
      specs={specs}
      cartItem={{
        cartItemId: String(product.id),
        id: String(product.id),
        name: `Panam ${fittingTypeLabel} — ${product.partNo}`,
        image: product.imageUrl ?? "",
        quantity: 1,
        partNumber: product.partNo,
        specs: Object.fromEntries(specs.map(s => [s.label, s.value])),
      }}
      related={related}
    />
  )
}