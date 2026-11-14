import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useQuery} from "@tanstack/react-query"
import axiosInstance from '../api/axiosInstance';

export default function useCategories() {
    const getCategories = async() => {
   
        const response =await axiosInstance.get("Categories");
        return response.data.response.data; 
    }
    return useQuery({
        queryKey: ['Categories'],
        queryFn: getCategories,
        staleTime : 1000 * 60 *5
    })
  
}
