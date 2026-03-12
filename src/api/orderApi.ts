import axiosClient from "../api/axiosClient"
const ORDER_BASE_PATH = "/api/Order"

export interface RFQLineItem {
  productCode: string;
  productDescription: string;
  quantity: number;
  notes: string;
}
export interface RFQSubmissionPayload {
  rfqLineItemDTOs: RFQLineItem[];
}
export interface RFQResponse {
  message: string;
  submittedAt?: string;
}
export const requestQuotation = async (payload: RFQSubmissionPayload): Promise<RFQResponse> => {
  const url = `${ORDER_BASE_PATH}/submitRFQ`;
  const response = await axiosClient.post<RFQResponse>(url, payload);
  return response.data;
}
export interface RFQItem {
  productCode: string;
  productDescription: string;
  quantity: number;
  notes: string;
}
export interface RFQFullDetails {
  referenceNumber: string;
  createdAt: string;
  status: string;
  items: RFQItem[];
}

export const getRFQHistory = async (): Promise<RFQFullDetails[]> => {
  const response = await axiosClient.get(`${ORDER_BASE_PATH}/RFQhistory`);
  return response.data;
};