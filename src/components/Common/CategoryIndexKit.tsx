import type { ReactNode } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Stack, Typography } from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"
import AddRoundedIcon from "@mui/icons-material/AddRounded"
import { Eyebrow, SectionHeader } from "../Landing2/homeStyles"
import { C, FONT, GRADIENT, SHADOW, btn, cardHoverSx, cardSx, sectionSx } from "../Landing2/homeTokens"

// Shared building blocks for the product-category index pages (/high-pressure, /instrumentation-fittings, …),
// in the homepage style, so every category page looks the same and only supplies its own content.

export interface CtaLink {
  label: string
  to?: string // internal route
  href?: string // anchor or mailto
}

const linkProps = (l: CtaLink) => (l.to ? { component: RouterLink, to: l.to, viewTransition: true } : { href: l.href })

const GradientText = ({ children }: { children: ReactNode }) => (
  <Box component="span" sx={{ display: "inline-block", pb: "0.08em", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
    {children}
  </Box>
)

// Page wrapper: resets the site's global capitalisation and sets the font for everything inside
export const CategoryPage = ({ children }: { children: ReactNode }) => <Box sx={{ bgcolor: C.white, fontFamily: FONT, textTransform: "none", "& .MuiTypography-root, & .MuiButton-root": { fontFamily: FONT } }}>{children}</Box>

interface HeroProps {
  eyebrow: string
  titleMain: string
  titleAccent: string
  description: string
  image: string
  imageAlt: string
  primary: CtaLink
  secondary: CtaLink
  stats: { value: string; label: string }[]
  badge?: ReactNode // floating card over the photo
}

export const CategoryHero = ({ eyebrow, titleMain, titleAccent, description, image, imageAlt, primary, secondary, stats, badge }: HeroProps) => (
  <Box component="section" sx={{ position: "relative", overflow: "hidden", background: GRADIENT.heroBg, pt: { xs: 5, md: 8 }, pb: { xs: 6, md: 10 } }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            <Box>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Box>
            <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.05, fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.9rem" } }}>
              {titleMain} <GradientText>{titleAccent}</GradientText>
            </Typography>
            <Typography sx={{ color: C.muted, fontSize: { xs: "1.02rem", md: "1.15rem" }, lineHeight: 1.75, maxWidth: 560 }}>{description}</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 1 }}>
              <Button {...linkProps(primary)} endIcon={<ArrowForwardRoundedIcon />} sx={{ ...btn.primary, py: 1.5, px: 3.25 }}>
                {primary.label}
              </Button>
              <Button {...linkProps(secondary)} startIcon={secondary.href?.startsWith("mailto:") ? <MailOutlineRoundedIcon /> : undefined} sx={{ ...btn.secondary, py: 1.5, px: 3.25 }}>
                {secondary.label}
              </Button>
            </Stack>
            <Stack direction="row" sx={{ pt: 1.5, gap: { xs: 3, sm: 5 }, flexWrap: "wrap" }}>
              {stats.map(s => (
                <Box key={s.label}>
                  <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.6rem", md: "1.9rem" }, letterSpacing: "-0.02em", color: C.ink, lineHeight: 1 }}>{s.value}</Typography>
                  <Typography sx={{ mt: 0.75, fontSize: "0.85rem", color: C.muted }}>{s.label}</Typography>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ position: "relative", pl: { md: 2 } }}>
            <Box aria-hidden sx={{ position: "absolute", inset: { xs: "-12px", md: "-18px -18px -18px 0" }, borderRadius: "32px", background: "linear-gradient(135deg, rgba(1,176,240,0.18), rgba(1,176,240,0) 60%)" }} />
            <Box role="img" aria-label={imageAlt} sx={{ position: "relative", aspectRatio: { xs: "4 / 3", md: "5 / 4" }, borderRadius: "26px", overflow: "hidden", boxShadow: SHADOW.hover, backgroundColor: C.surface, backgroundImage: `url("${image}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
            {badge}
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

// Floating card positioned over the bottom-right of the hero photo
export const HeroBadge = ({ children, width = { xs: 170, md: 210 } }: { children: ReactNode; width?: object }) => <Box sx={{ position: "absolute", right: { xs: 16, md: -24 }, bottom: { xs: 16, md: 32 }, width, p: 2, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.96)", backdropFilter: "blur(8px)", boxShadow: SHADOW.hover, border: `1px solid ${C.border}` }}>{children}</Box>

export interface Spec {
  icon: ReactNode
  label: string
  value: string
}

interface IntroProps {
  eyebrow: string
  titleMain: string
  titleAccent: string
  paragraphs: string[]
  specs: Spec[]
}

// Intro copy beside a technical-specifications card
export const CategoryIntro = ({ eyebrow, titleMain, titleAccent, paragraphs, specs }: IntroProps) => (
  <Box component="section" sx={sectionSx("white")}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
        <Grid size={{ xs: 12, md: 6.5 }}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Typography component="h2" sx={{ mt: 2, mb: 3, fontWeight: 800, color: C.ink, letterSpacing: "-0.025em", lineHeight: 1.12, fontSize: { xs: "2rem", md: "2.6rem" } }}>
            {titleMain}{" "}
            <Box component="span" sx={{ color: C.brand }}>
              {titleAccent}
            </Box>
          </Typography>
          {paragraphs.map((p, i) => (
            <Typography key={i} sx={{ color: C.muted, lineHeight: 1.85, fontSize: "1.02rem", mb: i < paragraphs.length - 1 ? 2 : 0 }}>
              {p}
            </Typography>
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 5.5 }}>
          <Box sx={{ ...cardSx, borderRadius: "24px", overflow: "hidden" }}>
            <Box sx={{ px: 3, py: 2, background: `linear-gradient(135deg, ${C.brand}, ${C.brandDeep})`, color: C.white }}>
              <Typography sx={{ fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Technical Specifications</Typography>
            </Box>
            <Stack sx={{ p: 1.5 }}>
              {specs.map((spec, i) => (
                <Stack key={spec.label} direction="row" alignItems="flex-start" spacing={1.75} sx={{ p: 1.5, borderRadius: "14px", borderTop: i > 0 ? `1px solid ${C.border}` : "none", transition: "background-color 0.2s ease", "&:hover": { bgcolor: C.surface } }}>
                  <Box sx={{ width: 38, height: 38, flex: "none", borderRadius: "11px", bgcolor: C.tintBg, color: C.brand, display: "grid", placeItems: "center", "& svg": { fontSize: 20 } }}>{spec.icon}</Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontSize: "0.76rem", fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>{spec.label}</Typography>
                    <Typography sx={{ mt: 0.25, fontSize: "0.94rem", fontWeight: 600, color: C.ink, lineHeight: 1.45 }}>{spec.value}</Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

interface RangeCardProps {
  eyebrow: string
  title: string
  description: string
  image: string
  to: string
  pill: ReactNode // dark pill over the image, e.g. pressure rating
  chips?: string[]
  footnote?: string
  quoteHref?: string
}

// Product-family card: product shot floating on a light stage (white backgrounds multiply away), tilts on hover
export const RangeCard = ({ eyebrow, title, description, image, to, pill, chips = [], footnote, quoteHref = "mailto:sales@panamvalves.co.uk" }: RangeCardProps) => (
  <Box sx={{ ...cardSx, ...cardHoverSx, height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", borderRadius: "22px", "&:hover img": { transform: "scale(1.08) rotate(-3deg)" } }}>
    <Box component={RouterLink} to={to} viewTransition sx={{ position: "relative", display: "block", height: 230, background: "radial-gradient(circle at 50% 42%, #FFFFFF 0%, #EAF6FC 58%, #D9EEF8 100%)" }}>
      <Box component="img" src={image} alt={title} loading="lazy" sx={{ position: "absolute", inset: "12%", width: "76%", height: "76%", objectFit: "contain", mixBlendMode: "multiply", transition: "transform 0.6s cubic-bezier(.2,.8,.2,1)" }} />
      <Box sx={{ position: "absolute", top: 14, left: 14, display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.25, py: 0.5, borderRadius: "999px", bgcolor: C.ink, color: C.white, fontSize: "0.72rem", fontWeight: 700, "& svg": { fontSize: 14, color: "#3CC6F5" } }}>{pill}</Box>
    </Box>
    <Stack sx={{ p: 3, flex: 1 }} spacing={1.25}>
      <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.brandDark }}>{eyebrow}</Typography>
      <Typography component="h3" sx={{ fontWeight: 800, color: C.ink, fontSize: "1.12rem", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
        {title}
      </Typography>
      {chips.length > 0 && (
        <Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75 }}>
          {chips.map(c => (
            <Box key={c} component="span" sx={{ px: 1, py: 0.3, borderRadius: "8px", bgcolor: C.surface, border: `1px solid ${C.border}`, fontSize: "0.74rem", fontWeight: 600, color: C.text }}>
              {c}
            </Box>
          ))}
        </Stack>
      )}
      <Typography sx={{ color: C.muted, fontSize: "0.88rem", lineHeight: 1.7, flex: 1, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{description}</Typography>
      {footnote && <Typography sx={{ fontSize: "0.76rem", color: "#94A3B8" }}>{footnote}</Typography>}
      <Stack direction="row" spacing={1} sx={{ pt: 1.5 }}>
        <Button component={RouterLink} viewTransition to={to} endIcon={<ArrowForwardRoundedIcon />} sx={{ ...btn.primary, flex: 1, py: 1, fontSize: "0.88rem" }}>
          View range
        </Button>
        <Button href={quoteHref} sx={{ ...btn.secondary, py: 1, px: 2, fontSize: "0.88rem" }}>
          Quote
        </Button>
      </Stack>
    </Stack>
  </Box>
)

// "Why specify" tick tiles
export const FeatureTiles = ({ eyebrow, title, subtitle, items }: { eyebrow: string; title: string; subtitle: string; items: string[] }) => (
  <Box component="section" sx={sectionSx("white")}>
    <Container maxWidth="lg">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: 1.5 }}>
        {items.map(feat => (
          <Stack key={feat} direction="row" alignItems="flex-start" sx={{ gap: 1.5, p: 2.25, borderRadius: "16px", bgcolor: C.surface, border: "1px solid transparent", transition: "all 0.2s ease", "&:hover": { bgcolor: C.white, borderColor: "rgba(1,176,240,0.35)", boxShadow: SHADOW.card } }}>
            <Box sx={{ width: 24, height: 24, flex: "none", borderRadius: "50%", background: GRADIENT.brand, color: C.white, display: "grid", placeItems: "center", mt: "1px" }}>
              <CheckRoundedIcon sx={{ fontSize: 15 }} />
            </Box>
            <Typography sx={{ fontSize: "0.92rem", color: C.text, lineHeight: 1.55 }}>{feat}</Typography>
          </Stack>
        ))}
      </Box>
    </Container>
  </Box>
)

export interface FaqItem {
  question: string
  answer: string
}

// FAQ with FAQPage structured data; heading stays in view on the left on desktop
export const FaqBlock = ({ eyebrow, faqs, idPrefix }: { eyebrow: string; faqs: FaqItem[]; idPrefix: string }) => (
  <Box>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      })}
    </script>
    <Grid container spacing={{ xs: 4, md: 6 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box sx={{ position: { md: "sticky" }, top: { md: 120 } }}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Typography component="h2" sx={{ mt: 2, fontWeight: 800, color: C.ink, letterSpacing: "-0.025em", lineHeight: 1.12, fontSize: { xs: "2rem", md: "2.4rem" } }}>
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ mt: 2, color: C.muted, lineHeight: 1.7 }}>
            Have a spec we haven't covered?{" "}
            <Box component={RouterLink} viewTransition to="/enquiry" sx={{ color: C.brandDark, fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              Ask our technical team
            </Box>
            .
          </Typography>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Stack spacing={1.5}>
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.question}
              disableGutters
              elevation={0}
              sx={{
                borderRadius: "16px !important",
                border: `1px solid ${C.border}`,
                bgcolor: C.white,
                overflow: "hidden",
                transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                "&:before": { display: "none" },
                "&.Mui-expanded": { borderColor: "rgba(1,176,240,0.4)", boxShadow: SHADOW.card },
                "&.Mui-expanded .faq-icon": { transform: "rotate(45deg)", bgcolor: C.brand, color: C.white },
              }}>
              <AccordionSummary aria-controls={`${idPrefix}-faq-content-${index}`} id={`${idPrefix}-faq-header-${index}`} sx={{ px: { xs: 2, md: 3 }, "& .MuiAccordionSummary-content": { my: 2, alignItems: "center", gap: 2 } }}>
                <Typography sx={{ flex: 1, fontWeight: 700, fontSize: { xs: "0.98rem", md: "1.05rem" }, color: C.ink }}>{faq.question}</Typography>
                <Box className="faq-icon" sx={{ flex: "none", width: 32, height: 32, borderRadius: "50%", bgcolor: C.tintBg, color: C.brandDark, display: "grid", placeItems: "center", transition: "all 0.25s ease" }}>
                  <AddRoundedIcon sx={{ fontSize: 20 }} />
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pt: 0, pb: 3 }}>
                <Typography sx={{ color: C.muted, lineHeight: 1.8, fontSize: "0.95rem" }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Grid>
    </Grid>
  </Box>
)

// Closing brand-blue call-to-action band
export const CtaBand = ({ title, text, primary, secondary }: { title: string; text: string; primary: CtaLink; secondary: CtaLink }) => (
  <Box component="section" sx={{ py: { xs: 7, md: 9 }, bgcolor: C.white }}>
    <Container maxWidth="lg">
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "28px",
          color: C.white,
          textAlign: "center",
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 8 },
          background: `linear-gradient(135deg, ${C.brand} 0%, ${C.brandDark} 50%, ${C.brandDeep} 100%)`,
          boxShadow: "0 24px 60px rgba(3,104,166,0.25)",
          "&::before": { content: '""', position: "absolute", width: 420, height: 420, borderRadius: "50%", top: -220, right: -140, border: "50px solid rgba(255,255,255,0.06)" },
          "&::after": { content: '""', position: "absolute", width: 300, height: 300, borderRadius: "50%", bottom: -190, left: -100, border: "40px solid rgba(255,255,255,0.05)" },
        }}>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: "1.9rem", md: "2.6rem" }, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {title}
          </Typography>
          <Typography sx={{ mt: 2, mb: 4, mx: "auto", maxWidth: 560, opacity: 0.9, fontSize: "1.05rem", lineHeight: 1.75 }}>{text}</Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center">
            <Button {...linkProps(primary)} startIcon={primary.href?.startsWith("mailto:") ? <MailOutlineRoundedIcon /> : undefined} sx={{ ...btn.light, py: 1.5, px: 3.5 }}>
              {primary.label}
            </Button>
            <Button {...linkProps(secondary)} endIcon={<ArrowForwardRoundedIcon />} sx={{ ...btn.onDark, py: 1.5, px: 3.5 }}>
              {secondary.label}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  </Box>
)
