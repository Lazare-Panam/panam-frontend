import axiosClient from "../api/axiosClient"

const ORDER_BASE_PATH = "/api/Order"

export const requestQuotation = async () => {
  const url = `${ORDER_BASE_PATH}/sendQuotationRequest`
  const response = await axiosClient.post(url, {})
  return response.data
}
