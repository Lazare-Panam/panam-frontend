import axiosClient from "./axiosClient";

export const getProductCategory = async (id: string) => {
  const response = await axiosClient.get(`/api/catalog/${id}`);

  return response.data;
};
