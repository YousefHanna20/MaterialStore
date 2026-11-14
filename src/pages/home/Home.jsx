import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import { Alert } from '@mui/material'
import { useAuthStore } from '../../store/useAuthStore'

export default function Home() {
  const token = useAuthStore((state) => state.token);
  return (
    <>
      {token ? <Alert severity = 'success'>Welcome Back!</Alert> : ''}
      <Categories/>   
      <Products/> 
    </>
  )
}
