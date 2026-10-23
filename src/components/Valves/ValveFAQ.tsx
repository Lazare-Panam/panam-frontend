import React from "react"
import { FaqBlock, type FaqItem } from "../Common/CategoryIndexKit"

const faqs: FaqItem[] = [
  {
    question: "What is the maximum pressure rating across PANAM® valves?",
    answer: "Up to 20,000 psig (1,379 bar), achieved by the needle valve family. Other families range from 4,000 psig (purge, toggle) up to 15,000 psig (relief) and 10,000 psig (ball, gauge root).",
  },
  {
    question: "What materials are available?",
    answer: "SS316, Duplex, Monel and Hastelloy across the seven valve families, depending on series. Material certificates are available on request.",
  },
  {
    question: "Can you supply valves for sour service (NACE MR0175)?",
    answer: "Tell us your sour service requirement at enquiry and we will confirm which valves and materials can be supplied.",
  },
  {
    question: "What end connections do PANAM® valves use?",
    answer: "NPT, BSPP, BSPT, ISO tapered threads, and PANAM®'s own tube-fitting connection.",
  },
  {
    question: "What seat materials are offered?",
    answer: "PTFE, Delrin, PEEK and KEL-F, with PTFE standard packing and Graphoil available for high-temperature service to 538°C.",
  },
  {
    question: "How quickly can I get a quote?",
    answer: "Our technical team responds to instrumentation enquiries within 24 hours — send your pressure rating, material and end-connection requirements by email or through the enquiry form.",
  },
]

const ValveFAQ: React.FC = () => <FaqBlock eyebrow="Valves FAQ" faqs={faqs} idPrefix="valve" />

export default ValveFAQ
