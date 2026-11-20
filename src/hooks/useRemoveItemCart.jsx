import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';

export default function useRemoveItemCart() {
  const queryClient = useQueryClient();
  const removeItemCart = async(productId) =>{
    const response = await authAxiosInstance.delete(`Carts/${productId}`);
    return response.data;
  }

  return useMutation({
    mutationFn: removeItemCart,
    onSuccess: ()=>{
        queryClient.invalidateQueries({queryKey:['Cart']})
    }
  }
    
  )
}
