import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

const getProductDetails = async (id) => {
  const response = await axiosInstance.get(`Products/${id}`);
  return response.data.response;
};

export default function useProduct(id) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetails(id), // calls it and returns the result
    staleTime: 1000 * 60 * 5,
  });
}