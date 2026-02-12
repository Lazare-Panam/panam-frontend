import React, { useState } from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Stack, CircularProgress, Typography, Box, Autocomplete } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { requestQuotation } from "../../../api/orderApi"
import { useNotificationStore } from "../../store/useNotficationStore"


const BRAND_BLUE = "#01B0F0"

const countries = [
  { code: "US", label: "US", phone: "1" },
  { code: "GB", label: "UK", phone: "44" },
  { code: "IN", label: "IN", phone: "91" },
  { code: "AE", label: "UAE", phone: "971" },
  { code: "SA", label: "SA", phone: "966" },
  { code: "SG", label: "SG", phone: "65" },
  { code: "DE", label: "DE", phone: "49" },
  { code: "FR", label: "FR", phone: "33" },
  { code: "CA", label: "CN", phone: "1" },
  { code: "AU", label: "AUS", phone: "61" },
  { code: "IE", label: "IRE", phone: "353" },
].sort((a, b) => a.label.localeCompare(b.label))

interface QuotationModalProps {
  open: boolean
  onClose: () => void
  cartItems: any[]
}

const QuotationModal = ({ open, onClose, cartItems }: QuotationModalProps) => {
  const showNotification = useNotificationStore(state => state.showNotification)

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerCompany: "",
  })

  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")

  const { mutate, isPending } = useMutation({
    mutationFn: requestQuotation,
    onSuccess: () => {
      showNotification({ message: "Request submitted successfully!", severity: "success" })

      onClose()
      setFormData({ customerName: "", customerEmail: "", customerPhone: "", customerCompany: "" })
    },
    onError: () => {
      showNotification({ message: "Submission failed. Please try again.", severity: "error" })
    },
  })

  const validateBusinessEmail = (email: string) => {
    //const forbidden = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"]
    const forbidden = ["yahoo.com", "hotmail.com", "outlook.com", "icloud.com"]
    const domain = email.split("@")[1]?.toLowerCase()
    return domain && !forbidden.includes(domain)
  }

  const validatePhoneNumber = (phone: string) => {
    // Basic regex: checks if there are at least 7 digits and no letters
    const phoneRegex = /^\d{7,15}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let isValid = true

    if (!validateBusinessEmail(formData.customerEmail)) {
      setEmailError("Please use a business email address.")
      isValid = false
    }

    if (!validatePhoneNumber(formData.customerPhone)) {
      setPhoneError("Please enter a valid phone number (digits only).")
      isValid = false
    }

    if (!isValid) return

    const payload = {
      ...formData,
      customerPhone: `+${selectedCountry.phone} ${formData.customerPhone}`,
      orderNumber: `PV-${Math.floor(1000 + Math.random() * 9000)}`,
      items: cartItems.map(item => ({
        description:
          Object.values(item.specs)
            .filter(v => v)
            .join(", ") || item.name,
        partNumber: item.partNumber,
        quantity: item.quantity,
      })),
    }
    mutate(payload)
  }

  const inputProps = {
    size: "small" as const,
    slotProps: { inputLabel: { style: { fontSize: "0.85rem" } } },
    sx: { "& .MuiOutlinedInput-root": { borderRadius: 0 } },
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" PaperProps={{ sx: { borderRadius: 0 } }}>
      <form onSubmit={handleSubmit}>
        <DialogTitle sx={{ fontWeight: 700, color: "#2D3E50", pb: 1 }}>Request a Quotation</DialogTitle>
        <DialogContent>
          <Typography variant="caption" sx={{ display: "block", mb: 3, color: "#666" }}>
            Enter your business details to receive a formal quotation via email.
          </Typography>

          <Stack spacing={2}>
            <TextField {...inputProps} required label="Full Name" value={formData.customerName} onChange={e => setFormData({ ...formData, customerName: e.target.value })} />
            <TextField {...inputProps} required label="Company Name" value={formData.customerCompany} onChange={e => setFormData({ ...formData, customerCompany: e.target.value })} />

            <TextField
              {...inputProps}
              required
              label="Company Email"
              type="email"
              error={!!emailError}
              helperText={emailError}
              value={formData.customerEmail}
              onChange={e => {
                setEmailError("")
                setFormData({ ...formData, customerEmail: e.target.value })
              }}
            />

            <Stack direction="row" spacing={1} alignItems="flex-start">
              <Autocomplete
                options={countries}
                autoHighlight
                getOptionLabel={option => `+${option.phone}`}
                value={selectedCountry}
                onChange={(_, newValue: any) => setSelectedCountry(newValue)}
                disableClearable
                sx={{ width: 160, "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ fontSize: "0.8rem", "& > img": { mr: 1, flexShrink: 0 } }} {...props}>
                    <img loading="lazy" width="16" src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} alt="" />
                    {option.label} (+{option.phone})
                  </Box>
                )}
                renderInput={params => <TextField {...params} label="Country Code" size="small" slotProps={{ inputLabel: { style: { fontSize: "0.85rem" } } }} sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />}
              />
              <TextField
                {...inputProps}
                required
                fullWidth
                label="Phone Number"
                error={!!phoneError}
                helperText={phoneError}
                value={formData.customerPhone}
                onChange={e => {
                  setPhoneError("")
                  setFormData({ ...formData, customerPhone: e.target.value })
                }}
              />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button onClick={onClose} color="inherit" sx={{ borderRadius: 0, textTransform: "none" }}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={isPending} sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, px: 4, textTransform: "none", "&:hover": { bgcolor: "#0099d1" } }}>
            {isPending ? <CircularProgress size={20} sx={{ color: "white" }} /> : "Submit Request"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default QuotationModal
