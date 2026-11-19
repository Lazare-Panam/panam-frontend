import { useEffect, useState } from "react"
import { Fab, Zoom } from "@mui/material"
import { Link as RouterLink, useLocation } from "react-router-dom"
import RequestQuoteIcon from "@mui/icons-material/RequestQuote"

const BRAND_BLUE = "#01B0F0"
const SHOW_AFTER_PX = 500
const HIDDEN_ON_PREFIXES = ["/enquiry", "/admin", "/dashboard", "/cart", "/login"]

const StickyQuoteButton = () => {
  const [visible, setVisible] = useState(false)
  const [overFooter, setOverFooter] = useState(false)
  const location = useLocation()
  const hiddenHere = HIDDEN_ON_PREFIXES.some(prefix => location.pathname.startsWith(prefix))

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // The footer shares the same brand-blue background as this button — invert colors
  // while the footer is in view so the button doesn't disappear against it.
  useEffect(() => {
    const footer = document.getElementById("site-footer")
    if (!footer) return
    const observer = new IntersectionObserver(([entry]) => setOverFooter(entry.isIntersecting), { rootMargin: "-50% 0px 0px 0px" })
    observer.observe(footer)
    return () => observer.disconnect()
  }, [location.pathname])

  if (hiddenHere) return null

  return (
    <Zoom in={visible}>
      <Fab
        component={RouterLink}
        viewTransition
        to="/enquiry"
        variant="extended"
        aria-label="Request a quote"
        sx={{
          // top-left, just below the sticky header (bottom-right is Disha's chat button)
          position: "fixed",
          top: { xs: 84, md: 96 },
          left: { xs: 16, md: 28 },
          zIndex: 1200,
          bgcolor: overFooter ? "#fff" : BRAND_BLUE,
          color: overFooter ? BRAND_BLUE : "#fff",
          border: overFooter ? `2px solid ${BRAND_BLUE}` : "none",
          fontWeight: 700,
          textTransform: "none",
          px: 3,
          boxShadow: overFooter ? "0 8px 24px rgba(0,0,0,0.25)" : "0 8px 24px rgba(1,176,240,0.4)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
          "&:hover": {
            bgcolor: overFooter ? "#F0FBFF" : "#0090C5",
            transform: "translateY(-2px)",
            boxShadow: overFooter ? "0 12px 30px rgba(0,0,0,0.3)" : "0 12px 30px rgba(1,176,240,0.5)",
          },
          "&:active": { transform: "translateY(0)" },
        }}>
        <RequestQuoteIcon sx={{ mr: 1 }} />
        Request a Quote
      </Fab>
    </Zoom>
  )
}

export default StickyQuoteButton
