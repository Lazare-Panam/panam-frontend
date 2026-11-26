import LegalPage, { type LegalSection } from "./LegalPage"

// NOTE FOR REVIEW: Generic UK business-to-business conditions of sale for an industrial supplier.
// This is a drafted starting point and MUST be reviewed and approved by legal before use — it is not
// a substitute for professional legal advice. Goods are sold WITHOUT warranty per instruction; note
// that excluding implied terms (e.g. satisfactory quality) in B2B is subject to the UCTA 1977
// reasonableness test, so the "Quality" clause in particular needs legal sign-off. Commercial terms
// set to 30-day payment and a 7-day inspection window — adjust if PANAM's actual policy differs.

const sections: LegalSection[] = [
  {
    heading: "Definitions and interpretation",
    paragraphs: [
      "In these Conditions: “PANAM”, “we”, “us” or “our” means Panam Engineers Ltd (company number 16134631), trading as PANAM®; “Customer”, “you” or “your” means the person or business that buys Goods from us; “Goods” means the products we supply; “Contract” means the contract between us and the Customer for the sale and purchase of the Goods, incorporating these Conditions; and “Conditions” means these terms and conditions of sale.",
    ],
  },
  {
    heading: "Basis of the contract",
    paragraphs: [
      "These Conditions apply to the Contract to the exclusion of any other terms that the Customer seeks to impose or incorporate, or which are implied by trade, custom, practice or course of dealing.",
      "A quotation for Goods is not an offer and is valid for the period stated or, if none is stated, for 30 days from its date. An order constitutes an offer by the Customer to purchase the Goods in accordance with these Conditions, and no order is accepted until we issue a written acknowledgement or (if earlier) dispatch the Goods.",
    ],
  },
  {
    heading: "Goods and specifications",
    paragraphs: [
      "The Goods are described in our quotation, acknowledgement or published specifications. Any samples, drawings, descriptive matter or advertising are issued only to give an approximate idea of the Goods and do not form part of the Contract.",
      "We may make changes to the Goods that are necessary to comply with applicable law or safety requirements, or that do not materially affect their quality or fitness for purpose. The Customer is responsible for ensuring the Goods ordered are suitable for its intended application.",
    ],
  },
  {
    heading: "Delivery",
    paragraphs: [
      "Delivery is completed on arrival of the Goods at the delivery location agreed in writing, or on collection by the Customer where agreed. Any dates quoted for delivery are approximate only, and the time of delivery is not of the essence.",
      "We are not liable for any delay in delivery caused by an event outside our reasonable control or by the Customer's failure to provide adequate delivery instructions or information. We may deliver the Goods in instalments.",
      "The Customer must inspect the Goods on delivery and notify us of any shortage, damage or non-conformity within 7 days of delivery, failing which the Goods are deemed accepted.",
    ],
  },
  {
    heading: "Risk and title",
    paragraphs: [
      "Risk in the Goods passes to the Customer on completion of delivery (or collection).",
      "Title to the Goods does not pass to the Customer until we have received payment in full (in cleared funds) for the Goods and any other goods we have supplied. Until title passes, the Customer must hold the Goods as our fiduciary bailee, store them so they are identifiable as our property, and not remove, alter or obscure any identifying marks. We may, at any time before title passes, require the Customer to deliver up the Goods and, if the Customer fails to do so, enter any premises to recover them.",
    ],
  },
  {
    heading: "Price and payment",
    paragraphs: [
      "The price of the Goods is the price set out in our quotation or, if no price is quoted, the price in our published price list at the date of our acknowledgement. Prices are exclusive of VAT and of the costs of carriage, packaging and insurance unless stated otherwise.",
      "Unless otherwise agreed in writing, invoices are payable within 30 days of the date of invoice. Time of payment is of the essence. We may charge interest on overdue sums under the Late Payment of Commercial Debts (Interest) Act 1998. The Customer must pay all amounts in full without set-off, counterclaim, deduction or withholding (except as required by law).",
      "Where a credit account is offered, it is subject to our approval and to satisfactory credit references, and we may withdraw or reduce credit, or require payment in advance, at any time.",
    ],
  },
  {
    heading: "Quality",
    paragraphs: [
      "The Goods are sold without warranty. To the fullest extent permitted by law, all warranties, conditions and other terms implied by statute or common law — including as to satisfactory quality, fitness for a particular purpose and correspondence with description — are excluded from the Contract.",
      "The Customer is responsible for satisfying itself that the Goods are suitable for its intended application, and for inspecting the Goods on delivery in accordance with the Delivery clause above. Nothing in this clause affects any liability that cannot be excluded or limited by law (see Limitation of liability).",
    ],
  },
  {
    heading: "Returns",
    paragraphs: [
      "Goods supplied correctly in accordance with the order may be returned only with our prior written agreement. Made-to-order, bespoke or special-order items are non-returnable unless defective. Returns agreed for the Customer's convenience may be subject to a restocking charge.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "Nothing in these Conditions limits or excludes our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot be limited or excluded by law.",
      "Subject to the above, we are not liable to the Customer, whether in contract, tort (including negligence), breach of statutory duty or otherwise, for any loss of profit, loss of business, depletion of goodwill, or any indirect or consequential loss arising under or in connection with the Contract.",
      "Subject to the above, our total liability to the Customer in respect of all losses arising under or in connection with the Contract shall not exceed the price paid for the Goods giving rise to the claim.",
    ],
  },
  {
    heading: "Documentation and drawings",
    paragraphs: [
      "Technical documentation, general-arrangement drawings and material certificates relating to the Goods are available on request, and may be subject to a reasonable charge where extensive preparation is required.",
      "Any drawings, designs, specifications or technical data we supply remain our property, are provided solely for the Customer's use in connection with the Goods, and must not be copied, disclosed to any third party, or used for any other purpose without our prior written consent.",
    ],
  },
  {
    heading: "Intellectual property and confidentiality",
    paragraphs: [
      "All intellectual property rights in the Goods, and in any drawings, designs, data or documentation we supply, remain our property or that of our licensors. The Customer must keep confidential any non-public information we disclose and use it only for the purposes of the Contract.",
    ],
  },
  {
    heading: "Compliance and export control",
    paragraphs: [
      "The Customer is responsible for complying with all laws applicable to its use and onward supply of the Goods, including export control and sanctions laws. The Customer must not export, re-export or supply the Goods in breach of any applicable export control or sanctions regime.",
    ],
  },
  {
    heading: "Force majeure",
    paragraphs: [
      "We are not in breach of the Contract, nor liable for any delay or failure to perform, arising from any event outside our reasonable control, including strikes, failure of suppliers or carriers, shortage of materials, and failures of utilities, transport or telecommunications.",
    ],
  },
  {
    heading: "General",
    paragraphs: [
      "The Customer may not assign or transfer its rights under the Contract without our written consent; we may assign or subcontract our rights or obligations. A waiver of any right is effective only if in writing. If any provision is found to be unenforceable, the remaining provisions continue in force. A person who is not a party to the Contract has no rights under the Contracts (Rights of Third Parties) Act 1999. These Conditions, together with our quotation and acknowledgement, form the entire agreement between the parties.",
    ],
  },
  {
    heading: "Governing law and jurisdiction",
    paragraphs: [
      "The Contract and any dispute or claim arising out of or in connection with it are governed by the laws of England and Wales, and the parties submit to the exclusive jurisdiction of the courts of England and Wales.",
    ],
  },
]

const ConditionsOfSale = () => {
  return (
    <>
      <title>Conditions of Sale | PANAM®</title>
      <meta name="description" content="PANAM® standard business-to-business conditions of sale for the supply of instrumentation valves, fittings and related products." />
      <link rel="canonical" href="https://www.panamvalve.com/conditions-of-sale" />
      <meta name="robots" content="index, follow" />
      <LegalPage
        title="Conditions of Sale"
        lastUpdated="26 November 2026"
        intro="These Conditions of Sale govern the supply of goods by PANAM® to its business customers. They apply to every quotation, order and contract for the sale of our products unless we agree otherwise in writing."
        sections={sections}
      />
    </>
  )
}

export default ConditionsOfSale
