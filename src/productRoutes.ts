import { HP_BALL_VALVE_DATA } from "./components/High_Pressure/HP_BV/hooks/hpBallValveData"
import { HP_NEEDLE_VALVE_DATA } from "./components/High_Pressure/HP_NV/hooks/hpNeedleValveData"
import { HP_DBB_DATA } from "./components/High_Pressure/HP_DBB/hooks/hpDBBData"
import { HP_MANIFOLD_DATA } from "./components/High_Pressure/HP_VM/hooks/hpManifoldData"
import { HP_NIPPLE_DATA } from "./components/High_Pressure/HP_TN/hooks/hpNippleData"
import { HP_ADAPTER_DATA } from "./components/High_Pressure/HP_Fittings/Adaptors/hooks/hpAdapterData"
import { HP_FITTING_DATA } from "./components/High_Pressure/HP_Fittings/Connectors/hooks/hpFittingsData"
import { HP_UNION_DATA } from "./components/High_Pressure/HP_Fittings/Union/hooks/hpUnionData"
import { HP_JUNCTION_DATA } from "./components/High_Pressure/HP_Fittings/JunctionFittigs/hooks/hpFittingsJunctionData"
import { HP_END_FITTING_DATA } from "./components/High_Pressure/HP_Fittings/EndConnections/hooks/hpEndFittingData"
import { HP_SEAL_DATA } from "./components/High_Pressure/Seals-Glands/hooks/hpSealData"
import { PIPE_NIPPLE_DATA } from "./components/High_Pressure/HP_PF/Hex_Nipples/hooks/pipeFittingsNippleData"
import { PIPE_COUPLING_DATA } from "./components/High_Pressure/HP_PF/Hex_Couplings/hooks/pipeFittingsCouplingData"
import { PIPE_ADAPTER_DATA } from "./components/High_Pressure/HP_PF/HP_Adapters/hooks/pipeFittingsAdapterData"
import { PIPE_ELBOW_DATA } from "./components/High_Pressure/HP_PF/HP_Elbows/hooks/pipeFittingsElbowData"
import { PIPE_TEE_CROSS_DATA } from "./components/High_Pressure/HP_PF/HP_Tees_Cross/hooks/pipeFittingsTeeCrossData"
import { PIPE_END_DATA } from "./components/High_Pressure/HP_PF/HP_End_Connection/hooks/pipeFittingsEndData"
import { PIF_FILTERS_DATA } from "./components/Filters/hooks/pifData"
import { PTF_FILTERS_DATA } from "./components/Filters/hooks/ptfData"
import { FILTER_ELEMENT_DATA } from "./components/Filters/hooks/filterElementData"

// A product category and the part numbers that live under it. This is the single source of truth
// for both the prerendered/sitemap routes (PRODUCT_ROUTES, below) and the on-page Product Index
// that links to every product so no SKU page is left orphaned (no internal links pointing to it).
export interface ProductGroup {
  label: string
  base: string
  slug: string
  partNumbers: string[]
}

const RAW_GROUPS: Omit<ProductGroup, "slug">[] = [
  { label: "High Pressure — Ball Valves", base: "/high-pressure/ball-valves", partNumbers: HP_BALL_VALVE_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure — Needle Valves", base: "/high-pressure/needle-valves", partNumbers: HP_NEEDLE_VALVE_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure — Double Block & Bleed", base: "/high-pressure/double-block-and-valves", partNumbers: HP_DBB_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure — 2-Valve Manifolds", base: "/high-pressure/2-valve-manifolds", partNumbers: HP_MANIFOLD_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure — Cones & Threaded Nipples", base: "/high-pressure/cones-threaded-nipples", partNumbers: HP_NIPPLE_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure Fittings — Adaptors", base: "/high-pressure/fittings/adaptors", partNumbers: HP_ADAPTER_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure Fittings — Connectors", base: "/high-pressure/fittings/connectors", partNumbers: HP_FITTING_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure Fittings — Unions", base: "/high-pressure/fittings/unions", partNumbers: HP_UNION_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure Fittings — Elbows, Tees & Cross", base: "/high-pressure/fittings/elbows-tees-cross", partNumbers: HP_JUNCTION_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure Fittings — End Connections", base: "/high-pressure/fittings/end-connections", partNumbers: HP_END_FITTING_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure Fittings — Seals & Glands", base: "/high-pressure/fittings/seals-glads", partNumbers: HP_SEAL_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure Pipe Fittings — Hex Nipples", base: "/high-pressure/pipe-fittings/hex-nipples", partNumbers: PIPE_NIPPLE_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure Pipe Fittings — Hex Couplings", base: "/high-pressure/pipe-fittings/hex-couplings", partNumbers: PIPE_COUPLING_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure Pipe Fittings — Adapters", base: "/high-pressure/pipe-fittings/adapters", partNumbers: PIPE_ADAPTER_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure Pipe Fittings — Elbows", base: "/high-pressure/pipe-fittings/elbows", partNumbers: PIPE_ELBOW_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure Pipe Fittings — Tees & Crosses", base: "/high-pressure/pipe-fittings/tees-crosses", partNumbers: PIPE_TEE_CROSS_DATA.map(p => String(p.partNumber)) },
  { label: "High Pressure Pipe Fittings — Plugs & Caps", base: "/high-pressure/pipe-fittings/plugs-caps", partNumbers: PIPE_END_DATA.map(p => String(p.partNumber)) },
  { label: "Filters — I-Type", base: "/filters/i-type", partNumbers: PIF_FILTERS_DATA.map(p => String(p.partNumber)) },
  { label: "Filters — T-Type", base: "/filters/t-type", partNumbers: PTF_FILTERS_DATA.map(p => String(p.partNumber)) },
  { label: "Filters — Elements", base: "/filters/elements", partNumbers: FILTER_ELEMENT_DATA.map(p => String(p.partNumber)) },
]

// slug is derived from the base path (e.g. "/high-pressure/ball-valves" -> "high-pressure-ball-valves")
export const PRODUCT_GROUPS: ProductGroup[] = RAW_GROUPS.map(group => ({
  ...group,
  slug: group.base.replace(/^\//, "").replace(/\//g, "-"),
}))

export const PRODUCT_ROUTES: string[] = PRODUCT_GROUPS.flatMap(group =>
  group.partNumbers.map(partNumber => `${group.base}/${partNumber}`)
)
