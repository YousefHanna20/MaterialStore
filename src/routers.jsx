import {createBrowserRouter} from "react-router"
import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout"
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import ForgotPassword from "./pages/forgotPassword/ForgotPassword"
import ResetPassword from './pages/resetPassword/ResetPassword'
import ProductDetails from './pages/productDetails/ProductDetails'
const router = createBrowserRouter([
    {
        path : '/',
        element: <MainLayout/> , 
        children: [
            {
              index:true , element: <Home/>
            },
            {
                path: 'products/:id' , element: <ProductDetails/>
            }
        ] 
    },
    {
        element:<AuthLayout/> ,
        children:[
            {
                path:'/login' , element: <Login/>
            },
            {
                path:'/register' , element: <Register/>
            },
            {
                path: '/forgotPass' , element: <ForgotPassword/>
            },
            {
                path:'/resetPass' , element: <ResetPassword/>
            }

        ]
    }
])
export default router 
