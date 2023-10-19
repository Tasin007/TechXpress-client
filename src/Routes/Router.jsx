import { createBrowserRouter } from "react-router-dom";
import Root from "./Root" 
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";


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
            
            
            
            
        ]
    }
])

export default routes;
