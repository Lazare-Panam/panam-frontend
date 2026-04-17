import axiosClient from "./axiosClient"

const ADMIN_BASE_PATH = "/api/admin"
interface AdminLoginDto {
  email: string
  password: string
}

export const loginAdmin = async (credentials: AdminLoginDto): Promise<any> => {
  const url = `${ADMIN_BASE_PATH}/login`
  const response = await axiosClient.post(url, credentials)
  return response.data
}
interface AdminEnquiry {
  id: number
  message: string
  createdAt: string
  attachmentPath: string | null
  userId: string
  userEmail: string
  userFirstName: string
  userLastName: string
  userCompany: string
  status: number
}

export const getAllAdminEnquiries = async (): Promise<AdminEnquiry[]> => {
  const url = `${ADMIN_BASE_PATH}/enquiries`
  const response = await axiosClient.get<AdminEnquiry[]>(url)
  return response.data
}
export interface RFQLineItem {
  id: string
  productCode: string
  productDescription: string
  quantity: number
  notes: string
  unitPrice: number | null
}

export interface AdminRFQ {
  id: string
  referenceNumber: string
  status: number
  priceOffered: number | null
  submittedAt: string
  userId: string
  userEmail: string
  userFirstName: string
  userLastName: string
  userCompany: string
  lineItems: RFQLineItem[]
}

export const getAllAdminRFQs = async (): Promise<AdminRFQ[]> => {
  const response = await axiosClient.get<AdminRFQ[]>("/api/admin/rfqs")
  return response.data
}

export interface UserSummary {
  id: string
  email: string
  firstName: string
  lastName: string
  companyName: string
  jobTitle: string
  country: string
  isApproved: boolean
  emailConfirmed: boolean
}

export const getAllAdminUsers = async (): Promise<UserSummary[]> => {
  const response = await axiosClient.get<UserSummary[]>(`${ADMIN_BASE_PATH}/users`)
  return response.data
}

export interface RFQLineItemDTO {
  productCode: string
  productDescription: string
  quantity: number
  notes?: string
  unitPrice?: number | null
}
export const notifyQuotationReady = async (rfqId: string): Promise<void> => {
  await axiosClient.post(`${ADMIN_BASE_PATH}/rfq/${rfqId}/notify-ready`)
}
export interface HubSpotDealLineItem {
  name: string
  description: string
  unitPrice: number | null
  quantity: number
}

export interface HubSpotDeal {
  id: string
  properties: {
    dealName: string
    amount: string
    dealStage: string
    customer: string
    shippingDate: string
    trackingNumber: string
    deliveryDate: string
  }
  lineItems: HubSpotDealLineItem[]
}

export const getDealsByEmail = async (email: string): Promise<HubSpotDeal[]> => {
  const response = await axiosClient.get<HubSpotDeal[]>(`${ADMIN_BASE_PATH}/hubspot/deals/${email}`)
  return response.data
}
export const updateRFQStatus = async (rfqId: string, status: number): Promise<void> => {
  await axiosClient.patch(`${ADMIN_BASE_PATH}/rfq/${rfqId}/status`, status, {
    headers: { "Content-Type": "application/json" },
  })
}

export const updateEnquiryStatus = async (enquiryId: number, status: number): Promise<void> => {
  await axiosClient.patch(`${ADMIN_BASE_PATH}/enquiry/${enquiryId}/status`, status, {
    headers: { "Content-Type": "application/json" },
  })
}
export const adminPreviewDealPdf = async (dealName: string, email: string): Promise<string> => {
  const response = await axiosClient.get(`${ADMIN_BASE_PATH}/hubspot/deals/${encodeURIComponent(dealName)}/pdf`, { params: { email }, responseType: "blob" })
  return window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }))
}

export const adminDownloadDealPdf = async (dealName: string, email: string): Promise<void> => {
  const response = await axiosClient.get(`${ADMIN_BASE_PATH}/hubspot/deals/${encodeURIComponent(dealName)}/pdf`, { params: { email }, responseType: "blob" })
  const url = window.URL.createObjectURL(new Blob([response.data]))
  const link = document.createElement("a")
  link.href = url
  link.setAttribute("download", `${dealName}-estimate.pdf`)
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.URL.revokeObjectURL(url)
}
