import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Box, Typography, TextField, Button, Alert } from "@mui/material";
import { registerSchema } from "../../validation/authSchemas";
import { Link } from "react-router";

export default function Register() {
  const {register , handleSubmit ,formState: {errors , isSubmitting}} = useForm(
    {
      resolver : yupResolver(registerSchema)
    }
  );
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(null);
  const onSubmit = async(data) =>{
    try{
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register' , data);
      console.log(response);
      setSuccess("Done")
    }
    catch(error){
      setServerError("Registration failed , please try again")
      console.log(`error..` , error);
    }
  }
    return(
      <Container maxWidth = 'sm'>
        <Box sx={{boxShadow:3 , bgcolor: 'white' , borderRadius:3}}>
          <Typography variant = 'h4'component = 'h2' sx = {{mb:3 , textAlign:'center' }}>Create Account</Typography>
          {serverError? <Alert severity='error'>{serverError}.</Alert>: ""}
          {success? <Alert severity='success'>{success}</Alert>: ""}
          <Box component = 'form' onSubmit = {handleSubmit(onSubmit)}>
            <TextField label = "Full Name" fullWidth {...register('fullName')} error = {errors.fullName} helperText ={errors.fullName?.message}/>
            <TextField label = "User Name" fullWidth {...register('userName')} error = {errors.userName} helperText ={errors.userName?.message}/>
            <TextField label = "Email" fullWidth {...register('email')} error = {errors.email} helperText ={errors.email?.message}/>
            <TextField label = "Phone Number" fullWidth {...register('phoneNumber')} error = {errors.phoneNumber} helperText ={errors.phoneNumber?.message}/>
            <TextField label = "Password" fullWidth {...register('password')} error = {errors.password} helperText ={errors.password?.message}/>
            <Button type = 'submit' variant = 'contained' fullWidth sx = {{mt:3}} disabled = {isSubmitting}>
              {isSubmitting? "LOADING..." : "REGISTER"}
            </Button>   
            <Typography variant = 'body2' sx= {{m:2}}>Already have anaccount?
              <Link to = '/login'>Login</Link>
            </Typography> 
            
          </Box>
        </Box>
      </Container>
    )
  

}
