import { Link } from "@mui/material"
import LegalPage, { type LegalSection } from "./LegalPage"
import { C } from "../Landing2/homeTokens"

// NOTE FOR REVIEW: Drafted terms of use for the website. These cover use of the site itself; they
// are NOT the terms and conditions of sale for orders/credit accounts, which your legal team should
// provide separately. Review before relying on this. [brackets] mark details to confirm.

const brand = { color: C.brandDark, fontWeight: 600 }

const sections: LegalSection[] = [
  {
    heading: "About these terms",
    paragraphs: [
      "These Terms of Use govern your access to and use of panamvalve.com (the “site”), operated by Panam Engineers Ltd trading as PANAM® (“PANAM”, “we”, “us”). By using the site you agree to these terms. If you do not agree, please do not use the site.",
      <>
        Orders, quotations and credit accounts are also subject to our separate{" "}
        <Link href="/conditions-of-sale" sx={brand}>Conditions of Sale</Link>, which take precedence over these
        Terms of Use in the event of any conflict in relation to a purchase.
      </>,
    ],
  },
  {
    heading: "Using the site",
    paragraphs: ["You agree to use the site only for lawful purposes. In particular, you agree not to:"],
    bullets: [
      "Use the site in any way that breaches applicable law or regulation.",
      "Attempt to gain unauthorised access to the site, its servers, or any connected systems.",
      "Introduce viruses, malware or other harmful material, or otherwise interfere with the site’s operation.",
      "Scrape, harvest or extract data from the site other than through normal browsing, without our written permission.",
      "Submit false information through our enquiry, account or credit-application forms.",
    ],
  },
  {
    heading: "Accounts",
    paragraphs: [
      "If you create an account, you are responsible for keeping your login details confidential and for all activity under your account. Tell us immediately if you believe your account has been accessed without your permission. We may suspend or close accounts that breach these terms.",
    ],
  },
  {
    heading: "Product information and availability",
    paragraphs: [
      "We work to keep product descriptions, specifications, drawings and pricing accurate and up to date, but the site is provided for general information and does not form a binding offer to sell. Specifications may change and technical details should be confirmed with our team before you rely on them. Nothing on the site is a substitute for professional engineering advice for your specific application.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "All content on the site — including text, images, logos, product data, CAD files and the PANAM® name and marks — is owned by or licensed to us and is protected by intellectual property laws. You may view and download content for your own legitimate business use in evaluating our products, but you may not reproduce, republish or exploit it commercially without our written permission.",
    ],
  },
  {
    heading: "Content you submit",
    paragraphs: [
      "When you submit material through the site (for example an enquiry, a review, or a file upload), you confirm you have the right to share it and that it does not infringe anyone else’s rights or break the law. You grant us a licence to use that material for the purpose of responding to you and operating the site. We may remove content that we consider unlawful or inappropriate.",
    ],
  },
  {
    heading: "Third-party links",
    paragraphs: [
      "The site may link to third-party websites and services, including social media and messaging platforms. We are not responsible for the content or practices of those third parties, and a link does not imply our endorsement.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "The site is provided “as is” and “as available”. To the fullest extent permitted by law, we exclude liability for any loss or damage arising from your use of, or inability to use, the site, or from reliance on its content. Nothing in these terms limits or excludes our liability for death or personal injury caused by negligence, for fraud, or for any other liability that cannot be limited or excluded under law.",
    ],
  },
  {
    heading: "Changes to the site and these terms",
    paragraphs: [
      "We may change, suspend or withdraw all or part of the site, and we may update these terms from time to time. The current version always applies to your use of the site, and the “Last updated” date above shows when it last changed.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction over any dispute relating to them.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      <>
        Questions about these terms? Email{" "}
        <Link href="mailto:sales@panamvalves.co.uk" sx={brand}>
          sales@panamvalves.co.uk
        </Link>
        .
      </>,
    ],
  },
]

const TermsOfUse = () => {
  return (
    <>
      <title>Terms of Use | PANAM®</title>
      <meta name="description" content="The terms that govern your use of the PANAM® website, panamvalve.com." />
      <link rel="canonical" href="https://www.panamvalve.com/terms-of-use" />
      <meta name="robots" content="index, follow" />
      <LegalPage
        title="Terms of Use"
        lastUpdated="25 November 2026"
        intro="These Terms of Use set out the rules for using the PANAM® website. Please read them carefully — by using the site you agree to be bound by them."
        sections={sections}
      />
    </>
  )
}

export default TermsOfUse
