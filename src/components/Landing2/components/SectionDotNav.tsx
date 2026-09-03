import { useEffect, useRef, useState } from "react"
import { Box, Stack, Tooltip } from "@mui/material"

const BRAND_BLUE = "#01B0F0"

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "industries", label: "Industries" },
  { id: "hydrogen", label: "Hydrogen" },
  { id: "technical", label: "Support" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
]

const SectionDotNav = () => {
  const [activeId, setActiveId] = useState("home")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const elements = SECTIONS.map(s => document.getElementById(s.id)).filter((el): el is HTMLElement => Boolean(el))
    if (!elements.length) return

    observerRef.current = new IntersectionObserver(
      entries => {
        // Pick the entry closest to the top of the viewport among those currently intersecting
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    )

    elements.forEach(el => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" })
  }

  return (
    <Stack
      spacing={1.5}
      sx={{
        position: "fixed",
        right: { xs: 12, md: 20 },
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1100,
        display: { xs: "none", lg: "flex" },
      }}>
      {SECTIONS.map(section => {
        const isActive = activeId === section.id
        return (
          <Tooltip key={section.id} title={section.label} placement="left">
            <Box
              component="button"
              onClick={() => handleClick(section.id)}
              aria-label={`Jump to ${section.label} section`}
              aria-current={isActive}
              sx={{
                width: isActive ? 12 : 8,
                height: isActive ? 12 : 8,
                borderRadius: "50%",
                border: "none",
                p: 0,
                cursor: "pointer",
                bgcolor: isActive ? BRAND_BLUE : "rgba(148,163,184,0.5)",
                transition: "all 0.25s ease",
                "&:hover": { bgcolor: BRAND_BLUE, transform: "scale(1.3)" },
              }}
            />
          </Tooltip>
        )
      })}
    </Stack>
  )
}

export default SectionDotNav
