import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getProductDetails = async (id) => {
  const response = await axios.get(
    `https://knowledgeshop.runasp.net/api/Products/${id}`,
    { headers: { "Accept-Language": "en" } }
  );
  return response.data.response;
};

export default function useProduct(id) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetails(id), // calls it and returns the result
    staleTime: 1000 * 60 * 5,
  });
}