import axiosClient from "./axiosClient";

const ENQUIRY_BASE_PATH = "/api/enquiries";

export interface EnquiryReply {
  id: number;
  enquiryId: number;
  senderId: string;
  senderName: string;
  senderRole: string;
  message: string;
  createdAt: string;
}

export const getReplies = async (enquiryId: number): Promise<EnquiryReply[]> => {
  const response = await axiosClient.get<EnquiryReply[]>(`${ENQUIRY_BASE_PATH}/${enquiryId}/replies`);
  return response.data;
};

export const addReply = async (enquiryId: number, message: string): Promise<EnquiryReply> => {
  const response = await axiosClient.post<EnquiryReply>(`${ENQUIRY_BASE_PATH}/${enquiryId}/replies`, { message });
  return response.data;
};