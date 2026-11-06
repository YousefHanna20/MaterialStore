import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function CategoryItem({category}) {
  return (
    <Card>
        <CardActionArea>
            <CardContent sx={{py:4 , textAlign:'center'}}>
                <Typography>{category.name}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}
