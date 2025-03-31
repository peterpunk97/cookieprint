import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from '../layouts/RootLayout';
import { CheckoutPage, HomePage, LoginPage, OrdersUserPage, RegisterPage, ThankYouPage} from "../pages";
import { ProductosPage } from "../pages/ProductosPage";
import { AboutPage } from "../pages/AboutPage";
import { CotizacionesPage } from "../pages/CotizacionesPage";
import { ProductoPage } from "../pages/ProductoPage";
import Politicas from "../pages/Politicas";
import { ClientLayaout } from "../layouts/ClientLayaout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'productos',
                element: <ProductosPage/>,
            },

            {
                path: 'cotizaciones',
                element: <CotizacionesPage/>,
            },
            
            {
                path: 'nosotros',
                element: <AboutPage/>,
            },

            {
                path: 'productos/:slug',
                element: <ProductoPage/>,
            },

            {
                path: 'politicas',
                element: <Politicas/>,
            },

            {
                path: 'login',
                element: <LoginPage/>,
            },

            {
                path: 'registro',
                element: <RegisterPage/>,
            },

            {
                path: 'account',
                element: <ClientLayaout/>,
                children: [
                    {
                        path: '',
                        element: <Navigate to='/account/pedidos'/>, 
                    },
                    {
                        path: 'pedidos',
                        element: <OrdersUserPage/>,
                    },
                ],
            },

        ],
    },

    {
        path: '/checkout',
        element: <CheckoutPage/>,
    },

    {
        path: '/checkout/:id/thank-you',
        element: <ThankYouPage/>,
    },
    {
        path: 'pedidos/:id',
        element: <OrdersUserPage/>
    }
]);