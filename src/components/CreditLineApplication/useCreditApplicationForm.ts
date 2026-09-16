import { useState } from "react"
import { submitCreditApplication, type CreditLineApplicationDto } from "../../api/creditApi"
const initialState: CreditLineApplicationDto = {
  companyName: "",
  registrationNumber: "",
  vatNumber: "",
  addressLine1: "",
  addressLine2: "",
  website: "",
  sector: "",
  yearsInBusiness: "",
  employees: "",
  contactName: "",
  jobTitle: "",
  email: "",
  phone: "",
  creditLimitRequested: 0,
  currency: "GBP",
  paymentTerms: "",
  monthlyOrderValue: 0,
  products: "",
  signatoryName: "",
  signatoryTitle: "",
  signature: "",
  declarationDate: "",
  declarationAccepted: true,
}

// Text fields that must be filled in (whitespace-only does not count).
const REQUIRED_TEXT_FIELDS: (keyof CreditLineApplicationDto)[] = [
  "companyName",
  "registrationNumber",
  "addressLine1",
  "sector",
  "yearsInBusiness",
  "contactName",
  "jobTitle",
  "email",
  "phone",
  "currency",
  "paymentTerms",
  "signatoryName",
  "signatoryTitle",
  "signature",
  "declarationDate",
]

// Numeric fields that must be greater than 0 (a default of 0 does not count as filled).
const REQUIRED_AMOUNT_FIELDS: (keyof CreditLineApplicationDto)[] = [
  "creditLimitRequested",
  "monthlyOrderValue",
]

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export const useCreditApplicationForm = (onSuccess?: () => void) => {
  const [formData, setFormData] = useState<CreditLineApplicationDto>(initialState)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === "creditLimitRequested" || name === "monthlyOrderValue" ? Number(value) : value,
    }))
    // Clear a field's error as soon as the user starts correcting it.
    setErrors(prev => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const validate = (): Record<string, string> => {
    const newErrors: Record<string, string> = {}

    for (const field of REQUIRED_TEXT_FIELDS) {
      if (!String(formData[field] ?? "").trim()) {
        newErrors[field] = "This field is required."
      }
    }

    // Email is required and, if present, must be well-formed.
    if (!newErrors.email && !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address."
    }

    for (const field of REQUIRED_AMOUNT_FIELDS) {
      if (!(Number(formData[field]) > 0)) {
        newErrors[field] = "Enter an amount greater than 0."
      }
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})

    setLoading(true)
    try {
      await submitCreditApplication(formData)
      onSuccess?.()
    } catch (err: any) {
      setError(err?.response?.data?.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return { formData, loading, errors, error, handleChange, handleSubmit }
}
