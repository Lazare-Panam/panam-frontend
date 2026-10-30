import { useState } from "react"
import { submitLead, type LeadSubmissionDto } from "../../api/leadApi"

interface LeadFormState {
  name: string
  email: string
  phone: string
  marketingConsent: boolean
  website: string // honeypot
}

const initialState: LeadFormState = {
  name: "",
  email: "",
  phone: "",
  marketingConsent: false,
  website: "",
}

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export const useLeadForm = (onSuccess?: () => void) => {
  const [formData, setFormData] = useState<LeadFormState>(initialState)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [error, setError] = useState("")

  const clearFieldError = (name: string) => {
    setErrors(prev => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    clearFieldError(name)
  }

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, marketingConsent: e.target.checked }))
    clearFieldError("marketingConsent")
  }

  const validate = (): Record<string, string> => {
    const newErrors: Record<string, string> = {}

    // Name + email are required; phone is optional (requiring it on an
    // interruptive popup measurably cuts submissions).
    if (!formData.name.trim()) newErrors.name = "This field is required."
    if (!formData.email.trim()) newErrors.email = "This field is required."
    else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email address."

    // GDPR: the visitor must actively tick the consent box.
    if (!formData.marketingConsent) newErrors.marketingConsent = "Please tick the box to continue."

    return newErrors
  }

  // Event is optional so this can be used both as a form onSubmit handler and as
  // a plain button onClick (the shared SubmitButton is not a native submit button).
  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    setError("")

    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})

    setLoading(true)
    try {
      const payload: LeadSubmissionDto = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        marketingConsent: formData.marketingConsent,
        // The page the popup was submitted from — client-only, guarded by the
        // caller (this only runs on submit, in the browser).
        sourcePage: typeof window !== "undefined" ? window.location.pathname : undefined,
        website: formData.website,
      }
      await submitLead(payload)
      onSuccess?.()
    } catch (err: any) {
      setError(err?.response?.data?.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return { formData, loading, errors, error, handleChange, handleConsentChange, handleSubmit }
}
