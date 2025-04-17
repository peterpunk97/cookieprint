import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from '../layouts/RootLayout';
import { CheckoutPage, HomePage, LoginPage, OrdersUserPage, OrderUserPage, RegisterPage, ThankYouPage, DashboardProductsPage, DashBoardNewProductPage, DashboardProductSlugPage, DashboardOrdersPage, DashboardOrderPage} from "../pages";
import { ProductosPage } from "../pages/ProductosPage";
import { AboutPage } from "../pages/AboutPage";
import { CotizacionesPage } from "../pages/CotizacionesPage";
import { ProductoPage } from "../pages/ProductoPage";
import Politicas from "../pages/Politicas";
import { ClientLayout } from "../layouts/ClientLayout";
import { DashboardLayout } from '../layouts/DashboardLayout';

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
				element: <ClientLayout />,
				children: [
					{
						path: '',
						element: <Navigate to='/account/pedidos' />,
					},
					{
						path: 'pedidos',
						element: <OrdersUserPage />,
					},
					{
						path: 'pedidos/:id',
						element: <OrderUserPage />,
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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to='/dashboard/productos'/>,
            },
            {
                path: 'productos',
                element: <DashboardProductsPage/>,
            },
            {
                path: 'productos/new',
                element: <DashBoardNewProductPage/>,
            },

            {
                path: 'productos/editar/:slug',
				element: <DashboardProductSlugPage />,
            },
            {
                path: 'ordenes',
                element: <DashboardOrdersPage/>,
            },
            {
                path: 'ordenes/:id',
                element: <DashboardOrderPage/>,
            },
        ],
    },
]);