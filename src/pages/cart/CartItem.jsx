import { Box, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import useUpdateCartItem from '../../hooks/useUpdateCartItem'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import useRemoveItemCart from '../../hooks/useRemoveItemCart';
import { toast } from 'react-toastify';

export default function CartItem({item}) {
  const {mutate: updateCartItem, isPending} = useUpdateCartItem();
  const {mutate:removeCartItem, isPending:isRemovePending}= useRemoveItemCart();

  const handleIncrease= ()=>{
    updateCartItem({productId: item.productId, count: item.count+1})
    console.log('add')
  }
  const handleDecrease= ()=>{
    updateCartItem({productId:item.productId, count:item.count-1})
  }

  const handleRemove= ()=>{
    removeCartItem(item.productId, {
      onSuccess: ()=>{
        toast.success('Item removed from cart');
      },
      onError: ()=>{
        toast.error('Failed to remove item from cart');
      }
    }
    )
  }


  return (
    <Paper sx={{p:2 , mb:3, display: 'flex' , justifyContent:'space-between' , alignItems: 'center'}}>
        <Box>
            <Typography>{item.productName}</Typography>
            <Typography>${item.price} each</Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: "center" , border: 1 , borderColor: 'red.400' , borderRadius:1, p:1}}>
          <IconButton onClick={handleDecrease} disabled = {isPending|| item.count == 1}>
            <RemoveIcon fontSize = 'small'/>
          </IconButton>
          <Typography>Quantity: {item.count}</Typography>
          <IconButton onClick={handleIncrease} disabled = {isPending}>
            <AddIcon fontSize = 'small'/>
          </IconButton>
        </Box>
        
        <Typography>Total : ${item.totalPrice}</Typography>
        <IconButton onClick={handleRemove} disabled = {isRemovePending}>
            <DeleteIcon fontSize = 'small'/>
          </IconButton>
    </Paper>
  )
}
