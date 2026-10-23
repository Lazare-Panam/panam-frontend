import React from "react"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded"
import { ServiceConsiderations, type ServiceRow } from "../Common/CategoryIndexKit"

const rows: ServiceRow[] = [
  {
    icon: <ScienceOutlinedIcon />,
    title: "Sour service (NACE MR0175)",
    text: "NACE MR0175 governs material selection for equipment exposed to H2S-containing (sour) environments, requiring controlled hardness and resistance to sulfide stress cracking. If your application requires NACE MR0175 materials, tell us at enquiry and we will confirm which valves and materials can be supplied.",
    industry: {
      title: "Oil & Gas",
      path: "/industries/oil-gas",
      desc: "Upstream, midstream and downstream process control where sour service material requirements and high-pressure ratings are common.",
    },
  },
  {
    icon: <ThermostatRoundedIcon />,
    title: "High-temperature service",
    text: "PTFE packing is standard across the range. For hotter process lines, Graphoil packing is available for service up to 538°C — share your media, pressure and temperature at enquiry and we will confirm the right packing and seat for your application.",
    industry: {
      title: "Chemicals & Petrochemical",
      path: "/industries/chemicals-petrochemical",
      desc: "Process and analyser systems handling aggressive media and elevated temperatures, where packing, seat and body material drive valve life.",
    },
  },
]

const ValveCompliance: React.FC = () => <ServiceConsiderations title="Sour & High-Temperature Service" rows={rows} />

export default ValveCompliance
