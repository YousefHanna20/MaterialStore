import * as yup from 'yup'

export const registerSchema = yup.object(
    {
        fullName : yup.string().required('Full Name is Required').min(3 , "Full Name must be at least 3 chars"),
        userName : yup.string().required("Username is required").min(3,"Username must be at least 3 chars"),
        email: yup.string().required('Email is required').email("Invalid email format"),
        phoneNumber: yup.string().required('Phone number is required').matches(/^05\d{8}$/, "Phone number must start with 05 and be 10 digits"),
        password : yup.string().required("Password is required")
          .min(8)
          .matches(/[A-Z]/ , "Password must contain an uppercase letter")
          .matches(/[a-z]/ , "Password must contian a lowercase letter")
          .matches(/[0-9]/ , "password must contain a number")
          .matches(/[^A-Za-z0-9]/, "Add a special character (e.g. @, #, !)")

    }

);
export const loginSchema = yup.object(
    {
        
        email: yup.string().required('Email is required').email("Invalid email format"),
        password : yup.string().required("Password is required")
          .min(8)
          .matches(/[A-Z]/ , "Password must contain an uppercase letter")
          .matches(/[a-z]/ , "Password must contian a lowercase letter")
          .matches(/[0-9]/ , "password must contain a number")
          .matches(/[^A-Za-z0-9]/, "Add a special character (e.g. @, #, !)"),

    }

);
export const forgotPasswordSchema = yup.object(
    {
         email: yup.string().required('Email is required').email("Invalid email format")
    }
);

export const resetPasswordSchema = yup.object(
    {
        code: yup.string().required('Verification code is required').trim().matches(/^\d{4}$/ , "Code must be exactly 4 digits"),
        email: yup.string().required('Email is required').email("Invalid email format"),
        newPassword : yup.string().required("Password is required")
          .min(8)
          .matches(/[A-Z]/ , "Password must contain an uppercase letter")
          .matches(/[a-z]/ , "Password must contian a lowercase letter")
          .matches(/[0-9]/ , "password must contain a number")
          .matches(/[^A-Za-z0-9]/, "Add a special character (e.g. @, #, !)"),
        confirmPassword: yup.string().required("Please confirm your password").oneOf([yup.ref("newPassword")], "Passwords must match"),


    }
)

