import React from 'react'
import {useParams} from 'react-router'
import UseProduct from '../../hooks/UseProduct';
import { Alert, Box, Button, Card, CardMedia, Chip, CircularProgress, Divider, Rating, Typography } from '@mui/material';
import ReviewItem from '../../components/productDetails/ReviewItem';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ProductDetails() {
    const {id} = useParams();
    console.log(id);
    const {data , isPending, isError} =UseProduct(id);
    if(isPending) return <CircularProgress/>
    if(isError) return <Alert severity='error' >Failed to load product details</Alert>
    const inStock = data.quantity > 0;
  return (
    <>
     <Box sx ={{display: 'grid' , gridTemplateColumn: {xs: '1fr' , md: "1fr 1fr"}, gap: 4}}>
        <Card>
                <CardMedia component = {'img'} image = {data.image} sx = {{maxHeight: 400, objectFit: 'contain'}}/>
        </Card>
        <Box>
            <Typography>{data.name}</Typography>
            <Rating value = {data.rate} readOnly></Rating>
            <Typography variant = 'h4' color = 'primary'>${data.price}</Typography>
            <Chip label= {inStock ? 'In Stock' : 'Out of Stock'} color = {inStock ? "success": 'error'}></Chip>
            <Typography>{data.description}</Typography>
            <Button variant= 'contained'  disabled = {!inStock} startIcon={<ShoppingCartIcon/>}>
                Add To Cart
            </Button>
        </Box>
     </Box>
     <Divider sx={{mt: 3, mb:3 , borderBottemWidth: 3}}/>
     {data.reviews.map((review)=> <ReviewItem review = {review} />) }
      
     
    </>
  )
}
