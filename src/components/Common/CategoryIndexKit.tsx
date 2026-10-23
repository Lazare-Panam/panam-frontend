import type { ReactNode } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, GlobalStyles, Grid, Stack, Typography } from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded"
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded"
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded"
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

// Gauge badge on the hero photo: needle sweeps to full scale on load
export const GaugeBadge = ({ value, label = "Maximum rated pressure" }: { value: string; label?: string }) => (
  <Box sx={{ position: "absolute", right: { xs: 16, md: -24 }, bottom: { xs: 16, md: 32 }, width: { xs: 170, md: 210 }, p: 2, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.96)", backdropFilter: "blur(8px)", boxShadow: SHADOW.hover, border: `1px solid ${C.border}`, textAlign: "center" }}>
    <svg viewBox="0 0 200 116" width="100%" aria-hidden>
      <defs>
        <linearGradient id="categoryGauge" x1="0" x2="1">
          <stop offset="0%" stopColor="#3CC6F5" />
          <stop offset="70%" stopColor={C.brand} />
          <stop offset="100%" stopColor={C.brandDeep} />
        </linearGradient>
      </defs>
      <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#E9EEF3" strokeWidth="14" strokeLinecap="round" />
      <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#categoryGauge)" strokeWidth="14" strokeLinecap="round" strokeDasharray="252" strokeDashoffset="252" className="gauge-arc" />
      {[0, 1, 2, 3, 4, 5, 6].map(i => {
        const a = Math.PI - (i / 6) * Math.PI
        return <line key={i} x1={100 + 62 * Math.cos(a)} y1={100 - 62 * Math.sin(a)} x2={100 + 54 * Math.cos(a)} y2={100 - 54 * Math.sin(a)} stroke="#B6C3D1" strokeWidth="2" strokeLinecap="round" />
      })}
      <g className="gauge-needle">
        <line x1="100" y1="100" x2="100" y2="38" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
      </g>
      <circle cx="100" cy="100" r="8" fill={C.ink} />
      <circle cx="100" cy="100" r="3" fill={C.white} />
    </svg>
    <Typography sx={{ mt: 0.5, fontWeight: 800, fontSize: { xs: "1.2rem", md: "1.4rem" }, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1 }}>{value}</Typography>
    <Typography sx={{ mt: 0.5, fontSize: "0.75rem", color: C.muted }}>{label}</Typography>
    <GlobalStyles
      styles={{
        "@keyframes gaugeNeedle": { from: { transform: "rotate(-90deg)" }, to: { transform: "rotate(90deg)" } },
        "@keyframes gaugeArc": { to: { strokeDashoffset: 0 } },
        ".gauge-needle": { transformOrigin: "100px 100px", transform: "rotate(-90deg)", animation: "gaugeNeedle 1.6s cubic-bezier(.2,.8,.2,1) 0.3s forwards" },
        ".gauge-arc": { animation: "gaugeArc 1.6s cubic-bezier(.2,.8,.2,1) 0.3s forwards" },
        "@media (prefers-reduced-motion: reduce)": { ".gauge-needle": { animation: "none", transform: "rotate(90deg)" }, ".gauge-arc": { animation: "none", strokeDashoffset: 0 } },
      }}
    />
  </Box>
)

export interface CoverageItem {
  name: string
  to: string
  min: number // psi; 0 draws the bar from the origin ("up to")
  max: number
}

const kpsi = (n: number) => `${n / 1000}k`

// Each family drawn as a bar on a 0–maxPsi axis, linking to its range
export const PressureCoverage = ({ items, maxPsi, ticks }: { items: CoverageItem[]; maxPsi: number; ticks: number[] }) => (
  <Box sx={{ ...cardSx, p: { xs: 2.5, md: 4 }, borderRadius: "24px" }}>
    <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "baseline" }} spacing={1} sx={{ mb: 3 }}>
      <Typography sx={{ fontWeight: 800, color: C.ink, fontSize: "1.15rem", letterSpacing: "-0.01em" }}>Pressure coverage by product family</Typography>
      <Typography sx={{ fontSize: "0.82rem", color: C.muted }}>Rated working pressure, psi</Typography>
    </Stack>
    <Stack spacing={1.75}>
      {items.map(item => (
        <Box key={item.to} component={RouterLink} to={item.to} viewTransition sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "260px 1fr" }, gap: { xs: 0.75, md: 3 }, alignItems: "center", textDecoration: "none", "&:hover .bar": { filter: "brightness(1.08)", boxShadow: SHADOW.brand }, "&:hover .label": { color: C.brandDark } }}>
          <Typography className="label" sx={{ fontWeight: 600, fontSize: "0.9rem", color: C.ink, transition: "color 0.2s ease" }}>
            {item.name}
          </Typography>
          <Box sx={{ position: "relative", height: 30, borderRadius: "999px", bgcolor: C.surface }}>
            <Box
              className="bar"
              sx={{ position: "absolute", top: 3, bottom: 3, left: `${(item.min / maxPsi) * 100}%`, width: `${((item.max - item.min) / maxPsi) * 100}%`, minWidth: 64, borderRadius: "999px", background: GRADIENT.brand, color: C.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, whiteSpace: "nowrap", transition: "all 0.2s ease" }}>
              {item.min === 0 || item.min === item.max ? kpsi(item.max) : `${kpsi(item.min)} – ${kpsi(item.max)}`}
            </Box>
          </Box>
        </Box>
      ))}
      {/* Axis */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "260px 1fr" }, gap: { md: 3 } }}>
        <Box sx={{ display: { xs: "none", md: "block" } }} />
        <Stack direction="row" justifyContent="space-between" sx={{ pt: 0.5, borderTop: `1px dashed ${C.border}` }}>
          {ticks.map(t => (
            <Typography key={t} sx={{ fontSize: "0.72rem", color: C.muted, fontWeight: 600 }}>
              {kpsi(t)}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Stack>
  </Box>
)

export interface ServiceRow {
  icon: ReactNode
  title: string
  text: string
  industry: { title: string; path: string; desc: string }
}

const columnLabelSx = { fontWeight: 700, fontSize: "0.78rem", color: C.muted, letterSpacing: "0.12em", textTransform: "uppercase" } as const

// Each consideration sits beside the industry it matters most to, so the two columns line up row by row
export const ServiceConsiderations = ({ title, rows }: { title: string; rows: ServiceRow[] }) => (
  <Box>
    <Box sx={{ maxWidth: 720, mb: { xs: 4, md: 5 } }}>
      <Eyebrow>Service Considerations</Eyebrow>
      <Typography component="h2" sx={{ mt: 2, fontWeight: 800, color: C.ink, letterSpacing: "-0.025em", lineHeight: 1.12, fontSize: { xs: "2rem", md: "2.6rem" } }}>
        {title}
      </Typography>
    </Box>

    {/* Column labels, desktop only (on phones each pair stacks) */}
    <Grid container spacing={3} sx={{ mb: 1.5, display: { xs: "none", md: "flex" } }}>
      <Grid size={{ md: 7 }}>
        <Typography sx={columnLabelSx}>What to consider</Typography>
      </Grid>
      <Grid size={{ md: 5 }}>
        <Typography sx={columnLabelSx}>Where this range is used</Typography>
      </Grid>
    </Grid>

    <Stack spacing={3}>
      {rows.map(row => (
        <Grid key={row.title} container spacing={{ xs: 1.5, md: 3 }} alignItems="stretch">
          <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex" }}>
            <Stack direction="row" spacing={2} sx={{ ...cardSx, flex: 1, p: { xs: 2.5, md: 3.5 }, borderRadius: "20px" }}>
              <Box sx={{ width: 46, height: 46, flex: "none", borderRadius: "13px", bgcolor: C.tintBg, color: C.brand, display: "grid", placeItems: "center" }}>{row.icon}</Box>
              <Box>
                <Typography component="h3" sx={{ fontWeight: 800, color: C.ink, fontSize: "1.05rem", mb: 0.75 }}>
                  {row.title}
                </Typography>
                <Typography sx={{ color: C.muted, lineHeight: 1.75, fontSize: "0.94rem" }}>{row.text}</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex" }}>
            <Box
              component={RouterLink}
              viewTransition
              to={row.industry.path}
              sx={{
                position: "relative",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 2,
                p: { xs: 2.5, md: 3.5 },
                borderRadius: "20px",
                overflow: "hidden",
                color: C.white,
                textDecoration: "none",
                background: `linear-gradient(135deg, ${C.brand} 0%, ${C.brandDark} 55%, ${C.brandDeep} 100%)`,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&::after": { content: '""', position: "absolute", width: 180, height: 180, borderRadius: "50%", right: -70, bottom: -100, border: "26px solid rgba(255,255,255,0.08)" },
                "&:hover": { transform: "translateY(-4px)", boxShadow: SHADOW.brand },
                "&:hover .go": { transform: "rotate(45deg)" },
              }}>
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", mb: 1 }}>{row.industry.title}</Typography>
                <Typography sx={{ fontSize: "0.9rem", opacity: 0.9, lineHeight: 1.65 }}>{row.industry.desc}</Typography>
              </Box>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ position: "relative", zIndex: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: "0.88rem" }}>Explore industry</Typography>
                <Box className="go" sx={{ width: 36, height: 36, borderRadius: "50%", bgcolor: C.white, color: C.brandDeep, display: "grid", placeItems: "center", transition: "transform 0.3s ease", "& svg": { fontSize: 18 } }}>
                  <NorthEastRoundedIcon />
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Stack>
  </Box>
)

export interface SelectorRow {
  need: string
  icon: ReactNode
  valve: string // product family the row recommends
  to: string
  pressure: string
  size: string
}

interface SelectionGuideProps {
  eyebrow?: string
  title: string
  subtitle: string
  rows: SelectorRow[]
  columns?: [string, string, string, string] // header labels
}

// "What does it need to do?" -> the family that does it, with its rating and sizes
export const SelectionGuide = ({ eyebrow = "Selection Guide", title, subtitle, rows, columns = ["Your application", "Product family", "Max pressure", "Sizes"] }: SelectionGuideProps) => (
  <Box>
    <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
    <Box sx={{ ...cardSx, borderRadius: "22px", overflow: "hidden" }}>
      <Box sx={{ display: { xs: "none", md: "grid" }, gridTemplateColumns: "1.4fr 1fr 150px 130px 36px", gap: 2, px: 3, py: 1.75, bgcolor: C.surface, borderBottom: `1px solid ${C.border}` }}>
        {[...columns, ""].map(h => (
          <Typography key={h || "go"} sx={{ fontSize: "0.72rem", fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            {h}
          </Typography>
        ))}
      </Box>
      {rows.map((row, i) => (
        <Box
          key={row.to}
          component={RouterLink}
          to={row.to}
          viewTransition
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr auto", md: "1.4fr 1fr 150px 130px 36px" },
            gap: { xs: 1, md: 2 },
            alignItems: "center",
            px: 3,
            py: 2,
            textDecoration: "none",
            borderTop: i > 0 ? `1px solid ${C.border}` : "none",
            transition: "background-color 0.15s ease",
            "&:hover": { bgcolor: "rgba(1,176,240,0.04)" },
            "&:hover .go": { bgcolor: C.brand, color: C.white, boxShadow: SHADOW.brand },
          }}>
          <Stack direction="row" alignItems="center" spacing={1.75} sx={{ minWidth: 0 }}>
            <Box sx={{ width: 40, height: 40, flex: "none", borderRadius: "12px", background: GRADIENT.brand, color: C.white, display: "grid", placeItems: "center", "& svg": { fontSize: 20 } }}>{row.icon}</Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "0.95rem", lineHeight: 1.4 }}>{row.need}</Typography>
              {/* On phones the other columns collapse into this line */}
              <Typography sx={{ display: { md: "none" }, mt: 0.25, fontSize: "0.8rem", color: C.muted }}>
                <Box component="span" sx={{ color: C.brandDark, fontWeight: 700 }}>
                  {row.valve}
                </Box>{" "}
                · {row.pressure} · {row.size}
              </Typography>
            </Box>
          </Stack>
          <Typography sx={{ display: { xs: "none", md: "block" }, fontWeight: 700, color: C.brandDark, fontSize: "0.92rem" }}>{row.valve}</Typography>
          <Typography sx={{ display: { xs: "none", md: "block" }, fontWeight: 800, color: C.ink, fontSize: "0.92rem" }}>{row.pressure}</Typography>
          <Typography sx={{ display: { xs: "none", md: "block" }, color: C.muted, fontSize: "0.88rem" }}>{row.size}</Typography>
          <Box className="go" sx={{ width: 34, height: 34, borderRadius: "50%", bgcolor: C.tintBg, color: C.brandDark, display: "grid", placeItems: "center", transition: "all 0.2s ease", "& svg": { fontSize: 17 } }}>
            <NorthEastRoundedIcon />
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
)

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
  ctaLabel?: string // main button text
}

// Product-family card: product shot floating on a light stage (white backgrounds multiply away), tilts on hover
export const RangeCard = ({ eyebrow, title, description, image, to, pill, chips = [], footnote, quoteHref = "mailto:sales@panamvalves.co.uk", ctaLabel = "View range" }: RangeCardProps) => (
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
          {ctaLabel}
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

// Closing call-to-action: a compact light card, kept off brand-blue so it doesn't merge with the footer below
export const CtaBand = ({ title, text, primary, secondary }: { title: string; text: string; primary: CtaLink; secondary: CtaLink }) => (
  <Box component="section" sx={{ py: { xs: 5, md: 7 }, bgcolor: C.white }}>
    <Container maxWidth="lg">
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          px: { xs: 3, md: 5 },
          py: { xs: 3.5, md: 4.5 },
          borderRadius: "22px",
          background: `linear-gradient(120deg, ${C.white} 0%, ${C.tintBg} 55%, #DDF1FB 100%)`,
          border: "1px solid rgba(1,176,240,0.2)",
          boxShadow: SHADOW.card,
          "&::after": { content: '""', position: "absolute", width: 260, height: 260, borderRadius: "50%", right: -90, top: -130, border: "34px solid rgba(1,176,240,0.07)", pointerEvents: "none" },
        }}>
        <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between" spacing={{ xs: 3, md: 4 }} sx={{ position: "relative", zIndex: 1 }}>
          <Stack direction="row" spacing={2.25} alignItems="flex-start" sx={{ maxWidth: 660 }}>
            <Box sx={{ display: { xs: "none", sm: "grid" }, placeItems: "center", width: 52, height: 52, flex: "none", borderRadius: "15px", background: GRADIENT.brand, color: C.white, boxShadow: SHADOW.brand, "& svg": { fontSize: 26 } }}>
              <SupportAgentRoundedIcon />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.brandDark }}>Talk to an engineer</Typography>
              <Typography component="h2" sx={{ mt: 0.75, fontWeight: 800, color: C.ink, fontSize: { xs: "1.45rem", md: "1.75rem" }, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                {title}
              </Typography>
              <Typography sx={{ mt: 1, color: C.muted, fontSize: "0.95rem", lineHeight: 1.65 }}>{text}</Typography>
            </Box>
          </Stack>
          <Stack spacing={1.5} alignItems={{ xs: "stretch", sm: "flex-start", md: "flex-end" }} sx={{ flex: "none", width: { xs: "100%", sm: "auto" } }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
              <Button {...linkProps(primary)} startIcon={primary.href?.startsWith("mailto:") ? <MailOutlineRoundedIcon /> : undefined} sx={{ ...btn.primary, py: 1.3, px: 2.75 }}>
                {primary.label}
              </Button>
              <Button {...linkProps(secondary)} endIcon={<ArrowForwardRoundedIcon />} sx={{ ...btn.secondary, py: 1.3, px: 2.75 }}>
                {secondary.label}
              </Button>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.75} sx={{ color: C.muted, "& svg": { fontSize: 16, color: C.brand } }}>
              <ScheduleRoundedIcon />
              <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>Reply within 24 hours</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  </Box>
)
