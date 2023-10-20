import { createBrowserRouter } from "react-router-dom";
import Root from "./Root" 
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const routes = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            
            {
                path: 'addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>,
            },
            {
                path: '/login', 
                element: <Login></Login>,
            },
            {
                path: '/register', 
                element: <Register></Register>,
            },
            
            
            
        ]
    }
])

export default routes;
