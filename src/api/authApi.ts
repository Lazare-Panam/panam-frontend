
import axiosClient from "../api/axiosClient"

const USER_BASE_PATH = "/api/User"
export interface RegisterUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  companyName: string;
  jobTitle: string;
  phoneNumber: string;
  country: string;
}
export interface LoginDto {
  email: string;
  password: string;
}
export const registerUser = async (payload: RegisterUserDto): Promise<any> => {
  const url = `${USER_BASE_PATH}/register`;
  const response = await axiosClient.post(url, payload);
  return response.data;
};

export const loginUser = async (credentials: LoginDto): Promise<any> => {
  const url = `${USER_BASE_PATH}/login`;
  const response = await axiosClient.post(url, credentials);
  return response.data;
};
// Add this to your existing api file
export const convertCode = async (code: string) => {
  const url = `${USER_BASE_PATH}/convert?code=${encodeURIComponent(code)}`
  const response = await axiosClient.get(url)
  return response.data // This returns { panamCode: "..." }
}
export const logoutUser = async (): Promise<any> => {
  const url = `${USER_BASE_PATH}/logout`;
  const response = await axiosClient.post(url);
  return response.data;
};
export const getDealsByNames = async (dealNames: string[]): Promise<any> => {
  const params = new URLSearchParams()
  dealNames.forEach(name => params.append("dealNames", name))
  const response = await axiosClient.get(`${USER_BASE_PATH}/by-names?${params.toString()}`)
  return response.data
}

export const getMyOrders = async (): Promise<any> => {
  const response = await axiosClient.get(`${USER_BASE_PATH}/me/orders`);
  return response.data;
}