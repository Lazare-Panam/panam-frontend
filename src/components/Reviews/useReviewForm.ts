import { useState } from "react"
import { submitReview, type ReviewSubmissionDto } from "../../api/reviewApi"

const initialState: ReviewSubmissionDto = {
  customerName: "",
  email: "",
  company: "",
  productPartNumber: "",
  rating: 0,
  title: "",
  comment: "",
}

// Text fields that must be filled in (whitespace-only does not count).
const REQUIRED_TEXT_FIELDS: (keyof ReviewSubmissionDto)[] = [
  "customerName",
  "email",
  "comment",
]

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export const useReviewForm = (onSuccess?: () => void) => {
  const [formData, setFormData] = useState<ReviewSubmissionDto>(initialState)
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

  // MUI's Rating gives us (event, value) where value is number | null.
  const handleRatingChange = (value: number | null) => {
    setFormData(prev => ({ ...prev, rating: value ?? 0 }))
    clearFieldError("rating")
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

    // A star rating must actually be chosen (1–5).
    if (!(formData.rating >= 1 && formData.rating <= 5)) {
      newErrors.rating = "Please select a star rating."
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
      await submitReview(formData)
      onSuccess?.()
    } catch (err: any) {
      setError(err?.response?.data?.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return { formData, loading, errors, error, handleChange, handleRatingChange, handleSubmit }
}
