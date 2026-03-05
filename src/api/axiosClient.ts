import axios from "axios"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

axiosClient.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"]
  }
  return config
})

export default axiosClient
