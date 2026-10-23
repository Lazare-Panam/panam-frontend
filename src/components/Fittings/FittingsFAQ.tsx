import React from "react"
import { FaqBlock, type FaqItem } from "../Common/CategoryIndexKit"

const faqs: FaqItem[] = [
  {
    question: "What fitting types does PANAM® offer?",
    answer: "Tube fittings (single and double ferrule), 37° JIC flare fittings, pipe fittings, weld fittings (socket and butt weld), swivel gauge adaptors, and tube clamps (DIN Groups 1–10).",
  },
  {
    question: "What's the maximum pressure rating?",
    answer: "Up to 15,000 psig (1,034 bar), achieved by the pipe fitting family. Other families range from standard duty up to 10,000 psig.",
  },
  {
    question: "What size range is covered?",
    answer: '1/16" to 2" OD in fractional sizes, 3mm to 50mm OD in metric. Tube clamps separately cover 4mm to 219mm OD.',
  },
  {
    question: "What testing and certification standards apply?",
    answer: "ASTM F1387 type testing, with material certificates available on request.",
  },
  {
    question: "What materials are available?",
    answer: "SS316, Duplex, Monel, Hastelloy, and Brass (tube fittings only).",
  },
  {
    question: "What makes the swivel gauge adaptors different?",
    answer: "360° adjustable gauge positioning with silver-plated anti-gall threads, compatible with NPT, BSPP, BSPT, metric and other global thread standards.",
  },
]

const FittingsFAQ: React.FC = () => <FaqBlock eyebrow="Fittings FAQ" faqs={faqs} idPrefix="fittings" />

export default FittingsFAQ
