import { Box, Container, Typography, Stack, Link } from "@mui/material"
import { C, FONT } from "../Landing2/homeTokens"

// Shared presentational layout for static legal pages (Privacy Policy, Terms of Use).
// Each page supplies its own <title>/meta and a structured list of sections, so the two pages
// stay visually identical and we don't duplicate layout code.

export interface LegalSection {
  heading: string
  paragraphs?: React.ReactNode[]
  bullets?: React.ReactNode[]
}

interface LegalPageProps {
  title: string
  lastUpdated: string
  intro: React.ReactNode
  sections: LegalSection[]
}

const LegalPage = ({ title, lastUpdated, intro, sections }: LegalPageProps) => {
  return (
    <Box sx={{ bgcolor: C.surface }}>
      {/* Header band */}
      <Box sx={{ bgcolor: C.white, borderBottom: `1px solid ${C.border}`, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 2 }}>
            <Typography variant="overline" sx={{ fontWeight: 800, color: C.brand, letterSpacing: 1.5 }}>
              Legal
            </Typography>
            <Box sx={{ width: 40, height: "1px", bgcolor: C.brand }} />
          </Stack>
          <Typography component="h1" sx={{ fontFamily: FONT, fontWeight: 800, color: C.ink, fontSize: { xs: "2rem", md: "2.75rem" }, letterSpacing: "-0.02em" }}>
            {title}
          </Typography>
          <Typography sx={{ color: C.muted, mt: 1.5, fontSize: "0.9rem" }}>
            Last updated: {lastUpdated}
          </Typography>
        </Container>
      </Box>

      {/* Body */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography sx={{ fontFamily: FONT, color: C.text, fontSize: "1.05rem", lineHeight: 1.8, mb: 5 }}>
          {intro}
        </Typography>

        <Stack spacing={5}>
          {sections.map((section, i) => (
            <Box key={i} component="section">
              <Typography component="h2" sx={{ fontFamily: FONT, fontWeight: 800, color: C.ink, fontSize: { xs: "1.25rem", md: "1.4rem" }, mb: 2 }}>
                {`${i + 1}. ${section.heading}`}
              </Typography>
              {section.paragraphs?.map((p, j) => (
                <Typography key={j} sx={{ fontFamily: FONT, color: C.text, fontSize: "1rem", lineHeight: 1.8, mb: 2 }}>
                  {p}
                </Typography>
              ))}
              {section.bullets && (
                <Box component="ul" sx={{ pl: 3, m: 0, mt: 1 }}>
                  {section.bullets.map((b, k) => (
                    <Box key={k} component="li" sx={{ mb: 1 }}>
                      <Typography component="span" sx={{ fontFamily: FONT, color: C.text, fontSize: "1rem", lineHeight: 1.8 }}>
                        {b}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Stack>

        <Box sx={{ mt: 6, pt: 4, borderTop: `1px solid ${C.border}` }}>
          <Typography sx={{ fontFamily: FONT, color: C.muted, fontSize: "0.92rem", lineHeight: 1.7 }}>
            Questions about this page? Email{" "}
            <Link href="mailto:sales@panamvalves.co.uk" sx={{ color: C.brandDark, fontWeight: 600 }}>
              sales@panamvalves.co.uk
            </Link>{" "}
            or write to us at St Edburgs Hall, Priory Road, Bicester, OX26 6BL, United Kingdom.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default LegalPage
