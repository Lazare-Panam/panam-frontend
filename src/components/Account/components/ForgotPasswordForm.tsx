import React, { useState } from "react"
import { Box, Typography, Button, CircularProgress, Link, Stack } from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import { useMutation } from "@tanstack/react-query"
import { useNotificationStore } from "../../store/useNotficationStore"
import { forgotPassword } from "../../../api/authApi"

import { Field } from "../../Auth/Enquiry/enquiryUi"
import { Eyebrow } from "../../Landing2/homeStyles"
import { C, FONT } from "../../Landing2/homeTokens"
import { primaryButtonSx } from "./authStyles"

interface ForgotPasswordProps {
  onBack: () => void
}

const ForgotPasswordForm: React.FC<ForgotPasswordProps> = ({ onBack }) => {
  const [email, setEmail] = useState("")
  const showNotification = useNotificationStore(state => state.showNotification)

  const { mutate, isPending } = useMutation({
    mutationFn: (email: string) => forgotPassword(email),
    onSuccess: () => {
      showNotification({
        message: "If an account exists, a reset link has been sent to your email.",
        severity: "success",
      })
    },
    onError: (err: any) => {
      const errorMsg = err.response?.data?.message || "An error occurred. Please try again."
      showNotification({ message: errorMsg, severity: "error" })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      showNotification({ message: "Please enter your email address.", severity: "warning" })
      return
    }
    mutate(email)
  }

  return (
    <Box>
      <Eyebrow>Account recovery</Eyebrow>
      <Typography component="h1" sx={{ mt: 2, fontWeight: 800, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.1, fontSize: { xs: "2.1rem", md: "2.6rem" } }}>
        Reset Password
      </Typography>
      <Typography sx={{ mt: 1.25, mb: 4, color: C.muted, fontSize: "1.02rem", lineHeight: 1.6 }}>Enter your email address and we'll send you a link to reset your password.</Typography>

      <Box component="form" id="forgot-password" name="forgot-password" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2.5}>
          <Field required label="Email address" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" disabled={isPending} icon={<MailOutlineRoundedIcon />} />

          <Button fullWidth type="submit" variant="contained" disabled={isPending} endIcon={!isPending && <ArrowForwardRoundedIcon />} sx={primaryButtonSx}>
            {isPending ? <CircularProgress size={24} color="inherit" /> : "Send reset link"}
          </Button>

          <Box sx={{ textAlign: "center" }}>
            <Link component="button" type="button" onClick={onBack} disabled={isPending} sx={{ color: C.muted, fontFamily: FONT, fontWeight: 600, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: 0.75, textDecoration: "none", "&:hover": { color: C.brandDark } }}>
              <ArrowBackRoundedIcon sx={{ fontSize: 18 }} /> Back to sign in
            </Link>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default ForgotPasswordForm
