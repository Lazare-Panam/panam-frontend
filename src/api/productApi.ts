import axiosClient from "../api/axiosClient"

const CATALOG_BASE_PATH = "/api/catalog"

export const getProductCategory = async (id: string) => {
  const url = `${CATALOG_BASE_PATH}/${id}`
  const response = await axiosClient.get(url)
  //console.log("Product cats", response.data.children);

  return response.data
}

export const getProductSpecification = async (productId: string) => {
  const url = `${CATALOG_BASE_PATH}/products/${productId}/specification`
  const response = await axiosClient.get(url)
  console.log("Raw Product", response.data)
  return response.data
}
