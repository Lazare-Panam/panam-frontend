import { Link } from "@mui/material"
import LegalPage, { type LegalSection } from "./LegalPage"
import { C } from "../Landing2/homeTokens"

// NOTE FOR REVIEW: This is a drafted UK GDPR / Data Protection Act 2018 privacy policy tailored to
// the data this site actually collects (enquiry forms, account registration, credit applications,
// reviews, WhatsApp, chat widget). It should be reviewed by legal/your DPO before relying on it.
// Placeholder in [brackets] below still to fill: [ICO registration number]. (Company number set.)

const brand = { color: C.brandDark, fontWeight: 600 }

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      "PANAM® is a trading name of Panam Engineers Ltd (“PANAM”, “we”, “us”, “our”), a company registered in England and Wales under company number 16134631, with its registered office at St Edburgs Hall, Priory Road, Bicester, OX26 6BL, United Kingdom.",
      "We are the “data controller” responsible for your personal data when you use panamvalve.com and the services on it. We are registered with the UK Information Commissioner’s Office (ICO) under registration number [ICO registration number].",
    ],
  },
  {
    heading: "The information we collect",
    paragraphs: ["Depending on how you use the site, we may collect:"],
    bullets: [
      "Enquiry and quote details — your name, company, job title, email, phone number, country, the message you send us and any files (such as drawings or specifications) you attach.",
      "Account information — the details you provide when you register an account, including a password, which is stored in an encrypted (hashed) form.",
      "Credit application information — the business and financial details you submit when applying for a credit account.",
      "Reviews — the name and content you provide when you leave a review.",
      "Messaging — the contents of conversations you start via WhatsApp or the website chat.",
      "Technical data — IP address, browser type and device information, and pages visited, collected automatically through cookies and similar technologies (see the Cookies section).",
    ],
  },
  {
    heading: "How and why we use your information",
    paragraphs: ["We use your personal data on the following lawful bases under the UK GDPR:"],
    bullets: [
      "To respond to enquiries, prepare quotations and fulfil orders — on the basis of taking steps at your request and performing a contract with you.",
      "To create and manage your account and process credit applications — performance of a contract and our legitimate interest in running the business.",
      "To improve our products, website and customer service, and to keep the site secure — our legitimate interests.",
      "To send marketing communications where you have asked to receive them — your consent, which you can withdraw at any time.",
      "To comply with legal, accounting and regulatory obligations — compliance with a legal obligation.",
    ],
  },
  {
    heading: "Sharing your information",
    paragraphs: [
      "We do not sell your personal data. We share it only with trusted service providers who help us operate the site and business — for example our website hosting provider, email and messaging providers, payment and credit-referencing partners, and analytics providers — and only to the extent they need it to provide their service to us.",
      "We may also disclose information where required by law, or to establish, exercise or defend legal claims.",
    ],
  },
  {
    heading: "International transfers",
    paragraphs: [
      "Some of our service providers may process data outside the United Kingdom. Where they do, we take steps to ensure your data is protected to UK standards, for example through the UK International Data Transfer Agreement or an adequacy decision.",
    ],
  },
  {
    heading: "How long we keep your information",
    paragraphs: [
      "We keep personal data only for as long as necessary for the purposes set out above, including to meet legal, accounting or reporting requirements. Enquiry and order records are generally retained for the duration of our business relationship and for a reasonable period afterwards; account data is kept until you ask us to close your account.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: ["Under UK data protection law you have the right to:"],
    bullets: [
      "Access the personal data we hold about you.",
      "Ask us to correct inaccurate or incomplete data.",
      "Ask us to erase your data in certain circumstances.",
      "Object to, or ask us to restrict, how we use your data.",
      "Request your data in a portable format.",
      "Withdraw consent at any time where we rely on it.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "The site uses cookies and similar technologies to make it work, to remember your preferences, and to understand how it is used. You can control cookies through your browser settings; blocking some cookies may affect how the site functions.",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "We use appropriate technical and organisational measures to protect your personal data, including encryption in transit (HTTPS) and hashing of passwords. No method of transmission over the internet is completely secure, but we work to protect your data and have procedures to deal with any suspected breach.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. When we do, we will revise the “Last updated” date at the top of this page. Significant changes will be made clear on the site.",
    ],
  },
  {
    heading: "How to contact us or complain",
    paragraphs: [
      <>
        To exercise any of your rights, or if you have a question about how we handle your data, email{" "}
        <Link href="mailto:sales@panamvalves.co.uk" sx={brand}>
          sales@panamvalves.co.uk
        </Link>
        . If you are not satisfied with our response, you have the right to complain to the ICO at{" "}
        <Link href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" sx={brand}>
          ico.org.uk
        </Link>
        .
      </>,
    ],
  },
]

const PrivacyPolicy = () => {
  return (
    <>
      <title>Privacy Policy | PANAM®</title>
      <meta name="description" content="How PANAM® collects, uses and protects your personal data under UK data protection law." />
      <link rel="canonical" href="https://www.panamvalve.com/privacy-policy" />
      <meta name="robots" content="index, follow" />
      <LegalPage
        title="Privacy Policy"
        lastUpdated="25 November 2026"
        intro="This Privacy Policy explains how PANAM® collects, uses, shares and protects your personal data when you use our website and services, and the rights you have over your data under UK data protection law."
        sections={sections}
      />
    </>
  )
}

export default PrivacyPolicy
