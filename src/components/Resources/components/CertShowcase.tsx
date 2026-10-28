import React, { useEffect, useRef } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Box, Button, Container, GlobalStyles, Grid, Stack, Typography } from "@mui/material"
import ZoomInRoundedIcon from "@mui/icons-material/ZoomInRounded"
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded"
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded"
import type { certsByTab } from "./Cert"
import { C, GRADIENT, RADIUS, SHADOW, btn } from "../../Landing2/homeTokens"
import { Eyebrow } from "../../Landing2/homeStyles"

type Tab = { key: string; label: string; count?: number }
type CertDoc = (typeof certsByTab)[string][number] & { label?: string }

/* ------------------------------------------------------------------ */
/* Hero: deep brand gradient with a fanned stack of the certificates   */
/* ------------------------------------------------------------------ */

const Hero: React.FC<{ heading: string; intro: React.ReactNode; certs: CertDoc[]; tabs: Tab[]; onOpen: (cert: CertDoc) => void }> = ({ heading, intro, certs, tabs, onOpen }) => {
  const mid = (certs.length - 1) / 2
  // Tighter fan as the stack grows, so five cards still fit the column
  const angle = certs.length >= 5 ? 9 : certs.length >= 3 ? 14 : 9
  const spread = certs.length >= 5 ? { rest: "15%", open: "27%" } : { rest: "22%", open: "46%" }

  return (
    // Light hero, same convention as the blog and category pages: soft gradient, outlined watermark, ink headline with one gradient word
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: GRADIENT.heroBg, pt: { xs: 5, md: 8 }, pb: { xs: 6, md: 9 } }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(1,176,240,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(1,176,240,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse at 75% 45%, #000 15%, transparent 65%)" }} />
      <Box aria-hidden className="cert-orb" sx={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", right: -140, top: -180, background: "radial-gradient(circle, rgba(1,176,240,0.16), transparent 65%)" }} />
      <Typography aria-hidden sx={{ position: "absolute", left: { xs: -10, md: 40 }, top: { xs: 20, md: 0 }, fontSize: { xs: "6rem", md: "13rem" }, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: "1.5px rgba(1,176,240,0.12)", whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none" }}>
        CERTIFIED
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={{ xs: 5, md: 4 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2.5}>
              <Box>
                <Eyebrow>Compliance & Quality</Eyebrow>
              </Box>
              <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.06, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.5rem" } }}>
                {heading.split(" ").slice(0, -1).join(" ")}{" "}
                <Box component="span" sx={{ display: "inline-block", pb: "0.08em", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {heading.split(" ").slice(-1)}
                </Box>
              </Typography>
              <Box sx={{ maxWidth: 560 }}>{intro}</Box>
              {/* Category pills — dark active state, as on the blog */}
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1, pt: 0.5 }}>
                {tabs.map(t => {
                  const active = t.key === "all"
                  return (
                    <Box
                      key={t.key}
                      component={RouterLink}
                      viewTransition
                      to={t.key === "all" ? "/certificates" : `/certificates/${t.key}`}
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.75,
                        px: 1.75,
                        py: 0.75,
                        borderRadius: RADIUS.pill,
                        fontSize: "0.86rem",
                        fontWeight: active ? 600 : 500,
                        textDecoration: "none",
                        border: `1px solid ${active ? C.ink : C.border}`,
                        bgcolor: active ? C.ink : "rgba(255,255,255,0.85)",
                        color: active ? C.white : C.text,
                        transition: "all 0.2s ease",
                        "&:hover": { borderColor: C.ink, color: active ? C.white : C.ink },
                      }}>
                      {t.label}
                      {t.count !== undefined && (
                        <Box component="span" sx={{ fontSize: "0.72rem", fontWeight: 700, px: 0.75, borderRadius: RADIUS.pill, bgcolor: active ? "rgba(255,255,255,0.2)" : C.surface, color: active ? C.white : C.muted }}>
                          {t.count}
                        </Box>
                      )}
                    </Box>
                  )
                })}
              </Stack>
            </Stack>
          </Grid>

          {/* Fanned stack — hover spreads the cards, click opens one */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="cert-fan" sx={{ position: "relative", height: { xs: 300, sm: 380, md: 460 }, perspective: "1400px" }}>
              {certs.map((cert, i) => (
                <Box
                  key={cert.image}
                  component="button"
                  type="button"
                  onClick={() => onOpen(cert)}
                  aria-label={`View ${cert.title} certificate`}
                  className="cert-fan-card"
                  style={{ ["--r" as string]: `${(i - mid) * angle}deg`, ["--i" as string]: i - mid, ["--s" as string]: spread.rest, ["--so" as string]: spread.open, zIndex: 10 - Math.abs(Math.round(i - mid)) } as React.CSSProperties}
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: { xs: "56%", md: "52%" },
                    aspectRatio: "1 / 1.33",
                    p: 0,
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "10px",
                    overflow: "hidden",
                    bgcolor: C.white,
                    boxShadow: `0 24px 50px rgba(15,34,54,0.18), 0 0 0 1px ${C.border}`,
                    transform: "translate(-50%, -50%) translateX(calc(var(--i) * var(--s))) rotate(var(--r))",
                    transition: "transform 0.5s cubic-bezier(.2,.8,.2,1), box-shadow 0.3s ease",
                    "&:hover": { zIndex: 11, boxShadow: `0 34px 70px rgba(15,34,54,0.24), 0 0 0 3px ${C.brand}` },
                    "&:focus-visible": { outline: `3px solid ${C.brand}`, outlineOffset: 4 },
                  }}>
                  <Box component="img" src={cert.image} alt={`${cert.title} certificate`} sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transform: "scale(1.55)", display: "block" }} />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

/* ------------------------------------------------------------------ */
/* Marquee strip of standards                                          */
/* ------------------------------------------------------------------ */

const Marquee: React.FC<{ items: string[] }> = ({ items }) => (
  <Box aria-hidden sx={{ overflow: "hidden", py: 1.75, background: `linear-gradient(90deg, ${C.brandDeep}, ${C.brand})`, color: C.white }}>
    <Box className="cert-marquee" sx={{ display: "flex", width: "max-content" }}>
      {[0, 1, 2, 3].map(copy => (
        <Stack key={copy} direction="row" sx={{ flex: "none" }}>
          {items.map(item => (
            <Stack key={item} direction="row" alignItems="center" sx={{ gap: 3, pr: 3, fontWeight: 700, fontSize: { xs: "0.95rem", md: "1.05rem" }, whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>
              {item}
              <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.55)" }} />
            </Stack>
          ))}
        </Stack>
      ))}
    </Box>
  </Box>
)

/* ------------------------------------------------------------------ */
/* Spotlight: one full-width spread per certificate                    */
/* ------------------------------------------------------------------ */

const TiltImage: React.FC<{ cert: CertDoc; onOpen: () => void }> = ({ cert, onOpen }) => {
  const ref = useRef<HTMLButtonElement>(null)
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - 0.5) * -10}deg`)
    el.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 12}deg`)
    el.style.setProperty("--gx", `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty("--gy", `${((e.clientY - r.top) / r.height) * 100}%`)
  }
  const onLeave = () => {
    ref.current?.style.setProperty("--rx", "0deg")
    ref.current?.style.setProperty("--ry", "0deg")
  }

  return (
    <Box sx={{ perspective: "1200px" }}>
      <Box
        ref={ref}
        component="button"
        type="button"
        onClick={onOpen}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        aria-label={`View ${cert.title} certificate`}
        sx={{
          position: "relative",
          display: "block",
          width: "100%",
          p: 0,
          border: "none",
          cursor: "zoom-in",
          borderRadius: "24px",
          overflow: "hidden",
          bgcolor: C.white,
          aspectRatio: "4 / 3",
          boxShadow: `0 40px 80px rgba(15,34,54,0.18), 0 0 0 1px ${C.border}`,
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
          transition: "transform 0.2s ease-out, box-shadow 0.3s ease",
          "&::after": { content: '""', position: "absolute", inset: 0, background: "radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.55), transparent 45%)", opacity: 0, transition: "opacity 0.3s ease", pointerEvents: "none" },
          "&:hover::after": { opacity: 1 },
          "&:hover .tilt-hint": { opacity: 1, transform: "translateY(0)" },
          "&:focus-visible": { outline: `3px solid ${C.brand}`, outlineOffset: 4 },
        }}>
        <Box component="img" src={cert.image} alt={`${cert.title} certificate`} loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "contain", transform: "scale(1.18)", display: "block" }} />
        <Stack direction="row" alignItems="center" spacing={0.75} className="tilt-hint" sx={{ position: "absolute", left: 16, bottom: 16, px: 1.5, py: 0.7, borderRadius: RADIUS.pill, bgcolor: C.ink, color: C.white, fontSize: "0.8rem", fontWeight: 600, opacity: 0, transform: "translateY(6px)", transition: "all 0.25s ease" }}>
          <ZoomInRoundedIcon sx={{ fontSize: 16 }} />
          <span>Click to enlarge</span>
        </Stack>
      </Box>
    </Box>
  )
}

const Spotlight: React.FC<{ cert: CertDoc; index: number; onOpen: () => void }> = ({ cert, index, onOpen }) => {
  const ref = useRef<HTMLDivElement>(null)
  const flip = index % 2 === 1

  // The big index number fills in while its spread is in view, like the blog's numbered list
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => el.classList.toggle("is-active", e.isIntersecting), { rootMargin: "-35% 0px -35% 0px" })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Box ref={ref} sx={{ position: "relative", py: { xs: 6, md: 9 }, "&.is-active .spot-num, &:hover .spot-num": { WebkitTextStroke: "0px", backgroundImage: GRADIENT.number, transform: "scale(1.06)" } }}>
      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center" direction={{ xs: "column-reverse", md: flip ? "row-reverse" : "row" }} sx={{ position: "relative" }}>
        <Grid size={{ xs: 12, md: 5.5 }}>
          {/* Index number above the title — outlined, fills in while the spread is in view */}
          <Typography aria-hidden className="spot-num" sx={{ fontSize: { xs: "4rem", md: "5.5rem" }, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: `2px ${C.muted}`, backgroundImage: "none", WebkitBackgroundClip: "text", backgroundClip: "text", transformOrigin: "left bottom", transition: "all 0.45s ease", userSelect: "none", mb: 2 }}>
            {String(index + 1).padStart(2, "0")}
          </Typography>
          {cert.label && (
            <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, px: 1.5, py: 0.5, borderRadius: RADIUS.pill, bgcolor: C.brandTint, color: C.brandDark, fontSize: "0.78rem", fontWeight: 700 }}>
              <VerifiedRoundedIcon sx={{ fontSize: 16 }} />
              {cert.label}
            </Box>
          )}
          <Typography component="h2" sx={{ mt: 2, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, fontSize: { xs: "2.6rem", md: "3.4rem" }, background: `linear-gradient(120deg, ${C.ink} 30%, ${C.brandDeep} 70%, ${C.brand})`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", pb: "0.06em" }}>
            {cert.title}
          </Typography>
          <Typography sx={{ mt: 1.5, color: C.muted, fontSize: { xs: "1.05rem", md: "1.15rem" }, lineHeight: 1.6 }}>{cert.subtitle}</Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4 }}>
            <Button onClick={onOpen} startIcon={<ZoomInRoundedIcon />} sx={{ ...btn.primary, py: 1.3 }}>
              View certificate
            </Button>
            <Button component="a" href={cert.image} target="_blank" rel="noopener noreferrer" endIcon={<NorthEastRoundedIcon />} sx={{ ...btn.secondary, py: 1.3 }}>
              Open full size
            </Button>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6.5 }}>
          <TiltImage cert={cert} onOpen={onOpen} />
        </Grid>
      </Grid>
    </Box>
  )
}

/* ------------------------------------------------------------------ */
/* Context block: why these documents are asked for                    */
/* ------------------------------------------------------------------ */

const QmsSet: React.FC = () => (
  <Box component="section" sx={{ position: "relative", overflow: "hidden", bgcolor: C.surface, py: { xs: 8, md: 11 } }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
        <Grid size={{ xs: 12, md: 5.5 }}>
          <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.brandDark }}>Requested as a set</Typography>
          <Typography component="h2" sx={{ mt: 2, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.02, fontSize: { xs: "2.4rem", md: "3.2rem" }, color: C.ink }}>
            Most commonly requested together
          </Typography>
          <Typography sx={{ mt: 2.5, color: C.muted, fontSize: "1.05rem", lineHeight: 1.75 }}>Our quality, environmental and health and safety management systems are certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 — the three documents most commonly requested together as part of supplier pre-qualification.</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6.5 }}>
          {/* Three overlapping rings meeting at the pre-qualification centre */}
          <Box sx={{ position: "relative", width: "100%", maxWidth: 520, mx: "auto", aspectRatio: "1 / 0.92" }}>
            {[
              { label: "Quality", std: "ISO 9001", x: "50%", y: "32%", c: "rgba(1,176,240,0.16)", b: C.brand },
              { label: "Environment", std: "ISO 14001", x: "32%", y: "64%", c: "rgba(3,104,166,0.14)", b: C.brandDeep },
              { label: "Health & Safety", std: "ISO 45001", x: "68%", y: "64%", c: "rgba(60,198,245,0.16)", b: "#3CC6F5" },
            ].map((ring, i) => (
              <Box key={ring.label} className="cert-ring" style={{ animationDelay: `${i * 0.6}s` }} sx={{ position: "absolute", left: ring.x, top: ring.y, width: "56%", aspectRatio: "1", transform: "translate(-50%, -50%)", borderRadius: "50%", bgcolor: ring.c, border: `2px solid ${ring.b}`, mixBlendMode: "multiply" }}>
                <Box sx={{ position: "absolute", left: i === 0 ? "50%" : i === 1 ? "34%" : "66%", top: i === 0 ? "24%" : "68%", transform: "translate(-50%, -50%)", textAlign: "center", width: "62%" }}>
                  <Typography sx={{ fontWeight: 900, color: C.ink, fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.1 }}>{ring.label}</Typography>
                  <Typography sx={{ mt: 0.25, color: C.brandDark, fontSize: "0.78rem", fontWeight: 700 }}>{ring.std}</Typography>
                </Box>
              </Box>
            ))}
            <Box sx={{ position: "absolute", left: "50%", top: "53%", transform: "translate(-50%, -50%)", px: 1.75, py: 1, borderRadius: RADIUS.pill, bgcolor: C.ink, color: C.white, fontWeight: 800, fontSize: { xs: "0.72rem", md: "0.82rem" }, whiteSpace: "nowrap", boxShadow: SHADOW.hover }}>Supplier pre-qualification</Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

/* ------------------------------------------------------------------ */
/* Showcase body for the /certificates overview                        */
/* ------------------------------------------------------------------ */

export const CertShowcase: React.FC<{ heading: string; intro: React.ReactNode; certs: CertDoc[]; tabs: Tab[]; onOpen: (cert: CertDoc) => void }> = ({ heading, intro, certs, tabs, onOpen }) => (
  <>
    <GlobalStyles
      styles={{
        "@keyframes certFloat": { "0%, 100%": { translate: "0 0" }, "50%": { translate: "0 -14px" } },
        "@keyframes certOrb": { "0%, 100%": { transform: "translate(0, 0) scale(1)" }, "50%": { transform: "translate(-40px, 30px) scale(1.12)" } },
        "@keyframes certMarquee": { to: { transform: "translateX(-25%)" } },
        "@keyframes certRing": { "0%, 100%": { scale: "1" }, "50%": { scale: "1.04" } },
        ".cert-fan": { animation: "certFloat 6s ease-in-out infinite" },
        ".cert-fan:hover .cert-fan-card": { transform: "translate(-50%, -50%) translateX(calc(var(--i) * var(--so))) rotate(calc(var(--r) * 0.6)) translateY(-8px)" },
        ".cert-fan .cert-fan-card:hover": { transform: "translate(-50%, -50%) translateX(calc(var(--i) * var(--so))) rotate(0deg) translateY(-24px) scale(1.06)" },
        ".cert-orb": { animation: "certOrb 12s ease-in-out infinite" },
        ".cert-marquee": { animation: "certMarquee 40s linear infinite" },
        ".cert-ring": { animation: "certRing 5s ease-in-out infinite" },
        "@media (prefers-reduced-motion: reduce)": { ".cert-fan, .cert-orb, .cert-marquee, .cert-ring": { animation: "none" } },
      }}
    />
    <Hero heading={heading} intro={intro} certs={certs} tabs={tabs} onOpen={onOpen} />
    <Marquee items={certs.map(c => c.title)} />
    <Box component="section" sx={{ bgcolor: C.white, overflow: "hidden", pt: { xs: 4, md: 6 }, pb: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        {certs.map((cert, i) => (
          <Box key={cert.image} sx={{ borderTop: i === 0 ? "none" : `1px dashed ${C.border}` }}>
            <Spotlight cert={cert} index={i} onOpen={() => onOpen(cert)} />
          </Box>
        ))}
      </Container>
    </Box>
    <QmsSet />
  </>
)
