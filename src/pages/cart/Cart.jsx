import React from 'react'
import { useAuthStore } from '../../store/useAuthStore'
import useCart from '../../hooks/useCart';
import { Alert, Box, Button, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router';
import CartItem from './CartItem';
import CartSummary from '../../components/cart/CartSummary';

export default function Cart() {
  const token = useAuthStore((state)=> state.token);
  const {data,isPending, isError} =useCart();
  if(!token){
    return(
        <Box sx={{textAlign:'center' , py:10}}>
            <Typography variant = 'h5' sx={{mb:2}}>
                Please Login to View Your Cart
            </Typography>
            <Button component = {Link} to='/login'>
               Login
            </Button>
        </Box>
    )
  }
  if(isPending){
    <CircularProgress/>
  }
  if(isError){
    return <Alert severity='error' >Failed to Load Cart Items</Alert>
  }
  if(data?.items.length == 0){
    return(
        <Box>
            <Typography>
                Your Cart is Empty 
                <Button component = {Link} to = '/products'>Shop Now</Button>
            </Typography>
        </Box>
    )
  }

  return (
    <Box sx={{display: 'grid' , gridTemplateColumns: {xs: '1fr' , md: '2fr 1fr'} , gap: 4}}>
        <Box>
            {data?.items.map((item)=>(
                <CartItem item = {item}/>
            ))}
        </Box>
        <Box>
            <CartSummary total = {data?.cartTotal}/>
        </Box>
    </Box>
  )
}
