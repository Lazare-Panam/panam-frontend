import React, { useState } from "react"
import { Link as RouterLink, Navigate, useParams } from "react-router-dom"
import { Box, ButtonBase, Container, Dialog, Grid, IconButton, Stack, Typography } from "@mui/material"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import ZoomInRoundedIcon from "@mui/icons-material/ZoomInRounded"
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined"
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined"
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined"
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import { certsByTab } from "./Cert"
import { CertShowcase } from "./CertShowcase"
import { CertificatesIntro, CertificationsAtGlance, CertificationSections, SectorRequirements, RequestDocumentation, CertificatesFAQ, ChildIntro } from "./CertificatesContent"
import { CategoryPage } from "../../Common/CategoryIndexKit"
import { Eyebrow, SectionHeader } from "../../Landing2/homeStyles"
import { C, FONT, GRADIENT, RADIUS, SHADOW, cardHoverSx, cardSx } from "../../Landing2/homeTokens"

const tabs = [
  { key: "qms", label: "QMS Certifications" },
  { key: "type-reports", label: "Type Test Reports" },
]

type CertDoc = (typeof certsByTab)[string][number]

const RELATED = [
  { label: "Products", href: "/products", icon: <Inventory2OutlinedIcon /> },
  { label: "Product Catalogs", href: "/catalogPDFs", icon: <MenuBookOutlinedIcon /> },
  { label: "Resources", href: "/resources", icon: <FolderOpenOutlinedIcon /> },
  { label: "Industries", href: "/industries", icon: <FactoryOutlinedIcon /> },
  { label: "About Us", href: "/about", icon: <InfoOutlinedIcon /> },
  { label: "Blog", href: "/blog", icon: <ArticleOutlinedIcon /> },
]

const pillSx = (active: boolean) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 0.75,
  px: 2,
  py: 0.9,
  borderRadius: RADIUS.pill,
  fontSize: "0.9rem",
  fontWeight: 600,
  textDecoration: "none",
  whiteSpace: "nowrap",
  border: `1px solid ${active ? C.brand : C.border}`,
  bgcolor: active ? C.brand : C.white,
  color: active ? C.white : C.inkSoft,
  transition: "all 0.2s ease",
  "&:hover": { borderColor: C.brand, color: active ? C.white : C.brandDark },
})

const countSx = (active: boolean) => ({ fontSize: "0.75rem", fontWeight: 700, px: 0.75, borderRadius: RADIUS.pill, bgcolor: active ? "rgba(255,255,255,0.22)" : C.surface, color: active ? C.white : C.muted })

// Tab-page card, in the same style as the homepage "Quality You Can Verify" strip
const CertCard: React.FC<{ cert: CertDoc; onOpen: () => void }> = ({ cert, onOpen }) => {
  return (
    <ButtonBase onClick={onOpen} aria-label={`View ${cert.title} certificate`} sx={{ ...cardSx, ...cardHoverSx, display: "flex", flexDirection: "column", alignItems: "stretch", textAlign: "left", overflow: "hidden", height: "100%", "&:hover .cert-img": { transform: "scale(1.08)" }, "&:hover .cert-zoom": { opacity: 1 } }}>
      <Box sx={{ position: "relative", height: { xs: 280, md: 320 }, m: 1.25, borderRadius: "14px", bgcolor: C.white, border: `1px solid ${C.border}`, overflow: "hidden" }}>
        <Box component="img" className="cert-img" src={cert.image} alt={`${cert.title} certificate`} loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1)", transition: "transform 0.45s ease", display: "block" }} />
        <Stack direction="row" alignItems="center" spacing={0.75} className="cert-zoom" sx={{ position: "absolute", right: 12, bottom: 12, px: 1.5, py: 0.6, borderRadius: RADIUS.pill, bgcolor: C.white, color: C.ink, fontSize: "0.8rem", fontWeight: 600, boxShadow: SHADOW.card, opacity: 0, transition: "opacity 0.25s ease" }}>
          <ZoomInRoundedIcon sx={{ fontSize: 16, color: C.brand }} />
          <span>View certificate</span>
        </Stack>
      </Box>
      <Box sx={{ px: 3, pt: 1.5, pb: 2.5, flexGrow: 1 }}>
        <Typography component="h2" sx={{ fontWeight: 800, fontSize: "1.15rem", color: C.ink, letterSpacing: "-0.01em" }}>
          {cert.title}
        </Typography>
        <Typography sx={{ mt: 0.5, fontSize: "0.92rem", color: C.muted, lineHeight: 1.5 }}>{cert.subtitle}</Typography>
      </Box>
    </ButtonBase>
  )
}

const CertificationsPage: React.FC = () => {
  const { tab } = useParams<{ tab: string }>()
  const isBasePage = !tab
  const activeTab = tabs.find(t => t.key === tab)?.key ?? "qms"
  const headingText = isBasePage
    ? "Quality, Certifications & Compliance"
    : ({
        qms: "QMS Certifications",
        "type-reports": "Type Test Reports",
      }[activeTab] ?? "Official Certifications")
  const tabTitles: Record<string, string> = {
    qms: "QMS Certifications | Panam Valves – ISO & Quality Management",
    "type-reports": "Type Test Reports | Panam Valves – ATEX & PED",
  }

  const pageTitle = isBasePage ? "Quality & Certifications | ISO 9001, 14001, 45001, ATEX | Panam" : (tabTitles[activeTab] ?? "Official Certifications | Panam Valves – QMS & Type Test Reports")
  // One description per page, drawn from each page's own intro copy, so the tabs don't share a meta description
  const tabDescriptions: Record<string, string> = {
    qms: "Panam's quality, environmental and health and safety management systems, certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018.",
    "type-reports": "Panam type test reports: ATEX technical file deposit with LCIE and TÜV NORD PED material processor recognition for instrumentation valves and fittings.",
  }
  const pageDescription = isBasePage ? "Panam certifications in one place: ISO 9001, ISO 14001 and ISO 45001, plus ATEX and PED documents. Material certificates available on request." : (tabDescriptions[activeTab] ?? "Browse Panam Valves' certifications, including QMS certificates and type test reports.")
  const [openCert, setOpenCert] = useState<CertDoc | null>(null)
  const canonicalBase = "https://www.panamvalve.com/certificates"
  const canonicalUrl = tab ? `${canonicalBase}/${tab}` : canonicalBase
  const allCerts = Object.entries(certsByTab).flatMap(([key, certs]) => certs.map(cert => ({ ...cert, label: tabs.find(t => t.key === key)?.label })))
  const tabCerts = certsByTab[activeTab] ?? []

  // Unknown sections (e.g. the old /certificates/registrations) used to render the QMS page as a duplicate
  if (tab && !tabs.some(t => t.key === tab)) return <Navigate to="/certificates" replace />

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />

      <CategoryPage>
        {isBasePage ? (
          // Overview: the showcase treatment, then the full compliance content
          <>
            <CertShowcase heading={headingText} intro={<CertificatesIntro />} certs={allCerts} tabs={[{ key: "all", label: "All certificates", count: allCerts.length }, ...tabs.map(t => ({ ...t, count: certsByTab[t.key]?.length ?? 0 }))]} onOpen={setOpenCert} />
            <CertificationsAtGlance />
            <CertificationSections />
            <SectorRequirements />
            <RequestDocumentation />
            <CertificatesFAQ />
          </>
        ) : (
          // Tab pages: the standard light page layout used across the site
          <>
            <Box component="section" sx={{ position: "relative", overflow: "hidden", background: GRADIENT.heroBg, pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
              <Container maxWidth="lg">
                <Stack spacing={2.5} sx={{ maxWidth: 820 }}>
                  <Box>
                    <Eyebrow>Compliance & Quality</Eyebrow>
                  </Box>
                  <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.08, fontSize: { xs: "2.3rem", sm: "2.9rem", md: "3.4rem" } }}>
                    {headingText}
                  </Typography>
                  <ChildIntro tabKey={activeTab} />
                  <Stack direction="row" component="nav" aria-label="Certificate categories" sx={{ flexWrap: "wrap", gap: 1, pt: 1 }}>
                    <Box component={RouterLink} viewTransition to="/certificates" sx={pillSx(false)}>
                      All certificates
                    </Box>
                    {tabs.map(t => {
                      const active = activeTab === t.key
                      return (
                        <Box key={t.key} component={RouterLink} viewTransition to={`/certificates/${t.key}`} sx={pillSx(active)}>
                          {t.label}{" "}
                          <Box component="span" sx={countSx(active)}>
                            {certsByTab[t.key]?.length ?? 0}
                          </Box>
                        </Box>
                      )
                    })}
                  </Stack>
                </Stack>
              </Container>
            </Box>

            <Box component="section" sx={{ bgcolor: C.surface, py: { xs: 5, md: 7 } }}>
              <Container maxWidth="lg">
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: { xs: 2.5, md: 4 } }}>
                  {tabCerts.map(cert => (
                    <CertCard key={cert.image} cert={cert} onOpen={() => setOpenCert(cert)} />
                  ))}
                </Box>
                <Stack direction="row" spacing={1.5} alignItems="flex-start" sx={{ mt: 4, p: 2.5, borderRadius: RADIUS.card, bgcolor: C.white, border: `1px solid ${C.border}` }}>
                  <InfoOutlinedIcon sx={{ color: C.brand, mt: "1px" }} />
                  <Typography sx={{ color: C.text, fontSize: "0.95rem", lineHeight: 1.65 }}>Each certificate shows its own validity period. If you need confirmation that a document is current at the date of your order, request it with your enquiry.</Typography>
                </Stack>
              </Container>
            </Box>
          </>
        )}

        {/* Related pages */}
        <Box component="section" sx={{ bgcolor: C.white, py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <SectionHeader eyebrow="Keep exploring" title="Related pages" />
            <Grid container spacing={2.5}>
              {RELATED.map(link => (
                <Grid key={link.href} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box component={RouterLink} viewTransition to={link.href} sx={{ ...cardSx, ...cardHoverSx, display: "flex", alignItems: "center", gap: 2, p: 2.5, height: "100%", textDecoration: "none", "&:hover .rel-icon": { background: GRADIENT.brand, color: C.white }, "&:hover .rel-arrow": { transform: "translateX(4px)", color: C.brand } }}>
                    <Box className="rel-icon" sx={{ flex: "none", width: 48, height: 48, borderRadius: "14px", display: "grid", placeItems: "center", bgcolor: C.brandTint, color: C.brandDark, transition: "all 0.25s ease", "& svg": { fontSize: 24 } }}>
                      {link.icon}
                    </Box>
                    <Typography sx={{ flex: 1, minWidth: 0, fontWeight: 700, color: C.ink, fontSize: "1rem" }}>{link.label}</Typography>
                    <ArrowForwardRoundedIcon className="rel-arrow" sx={{ flex: "none", color: C.muted, transition: "all 0.2s ease" }} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </CategoryPage>

      {/* Certificate viewer */}
      <Dialog open={!!openCert} onClose={() => setOpenCert(null)} maxWidth="md" fullWidth aria-labelledby="cert-viewer-title" slotProps={{ paper: { sx: { borderRadius: "20px", overflow: "hidden" } } }}>
        {openCert && (
          <Box sx={{ fontFamily: FONT, textTransform: "none", "& .MuiTypography-root": { fontFamily: FONT } }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ px: { xs: 2, md: 3 }, py: 2, borderBottom: `1px solid ${C.border}` }}>
              <Box sx={{ minWidth: 0 }}>
                <Typography id="cert-viewer-title" sx={{ fontWeight: 800, color: C.ink, fontSize: "1.1rem" }}>
                  {openCert.title}
                </Typography>
                <Typography sx={{ color: C.muted, fontSize: "0.85rem" }}>{openCert.subtitle}</Typography>
              </Box>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ flex: "none" }}>
                <Box component="a" href={openCert.pdf ?? openCert.image} target="_blank" rel="noopener noreferrer" sx={{ display: { xs: "none", sm: "inline-flex" }, alignItems: "center", gap: 0.5, fontSize: "0.85rem", fontWeight: 600, color: C.brandDark, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                  Open full size <NorthEastRoundedIcon sx={{ fontSize: 16 }} />
                </Box>
                <IconButton onClick={() => setOpenCert(null)} aria-label="Close">
                  <CloseRoundedIcon />
                </IconButton>
              </Stack>
            </Stack>
            <Box sx={{ bgcolor: C.white, display: "flex", justifyContent: "center", overflow: "hidden" }}>
              <Box component="img" src={openCert.image} alt={`${openCert.title} certificate`} sx={{ display: "block", width: "100%", maxHeight: "calc(100vh - 160px)", objectFit: "contain", transform: "scale(1)" }} />
            </Box>
          </Box>
        )}
      </Dialog>
    </>
  )
}

export default CertificationsPage
