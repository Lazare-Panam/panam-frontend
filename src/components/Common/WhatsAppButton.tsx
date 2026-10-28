import { Box, Fab, Zoom } from "@mui/material"
import { useLocation } from "react-router-dom"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

// WhatsApp's official "Click to Chat" format: full international number, no +, no leading 0, no spaces.
// 07369 243459 (UK) -> +44 7369 243459 -> 447369243459
const WHATSAPP_NUMBER = "447369243459"
const PREFILLED_MESSAGE = "Hi Panam Valve, I have an enquiry."
// wa.me answers with a 302 to this URL; linking here directly avoids the redirect (flagged by SEO audits)
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(PREFILLED_MESSAGE)}`

const WHATSAPP_GREEN = "#25D366"
// Mirror StickyQuoteButton's hide-list so we don't clutter the transactional/admin pages.
const HIDDEN_ON_PREFIXES = ["/enquiry", "/admin", "/dashboard", "/cart", "/login"]

const WhatsAppButton = () => {
  const location = useLocation()
  const hiddenHere = HIDDEN_ON_PREFIXES.some(prefix => location.pathname.startsWith(prefix))

  if (hiddenHere) return null

  return (
    <Zoom in>
      <Fab
        component="a"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        sx={{
          position: "fixed",
          // Bottom-LEFT so it never collides with the bottom-right Request-a-Quote Fab.
          bottom: { xs: 16, md: 28 },
          left: { xs: 16, md: 28 },
          zIndex: 1200,
          bgcolor: WHATSAPP_GREEN,
          color: "#fff",
          boxShadow: "0 8px 24px rgba(37,211,102,0.4)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
          "&:hover": {
            bgcolor: "#1EBE57",
            transform: "translateY(-2px)",
            boxShadow: "0 12px 30px rgba(37,211,102,0.5)",
          },
          "&:active": { transform: "translateY(0)" },
        }}>
        <WhatsAppIcon />
        {/* Visible to crawlers and screen readers only, so the icon link has anchor text */}
        <Box component="span" sx={{ position: "absolute", width: "1px", height: "1px", p: 0, m: "-1px", overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0 }}>
          Chat on WhatsApp
        </Box>
      </Fab>
    </Zoom>
  )
}

export default WhatsAppButton
