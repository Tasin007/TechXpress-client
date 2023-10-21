import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../providers/PrivateRoute";
import MyCart from "../Component/MyCart";
import UpdateProduct from "../Pages/UpdateProduct";
import DetailsPage from "../Component/DetailsPage";
import BrandProduct from "../Pages/BrandProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch(`tech-xpress-server-pj28upzsq-tasins-projects.vercel.app/myCart`),
      },
      {
        path: "/detailsPage/:id",
        element: <PrivateRoute><DetailsPage /></PrivateRoute>,
        loader: ({ params }) => fetch(`tech-xpress-server-pj28upzsq-tasins-projects.vercel.app/updateProduct/${params.id}`),
      },
      {
        path: "/updateProducts/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`tech-xpress-server-pj28upzsq-tasins-projects.vercel.app/updateProduct/${params.id}`),
      },
      {
        path: "/brandProduct/:brandName",
        element: <BrandProduct />,
        loader: ({ params }) => fetch(`tech-xpress-server-pj28upzsq-tasins-projects.vercel.app/addProduct/${params.brandName}`),
      },
    ],
  },
]);

export default routes;
