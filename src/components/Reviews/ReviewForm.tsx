import React, { useRef, useState } from "react"
import { Alert, Box, Button, Container, Grid, Rating, Stack, Typography } from "@mui/material"
import StarRoundedIcon from "@mui/icons-material/StarRounded"
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded"
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined"
import TagRoundedIcon from "@mui/icons-material/TagRounded"
import TitleRoundedIcon from "@mui/icons-material/TitleRounded"
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"
import AddRoundedIcon from "@mui/icons-material/AddRounded"
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined"
import { Link as RouterLink } from "react-router-dom"
import { useReviewForm } from "./useReviewForm"
import { Field, FormSection, SubmitButton } from "../Auth/Enquiry/enquiryUi"
import { C, FONT, GRADIENT, btn } from "../Landing2/homeTokens"
import { Eyebrow } from "../Landing2/homeStyles"

const STAR = "#FFB400"
const ERROR = "#E5484D"
const RATING_LABELS: Record<number, string> = { 1: "Poor", 2: "Fair", 3: "Good", 4: "Very good", 5: "Excellent" }

// Quick phrases (Google Maps / Amazon pattern): each chip adds a full sentence to the review text, tapping again removes it.
// The set flips for low ratings so the suggestions match the sentiment.
const PHRASES_POSITIVE = [
  { label: "Excellent build quality", sentence: "The build quality is excellent, the fittings feel solid and well finished." },
  { label: "Fast delivery", sentence: "Delivery was fast and the order arrived well packaged and on time." },
  { label: "Helpful technical support", sentence: "The technical team was very helpful and answered all of our questions quickly." },
  { label: "Good value for money", sentence: "The products offer very good value for money compared with other suppliers." },
  { label: "Easy to install", sentence: "Installation was straightforward and everything fitted exactly as specified." },
  { label: "Clear documentation & certs", sentence: "The documentation and material certificates were clear and supplied with the order." },
  { label: "Leak-free performance", sentence: "The valves have performed reliably with no leaks since installation." },
  { label: "Would order again", sentence: "We would happily order from Panam again and recommend them to others." },
]
const PHRASES_NEGATIVE = [
  { label: "Quality issues", sentence: "We had some issues with the quality of the parts we received." },
  { label: "Slow delivery", sentence: "Delivery took longer than we expected." },
  { label: "Hard to reach support", sentence: "It was difficult to get hold of the support team when we needed help." },
  { label: "Too expensive", sentence: "The pricing felt high for what we received." },
  { label: "Wrong part supplied", sentence: "The part supplied was not the one we ordered." },
  { label: "Missing documentation", sentence: "Some of the documentation or certificates we needed were missing." },
  { label: "Damaged on arrival", sentence: "Part of the order arrived damaged." },
  { label: "Poor communication", sentence: "Communication about the order could have been much better." },
]

const hasSentence = (text: string, sentence: string) => text.includes(sentence)

const toggleSentence = (text: string, sentence: string) => {
  if (hasSentence(text, sentence)) {
    return text.replace(sentence, "").replace(/[ \t]{2,}/g, " ").trim()
  }
  const trimmed = text.trimEnd()
  return trimmed ? `${trimmed} ${sentence}` : sentence
}

// Soft length meter: fills up to 50 characters, never blocks submission
const LENGTH_TARGET = 50
const lengthHint = (len: number) => ({
  pct: Math.min(len / LENGTH_TARGET, 1) * 100,
  color: len >= LENGTH_TARGET ? "#17A34A" : "#F5A524",
})

// Copy adapts to the score, as Trustpilot does
const promptFor = (rating: number) => {
  if (rating === 0) return "What did you think of the product and our service?"
  if (rating <= 2) return "We're sorry it wasn't right. What went wrong, and what could we do better?"
  if (rating === 3) return "What worked well, and what could have been better?"
  return "What did you like most? How did the product perform in your application?"
}

// Guidelines shown in the side panel (Amazon/Trustpilot pattern)
const GUIDELINES = [
  "Base it on your own experience with Panam products or service",
  "Be specific: part numbers, application and conditions help others most",
  "Keep it respectful, and leave out personal or confidential details",
  "Positive or critical, honest feedback is always welcome",
]

const cardShellSx = {
  bgcolor: C.white,
  borderRadius: "24px",
  border: `1px solid ${C.border}`,
  boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 24px 60px rgba(15,34,54,0.10)",
  overflow: "hidden",
}

// Clean rounded star, gold gradient when lit
const STAR_PATH = "M12 2.6c.4 0 .8.2 1 .6l2.5 5.1 5.6.8c.9.1 1.3 1.3.6 1.9l-4.1 4 1 5.6c.2.9-.8 1.6-1.6 1.2L12 19.1l-5 2.7c-.8.4-1.8-.3-1.6-1.2l1-5.6-4.1-4c-.7-.6-.3-1.8.6-1.9l5.6-.8L11 3.2c.2-.4.6-.6 1-.6z"

const Star = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path d={STAR_PATH} fill={active ? "url(#reviewStarFill)" : "#DCE3EA"} />
  </svg>
)

interface StarRatingProps {
  value: number
  hover: number
  onHover: (value: number) => void
  onChange: (value: number | null) => void
  label: string
  sublabel: string
  sublabelError: boolean
}

const StarRating = ({ value, hover, onHover, onChange, label, sublabel, sublabelError }: StarRatingProps) => {
  const shown = hover !== -1 ? hover : value
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Gradient shared by all stars */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
        <defs>
          <linearGradient id="reviewStarFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FFA000" />
          </linearGradient>
        </defs>
      </svg>

      <Stack role="radiogroup" aria-label="Rating" direction="row" justifyContent="center" alignItems="center" onMouseLeave={() => onHover(-1)} sx={{ gap: { xs: 0.75, sm: 1 } }}>
        {[0, 1, 2, 3, 4].map(i => {
          const star = i + 1
          const active = star <= shown
          return (
            <Box
              key={star}
              component="button"
              type="button"
              role="radio"
              aria-checked={value === star}
              aria-label={`${star} star${star > 1 ? "s" : ""}, ${RATING_LABELS[star]}`}
              onMouseEnter={() => onHover(star)}
              onFocus={() => onHover(star)}
              onBlur={() => onHover(-1)}
              onClick={() => onChange(star)}
              sx={{
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                p: 0,
                border: "none",
                background: "none",
                cursor: "pointer",
                borderRadius: "50%",
                transform: `scale(${active ? 1.06 : 1})`,
                filter: active ? "drop-shadow(0 4px 8px rgba(255,160,0,0.4))" : "none",
                transition: "transform 0.2s cubic-bezier(.34,1.56,.64,1), filter 0.2s ease",
                "&:hover": { transform: `scale(1.18)` },
                "&:focus-visible": { outline: `2px solid ${C.brand}`, outlineOffset: 2 },
                "& svg": { width: "100%", height: "100%", display: "block" },
                ...(value === star && {
                  animation: "reviewStarPop 0.35s ease",
                  "@keyframes reviewStarPop": { "0%": { transform: `scale(0.8)` }, "60%": { transform: `scale(1.25)` }, "100%": { transform: `scale(1.06)` } },
                }),
              }}>
              <Star active={active} />
            </Box>
          )
        })}
      </Stack>

      <Typography sx={{ mt: 1.5, fontWeight: 800, fontSize: { xs: "1.15rem", sm: "1.3rem" }, letterSpacing: "-0.02em", lineHeight: 1.1, color: shown > 0 ? C.ink : C.muted, transition: "color 0.2s ease" }}>{label}</Typography>
      <Typography sx={{ mt: 0.5, fontSize: "0.8rem", color: sublabelError ? ERROR : C.muted, fontWeight: sublabelError ? 500 : 400 }}>{sublabel}</Typography>
    </Box>
  )
}

interface ReviewFormProps {
  onSuccess?: () => void
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSuccess }) => {
  const [submitted, setSubmitted] = useState(false)
  const [hoverRating, setHoverRating] = useState(-1)
  const formRef = useRef<HTMLFormElement>(null)
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const { formData, loading, errors, error, handleChange, handleRatingChange, handleSubmit } = useReviewForm(() => {
    setSubmitted(true)
    onSuccess?.()
  })

  const shownRating = hoverRating !== -1 ? hoverRating : formData.rating
  const hint = lengthHint(formData.comment.trim().length)

  return (
    <Box component="section" sx={{ background: GRADIENT.heroBg, py: { xs: 4, md: 8 }, fontFamily: FONT, textTransform: "none", "& .MuiTypography-root": { fontFamily: FONT } }}>
      <Container maxWidth="lg">
        {/* Page header (the page's only H1) */}
        <Stack alignItems="center" spacing={2.5} sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: { xs: 4, md: 6 } }}>
          <Eyebrow>Customer reviews</Eyebrow>
          <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.08, fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" } }}>
            Leave a{" "}
            <Box component="span" sx={{ display: "inline-block", pb: "0.08em", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              review
            </Box>
          </Typography>
          <Typography sx={{ color: C.muted, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, maxWidth: 640 }}>
            Tell us about your experience with Panam Valves. It takes about two minutes, and your feedback helps other engineers choose with confidence.
          </Typography>
        </Stack>

        {submitted ? (
          <Box sx={{ ...cardShellSx, maxWidth: 640, mx: "auto", p: { xs: 4, md: 6 }, textAlign: "center" }}>
            <Box sx={{ width: 72, height: 72, mx: "auto", borderRadius: "50%", bgcolor: C.tintBg, color: C.brand, display: "grid", placeItems: "center", mb: 3 }}>
              <CheckCircleRoundedIcon sx={{ fontSize: 44 }} />
            </Box>
            <Typography component="h2" sx={{ fontWeight: 800, color: C.ink, fontSize: { xs: "1.6rem", md: "1.9rem" }, letterSpacing: "-0.02em" }}>
              Thank you{formData.customerName.trim() ? `, ${formData.customerName.trim().split(/\s+/)[0]}` : ""}
            </Typography>
            <Rating value={formData.rating} readOnly icon={<StarRoundedIcon fontSize="inherit" />} emptyIcon={<StarRoundedIcon fontSize="inherit" />} sx={{ mt: 2, fontSize: 30, color: STAR }} />
            <Typography sx={{ mt: 2, color: C.muted, fontSize: "1rem", lineHeight: 1.7 }}>
              {formData.rating <= 2
                ? "We're sorry we fell short. Thank you for telling us, we'll use your feedback to put things right."
                : "Your review has been submitted. We really appreciate you taking the time to share your experience."}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center" sx={{ mt: 4 }}>
              {formData.rating <= 2 ? (
                <Button component={RouterLink} to="/enquiry" sx={btn.primary}>
                  Talk to our team
                </Button>
              ) : (
                <Button component={RouterLink} to="/products" sx={btn.primary}>
                  Browse products
                </Button>
              )}
              <Button component={RouterLink} to="/" sx={btn.secondary}>
                Back to home
              </Button>
            </Stack>
          </Box>
        ) : (
          <Box sx={cardShellSx}>
            <Grid container>
              {/* Context panel */}
              <Grid
                size={{ xs: 12, md: 4.5 }}
                order={{ xs: 2, md: 1 }}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  color: C.white,
                  p: { xs: 3, sm: 4, md: 5 },
                  background: `linear-gradient(160deg, ${C.brand} 0%, ${C.brandDark} 45%, ${C.brandDeep} 100%)`,
                  "&::after": { content: '""', position: "absolute", width: 320, height: 320, borderRadius: "50%", bottom: -190, left: -120, border: "40px solid rgba(255,255,255,0.06)" },
                  "&::before": { content: '""', position: "absolute", width: 220, height: 220, borderRadius: "50%", top: -110, right: -90, border: "30px solid rgba(255,255,255,0.05)" },
                }}>
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box sx={{ width: 52, height: 52, borderRadius: "14px", bgcolor: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.2)", display: "grid", placeItems: "center", mb: 3 }}>
                    <RateReviewOutlinedIcon />
                  </Box>
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85 }}>Your feedback matters</Typography>
                  <Typography component="h2" sx={{ mt: 1.5, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, fontSize: { xs: "1.6rem", md: "1.9rem" } }}>
                    Share your experience with Panam
                  </Typography>
                  <Typography sx={{ mt: 1.5, opacity: 0.9, fontSize: "0.95rem", lineHeight: 1.65 }}>
                    Honest reviews, good or bad, help us improve our products and service, and help other engineers find the right fittings.
                  </Typography>

                  <Box sx={{ mt: 4, borderTop: "1px solid rgba(255,255,255,0.2)", pt: 3 }}>
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.75, mb: 1.75 }}>Review guidelines</Typography>
                    <Stack spacing={1.5}>
                      {GUIDELINES.map(item => (
                        <Stack key={item} direction="row" alignItems="flex-start" sx={{ gap: 1.25 }}>
                          <CheckCircleRoundedIcon sx={{ fontSize: 20, flex: "none", opacity: 0.9, mt: "1px" }} />
                          <Typography sx={{ fontSize: "0.92rem", opacity: 0.95, lineHeight: 1.5 }}>{item}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Grid>

              {/* Form */}
              <Grid size={{ xs: 12, md: 7.5 }} order={{ xs: 1, md: 2 }} sx={{ p: { xs: 2.5, sm: 4, md: 5 } }}>
                {error && (
                  <Alert severity="error" sx={{ mb: 3, borderRadius: "12px", fontFamily: FONT }}>
                    {error}
                  </Alert>
                )}

                <Box component="form" ref={formRef} onSubmit={handleSubmit} noValidate>
                  <Stack spacing={4}>
                    {/* Rating first: the one-tap step that commits people to the form */}
                    <FormSection step="01" title="How would you rate us?">
                      <Box
                        sx={{
                          pt: { xs: 2, sm: 2.5 },
                          pb: { xs: 2, sm: 2.5 },
                          px: 2,
                          borderRadius: "20px",
                          background: `radial-gradient(420px circle at 50% 100%, rgba(255,180,0,${shownRating > 0 ? 0.14 : 0.06}), transparent 70%), ${C.surface}`,
                          border: `1px solid ${errors.rating ? ERROR : "transparent"}`,
                          transition: "background 0.3s ease",
                        }}>
                        <StarRating value={formData.rating} hover={hoverRating} onHover={setHoverRating} onChange={handleRatingChange} label={shownRating > 0 ? RATING_LABELS[shownRating] : "Tap a star"} sublabel={errors.rating || (shownRating > 0 ? `${shownRating} out of 5` : "How was your experience?")} sublabelError={Boolean(errors.rating)} />
                      </Box>
                    </FormSection>

                    <FormSection step="02" title="Tell us more">
                      <Field optional label="Headline" name="title" placeholder={formData.rating && formData.rating <= 2 ? "e.g. Delivery took longer than expected" : "e.g. Reliable fittings, fast delivery"} icon={<TitleRoundedIcon />} value={formData.title} onChange={handleChange} />
                      <Box>
                        <Field
                          required
                          multiline
                          minRows={5}
                          label="Your review"
                          name="comment"
                          placeholder={promptFor(formData.rating)}
                          value={formData.comment}
                          onChange={handleChange}
                          error={Boolean(errors.comment)}
                          helperText={errors.comment}
                          inputRef={commentRef}
                        />

                        {/* Length meter */}
                        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mt: 1.25 }}>
                          <Box sx={{ flex: 1, height: 6, borderRadius: 3, bgcolor: "#E9EEF3", overflow: "hidden" }}>
                            <Box sx={{ height: "100%", width: `${hint.pct}%`, bgcolor: hint.color, borderRadius: 3, transition: "width 0.25s ease, background-color 0.25s ease" }} />
                          </Box>
                          <Typography sx={{ fontSize: "0.78rem", color: C.muted, whiteSpace: "nowrap" }}>
                            {formData.comment.length}/{LENGTH_TARGET}
                          </Typography>
                        </Stack>

                        {/* Quick phrases */}
                        <Box sx={{ mt: 2.5, p: 2, borderRadius: "14px", bgcolor: C.surface }}>
                          <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, color: C.ink }}>
                            {formData.rating && formData.rating <= 2 ? "What went wrong?" : "What stood out?"}
                          </Typography>
                          <Typography sx={{ fontSize: "0.78rem", color: C.muted, mt: 0.25, mb: 1.5 }}>Pick as many as you like, each adds a sentence you can edit</Typography>
                          <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                            {(formData.rating && formData.rating <= 2 ? PHRASES_NEGATIVE : PHRASES_POSITIVE).map(({ label, sentence }) => {
                              const selected = hasSentence(formData.comment, sentence)
                              return (
                                <Box
                                  key={label}
                                  component="button"
                                  type="button"
                                  aria-pressed={selected}
                                  onClick={() => {
                                    handleChange({ target: { name: "comment", value: toggleSentence(formData.comment, sentence) } } as React.ChangeEvent<HTMLTextAreaElement>)
                                    commentRef.current?.focus()
                                  }}
                                  sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 0.6,
                                    px: 1.5,
                                    py: 0.75,
                                    font: "inherit",
                                    fontSize: "0.82rem",
                                    fontWeight: selected ? 600 : 500,
                                    cursor: "pointer",
                                    borderRadius: "999px",
                                    border: `1px solid ${selected ? C.brand : C.border}`,
                                    bgcolor: selected ? C.brand : C.white,
                                    color: selected ? C.white : C.text,
                                    boxShadow: selected ? "0 4px 12px rgba(1,176,240,0.28)" : "none",
                                    transition: "all 0.18s ease",
                                    "& svg": { fontSize: 16 },
                                    "&:hover": { borderColor: C.brand, color: selected ? C.white : C.brandDark, transform: "translateY(-1px)" },
                                    "&:active": { transform: "scale(0.97)" },
                                  }}>
                                  {selected ? <CheckRoundedIcon /> : <AddRoundedIcon sx={{ color: C.muted }} />}
                                  {label}
                                </Box>
                              )
                            })}
                          </Stack>
                        </Box>
                      </Box>
                    </FormSection>

                    <FormSection step="03" title="About you">
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Field required label="Your name" name="customerName" placeholder="Jane Smith" icon={<PersonOutlineRoundedIcon />} value={formData.customerName} onChange={handleChange} error={Boolean(errors.customerName)} helperText={errors.customerName} />
                        <Field
                          required
                          label="Email address"
                          name="email"
                          type="email"
                          placeholder="jane@company.com"
                          icon={<MailOutlineRoundedIcon />}
                          value={formData.email}
                          onChange={handleChange}
                          error={Boolean(errors.email)}
                          helperText={errors.email}
                        />
                      </Stack>
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Field optional label="Company" name="company" placeholder="Company name" icon={<BusinessOutlinedIcon />} value={formData.company} onChange={handleChange} />
                        <Field optional label="Product / part number" name="productPartNumber" placeholder="e.g. BV-12-316" icon={<TagRoundedIcon />} value={formData.productPartNumber} onChange={handleChange} />
                      </Stack>
                    </FormSection>

                    <Stack direction={{ xs: "column-reverse", sm: "row" }} alignItems={{ xs: "stretch", sm: "center" }} justifyContent="space-between" spacing={2} sx={{ pt: 1, borderTop: `1px solid ${C.border}` }}>
                      <Typography sx={{ fontSize: "0.82rem", color: C.muted, pt: { sm: 2 } }}>
                        Fields marked <Box component="span" sx={{ color: C.brand }}>*</Box> are required.
                      </Typography>
                      <Box sx={{ pt: 2 }}>
                        <SubmitButton loading={loading} onClick={() => formRef.current?.requestSubmit()}>
                          Submit review
                        </SubmitButton>
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default ReviewForm
