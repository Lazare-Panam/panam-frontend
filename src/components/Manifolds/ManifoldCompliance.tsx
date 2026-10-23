import React from "react"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded"
import { ServiceConsiderations, type ServiceRow } from "../Common/CategoryIndexKit"

const rows: ServiceRow[] = [
  {
    icon: <ScienceOutlinedIcon />,
    title: "Sour gas service (NACE MR-01-75)",
    text: "NACE MR-01-75 governs material selection for equipment exposed to H2S-containing (sour) environments. Every manifold family — 2-Valve, 3-Valve and 5-Valve — offers a NACE MR-01-75 sour gas option; specify it at enquiry with your valve count, connection size and pressure rating.",
    industry: {
      title: "Oil & Gas",
      path: "/industries/oil-gas",
      desc: "Upstream, midstream and downstream process measurement where sour service material requirements and high-pressure ratings are common.",
    },
  },
  {
    icon: <ThermostatRoundedIcon />,
    title: "High and low temperature service",
    text: "Temperature service options are available on the 3-valve and 5-valve manifolds, and the Air Header is rated up to 648 °C (1200 °F). Share your media, pressure and temperature at enquiry and we will confirm the right configuration for your application.",
    industry: {
      title: "Chemicals & Petrochemical",
      path: "/industries/chemicals-petrochemical",
      desc: "Process and analyser systems handling aggressive media and elevated temperatures, where material and configuration drive manifold life.",
    },
  },
]

const ManifoldCompliance: React.FC = () => <ServiceConsiderations title="Sour Gas & Temperature Service" rows={rows} />

export default ManifoldCompliance
