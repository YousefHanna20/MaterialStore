import React from 'react'
import {useNavigate, useParams} from 'react-router'
import UseProduct from '../../hooks/UseProduct';
import { Alert, Box, Button, Card, CardMedia, Chip, CircularProgress, Divider, Rating, Typography } from '@mui/material';
import ReviewItem from '../../components/productDetails/ReviewItem';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useAddToCart from '../../hooks/useAddToCart';
import { useAuthStore } from '../../store/useAuthStore';
import { toast , Bounce } from 'react-toastify';

export default function ProductDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const token = useAuthStore((state) => state.token);
    const {data , isPending, isError} =UseProduct(id);
    const {mutate: addToCart , isPending: addToCartPending} = useAddToCart();
    if(isPending) return <CircularProgress/>
    if(isError) return <Alert severity='error' >Failed to load product details</Alert>
    const inStock = data.quantity > 0;
    const handleAddToCart = ()=>{
      if(!token){
        navigate('/login');
        return;
      }
      addToCart(data.id,{
        onSuccess: ()=>{
          toast.success('Added To Cart Successfully', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: 1,
              theme: "colored",
              transition: Bounce,
          });
        },
        onError: (error)=>{
          toast.error(error.response?.data?.message || "Could not add to cart");
        }
      })
    }
  return (
    <>
     <Box sx ={{display: 'grid' , gridTemplateColumns: {xs: '1fr' , md: "1fr 1fr"}, gap: 4}}>
        <Card>
                <CardMedia component = {'img'} image = {data.image} sx = {{maxHeight: 400, objectFit: 'contain'}}/>
        </Card>
        <Box>
            <Typography>{data.name}</Typography>
            <Rating value = {data.rate} readOnly></Rating>
            <Typography variant = 'h4' color = 'primary'>${data.price}</Typography>
            <Chip label= {inStock ? 'In Stock' : 'Out of Stock'} color = {inStock ? "success": 'error'}></Chip>
            <Typography>{data.description}</Typography>
            <Button variant= 'contained'  disabled = {!inStock || addToCartPending} startIcon={<ShoppingCartIcon/>}
               onClick = {handleAddToCart}>
                Add To Cart
            </Button>
        </Box>
     </Box>
     <Divider sx={{mt: 3, mb:3 , borderBottemWidth: 3}}/>
     {data.reviews.map((review)=> <ReviewItem review = {review} />) }
      
     
    </>
  )
}
