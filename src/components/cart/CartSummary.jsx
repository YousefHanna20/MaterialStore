import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

export default function CartSummary({total}) {
  return (
    <Paper sx = {{p:3}}>
        <Typography variant = 'h4' sx={{p:2}}>
            Order Summary
        </Typography>
        <Divider/>
        <Box>
            <Typography>Total price: ${total}</Typography>
        </Box>
        <Button variant='contained' fullWidth>CheckOut</Button>
    </Paper>

  )
}
