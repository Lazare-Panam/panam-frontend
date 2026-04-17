import axiosClient from "../api/axiosClient"
const ORDER_BASE_PATH = "/api/Order"

export interface RFQLineItem {
  productCode: string
  productDescription: string
  quantity: number
  notes: string
}
export interface RFQSubmissionPayload {
  rfqLineItemDTOs: RFQLineItem[]
}
export interface RFQResponse {
  message: string
  submittedAt?: string
}
export const requestQuotation = async (payload: RFQSubmissionPayload): Promise<RFQResponse> => {
  const url = `${ORDER_BASE_PATH}/submitRFQ`
  const response = await axiosClient.post<RFQResponse>(url, payload)
  return response.data
}
export interface RFQItem {
  productCode: string
  productDescription: string
  quantity: number
  notes: string
  unitPrice: number | null
  lineTotalPrice: number | null
}
export interface RFQFullDetails {
  referenceNumber: string
  createdAt: string
  status: string
  items: RFQItem[]
}

export const getRFQHistory = async (): Promise<RFQFullDetails[]> => {
  const response = await axiosClient.get(`${ORDER_BASE_PATH}/RFQhistory`)
  return response.data
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
    trackingNumber: string
    shippingDate: string
    deliveryDate: string
  }
  lineItems: HubSpotDealLineItem[]
}

export const getMyDeals = async (): Promise<HubSpotDeal[]> => {
  const response = await axiosClient.get<HubSpotDeal[]>(`${ORDER_BASE_PATH}/my-deals`)
  return response.data
}

export const downloadDealPdf = async (dealName: string): Promise<void> => {
  const response = await axiosClient.get(`${ORDER_BASE_PATH}/deals/${encodeURIComponent(dealName)}/pdf`, { responseType: "blob" })
  const url = window.URL.createObjectURL(new Blob([response.data]))
  const link = document.createElement("a")
  link.href = url
  link.setAttribute("download", `${dealName}-estimate.pdf`)
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.URL.revokeObjectURL(url)
}
export const previewDealPdf = async (dealName: string): Promise<string> => {
  const response = await axiosClient.get(
    `${ORDER_BASE_PATH}/deals/${encodeURIComponent(dealName)}/pdf`,
    { responseType: "blob" }
  )
  return window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }))
}
