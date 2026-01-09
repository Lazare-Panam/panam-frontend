import axiosClient from "../api/axiosClient";

export const getProductCategory = async (id: string) => {
  const response = await axiosClient.get(`/api/catalog/${id}`);

  return response.data;
};

export const getProductSpecification = async (productId: string) => {
  const response = await axiosClient.get(
    `/api/catalog/products/${productId}/specification`
  );
  return response.data;
}