import { AppBar,Toolbar ,  Box, Typography , Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'
import { useAuthStore } from '../../store/useAuthStore'

export default function Navbar() {
  const token = useAuthStore((state) => state.token);
  const logout= useAuthStore((state) => state.logout );
  return (
    <AppBar position= 'static'>
      <Toolbar>
        <Typography variant = 'h6' component = {Link} to= '/' sx = {{textDecoration: 'none' , color: 'inherit'}}>
             MaterialStore
        </Typography>
        <Box sx = {{flexGrow: 1}}>
          <Button color= 'inherit' component = {Link}>Home</Button>
          <Button color = 'inherit' component = {Link} to = '/cart'>Cart</Button>
          { token ? <>
            <Button color = 'inherit' onClick = {logout}>Logout</Button>
            </> : <>
            <Button color = 'inherit' component = {Link} to = '/login' >Login</Button>
            <Button color = 'inherit' component = {Link} to = '/register' >Register</Button>
          </>
          
          }

        </Box>
      </Toolbar>
    </AppBar>
  )
}
