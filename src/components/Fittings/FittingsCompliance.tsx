import React from "react"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded"
import { ServiceConsiderations, type ServiceRow } from "../Common/CategoryIndexKit"

const rows: ServiceRow[] = [
  {
    icon: <VerifiedOutlinedIcon />,
    title: "Hydrogen service",
    text: "37° JIC, pipe and weld fittings are engineered for hydrogen systems, including hydrogen storage and fuel cell technology. Material embrittlement and micro-leakage are the key risks at high pressure — share your media, pressure and temperature at enquiry and we will confirm suitability for your application.",
    industry: {
      title: "Hydrogen Infrastructure",
      path: "/industries/hydrogen",
      desc: "Fittings for hydrogen storage and fuel cell projects, where material compatibility and leak-tightness at high pressure are critical.",
    },
  },
  {
    icon: <ScienceOutlinedIcon />,
    title: "Chemical & industrial gas service",
    text: "JIC flare and weld fittings are used in chemical processing and industrial gas networks. Duplex, Monel and Hastelloy are available alongside SS316 for aggressive media — tell us the media at enquiry and we will recommend a material.",
    industry: {
      title: "Chemicals & Petrochemical",
      path: "/industries/chemicals-petrochemical",
      desc: "Process and analyser systems handling aggressive media and elevated temperatures, where fitting and tube material drive service life.",
    },
  },
  {
    icon: <FlightTakeoffRoundedIcon />,
    title: "Aerospace & cryogenic service",
    text: "Pipe fittings are engineered for extreme operating conditions, including aerospace and cryogenic applications. Share your operating temperature range and pressure at enquiry and we will confirm the right fitting and material.",
    industry: {
      title: "Aerospace & Defense",
      path: "/industries/aerospace-defense",
      desc: "Instrumentation fittings for aerospace and defence systems working at extreme pressures and temperatures.",
    },
  },
]

const FittingsCompliance: React.FC = () => <ServiceConsiderations title="Hydrogen, Chemical & Cryogenic Service" rows={rows} />

export default FittingsCompliance
