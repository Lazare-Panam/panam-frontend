import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"
import { Box, Button, ButtonBase, CircularProgress, IconButton, InputBase, Paper, TextField, Tooltip, Typography, Zoom, Grow, useMediaQuery } from "@mui/material"
import { motion } from "framer-motion"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import CloseIcon from "@mui/icons-material/Close"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import SendRoundedIcon from "@mui/icons-material/SendRounded"
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded"
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded"
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined"
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined"
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded"
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined"
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined"
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import CallOutlinedIcon from "@mui/icons-material/CallOutlined"
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded"
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded"
import { askChatbot, requestAiAccess } from "../../api/chatApi"
import { C, FONT, RADIUS, SHADOW, GRADIENT } from "../Landing2/homeTokens"
import DishaAvatar from "./DishaAvatar"
import dishaPoster from "../../assets/chatbot/disha.jpg"

// Cloudflare Turnstile injects a global once its script loads.
declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string
      remove: (id: string) => void
      reset: (id?: string) => void
    }
  }
}

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined

// How many messages a visitor gets before the details form appears.
const FREE_USER_MESSAGES = 4

// Match the other floating buttons: stay off the transactional/admin pages.
const HIDDEN_ON_PREFIXES = ["/admin", "/dashboard", "/cart", "/login"]

// Auto-open: pop the chat up shortly after the page loads, unless the visitor closed it in this tab.
const AUTO_OPEN_DELAY_MS = 1500
const DISMISSED_KEY = "panam-chat-dismissed"

const ONLINE_GREEN = "#22C55E"
const SALES_EMAIL = "sales@panamvalves.co.uk"

// Quick-link cards (sidebar on desktop, start screen on mobile). Each has its own tint.
const QUICK_LINKS: { label: string; to: string; icon: ReactNode; color: string; tint: string }[] = [
  { label: "Quote", to: "/enquiry", icon: <RequestQuoteOutlinedIcon />, color: "#0368A6", tint: "#F2F8FD" },
  { label: "CAD Files", to: "/cad-step-files", icon: <ViewInArOutlinedIcon />, color: "#0891B2", tint: "#F0FAFC" },
  { label: "Valves", to: "/valves", icon: <TuneOutlinedIcon />, color: "#7C3AED", tint: "#F7F3FF" },
  { label: "Products", to: "/products", icon: <Inventory2OutlinedIcon />, color: "#D97706", tint: "#FFFAF0" },
  { label: "Catalogs", to: "/catalogPdfs", icon: <MenuBookOutlinedIcon />, color: "#DC2626", tint: "#FFF5F5" },
  { label: "Certs", to: "/certificates", icon: <VerifiedOutlinedIcon />, color: "#059669", tint: "#F1FBF6" },
  { label: "Enquiry", to: "/enquiry", icon: <SupportAgentOutlinedIcon />, color: "#EA580C", tint: "#FFF7F1" },
  { label: "About", to: "/about", icon: <InfoOutlinedIcon />, color: "#DB2777", tint: "#FEF4F9" },
]

// Ready-made questions shown under the greeting - one click sends them.
// Picked so the catalogue can actually answer them.
const SUGGESTED_QUESTIONS = [
  "What types of tube fittings does PANAM make?",
  "What sizes do your male connectors come in?",
  "Do you have union tees in metric sizes?",
  "How do I read a PANAM part number?",
]

// Per-tab keys: conversation id for the bot's memory, whether this visitor has
// submitted their details, and how many messages they've sent this session
// (counted across "New chat", so starting over doesn't skip the details form).
const CID_KEY = "panam-chat-cid"
const UNLOCK_KEY = "panam-ai-unlocked"
const SENT_KEY = "panam-ai-sent"

// The backend creates the conversation id and returns it on the first answer.
// We just remember it (per tab) so a page refresh keeps the same conversation.
const getStoredConversationId = () => (typeof window === "undefined" ? null : window.sessionStorage.getItem(CID_KEY))
const getUnlocked = () => (typeof window === "undefined" ? false : window.sessionStorage.getItem(UNLOCK_KEY) === "1")
const getSentCount = () => (typeof window === "undefined" ? 0 : Number(window.sessionStorage.getItem(SENT_KEY) ?? "0") || 0)

interface Message {
  role: "user" | "bot"
  text: string
  time: string
}

const timeNow = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

const greeting = (): Message => ({
  role: "bot",
  text: "Hello, I'm **Disha**, PANAM's AI assistant 👋 Ask me about our tube fittings, valves, manifolds or part numbers. I answer from the PANAM catalogue and our live product range.",
  time: timeNow(),
})

// --- Safe inline formatting (never dangerouslySetInnerHTML) -----------------
// Emails and phone numbers in answers become clickable "contact chips".
const CONTACT_RE = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}|\+\d[\d\s()-]{7,}\d)/g

const contactChipSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.5,
  px: 1,
  py: 0.1,
  mx: 0.25,
  borderRadius: "999px",
  bgcolor: C.brandTint,
  border: `1px solid ${C.brand}40`,
  color: C.brandDeep,
  fontWeight: 700,
  textDecoration: "none",
  whiteSpace: "nowrap",
  textTransform: "none",
  verticalAlign: "baseline",
  transition: "background-color 0.15s ease, border-color 0.15s ease",
  "& svg": { fontSize: "0.95em" },
  "&:hover": { bgcolor: "#D2F0FD", borderColor: C.brand },
} as const

const renderContacts = (text: string, keyPrefix: string) =>
  text.split(CONTACT_RE).map((part, i) => {
    const key = `${keyPrefix}-c${i}`
    if (i % 2 === 0) return part ? <span key={key}>{part}</span> : null
    const email = part.includes("@")
    const href = email ? `mailto:${part}` : `tel:${part.replace(/[^\d+]/g, "")}`
    return (
      <Box key={key} component="a" href={href} sx={contactChipSx}>
        {email ? <MailOutlineRoundedIcon /> : <CallOutlinedIcon />}
        {part}
      </Box>
    )
  })

const LINK_RE = /(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|https?:\/\/[^\s)<>\]]+)/g
const MD_LINK_RE = /^\[([^\]]+)\]\((.+)\)$/
const ALLOWED_LINK_RE = /^https:\/\/(www\.)?panamvalve\.com(\/|$)/i

const linkSx = {
  color: C.brandDeep,
  fontWeight: 700,
  textDecoration: "underline",
  textUnderlineOffset: "2px",
  wordBreak: "break-word",
  "&:hover": { color: C.brand },
} as const

const linkLabel = (url: string) => {
  const last = url.replace(/\/+$/, "").split("/").pop() ?? ""
  return last && !last.includes(".") ? last : "panamvalve.com"
}

const renderLinks = (text: string, keyPrefix: string) =>
  text.split(LINK_RE).map((part, i) => {
    const key = `${keyPrefix}-u${i}`
    if (i % 2 === 0) return part ? <span key={key}>{renderContacts(part, key)}</span> : null
    const md = part.match(MD_LINK_RE)
    const raw = md ? md[2] : part
    const url = raw.replace(/[.,;:!?]+$/, "")
    const trailing = raw.slice(url.length)
    const label = md ? md[1] : linkLabel(url)
    if (!ALLOWED_LINK_RE.test(url)) return <span key={key}>{md ? label : part}</span>
    return (
      <span key={key}>
        <Box component="a" href={url} target="_blank" rel="noopener noreferrer" sx={linkSx}>
          {label}
        </Box>
        {trailing}
      </span>
    )
  })

const renderBold = (line: string, keyPrefix: string) =>
  line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${keyPrefix}-${i}`}>{renderLinks(part.slice(2, -2), `${keyPrefix}-${i}`)}</strong>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{renderLinks(part, `${keyPrefix}-${i}`)}</span>
    ),
  )

const RichText = ({ text }: { text: string }) => (
  <>
    {text.split("\n").map((line, i) => {
      const trimmed = line.trimStart()
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        return (
          <Box key={i} sx={{ display: "flex", gap: 1, pl: 0.25, my: 0.35 }}>
            <Box component="span" sx={{ color: C.brand, fontSize: "0.7rem", lineHeight: 2.1 }}>◆</Box>
            <Box component="span">{renderBold(trimmed.slice(2), `l${i}`)}</Box>
          </Box>
        )
      }
      return (
        <Box key={i} component="p" sx={{ m: 0, my: line.trim() === "" ? 0.6 : 0 }}>
          {renderBold(line, `l${i}`)}
        </Box>
      )
    })}
  </>
)

// --- Turnstile captcha widget ----------------------------------------------
type CaptchaStatus = "loading" | "ready" | "verified" | "failed"

const TurnstileWidget = ({ onToken }: { onToken: (t: string | null) => void }) => {
  const ref = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const [status, setStatus] = useState<CaptchaStatus>("loading")
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let cancelled = false
    setStatus("loading")
    const render = () => {
      if (cancelled || !ref.current || !window.turnstile || widgetId.current !== null || !TURNSTILE_SITE_KEY) return
      widgetId.current = window.turnstile.render(ref.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => {
          onToken(token)
          setStatus("verified")
        },
        "error-callback": () => {
          onToken(null)
          setStatus("failed")
        },
        "expired-callback": () => {
          onToken(null)
          setStatus("ready")
        },
      })
      setStatus("ready")
    }
    const fail = () => {
      if (!cancelled) setStatus("failed")
    }
    const timeout = window.setTimeout(() => {
      if (!cancelled && widgetId.current === null) setStatus("failed")
    }, 10000)

    if (window.turnstile) {
      render()
    } else {
      const existing = document.querySelector<HTMLScriptElement>("script[data-turnstile]")
      if (existing) {
        existing.addEventListener("load", render)
        existing.addEventListener("error", fail)
      } else {
        const s = document.createElement("script")
        s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        s.async = true
        s.defer = true
        s.setAttribute("data-turnstile", "")
        s.onload = render
        s.onerror = fail
        document.head.appendChild(s)
      }
    }

    return () => {
      cancelled = true
      window.clearTimeout(timeout)
      if (widgetId.current && window.turnstile) {
        try { window.turnstile.remove(widgetId.current) } catch { /* already gone */ }
      }
      widgetId.current = null
    }
  }, [onToken, attempt])

  if (!TURNSTILE_SITE_KEY) {
    return <Typography sx={{ fontFamily: FONT, fontSize: "0.72rem", color: "#c0392b" }}>Captcha not configured (missing VITE_TURNSTILE_SITE_KEY).</Typography>
  }
  return (
    <Box sx={{ border: `1px solid ${C.border}`, borderRadius: "14px", p: 1.25, bgcolor: "#F8FBFD" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mb: 0.75 }}>
        <VerifiedOutlinedIcon sx={{ fontSize: "1rem", color: C.brand }} />
        <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: "0.8rem", color: C.ink }}>Security check</Typography>
        {status === "verified" && (
          <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: "0.76rem", color: "#059669", ml: "auto" }}>✓ Verified</Typography>
        )}
      </Box>
      {status === "loading" && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, py: 0.5 }}>
          <CircularProgress size={14} />
          <Typography sx={{ fontFamily: FONT, fontSize: "0.76rem", color: C.text }}>Loading the security check…</Typography>
        </Box>
      )}
      <div ref={ref} />
      {status === "ready" && (
        <Typography sx={{ fontFamily: FONT, fontSize: "0.72rem", color: C.text, mt: 0.5 }}>
          Tick the box above to confirm you're human. Sometimes it completes by itself.
        </Typography>
      )}
      {status === "failed" && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
          <Typography sx={{ fontFamily: FONT, fontSize: "0.76rem", color: "#c0392b", flex: 1, minWidth: 180 }}>
            The security check didn't load. Check your connection or ad blocker, then try again.
          </Typography>
          <Button size="small" variant="outlined" onClick={() => setAttempt((a) => a + 1)} sx={{ fontFamily: FONT, textTransform: "none", borderRadius: RADIUS.pill }}>
            Try again
          </Button>
        </Box>
      )}
    </Box>
  )
}

// --- Small building blocks ----------------------------------------------------
const BotAvatar = ({ size = 34 }: { size?: number }) => (
  <Box sx={{ width: size, height: size, flexShrink: 0, borderRadius: "50%", bgcolor: C.white, border: `1px solid ${C.border}`, boxShadow: SHADOW.card, display: "grid", placeItems: "center", overflow: "hidden" }}>
    <DishaAvatar variant="head" size={size * 0.82} />
  </Box>
)

const OnlineDot = ({ size = 10, border = C.white }: { size?: number; border?: string }) => (
  <Box sx={{ position: "absolute", right: 1, bottom: 1, width: size, height: size, borderRadius: "50%", bgcolor: ONLINE_GREEN, border: `2px solid ${border}` }} />
)

const TypingDots = () => (
  <Box sx={{ display: "flex", gap: 0.6, alignItems: "center", height: 20 }}>
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        style={{ width: 8, height: 8, borderRadius: "50%", background: C.brand, display: "inline-block" }}
      />
    ))}
  </Box>
)

const Divider = () => <Box sx={{ borderTop: `1px solid ${C.border}`, mx: -3 }} />

const QuickLinkGrid = ({ onPick, compact = false }: { onPick: () => void; compact?: boolean }) => (
  <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: compact ? 1 : 1.25 }}>
    {QUICK_LINKS.map((q) => (
      <ButtonBase
        key={q.to}
        component={RouterLink}
        to={q.to}
        onClick={onPick}
        sx={{
          flexDirection: "column",
          gap: 0.75,
          py: compact ? 1.1 : 1.6,
          borderRadius: "18px",
          bgcolor: q.tint,
          color: q.color,
          border: `1.5px solid ${q.color}1F`,
          transition: "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
          "&:hover": { transform: "translateY(-2px)", borderColor: `${q.color}55`, boxShadow: `0 10px 22px ${q.color}1F` },
          "& svg": { fontSize: compact ? "1.25rem" : "1.45rem" },
        }}>
        {q.icon}
        <Typography sx={{ fontFamily: FONT, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>{q.label}</Typography>
      </ButtonBase>
    ))}
  </Box>
)

// Disha's greeting video (stored in Azure Blob Storage, container panam-images/chatbot).
const DISHA_VIDEO_URL = "https://pblol2.blob.core.windows.net/panam-images/chatbot/Cartoon_mascot_waving_and_speaking_7764cd3a.mp4"

/**
 * Disha waving and saying "Hello, I'm Disha".
 * - Always starts MUTED and loops silently (no sound unless the visitor asks for it).
 * - Speaker button: unmute -> replays the greeting from the start WITH sound, once;
 *   when it ends she goes back to looping silently. While it's playing with sound,
 *   the same button mutes it.
 * - A speech-bubble subtitle under the video shows what she says.
 */
const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  const playMuted = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.loop = true
    v.play().catch(() => { /* autoplay fully blocked: the poster image stays visible */ })
  }, [])

  const playWithSound = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.loop = false
    v.muted = false
    v.currentTime = 0
    v.play().catch(playMuted)
  }, [playMuted])

  // Start silently as soon as the panel opens.
  useEffect(() => {
    playMuted()
  }, [playMuted])

  return (
    <Box sx={{ position: "relative", pb: 4.5 }}>
      <Box sx={{ position: "relative", borderRadius: "24px", overflow: "hidden", bgcolor: C.white, border: `1px solid ${C.border}`, boxShadow: "0 10px 28px rgba(15,34,54,0.10)" }}>
        <Box
          component="video"
          ref={videoRef}
          src={DISHA_VIDEO_URL}
          poster={dishaPoster}
          muted
          loop
          playsInline
          preload="auto"
          // after the spoken greeting finishes, keep her moving silently
          onEnded={() => { if (!videoRef.current?.loop) playMuted() }}
          // keep the speaker icon in sync with the video's real mute state
          onVolumeChange={() => setMuted(videoRef.current?.muted ?? true)}
          aria-label="Disha waving and saying hello"
          sx={{ display: "block", width: "100%", aspectRatio: "16 / 9", objectFit: "cover" }}
        />
        <Tooltip title={muted ? "Turn sound on" : "Mute"}>
          <IconButton
            size="small"
            onClick={muted ? playWithSound : playMuted}
            aria-label={muted ? "Turn sound on" : "Mute"}
            sx={{ position: "absolute", right: 10, top: 10, bgcolor: "rgba(255,255,255,0.92)", color: C.brandDark, boxShadow: SHADOW.card, "&:hover": { bgcolor: C.white } }}>
            {muted ? <VolumeOffRoundedIcon fontSize="small" /> : <VolumeUpRoundedIcon fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Subtitle: pill badge overlapping the bottom of the video */}
      <Box sx={{ position: "absolute", left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "center" }}>
        <motion.div initial={{ opacity: 0, y: 12, scale: 0.85 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 18 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              pl: 0.75,
              pr: 2.25,
              py: 0.75,
              borderRadius: RADIUS.pill,
              // white fill + PANAM gradient outline
              border: "2px solid transparent",
              background: `linear-gradient(${C.white}, ${C.white}) padding-box, ${GRADIENT.brand} border-box`,
              boxShadow: "0 12px 28px rgba(3,104,166,0.20), 0 2px 6px rgba(15,34,54,0.06)",
            }}>
            {/* waving hand in a brand-blue circle */}
            <Box sx={{ width: 36, height: 36, flexShrink: 0, borderRadius: "50%", background: GRADIENT.brand, display: "grid", placeItems: "center", boxShadow: "inset 0 -2px 6px rgba(0,0,0,0.12)" }}>
              <Box
                component="span"
                aria-hidden
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1,
                  display: "inline-block",
                  transformOrigin: "70% 70%",
                  "@keyframes pillWave": {
                    "0%, 60%, 100%": { transform: "rotate(0deg)" },
                    "10%, 30%": { transform: "rotate(16deg)" },
                    "20%": { transform: "rotate(-8deg)" },
                    "40%": { transform: "rotate(-4deg)" },
                    "50%": { transform: "rotate(10deg)" },
                  },
                  animation: "pillWave 2.4s ease-in-out infinite",
                }}>
                👋
              </Box>
            </Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.98rem", color: C.ink, lineHeight: 1.15, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
                Hello, I'm Disha!
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mt: 0.3 }}>
                <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: ONLINE_GREEN, boxShadow: `0 0 0 3px ${ONLINE_GREEN}26` }} />
                <Typography sx={{ fontFamily: FONT, fontSize: "0.7rem", fontWeight: 600, color: C.brandDark, letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
                  Your AI assistant
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  )
}

// --- The widget ---------------------------------------------------------------
const ChatWidget = () => {
  const location = useLocation()
  const hiddenHere = HIDDEN_ON_PREFIXES.some((p) => location.pathname.startsWith(p))

  const [open, setOpen] = useState(false)

  // Open automatically on a visitor's first page view (after a short delay so the page
  // shows first). If they close it, remember that for this tab so it doesn't keep popping up.
  useEffect(() => {
    if (hiddenHere || window.sessionStorage.getItem(DISMISSED_KEY) === "1") return
    const t = window.setTimeout(() => setOpen(true), AUTO_OPEN_DELAY_MS)
    return () => window.clearTimeout(t)
  }, [hiddenHere])

  const closeChat = () => {
    window.sessionStorage.setItem(DISMISSED_KEY, "1")
    setOpen(false)
  }
  // Only one greeting video may exist (sidebar on desktop, start screen on mobile),
  // otherwise both would play the sound.
  // Plain media query (this app has no MUI ThemeProvider); 900px = MUI's "md" breakpoint.
  const isDesktop = useMediaQuery("(min-width:900px)")
  const [messages, setMessages] = useState<Message[]>(() => [greeting()])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [unlocked, setUnlocked] = useState<boolean>(getUnlocked())
  const [sentCount, setSentCount] = useState<number>(getSentCount())

  // Gate form state
  const [gName, setGName] = useState("")
  const [gPhone, setGPhone] = useState("")
  const [gEmail, setGEmail] = useState("")
  const [gProject, setGProject] = useState("")
  const [gWebsite, setGWebsite] = useState("") // honeypot
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [gateError, setGateError] = useState<string | null>(null)

  const conversationId = useRef<string | null>(getStoredConversationId())
  const bottomRef = useRef<HTMLDivElement>(null)

  // Once they've used their free messages and haven't submitted details, the
  // input is replaced by the details form and the chat won't go further.
  const gateRequired = !unlocked && sentCount >= FREE_USER_MESSAGES
  const atStart = !messages.some((m) => m.role === "user")

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open, gateRequired, loading])

  const sendText = async (raw: string) => {
    const text = raw.trim()
    if (!text || loading || gateRequired) return

    const nextSent = sentCount + 1
    setSentCount(nextSent)
    window.sessionStorage.setItem(SENT_KEY, String(nextSent))

    setMessages((prev) => [...prev, { role: "user", text, time: timeNow() }])
    setInput("")
    setLoading(true)
    try {
      const { conversationId: newId, answer } = await askChatbot(text, conversationId.current)
      conversationId.current = newId
      window.sessionStorage.setItem(CID_KEY, newId)
      setMessages((prev) => [...prev, { role: "bot", text: answer, time: timeNow() }])
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: `Sorry, something went wrong. Please try again, or contact **${SALES_EMAIL}**.`, time: timeNow() }])
    } finally {
      setLoading(false)
    }
  }

  // Start over: forget the conversation id so the backend creates a fresh one
  // (the bot won't remember the previous chat).
  const newChat = () => {
    if (loading) return
    conversationId.current = null
    window.sessionStorage.removeItem(CID_KEY)
    setMessages([greeting()])
    setInput("")
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      void sendText(input)
    }
  }

  const submitGate = async () => {
    if (submitting) return
    if (!gName.trim() || !gPhone.trim()) {
      setGateError("Please enter your name and phone number.")
      return
    }
    if (!captchaToken) {
      setGateError("Please complete the security check above.")
      return
    }
    setSubmitting(true)
    setGateError(null)
    try {
      await requestAiAccess({
        name: gName.trim(),
        phone: gPhone.trim(),
        email: gEmail.trim() || undefined,
        project: gProject.trim() || undefined,
        captchaToken,
        sourcePage: location.pathname,
        website: gWebsite, // honeypot
      })
      window.sessionStorage.setItem(UNLOCK_KEY, "1")
      setUnlocked(true)
      setMessages((prev) => [...prev, { role: "bot", text: "Thanks — you're all set! Ask me anything else about PANAM products. 🙌", time: timeNow() }])
    } catch {
      setGateError("We couldn't verify that. Please complete the security check again.")
      setCaptchaToken(null)
      if (window.turnstile) try { window.turnstile.reset() } catch { /* noop */ }
    } finally {
      setSubmitting(false)
    }
  }

  if (hiddenHere) return null


  return (
    <>
      {/* Launcher: floating Disha head with an "online" dot */}
      <Zoom in={!open}>
        <Box sx={{ position: "fixed", bottom: { xs: 10, md: 22 }, right: { xs: 16, md: 28 }, zIndex: 1200 }}>
          <Tooltip title="Chat with Disha" placement="left" arrow>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              <ButtonBase
                aria-label="Open PANAM AI assistant"
                onClick={() => setOpen(true)}
                sx={{
                  position: "relative",
                  width: 68,
                  height: 68,
                  borderRadius: "50%",
                  p: "3px",
                  background: GRADIENT.brand,
                  boxShadow: SHADOW.brand,
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.06)" },
                }}>
                <Box sx={{ width: "100%", height: "100%", borderRadius: "50%", bgcolor: C.white, display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <DishaAvatar variant="head" size={50} />
                </Box>
                <OnlineDot size={15} />
              </ButtonBase>
            </motion.div>
          </Tooltip>
        </Box>
      </Zoom>

      {/* Panel */}
      <Grow in={open} unmountOnExit style={{ transformOrigin: "100% 100%" }} timeout={{ enter: 450, exit: 250 }}>
        <Paper
          elevation={0}
          sx={{
            position: "fixed",
            bottom: { xs: 16, md: 24 },
            right: { xs: 16, md: 24 },
            zIndex: 1300,
            width: { xs: "calc(100vw - 32px)", sm: 440, md: 900, lg: 980 },
            height: { xs: "82vh", sm: 640, md: 680 },
            maxHeight: "calc(100vh - 40px)",
            display: "flex",
            borderRadius: "28px",
            overflow: "hidden",
            fontFamily: FONT,
            bgcolor: C.white,
            border: `1px solid ${C.border}`,
            boxShadow: "0 30px 80px rgba(15,34,54,0.25)",
          }}>
          {/* ---------- Sidebar (desktop only) ---------- */}
          <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", width: { md: 330, lg: 350 }, flexShrink: 0, bgcolor: C.white, borderRight: `1px solid ${C.border}`, px: 3, overflowY: "auto" }}>
            {/* Brand */}
            <Box sx={{ py: 2.25, textAlign: "center" }}>
              <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1.25 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: "50%", background: GRADIENT.brand, display: "grid", placeItems: "center", boxShadow: SHADOW.brand }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: "50%", bgcolor: C.white, display: "grid", placeItems: "center", overflow: "hidden" }}>
                    <DishaAvatar variant="head" size={36} />
                  </Box>
                </Box>
                <Typography sx={{ fontFamily: FONT, fontWeight: 800, fontSize: "2rem", color: C.ink, lineHeight: 1, letterSpacing: "-0.02em" }}>
                  Disha
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mt: 1.25 }}>
                <AutoAwesomeIcon sx={{ fontSize: "0.85rem", color: C.brand }} />
                <Typography sx={{ fontFamily: FONT, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", color: C.brandDark }}>PANAM AI</Typography>
                <Box sx={{ width: 4, height: 4, borderRadius: "50%", bgcolor: C.muted }} />
                <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: ONLINE_GREEN }} />
                <Typography sx={{ fontFamily: FONT, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.14em", color: C.muted }}>ONLINE</Typography>
              </Box>
            </Box>
            <Divider />

            {/* Intro - hidden on short screens so the video and all cards always fit */}
            <Box sx={{ "@media (max-height: 820px)": { display: "none" } }}>
              <Box sx={{ py: 1.75, textAlign: "center" }}>
                <Typography sx={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.12em", color: C.ink }}>YOUR PRODUCT EXPERT</Typography>
                <Typography sx={{ fontFamily: FONT, fontSize: "0.8rem", color: C.muted, mt: 0.75, lineHeight: 1.55 }}>
                  Instant answers on tube fittings, valves, sizes & part numbers — from the PANAM catalogue and our live product range.
                </Typography>
              </Box>
              <Divider />
            </Box>

            {/* Hero */}
            <Box sx={{ pt: 2.25 }}>
              {isDesktop && <HeroVideo />}
            </Box>

            <Box sx={{ flex: 1, minHeight: 12 }} />

            {/* Quick links */}
            <Box sx={{ pb: 2.25 }}>
              <QuickLinkGrid compact onPick={() => setOpen(false)} />
            </Box>
          </Box>

          {/* ---------- Chat ---------- */}
          <Box sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", bgcolor: "#F7F9FC" }}>
            {/* Header */}
            <Box sx={{ position: "relative", overflow: "hidden", background: GRADIENT.brand, color: C.white, px: { xs: 2, md: 3 }, py: { xs: 1.75, md: 2.25 }, display: "flex", alignItems: "center", gap: 1.75 }}>
              <Box sx={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.07)", top: -150, right: 120 }} />
              <Box sx={{ position: "absolute", width: 160, height: 160, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.06)", bottom: -110, left: 90 }} />

              <Box sx={{ position: "relative", width: { xs: 46, md: 54 }, height: { xs: 46, md: 54 }, flexShrink: 0 }}>
                <Box sx={{ width: "100%", height: "100%", borderRadius: "50%", bgcolor: C.white, border: "3px solid rgba(255,255,255,0.45)", display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <DishaAvatar variant="head" size={40} />
                </Box>
                <OnlineDot size={13} border={C.brand} />
              </Box>

              <Box sx={{ flex: 1, minWidth: 0, position: "relative" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontFamily: FONT, fontWeight: 800, fontSize: { xs: "1.15rem", md: "1.35rem" }, lineHeight: 1.1, letterSpacing: "-0.01em" }}>Disha</Typography>
                  <Box sx={{ px: 0.9, py: 0.15, borderRadius: RADIUS.pill, bgcolor: "rgba(255,255,255,0.22)", fontFamily: FONT, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.08em" }}>BETA</Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mt: 0.4 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#86EFAC" }} />
                  <Typography sx={{ fontFamily: FONT, fontSize: "0.8rem", opacity: 0.95 }}>We are online!</Typography>
                </Box>
              </Box>

              <Button
                onClick={newChat}
                disabled={loading || atStart}
                startIcon={<RestartAltRoundedIcon />}
                sx={{
                  position: "relative",
                  display: { xs: "none", sm: "inline-flex" },
                  color: C.white,
                  border: "1.5px solid rgba(255,255,255,0.5)",
                  borderRadius: RADIUS.pill,
                  px: 2,
                  py: 0.6,
                  fontFamily: FONT,
                  fontWeight: 700,
                  fontSize: "0.74rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.12)", borderColor: C.white },
                  "&.Mui-disabled": { color: "rgba(255,255,255,0.55)", borderColor: "rgba(255,255,255,0.28)" },
                }}>
                New chat
              </Button>
              <IconButton size="small" onClick={newChat} disabled={loading || atStart} aria-label="New chat" sx={{ display: { xs: "inline-flex", sm: "none" }, color: C.white, position: "relative" }}>
                <RestartAltRoundedIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={closeChat} aria-label="Close chat" sx={{ color: C.white, position: "relative" }}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* "We're getting there" notice, with the sales team highlighted & linked */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, px: { xs: 2, md: 3 }, py: 1, bgcolor: "#FFF8E6", borderBottom: "1px solid #FCE7B2" }}>
              <ConstructionRoundedIcon sx={{ fontSize: "1.05rem", color: "#B45309", flexShrink: 0 }} />
              <Typography sx={{ fontFamily: FONT, fontSize: "0.76rem", color: "#92400E", lineHeight: 1.45 }}>
                <strong>We're getting there!</strong> Disha is still learning our full range — some answers may be incomplete. For anything urgent, contact our{" "}
                <Box
                  component={RouterLink}
                  to="/enquiry"
                  onClick={() => setOpen(false)}
                  sx={{
                    fontWeight: 800,
                    color: C.brandDeep,
                    bgcolor: "rgba(1,176,240,0.12)",
                    px: 0.75,
                    py: 0.15,
                    borderRadius: "6px",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    "&:hover": { bgcolor: "rgba(1,176,240,0.22)", textDecoration: "underline" },
                  }}>
                  sales team →
                </Box>
              </Typography>
            </Box>

            {/* Messages */}
            <Box sx={{ flex: 1, overflowY: "auto", px: { xs: 2, md: 3.5 }, py: 2.5, fontFamily: FONT }}>
              {/* Mobile start screen: Disha + quick links (desktop shows these in the sidebar) */}
              {atStart && !isDesktop && (
                <Box sx={{ mb: 2 }}>
                  <HeroVideo />
                </Box>
              )}

              {messages.map((m, i) =>
                m.role === "bot" ? (
                  <Box key={i} sx={{ display: "flex", gap: 1.25, alignItems: "flex-end", mb: 2.25 }}>
                    <BotAvatar />
                    <Box sx={{ maxWidth: "80%", px: 2.25, pt: 1.6, pb: 1, fontFamily: FONT, fontSize: "0.92rem", lineHeight: 1.65, textTransform: "none", color: C.text, bgcolor: C.white, border: `1px solid ${C.border}`, borderRadius: "22px 22px 22px 8px", boxShadow: "0 6px 20px rgba(15,34,54,0.06)", wordBreak: "break-word" }}>
                      <RichText text={m.text} />
                      <Typography sx={{ fontFamily: FONT, fontSize: "0.68rem", color: C.muted, textAlign: "right", mt: 0.75 }}>{m.time}</Typography>
                    </Box>
                  </Box>
                ) : (
                  <Box key={i} sx={{ display: "flex", justifyContent: "flex-end", mb: 2.25 }}>
                    <Box sx={{ maxWidth: "80%", px: 2.25, pt: 1.6, pb: 1, fontFamily: FONT, fontSize: "0.92rem", lineHeight: 1.65, textTransform: "none", color: C.white, background: GRADIENT.brand, borderRadius: "22px 22px 8px 22px", boxShadow: SHADOW.brand, wordBreak: "break-word" }}>
                      <RichText text={m.text} />
                      <Typography sx={{ fontFamily: FONT, fontSize: "0.68rem", color: "rgba(255,255,255,0.8)", textAlign: "right", mt: 0.75 }}>{m.time}</Typography>
                    </Box>
                  </Box>
                ),
              )}

              {loading && (
                <Box sx={{ display: "flex", gap: 1.25, alignItems: "flex-end", mb: 2.25 }}>
                  <BotAvatar />
                  <Box sx={{ px: 2.25, py: 1.6, bgcolor: C.white, border: `1px solid ${C.border}`, borderRadius: "22px 22px 22px 8px", boxShadow: "0 6px 20px rgba(15,34,54,0.06)" }}>
                    <TypingDots />
                  </Box>
                </Box>
              )}

              {atStart && !loading && (
                <Box sx={{ pl: { xs: 0, sm: 5.5 }, mb: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mb: 1.25 }}>
                    <AutoAwesomeIcon sx={{ fontSize: "0.95rem", color: C.brand }} />
                    <Typography sx={{ fontFamily: FONT, fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.1em", color: C.muted, textTransform: "uppercase" }}>
                      Suggested questions
                    </Typography>
                  </Box>
                  <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 1.25 }}>
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <ButtonBase
                        key={q}
                        onClick={() => void sendText(q)}
                        sx={{
                          justifyContent: "flex-start",
                          textAlign: "left",
                          gap: 1.25,
                          px: 1.75,
                          py: 1.4,
                          borderRadius: "16px",
                          bgcolor: C.white,
                          border: `1.5px solid ${C.border}`,
                          boxShadow: "0 4px 14px rgba(15,34,54,0.04)",
                          transition: "border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease",
                          "& .q-arrow": { opacity: 0, transform: "translateX(-4px)", transition: "all 0.18s ease" },
                          "&:hover": {
                            borderColor: C.brand,
                            boxShadow: "0 10px 24px rgba(1,176,240,0.14)",
                            transform: "translateY(-1px)",
                            "& .q-arrow": { opacity: 1, transform: "translateX(0)" },
                          },
                        }}>
                        <Box sx={{ width: 32, height: 32, flexShrink: 0, borderRadius: "10px", bgcolor: C.brandTint, color: C.brand, display: "grid", placeItems: "center" }}>
                          <HelpOutlineRoundedIcon sx={{ fontSize: "1.1rem" }} />
                        </Box>
                        <Typography sx={{ flex: 1, fontFamily: FONT, fontSize: "0.84rem", fontWeight: 600, color: C.ink, lineHeight: 1.4 }}>{q}</Typography>
                        <ArrowForwardRoundedIcon className="q-arrow" sx={{ fontSize: "1.1rem", color: C.brand }} />
                      </ButtonBase>
                    ))}
                  </Box>
                </Box>
              )}

              {atStart && !loading && (
                <Box sx={{ display: { xs: "block", md: "none" }, mt: 1 }}>
                  <QuickLinkGrid compact onPick={() => setOpen(false)} />
                </Box>
              )}

              {/* Details gate — shown once the free messages run out */}
              {gateRequired && (
                <Box sx={{ mt: 1, p: 2.5, bgcolor: C.white, border: `1px solid ${C.border}`, borderRadius: "22px", boxShadow: "0 6px 20px rgba(15,34,54,0.06)", "&, & *": { textTransform: "none" } }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1 }}>
                    <BotAvatar size={40} />
                    <Typography sx={{ fontFamily: FONT, fontWeight: 800, fontSize: "1rem", color: C.ink }}>Want to keep chatting?</Typography>
                  </Box>
                  <Typography sx={{ fontFamily: FONT, fontSize: "0.84rem", color: C.text, mb: 1.75 }}>
                    You've used your {FREE_USER_MESSAGES} free questions. Add your name and phone number below to unlock unlimited chat with Disha.
                  </Typography>
                  <Typography sx={{ fontFamily: FONT, fontSize: "0.76rem", color: C.text, mb: 1.75, mt: -1 }}>
                    Our sales team receives these details so they can help with anything Disha can't answer.
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
                    <TextField size="small" label="Name" required value={gName} onChange={(e) => setGName(e.target.value)} disabled={submitting} />
                    <TextField size="small" label="Phone" required value={gPhone} onChange={(e) => setGPhone(e.target.value)} disabled={submitting} />
                    <TextField size="small" label="Email (optional)" type="email" value={gEmail} onChange={(e) => setGEmail(e.target.value)} disabled={submitting} />
                    <TextField size="small" label="What are you working on? (optional)" multiline minRows={2} value={gProject} onChange={(e) => setGProject(e.target.value)} disabled={submitting} />

                    {/* Honeypot: hidden from real users; bots that fill it are dropped server-side. */}
                    <Box sx={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }} aria-hidden>
                      <input tabIndex={-1} autoComplete="off" value={gWebsite} onChange={(e) => setGWebsite(e.target.value)} />
                    </Box>

                    <TurnstileWidget onToken={setCaptchaToken} />

                    {gateError && <Typography sx={{ fontFamily: FONT, fontSize: "0.76rem", color: "#c0392b" }}>{gateError}</Typography>}

                    <Button
                      variant="contained"
                      onClick={() => void submitGate()}
                      disabled={submitting}
                      startIcon={submitting ? <CircularProgress size={16} sx={{ color: C.white }} /> : <LockOpenIcon />}
                      sx={{ fontFamily: FONT, fontWeight: 700, textTransform: "none", borderRadius: RADIUS.pill, py: 1, background: GRADIENT.brand, boxShadow: SHADOW.brand, "&:hover": { background: GRADIENT.brand, filter: "brightness(1.05)" } }}>
                      {submitting ? "Verifying…" : "Unlock chat"}
                    </Button>
                  </Box>
                </Box>
              )}

              <div ref={bottomRef} />
            </Box>

            {/* Input area — hidden while the gate is up */}
            {!gateRequired && (
              <Box sx={{ px: { xs: 2, md: 3.5 }, pt: 1.75, pb: 1.5, borderTop: `1px solid ${C.border}`, bgcolor: C.white }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.25,
                    pl: 2.25,
                    pr: 0.9,
                    py: 0.9,
                    borderRadius: "32px",
                    border: `1.5px solid ${C.border}`,
                    bgcolor: C.white,
                    boxShadow: "0 4px 16px rgba(15,34,54,0.05)",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    "&:focus-within": { borderColor: C.brand, boxShadow: "0 0 0 4px rgba(1,176,240,0.12)" },
                  }}>
                  <ChatBubbleOutlineRoundedIcon sx={{ color: C.muted, fontSize: "1.25rem", flexShrink: 0 }} />
                  <InputBase
                    fullWidth
                    multiline
                    maxRows={3}
                    placeholder="Describe your requirement or part number…"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    disabled={loading}
                    sx={{ fontFamily: FONT, fontSize: "0.95rem", py: 0.5 }}
                  />
                  <Button
                    onClick={() => void sendText(input)}
                    disabled={loading || !input.trim()}
                    aria-label="Send message"
                    endIcon={<SendRoundedIcon />}
                    sx={{
                      flexShrink: 0,
                      minWidth: 0,
                      px: { xs: 1.5, sm: 2.25 },
                      height: 44,
                      borderRadius: RADIUS.pill,
                      background: GRADIENT.brand,
                      color: C.white,
                      fontFamily: FONT,
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      letterSpacing: "0.08em",
                      "& .MuiButton-endIcon": { ml: { xs: 0, sm: 0.75 } },
                      "&:hover": { background: GRADIENT.brand, filter: "brightness(1.06)" },
                      "&.Mui-disabled": { background: "#EEF2F6", color: "#B6C2CF" },
                    }}>
                    <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>SEND</Box>
                  </Button>
                </Box>
                <Typography sx={{ fontFamily: FONT, fontSize: "0.7rem", color: C.muted, textAlign: "center", mt: 1.25 }}>
                  Disha can make mistakes — confirm part numbers with sales • Powered by PANAM AI
                </Typography>
              </Box>
            )}
          </Box>
        </Paper>
      </Grow>
    </>
  )
}

export default ChatWidget
