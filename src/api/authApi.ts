import axiosClient from "../api/axiosClient"

const USER_BASE_PATH = "/api/User"

export const registerUser = async (formData: any) => {
  // Mapping frontend state names to backend DTO property names
  const payload = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    password: formData.password,
    projectEnquiry: formData.enquiry,
    companyName: "Industrial Partner" 
  };

  const url = `${USER_BASE_PATH}/register`
  const response = await axiosClient.post(url, payload)
  return response.data
}
// Add this to your existing api file
export const convertCode = async (code: string) => {
  const url = `${USER_BASE_PATH}/convert?code=${encodeURIComponent(code)}`
  const response = await axiosClient.get(url)
  return response.data // This returns { panamCode: "..." }
}