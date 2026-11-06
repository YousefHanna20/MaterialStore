import { Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router';

export default function ProductCard({product}) {
  return (
    <>
    <Card>
        <CardActionArea  component = {Link} to={`/products/${product.id}`}>
            <CardMedia component = {'img'} image = {product.image} alt = {product.name}  sx ={{}}/>
            <CardContent>
                <Typography>{product.name}</Typography>
                <Rating value = {product.rate} readOnly></Rating>
                <Typography variant = 'h6' color = 'primary'>${product.price}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    </>
    
  )
}
