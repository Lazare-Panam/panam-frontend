import React from "react"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined"
import { ServiceConsiderations, type ServiceRow } from "../Common/CategoryIndexKit"

// Each consideration sits beside the industry it matters most to, so the two columns line up row by row
const rows: ServiceRow[] = [
  {
    icon: <ScienceOutlinedIcon />,
    title: "Sour service (NACE MR-0175)",
    text: "NACE MR-0175 governs material selection for equipment exposed to H2S-containing (sour) environments, requiring controlled hardness and resistance to sulfide stress cracking. A NACE MR-0175 option is available across all three DBB families — tell us at enquiry and we will confirm the configuration.",
    industry: {
      title: "Oil & Gas",
      path: "/industries/oil-gas",
      desc: "Upstream, midstream and downstream process control where sour service material requirements and high-pressure ratings are common.",
    },
  },
  {
    icon: <LocalFireDepartmentOutlinedIcon />,
    title: "Fire safe service",
    text: "A Fire Safe option is available on Flange-to-Pipe and Pipe-to-Pipe DBB valves, alongside a choice of seat (Carbon Filled PTFE, PCTFE, Delrin, PEEK) and seal (PTFE, Grafoil, PCTFE, FKM) materials. Share your media, pressure class and service at enquiry and we will confirm the right build.",
    industry: {
      title: "Chemicals & Petrochemical",
      path: "/industries/chemicals-petrochemical",
      desc: "Process plant isolation and bleed duties where seat, seal and fire-safe requirements drive DBB valve selection.",
    },
  },
]

const DBBCompliance: React.FC = () => <ServiceConsiderations title="Sour Service & Fire Safe" rows={rows} />

export default DBBCompliance
