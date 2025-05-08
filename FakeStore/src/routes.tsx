import { createBrowserRouter, Outlet } from "react-router";
import Layout from "./Pages/Layout";
import Auth from "./Pages/Auth";
import CreateUser from "./Pages/CreateUser";
import Products from "./Pages/Products";
import Landing from "./Components/Landing";
import Cart from "./Pages/Cart";
import DashBoard from "./Components/DashBoard";
import AuthContextProvider from "./Context/AuthContext";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <AuthContextProvider>
                    <Outlet />
                </AuthContextProvider>
            , children: [


                {
                    path: '/',
                    element: <Layout />,
                    children: [
                        {
                            index: true,
                            element: <Landing />
                        },
                        {
                            path: '/products',
                            element: <Products />
                        },

                        {
                            path: 'createUser',
                            element: <CreateUser />
                        },
                        {
                            path: 'cart',
                            element: <Cart />
                        },
                        {
                            path: 'dashboard',
                            element: <DashBoard />
                        }
                    ]
                },
                {
                    path: 'login',
                    element: <Auth />
                },
            ]
        }
    ]
)

export default router