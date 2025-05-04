import { createBrowserRouter } from "react-router";
import Layout from "./Pages/Layout";
import Auth from "./Pages/Auth";
import CreateUser from "./Pages/CreateUser";
import Products from "./Pages/Products";
import Landing from "./Components/Landing";
import Cart from "./Pages/Cart";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout/>,
            children:[
                {
                    path: '',
                    element: <Landing/>
                },
                {
                    path: '/products',
                    element: <Products/>
                },
                {
                    path: 'login',
                    element: <Auth/>
                },
                {
                    path: 'createUser',
                    element: <CreateUser/>
                },
                {
                    path:'cart',
                    element: <Cart/>
                }
            ]
        }
    ]
)

export default router