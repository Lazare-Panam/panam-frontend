import { useParams, useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { Box, Typography, Button, CircularProgress } from "@mui/material"
import { getJICFittings } from "../../../api/jicFittingApi"
import { JIC_FITTING_TYPE_LABELS, JIC_P1_TYPE_LABELS } from "../hooks/types"
import ProductDetailPage from "../../Common/ProductDetailPage"

const BRAND_BLUE = "#01B0F0"

const SECTION_CONFIG: Record<string, { backLabel: string; backHref: string }> = {
  connectors: { backLabel: "JIC Connectors", backHref: "/instrumentation-fittings/jic-fittings/connectors" },
  "unions-swivel": { backLabel: "JIC Unions & Swivel", backHref: "/instrumentation-fittings/jic-fittings/unions-swivel" },
  "adapters-reducers": { backLabel: "JIC Adapters & Reducers", backHref: "/instrumentation-fittings/jic-fittings/adapters-reducers" },
  elbows: { backLabel: "JIC Elbows", backHref: "/instrumentation-fittings/jic-fittings/elbows" },
  tees: { backLabel: "JIC Tees", backHref: "/instrumentation-fittings/jic-fittings/tees" },
  "plugs-caps-nuts": { backLabel: "JIC Plugs, Caps & Nuts", backHref: "/instrumentation-fittings/jic-fittings/plugs-caps-nuts" },
  all: { backLabel: "All JIC Fittings", backHref: "/instrumentation-fittings/jic-fittings/all" },
}

interface Props {
  section: string
}

export default function JICFittingProductPage({ section }: Props) {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()
  const config = SECTION_CONFIG[section] ?? SECTION_CONFIG["all"]

  // Always fetch ALL fittings — no type filter — so any part number is always found
  const { data: fittings = [], isLoading } = useQuery({
    queryKey: ["jic-fittings-all"],
    queryFn: () => getJICFittings({}),
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

  const fittingTypeLabel = JIC_FITTING_TYPE_LABELS[product.fittingType] ?? product.fittingType
  const p1TypeLabel = JIC_P1_TYPE_LABELS[product.p1Type] ?? product.p1Type
  const p2TypeLabel = product.p2Type ? (JIC_P1_TYPE_LABELS[product.p2Type] ?? product.p2Type) : null

  const description = [`Panam 37° JIC Fitting — ${fittingTypeLabel}`, `${product.p1Size} ${p1TypeLabel}`, p2TypeLabel ? `× ${product.p2Size} ${p2TypeLabel}` : null, product.material].filter(Boolean).join(", ")

  // Related: same fitting type, same p1Type, different part
  const related = fittings
    .filter(p => p.fittingType === product.fittingType && p.p1Type === product.p1Type && p.partNo !== product.partNo)
    .slice(0, 4)
    .map(r => ({
      partNumber: r.partNo,
      label: `${r.p1Size}${r.p2Size ? ` × ${r.p2Size}` : ""}`,
      image: r.imageUrl ?? "",
      href: `${config.backHref}/${r.partNo}`,
      chipLabel: JIC_FITTING_TYPE_LABELS[r.fittingType] ?? r.fittingType,
      chipColor: BRAND_BLUE,
    }))

  const specs = [{ label: "Part Number", value: product.partNo }, { label: "Fitting Type", value: fittingTypeLabel }, { label: "P1 Size", value: product.p1Size }, { label: "P1 Thread", value: p1TypeLabel }, ...(product.p2Size ? [{ label: "P2 Size", value: product.p2Size }] : []), ...(p2TypeLabel ? [{ label: "P2 Thread", value: p2TypeLabel }] : []), { label: "Material", value: product.material }]

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
        name: `Panam JIC ${fittingTypeLabel} — ${product.partNo}`,
        image: product.imageUrl ?? "",
        quantity: 1,
        partNumber: product.partNo,
        specs: Object.fromEntries(specs.map(s => [s.label, s.value])),
      }}
      related={related}
    />
  )
}
