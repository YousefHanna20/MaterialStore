import React from 'react'
import { UseProducts } from '../../hooks/UseProducts'
import ProductCard from './ProductCard'
import { Alert, CircularProgress ,Box, Typography } from '@mui/material';

export default function Products() {
    const {data ,isPending, isError} = UseProducts();
    if(isPending) return <CircularProgress/>
    if(isError) return <Alert severity='error' > Failed to load products</Alert>
    console.log(data)
  return (
    <Box>
        <Typography variant = 'h3' component = {'h2'} sx ={{mb: 4}}>Products </Typography>
        <Box sx = {{display: 'grid' , gap: 2 , gridTemplateColumns: {
            xs: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",

        }}}>
            {
                data.map((product) => (
                    <ProductCard product ={product}/>
                ))
            }
        </Box>

    </Box>
  )
}
