import axiosClient from "./axiosClient"

const ADMIN_BASE_PATH = "/api/admin"

interface AdminLoginDto {
  email: string
  password: string
} // Or your specific Admin interface

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

export interface CreateRFQLineItemDTO {
  productCode: string
  productDescription: string
  quantity: number
  notes?: string
}

export interface CreateRFQForCustomerDTO {
  rfqLineItemDTOs: CreateRFQLineItemDTO[]
}

export const createRFQForCustomer = async (customerId: string, payload: CreateRFQForCustomerDTO): Promise<void> => {
  await axiosClient.post(`${ADMIN_BASE_PATH}/create-rfq-for-customer/${customerId}`, payload)
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
