import { useEffect, useRef, useState } from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"
import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Fab,
  IconButton,
  Paper,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import CloseIcon from "@mui/icons-material/Close"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import SendIcon from "@mui/icons-material/Send"
import { askChatbot, requestAiAccess } from "../../api/chatApi"
import { C, FONT, RADIUS, SHADOW, GRADIENT } from "../Landing2/homeTokens"

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

const POPULAR_PAGES: { label: string; to: string }[] = [
  { label: "Request a Quote", to: "/enquiry" },
  { label: "Tube Fittings", to: "/instrumentation-fittings/tube-fittings" },
  { label: "Valves", to: "/valves" },
  { label: "All Products", to: "/products" },
]

const STARTER_PROMPTS = [
  "What tube fittings do you make?",
  "Do you offer ball valves?",
  "What sizes do your unions come in?",
]

// Per-tab keys: conversation id for the bot's memory, and whether this visitor
// has already submitted their details (so we don't ask twice in a session).
const CID_KEY = "panam-chat-cid"
const UNLOCK_KEY = "panam-ai-unlocked"

const getConversationId = () => {
  if (typeof window === "undefined") return "ssr"
  let id = window.sessionStorage.getItem(CID_KEY)
  if (!id) {
    id = crypto.randomUUID()
    window.sessionStorage.setItem(CID_KEY, id)
  }
  return id
}
const getUnlocked = () => (typeof window === "undefined" ? false : window.sessionStorage.getItem(UNLOCK_KEY) === "1")

interface Message {
  role: "user" | "bot"
  text: string
}

const GREETING: Message = {
  role: "bot",
  text: "Hi, I'm **PANAM AI** — ask me about our tube fittings, valves or part numbers and I'll answer from the PANAM catalogue.",
}

// --- Safe inline formatting (never dangerouslySetInnerHTML) -----------------
const renderBold = (line: string, keyPrefix: string) =>
  line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{part}</span>
    ),
  )

const RichText = ({ text }: { text: string }) => (
  <>
    {text.split("\n").map((line, i) => {
      const trimmed = line.trimStart()
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        return (
          <Box key={i} sx={{ display: "flex", gap: 0.75, pl: 0.5, my: 0.25 }}>
            <Box component="span" sx={{ color: C.brand, fontWeight: 700, lineHeight: 1.6 }}>•</Box>
            <Box component="span">{renderBold(trimmed.slice(2), `l${i}`)}</Box>
          </Box>
        )
      }
      return (
        <Box key={i} component="p" sx={{ m: 0, my: line.trim() === "" ? 0.5 : 0 }}>
          {renderBold(line, `l${i}`)}
        </Box>
      )
    })}
  </>
)

// --- Turnstile captcha widget ----------------------------------------------
const TurnstileWidget = ({ onToken }: { onToken: (t: string | null) => void }) => {
  const ref = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const render = () => {
      if (cancelled || !ref.current || !window.turnstile || widgetId.current !== null || !TURNSTILE_SITE_KEY) return
      widgetId.current = window.turnstile.render(ref.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => onToken(token),
        "error-callback": () => onToken(null),
        "expired-callback": () => onToken(null),
      })
    }

    if (window.turnstile) {
      render()
    } else {
      const existing = document.querySelector<HTMLScriptElement>("script[data-turnstile]")
      if (existing) {
        existing.addEventListener("load", render)
      } else {
        const s = document.createElement("script")
        s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        s.async = true
        s.defer = true
        s.setAttribute("data-turnstile", "")
        s.onload = render
        document.head.appendChild(s)
      }
    }

    return () => {
      cancelled = true
      if (widgetId.current && window.turnstile) {
        try { window.turnstile.remove(widgetId.current) } catch { /* already gone */ }
      }
    }
  }, [onToken])

  if (!TURNSTILE_SITE_KEY) {
    return <Typography sx={{ fontFamily: FONT, fontSize: "0.72rem", color: "#c0392b" }}>Captcha not configured (missing VITE_TURNSTILE_SITE_KEY).</Typography>
  }
  return <div ref={ref} />
}

const ChatWidget = () => {
  const location = useLocation()
  const hiddenHere = HIDDEN_ON_PREFIXES.some((p) => location.pathname.startsWith(p))

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [unlocked, setUnlocked] = useState<boolean>(getUnlocked())

  // Gate form state
  const [gName, setGName] = useState("")
  const [gPhone, setGPhone] = useState("")
  const [gEmail, setGEmail] = useState("")
  const [gProject, setGProject] = useState("")
  const [gWebsite, setGWebsite] = useState("") // honeypot
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [gateError, setGateError] = useState<string | null>(null)

  const conversationId = useRef<string>(getConversationId())
  const bottomRef = useRef<HTMLDivElement>(null)

  const userMsgCount = messages.filter((m) => m.role === "user").length
  // Once they've used their free messages and haven't submitted details, the
  // input is replaced by the details form and the chat won't go further.
  const gateRequired = !unlocked && userMsgCount >= FREE_USER_MESSAGES

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open, gateRequired])

  const sendText = async (raw: string) => {
    const text = raw.trim()
    if (!text || loading || gateRequired) return

    setMessages((prev) => [...prev, { role: "user", text }])
    setInput("")
    setLoading(true)
    try {
      const answer = await askChatbot(conversationId.current, text)
      setMessages((prev) => [...prev, { role: "bot", text: answer }])
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "Sorry, something went wrong. Please try again, or contact **sales@panamvalve.com**." }])
    } finally {
      setLoading(false)
    }
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
      setGateError("Please complete the captcha.")
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
      setMessages((prev) => [...prev, { role: "bot", text: "Thanks — you're all set! Ask me anything else about PANAM products. 🙌" }])
    } catch {
      setGateError("We couldn't verify that. Please complete the captcha and try again.")
      setCaptchaToken(null)
      if (window.turnstile) try { window.turnstile.reset() } catch { /* noop */ }
    } finally {
      setSubmitting(false)
    }
  }

  const atStart = messages.length <= 1

  if (hiddenHere) return null

  return (
    <>
      {/* Launcher */}
      <Zoom in={!open}>
        <Tooltip title="Ask PANAM AI" placement="left" arrow>
          <Fab
            aria-label="Open PANAM AI assistant"
            onClick={() => setOpen(true)}
            sx={{
              position: "fixed",
              bottom: { xs: 84, md: 96 },
              right: { xs: 16, md: 28 },
              zIndex: 1200,
              background: GRADIENT.brand,
              color: C.white,
              boxShadow: SHADOW.brand,
              "&:hover": { background: GRADIENT.brand, filter: "brightness(1.05)", transform: "translateY(-2px)", boxShadow: SHADOW.brand },
              transition: "transform 0.2s ease, filter 0.2s ease",
            }}>
            <AutoAwesomeIcon />
          </Fab>
        </Tooltip>
      </Zoom>

      {/* Panel */}
      <Zoom in={open} unmountOnExit>
        <Paper
          elevation={0}
          sx={{
            position: "fixed",
            bottom: { xs: 16, md: 28 },
            right: { xs: 16, md: 28 },
            zIndex: 1300,
            width: { xs: "calc(100vw - 32px)", sm: 392 },
            height: { xs: "78vh", sm: 580 },
            maxHeight: "calc(100vh - 48px)",
            display: "flex",
            flexDirection: "column",
            borderRadius: RADIUS.card,
            overflow: "hidden",
            fontFamily: FONT,
            border: `1px solid ${C.border}`,
            boxShadow: SHADOW.hover,
          }}>
          {/* Header */}
          <Box sx={{ background: GRADIENT.brand, color: C.white, px: 2, py: 1.75, display: "flex", alignItems: "center", gap: 1.25 }}>
            <Avatar sx={{ bgcolor: "rgba(255,255,255,0.2)", color: C.white, width: 38, height: 38 }}>
              <AutoAwesomeIcon fontSize="small" />
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                <Typography sx={{ fontFamily: FONT, fontWeight: 800, fontSize: "1.02rem", lineHeight: 1.1 }}>PANAM AI</Typography>
                <Chip label="BETA" size="small" sx={{ height: 18, bgcolor: "rgba(255,255,255,0.22)", color: C.white, fontFamily: FONT, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.06em", "& .MuiChip-label": { px: 0.75 } }} />
              </Box>
              <Typography sx={{ fontFamily: FONT, fontSize: "0.72rem", opacity: 0.9, lineHeight: 1.2 }}>Product assistant · answers from our catalogue</Typography>
            </Box>
            <IconButton size="small" onClick={() => setOpen(false)} aria-label="Close chat" sx={{ color: C.white }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box sx={{ flex: 1, overflowY: "auto", p: 1.75, bgcolor: C.surface, fontFamily: FONT }}>
            {messages.map((m, i) => (
              <Box key={i} sx={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", mb: 1.25 }}>
                <Box
                  sx={{
                    maxWidth: "85%",
                    px: 1.75,
                    py: 1.1,
                    fontFamily: FONT,
                    fontSize: "0.86rem",
                    lineHeight: 1.55,
                    wordBreak: "break-word",
                    ...(m.role === "user"
                      ? { bgcolor: C.brand, color: C.white, borderRadius: "16px 16px 4px 16px", boxShadow: SHADOW.brand }
                      : { bgcolor: C.white, color: C.text, border: `1px solid ${C.border}`, borderRadius: "16px 16px 16px 4px", boxShadow: SHADOW.card }),
                  }}>
                  <RichText text={m.text} />
                </Box>
              </Box>
            ))}

            {atStart && !loading && (
              <Box sx={{ mt: 1.5 }}>
                <Typography sx={{ fontFamily: FONT, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.05em", color: C.muted, textTransform: "uppercase", mb: 0.75 }}>Try asking</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 1.75 }}>
                  {STARTER_PROMPTS.map((q) => (
                    <Chip key={q} label={q} onClick={() => void sendText(q)} sx={{ fontFamily: FONT, fontSize: "0.78rem", bgcolor: C.white, color: C.brandDark, border: `1px solid ${C.border}`, "&:hover": { bgcolor: C.brandTint, borderColor: C.brand } }} />
                  ))}
                </Box>
                <Typography sx={{ fontFamily: FONT, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.05em", color: C.muted, textTransform: "uppercase", mb: 0.75 }}>Popular pages</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                  {POPULAR_PAGES.map((p) => (
                    <Chip key={p.to} label={p.label} component={RouterLink} to={p.to} clickable onClick={() => setOpen(false)} icon={<AutoAwesomeIcon sx={{ fontSize: "0.9rem !important", color: `${C.brand} !important` }} />} sx={{ fontFamily: FONT, fontSize: "0.78rem", fontWeight: 600, bgcolor: C.brandTint, color: C.brandDark, border: `1px solid ${C.brandTint}`, "&:hover": { bgcolor: C.white, borderColor: C.brand } }} />
                  ))}
                </Box>
              </Box>
            )}

            {loading && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: C.muted, pl: 0.5 }}>
                <CircularProgress size={14} sx={{ color: C.brand }} />
                <Typography sx={{ fontFamily: FONT, fontSize: "0.78rem" }}>PANAM AI is thinking…</Typography>
              </Box>
            )}

            {/* Details gate — shown once the free messages run out */}
            {gateRequired && (
              <Box sx={{ mt: 1, p: 1.75, bgcolor: C.white, border: `1px solid ${C.border}`, borderRadius: RADIUS.card, boxShadow: SHADOW.card }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mb: 0.5 }}>
                  <LockOpenIcon sx={{ color: C.brand, fontSize: "1.1rem" }} />
                  <Typography sx={{ fontFamily: FONT, fontWeight: 800, fontSize: "0.95rem", color: C.ink }}>Keep chatting with PANAM AI</Typography>
                </Box>
                <Typography sx={{ fontFamily: FONT, fontSize: "0.8rem", color: C.text, mb: 1.5 }}>
                  You've used your free preview. Share a few details and our team will help with anything the assistant can't.
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
                    sx={{ fontFamily: FONT, fontWeight: 700, textTransform: "none", borderRadius: RADIUS.button, background: GRADIENT.brand, boxShadow: SHADOW.brand, "&:hover": { background: GRADIENT.brand, filter: "brightness(1.05)" } }}>
                    {submitting ? "Verifying…" : "Continue"}
                  </Button>
                </Box>
              </Box>
            )}

            <div ref={bottomRef} />
          </Box>

          {/* Input — hidden while the gate is up */}
          {!gateRequired && (
            <Box sx={{ p: 1.25, borderTop: `1px solid ${C.border}`, bgcolor: C.white }}>
              <Box sx={{ display: "flex", gap: 1, alignItems: "flex-end" }}>
                <TextField
                  fullWidth
                  size="small"
                  multiline
                  maxRows={3}
                  placeholder="Ask about a product…"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  disabled={loading}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: RADIUS.pill, fontFamily: FONT, fontSize: "0.86rem", bgcolor: C.surface, "& fieldset": { borderColor: C.border }, "&:hover fieldset": { borderColor: C.brand }, "&.Mui-focused fieldset": { borderColor: C.brand } } }}
                />
                <IconButton aria-label="Send message" onClick={() => void sendText(input)} disabled={loading || !input.trim()} sx={{ background: GRADIENT.brand, color: C.white, width: 40, height: 40, "&:hover": { filter: "brightness(1.05)" }, "&.Mui-disabled": { background: C.border, color: C.white } }}>
                  <SendIcon fontSize="small" />
                </IconButton>
              </Box>
              <Typography sx={{ fontFamily: FONT, fontSize: "0.64rem", color: C.muted, textAlign: "center", mt: 0.75 }}>
                PANAM AI can make mistakes — confirm part numbers with sales.
              </Typography>
            </Box>
          )}
        </Paper>
      </Zoom>
    </>
  )
}

export default ChatWidget
