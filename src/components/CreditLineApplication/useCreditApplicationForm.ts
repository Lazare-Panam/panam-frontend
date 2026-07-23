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
  paymentTerms: "",
  monthlyOrderValue: 0,
  products: "",
  signatoryName: "",
  signatoryTitle: "",
  signature: "",
  declarationDate: "",
  declarationAccepted: true,
}

export const useCreditApplicationForm = (onSuccess?: () => void) => {
  const [formData, setFormData] = useState<CreditLineApplicationDto>(initialState)
  const [loading, setLoading] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === "creditLimitRequested" || name === "monthlyOrderValue" ? Number(value) : value,
    }))
    if (name === "email") setEmailError("")
  }

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.")
      return
    }

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

  return { formData, loading, emailError, error, handleChange, handleSubmit }
}
