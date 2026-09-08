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

export const PRODUCT_ROUTES: string[] = [
  ...HP_BALL_VALVE_DATA.map(p => `/high-pressure/ball-valves/${p.partNumber}`),
  ...HP_NEEDLE_VALVE_DATA.map(p => `/high-pressure/needle-valves/${p.partNumber}`),
  ...HP_DBB_DATA.map(p => `/high-pressure/double-block-and-valves/${p.partNumber}`),
  ...HP_MANIFOLD_DATA.map(p => `/high-pressure/2-valve-manifolds/${p.partNumber}`),
  ...HP_NIPPLE_DATA.map(p => `/high-pressure/cones-threaded-nipples/${p.partNumber}`),
  ...HP_ADAPTER_DATA.map(p => `/high-pressure/fittings/adaptors/${p.partNumber}`),
  ...HP_FITTING_DATA.map(p => `/high-pressure/fittings/connectors/${p.partNumber}`),
  ...HP_UNION_DATA.map(p => `/high-pressure/fittings/unions/${p.partNumber}`),
  ...HP_JUNCTION_DATA.map(p => `/high-pressure/fittings/elbows-tees-cross/${p.partNumber}`),
  ...HP_END_FITTING_DATA.map(p => `/high-pressure/fittings/end-connections/${p.partNumber}`),
  ...HP_SEAL_DATA.map(p => `/high-pressure/fittings/seals-glads/${p.partNumber}`),
  ...PIPE_NIPPLE_DATA.map(p => `/high-pressure/pipe-fittings/hex-nipples/${p.partNumber}`),
  ...PIPE_COUPLING_DATA.map(p => `/high-pressure/pipe-fittings/hex-couplings/${p.partNumber}`),
  ...PIPE_ADAPTER_DATA.map(p => `/high-pressure/pipe-fittings/adapters/${p.partNumber}`),
  ...PIPE_ELBOW_DATA.map(p => `/high-pressure/pipe-fittings/elbows/${p.partNumber}`),
  ...PIPE_TEE_CROSS_DATA.map(p => `/high-pressure/pipe-fittings/tees-crosses/${p.partNumber}`),
  ...PIPE_END_DATA.map(p => `/high-pressure/pipe-fittings/plugs-caps/${p.partNumber}`),
  ...PIF_FILTERS_DATA.map(p => `/filters/i-type/${p.partNumber}`),
  ...PTF_FILTERS_DATA.map(p => `/filters/t-type/${p.partNumber}`),
  ...FILTER_ELEMENT_DATA.map(p => `/filters/elements/${p.partNumber}`),
]
