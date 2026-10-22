import { useId, useState, type ReactNode, type RefObject, type ChangeEvent } from "react"
import { Box, Button, CircularProgress, Container, Grid, IconButton, InputAdornment, Stack, TextField, Typography, type TextFieldProps } from "@mui/material"
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined"
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined"
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded"
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded"
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined"
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded"
import { C, FONT, GRADIENT, SHADOW } from "../../Landing2/homeTokens"
import { Eyebrow } from "../../Landing2/homeStyles"
import { CONTACT, INCLUDE_LIST, inputSx } from "./enquiryTokens"

// Shared building blocks for the /enquiry forms (signed-out registration and signed-in enquiry), in the homepage style.


// Label above the input (rather than a floating label) — clearer to scan and never collides with the value.
export const Field = ({ label, optional, icon, sx, InputProps, ...props }: Omit<TextFieldProps, "label"> & { label: string; optional?: boolean; icon?: ReactNode }) => {
  const id = useId()
  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <Typography component="label" htmlFor={id} sx={{ display: "flex", justifyContent: "space-between", mb: 0.75, fontSize: "0.85rem", fontWeight: 600, color: C.ink }}>
        <span>
          {label}
          {props.required && (
            <Box component="span" sx={{ color: C.brand, ml: 0.25 }}>
              *
            </Box>
          )}
        </span>
        {optional && <Box component="span" sx={{ color: C.muted, fontWeight: 500 }}>Optional</Box>}
      </Typography>
      <TextField
        id={id}
        fullWidth
        hiddenLabel
        {...props}
        InputProps={{ ...(icon ? { startAdornment: <InputAdornment position="start" sx={{ alignSelf: props.multiline ? "flex-start" : "center", mt: props.multiline ? 1.25 : 0, "& svg": { fontSize: 19 } }}>{icon}</InputAdornment> } : {}), ...InputProps }}
        sx={[inputSx, ...(Array.isArray(sx) ? sx : [sx])]}
      />
    </Box>
  )
}

export const FormSection = ({ step, title, children }: { step: string; title: string; children: ReactNode }) => (
  <Box>
    <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mb: 2 }}>
      <Box sx={{ width: 26, height: 26, borderRadius: "8px", bgcolor: C.tintBg, color: C.brandDark, display: "grid", placeItems: "center", fontSize: "0.72rem", fontWeight: 800 }}>{step}</Box>
      <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: C.ink }}>{title}</Typography>
      <Box sx={{ flex: 1, height: "1px", bgcolor: C.border }} />
    </Stack>
    <Stack spacing={2}>{children}</Stack>
  </Box>
)

interface UploadZoneProps {
  file: File | null
  inputRef: RefObject<HTMLInputElement | null>
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onFile: (file: File) => void
  onClear: () => void
  title: string
  hint: string
}

// Click or drag-and-drop; dropped files go through the same validation as picked ones via onFile.
export const UploadZone = ({ file, inputRef, onChange, onFile, onClear, title, hint }: UploadZoneProps) => {
  const [dragging, setDragging] = useState(false)
  return (
    <Box>
      <input type="file" hidden ref={inputRef} onChange={onChange} accept=".pdf,.jpg,.jpeg,.png,.dwg,.zip,.docx" />
      {!file ? (
        <Box
          component="button"
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={e => {
            e.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={e => {
            e.preventDefault()
            setDragging(false)
            const dropped = e.dataTransfer.files?.[0]
            if (dropped) onFile(dropped)
          }}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 2.25,
            font: "inherit",
            textAlign: "left",
            cursor: "pointer",
            borderRadius: "14px",
            border: `1.5px dashed ${dragging ? C.brand : "#C9D5E1"}`,
            bgcolor: dragging ? C.tintBg : C.surface,
            transition: "all 0.2s ease",
            "&:hover": { borderColor: C.brand, bgcolor: C.tintBg },
          }}>
          <Box sx={{ width: 44, height: 44, flex: "none", borderRadius: "12px", bgcolor: C.white, color: C.brandDark, display: "grid", placeItems: "center", boxShadow: SHADOW.card }}>
            <CloudUploadOutlinedIcon />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: "0.92rem", color: C.ink }}>{title}</Typography>
            <Typography sx={{ fontSize: "0.8rem", color: C.muted, mt: 0.25 }}>{hint}</Typography>
          </Box>
        </Box>
      ) : (
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ p: 1.75, borderRadius: "14px", border: `1px solid rgba(1,176,240,0.35)`, bgcolor: C.tintBg }}>
          <Box sx={{ width: 40, height: 40, flex: "none", borderRadius: "10px", bgcolor: C.white, color: C.brandDark, display: "grid", placeItems: "center" }}>
            <InsertDriveFileOutlinedIcon fontSize="small" />
          </Box>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography noWrap sx={{ fontWeight: 600, fontSize: "0.9rem", color: C.ink }}>{file.name}</Typography>
            <Typography sx={{ fontSize: "0.78rem", color: C.muted }}>{(file.size / (1024 * 1024)).toFixed(2)} MB</Typography>
          </Box>
          <IconButton size="small" aria-label="Remove file" onClick={onClear} sx={{ color: C.muted, "&:hover": { color: "#E5484D", bgcolor: "#FDECEC" } }}>
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
        </Stack>
      )}
    </Box>
  )
}

export const SubmitButton = ({ loading, disabled, onClick, children }: { loading: boolean; disabled?: boolean; onClick: () => void; children: ReactNode }) => (
  <Button
    variant="contained"
    onClick={onClick}
    disabled={disabled || loading}
    endIcon={loading ? undefined : <ArrowForwardRoundedIcon />}
    sx={{
      width: { xs: "100%", sm: "auto" },
      flex: "none",
      px: 3.5,
      py: 1.5,
      borderRadius: "12px",
      bgcolor: C.brand,
      fontFamily: FONT,
      fontWeight: 700,
      fontSize: "1rem",
      textTransform: "none",
      boxShadow: SHADOW.brand,
      transition: "all 0.2s ease",
      "&:hover": { bgcolor: C.brandDark, boxShadow: SHADOW.brand, transform: "translateY(-1px)" },
      "& .MuiButton-endIcon": { transition: "transform 0.2s ease" },
      "&:hover .MuiButton-endIcon": { transform: "translateX(3px)" },
      "&.Mui-disabled": { bgcolor: "#CDEBF7", color: C.white, boxShadow: "none" },
    }}>
    {loading ? <CircularProgress size={24} color="inherit" /> : children}
  </Button>
)

interface PageHeader {
  overline: string
  titleMain: string
  titleAccent: string
  description: string
}

interface ShellProps {
  header: PageHeader
  eyebrow: string
  title: ReactNode
  text: ReactNode
  response: string
  steps: string[]
  image: string
  children: ReactNode
}

const ContactRow = ({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) => (
  <Stack direction="row" spacing={1.75} alignItems="flex-start">
    <Box sx={{ width: 40, height: 40, flex: "none", borderRadius: "12px", bgcolor: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.18)", display: "grid", placeItems: "center", "& svg": { fontSize: 19 } }}>{icon}</Box>
    <Box sx={{ minWidth: 0, pt: 0.1 }}>
      <Typography sx={{ fontSize: "0.75rem", opacity: 0.75 }}>{label}</Typography>
      <Typography
        component={href ? "a" : "p"}
        href={href}
        sx={{ display: "block", fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.45, color: "inherit", textDecoration: "none", overflowWrap: "anywhere", "&:hover": href ? { textDecoration: "underline" } : {} }}>
        {value}
      </Typography>
    </Box>
  </Stack>
)

// Page-level intro above the card, in the same light style as the products hero. Holds the page's only H1.
const EnquiryHeader = ({ overline, titleMain, titleAccent, description, response }: PageHeader & { response: string }) => (
  <Stack alignItems="center" spacing={2.5} sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: { xs: 4, md: 6 } }}>
    <Eyebrow>{overline}</Eyebrow>
    <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.08, fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" } }}>
      {titleMain}{" "}
      <Box component="span" sx={{ display: "inline-block", pb: "0.08em", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        {titleAccent}
      </Box>
    </Typography>
    <Typography sx={{ color: C.muted, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, maxWidth: 640 }}>{description}</Typography>
    <Stack direction="row" justifyContent="center" sx={{ flexWrap: "wrap", gap: 1, pt: 0.5 }}>
      {[
        { icon: <ScheduleRoundedIcon />, label: `Response ${response.charAt(0).toLowerCase()}${response.slice(1)}` },
        { icon: <EngineeringOutlinedIcon />, label: "Reviewed by our engineers" },
        { icon: <AttachFileRoundedIcon />, label: "Drawings & specs welcome" },
      ].map(chip => (
        <Stack key={chip.label} direction="row" alignItems="center" sx={{ gap: 0.75, px: 1.5, py: 0.75, borderRadius: "999px", border: `1px solid ${C.border}`, bgcolor: "rgba(255,255,255,0.85)", color: C.text, fontSize: "0.84rem", fontWeight: 500, "& svg": { fontSize: 17, color: C.brand } }}>
          {chip.icon}
          {chip.label}
        </Stack>
      ))}
    </Stack>
  </Stack>
)

// One split card: brand-blue context panel (contact details + next steps) beside the form, then a
// "what to include" checklist. On phones the form comes first.
export const EnquiryShell = ({ header, eyebrow, title, text, response, steps, image, children }: ShellProps) => (
  <Box component="section" sx={{ background: GRADIENT.heroBg, py: { xs: 4, md: 8 }, fontFamily: FONT, textTransform: "none", "& .MuiTypography-root": { fontFamily: FONT } }}>
    <Container maxWidth="lg">
      <EnquiryHeader {...header} response={response} />
      <Box sx={{ bgcolor: C.white, borderRadius: "24px", border: `1px solid ${C.border}`, boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 24px 60px rgba(15,34,54,0.10)", overflow: "hidden" }}>
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
              display: "flex",
              flexDirection: "column",
              background: `linear-gradient(160deg, ${C.brand} 0%, ${C.brandDark} 45%, ${C.brandDeep} 100%)`,
              "&::after": { content: '""', position: "absolute", width: 320, height: 320, borderRadius: "50%", bottom: -190, left: -120, border: "40px solid rgba(255,255,255,0.06)" },
            }}>
            <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
              {/* Photo header, bleeding to the panel edges and fading into the blue */}
              <Box
                aria-hidden
                sx={{
                  mx: { xs: -3, sm: -4, md: -5 },
                  mt: { xs: -3, sm: -4, md: -5 },
                  mb: { xs: -2, md: -3 },
                  aspectRatio: { xs: "16 / 9", md: "4 / 3" },
                  backgroundImage: `linear-gradient(180deg, rgba(1,176,240,0.05) 0%, rgba(1,176,240,0.3) 100%), url("${image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  // Fade to transparent (not to a fixed colour) so it blends into the panel gradient without a seam
                  maskImage: "linear-gradient(180deg, #000 45%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(180deg, #000 45%, transparent 100%)",
                }}
              />
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85 }}>{eyebrow}</Typography>
              <Typography component="h2" sx={{ mt: 1.5, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, fontSize: { xs: "1.6rem", md: "1.9rem" } }}>
                {title}
              </Typography>
              <Typography component="div" sx={{ mt: 1.5, opacity: 0.9, fontSize: "0.95rem", lineHeight: 1.65 }}>
                {text}
              </Typography>

              <Stack spacing={2.25} sx={{ mt: 4 }}>
                <ContactRow icon={<MailOutlineRoundedIcon />} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
                <ContactRow icon={<PhoneOutlinedIcon />} label="Phone" value={CONTACT.phone} href={CONTACT.phoneHref} />
                <ContactRow icon={<PlaceOutlinedIcon />} label="Office" value={CONTACT.office} />
                <ContactRow icon={<ScheduleRoundedIcon />} label="Response" value={response} />
              </Stack>

              <Box sx={{ mt: "auto", pt: 4 }}>
                <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.2)", pt: 3 }}>
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.75, mb: 1.75 }}>What happens next</Typography>
                  <Stack spacing={1.25}>
                    {steps.map((step, i) => (
                      <Stack key={step} direction="row" alignItems="center" sx={{ gap: 1.5 }}>
                        <Box sx={{ width: 24, height: 24, flex: "none", borderRadius: "50%", bgcolor: i === steps.length - 1 ? C.white : "rgba(255,255,255,0.16)", color: i === steps.length - 1 ? C.brandDark : C.white, display: "grid", placeItems: "center", fontSize: "0.72rem", fontWeight: 700 }}>
                          {i === steps.length - 1 ? <CheckRoundedIcon sx={{ fontSize: 15 }} /> : i + 1}
                        </Box>
                        <Typography sx={{ fontSize: "0.9rem", opacity: 0.95 }}>{step}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Form */}
          <Grid size={{ xs: 12, md: 7.5 }} order={{ xs: 1, md: 2 }} sx={{ p: { xs: 2.5, sm: 4, md: 5 } }}>
            {children}
          </Grid>
        </Grid>
      </Box>

      {/* What to include */}
      <Box sx={{ mt: 3, bgcolor: C.white, borderRadius: "24px", border: `1px solid ${C.border}`, boxShadow: SHADOW.card, p: { xs: 2.5, sm: 4, md: 5 } }}>
        <Typography component="h2" sx={{ fontWeight: 800, color: C.ink, fontSize: { xs: "1.3rem", md: "1.5rem" }, letterSpacing: "-0.02em" }}>What to include in your enquiry</Typography>
        <Typography sx={{ mt: 0.75, color: C.muted, fontSize: "0.95rem" }}>The more of this you can share, the faster our engineers can respond.</Typography>
        <Box sx={{ mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: 1.5 }}>
          {INCLUDE_LIST.map(item => (
            <Stack key={item} direction="row" alignItems="flex-start" sx={{ gap: 1.25, p: 2, borderRadius: "14px", bgcolor: C.surface }}>
              <CheckCircleRoundedIcon sx={{ color: C.brand, fontSize: 22, flex: "none" }} />
              <Typography sx={{ fontSize: "0.92rem", color: C.text, lineHeight: 1.5 }}>{item}</Typography>
            </Stack>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
)
