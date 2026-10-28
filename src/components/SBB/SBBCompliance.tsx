import React from "react"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined"
import { ServiceConsiderations, type ServiceRow } from "../Common/CategoryIndexKit"

// Each consideration sits beside the industry it matters most to, so the two columns line up row by row
const rows: ServiceRow[] = [
  {
    icon: <ScienceOutlinedIcon />,
    title: "Sour service (NACE MR-0175)",
    text: "NACE MR-0175 governs material selection for equipment exposed to H2S-containing (sour) environments, requiring controlled hardness and resistance to sulfide stress cracking. A NACE MR-0175 option is available on PANAM® Single Block & Bleed valves — tell us at enquiry and we will confirm the configuration.",
    industry: {
      title: "Oil & Gas",
      path: "/industries/oil-gas",
      desc: "Upstream, midstream and downstream process control where sour service material requirements and high-pressure ratings are common.",
    },
  },
  {
    icon: <LocalFireDepartmentOutlinedIcon />,
    title: "Fire safe service",
    text: "A Fire Safe option is available on the ported SBB families (Flange-to-Pipe and Block & Bleed), alongside a choice of seat (PTFE, PEEK) and seal (PTFE, Grafoil) materials. Share your media, pressure class and service at enquiry and we will confirm the right build.",
    industry: {
      title: "Chemicals & Petrochemical",
      path: "/industries/chemicals-petrochemical",
      desc: "Process plant isolation and bleed duties where seat, seal and fire-safe requirements drive valve selection.",
    },
  },
]

const SBBCompliance: React.FC = () => <ServiceConsiderations title="Sour Service & Fire Safe" rows={rows} />

export default SBBCompliance
