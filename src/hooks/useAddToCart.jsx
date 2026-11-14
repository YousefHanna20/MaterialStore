import {useAuthStore} from '../store/useAuthStore';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import authAxiosInstance from '../api/authAxiosInstance';


export default function useAddToCart() {
 const token = useAuthStore((state) => state.token);
 const addToCart = async(productId) =>{
    const response = await authAxiosInstance.post('Carts' ,
        {ProductId:productId , Count : 1},
    );
    return response.data;
 }


  return useMutation({
    mutationFn: addToCart,
   }
    
  )
}
