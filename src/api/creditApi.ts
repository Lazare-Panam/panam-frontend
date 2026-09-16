// creditApi.ts
import axiosClient from "./axiosClient"

const ADMIN_BASE_PATH = "/api/admin"
const USER_BASE_PATH = "/api/user"

// Single source of truth for the currencies we accept. The order here is the
// order shown in the dropdown, and this list must match the server-side
// allow-list on the API so a hand-crafted request can't slip an unsupported code past us.
export const SUPPORTED_CURRENCIES = ["GBP", "EUR", "USD"] as const
export type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number]

export interface CreditLineApplicationDto {
  companyName: string
  registrationNumber: string
  vatNumber?: string
  addressLine1: string
  addressLine2?: string
  website?: string
  sector: string
  yearsInBusiness: string
  employees?: string
  contactName: string
  jobTitle: string
  email: string
  phone: string
  creditLimitRequested: number
  currency: string
  paymentTerms: string
  monthlyOrderValue: number
  products?: string
  signatoryName: string
  signatoryTitle: string
  signature: string
  declarationDate: string
  declarationAccepted: boolean
}

export interface CreditLineApplication extends CreditLineApplicationDto {
  applicationId: number
  submittedAtUtc: string
  status: number // 0 = Pending, 1 = Approved, 2 = Declined
}

// Public submission (customer-facing)
export const submitCreditApplication = async (application: CreditLineApplicationDto): Promise<CreditLineApplication> => {
  const response = await axiosClient.post(`${USER_BASE_PATH}/credit-applications`, application)
  return response.data.application
}

// Admin: view all
export const getAllCreditApplications = async (): Promise<CreditLineApplication[]> => {
  const response = await axiosClient.get<CreditLineApplication[]>(`${ADMIN_BASE_PATH}/credit-applications`)
  return response.data
}

// Admin: view one
export const getCreditApplicationById = async (applicationId: number): Promise<CreditLineApplication> => {
  const response = await axiosClient.get<CreditLineApplication>(`${ADMIN_BASE_PATH}/credit-applications/${applicationId}`)
  return response.data
}

// Admin: update status
export const updateCreditApplicationStatus = async (applicationId: number, status: number, creditLimit: number): Promise<void> => {
  await axiosClient.patch(`${ADMIN_BASE_PATH}/credit-applications/${applicationId}/status`, { status, creditLimit: creditLimit.toString() }, { headers: { "Content-Type": "application/json" } })
}
