import axiosClient from "../api/axiosClient"

const CATALOG_BASE_PATH = "/api/catalog"

export const getProductCategory = async (id: string) => {
  const url = `${CATALOG_BASE_PATH}/${id}`
  const response = await axiosClient.get(url)
  console.log("check for detail id", response.data)
  return response.data
}

export const getProductSpecification = async (productId: string) => {
  const url = `${CATALOG_BASE_PATH}/products/${productId}/specification`
  const response = await axiosClient.get(url)
  console.log("Raw Product", response.data)
  return response.data
}
// Add this to your existing api file
export const getProductDetail = async (detailId: string) => {
  const url = `${CATALOG_BASE_PATH}/details/${detailId}`;
  const response = await axiosClient.get(url);
  console.log("Fetched Detail Data:", response.data);
  return response.data;
};

export const getallCatalogPdfs = async () => {
  console.trace("getallCatalogPdfs called from:")
  const url = `${CATALOG_BASE_PATH}/catalogPdfs`;
  console.log("Calling URL:", url)
  const response = await axiosClient.get(url);
  return response.data;
};