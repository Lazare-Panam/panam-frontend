import React from "react"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import { ServiceConsiderations, type ServiceRow } from "../Common/CategoryIndexKit"

// Each consideration sits beside the industry it matters most to, so the two columns line up row by row
const rows: ServiceRow[] = [
  {
    icon: <ScienceOutlinedIcon />,
    title: "Sour service (NACE MR0175)",
    text: "NACE MR0175 governs material selection for equipment exposed to H2S-containing (sour) environments, requiring controlled hardness and resistance to sulfide stress cracking. If your application requires NACE MR0175 materials, tell us at enquiry and we will confirm what can be supplied.",
    industry: {
      title: "Oil & Gas",
      path: "/industries/oil-gas",
      desc: "Upstream, midstream and downstream process control where sour service material requirements and high-pressure ratings are common.",
    },
  },
  {
    icon: <VerifiedOutlinedIcon />,
    title: "Hydrogen service",
    text: "In hydrogen service, material embrittlement and micro-leakage are the key risks at high pressure. Share your media, pressure and temperature at enquiry and we will confirm suitability for your application.",
    industry: {
      title: "Hydrogen Infrastructure",
      path: "/industries/hydrogen",
      desc: "H2-rated valves and fittings for electrolyser, storage and refuelling projects requiring proven material compatibility at high pressure.",
    },
  },
]

const HighPressureCompliance: React.FC = () => <ServiceConsiderations title="Sour Service & Hydrogen" rows={rows} />

export default HighPressureCompliance
