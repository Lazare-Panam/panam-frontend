import React from "react"
import { FaqBlock, type FaqItem } from "../Common/CategoryIndexKit"

const faqs: FaqItem[] = [
  {
    question: "What's the maximum pressure rating available?",
    answer: "Our High Pressure range covers 10,000 to 60,000 psi. HP Cone & Thread connections reach the full 60,000 psi class across needle valves and cone & threaded nipples; MP Cone & Thread covers 20,000 psi; standard NPT connections cover 10,000 to 15,000 psi depending on the product family.",
  },
  {
    question: "Are these products hydrogen compatible?",
    answer: "Yes. The High Pressure range is manufactured in SS 316 and used in hydrogen applications. Tell us your service conditions at enquiry and we will confirm suitability and the documentation available for your project.",
  },
  {
    question: "What certifications are available?",
    answer: "Panam's quality management system is certified to ISO 9001:2015, and material certificates are available on request. For sour service or offshore applications, tell us your specification at enquiry and we will confirm what can be supplied.",
  },
  {
    question: "What connection types do you offer?",
    answer: "NPT, MP Cone & Thread (20,000 psi) and HP Cone & Thread (60,000 psi). Configurations include straight, angle, 3-way and 2-stem manifold across the needle valve range, and 2-way, 3-way 180° and 90° diverter across ball valves.",
  },
  {
    question: "Can I get a custom configuration or connection size?",
    answer: "Yes — our engineering team can match pressure series, connection type and length to your exact application. Submit your specification through our enquiry form and we'll respond with a matched configuration.",
  },
  {
    question: "What's the typical lead time for high pressure orders?",
    answer: "Our technical team responds to high pressure enquiries within 24 hours. Lead times vary by product, pressure series and configuration, and are confirmed at quotation.",
  },
]

const HighPressureFAQ: React.FC = () => <FaqBlock eyebrow="High Pressure FAQ" faqs={faqs} idPrefix="hp" />

export default HighPressureFAQ
