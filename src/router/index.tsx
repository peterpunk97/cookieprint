import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from '../layouts/RootLayout';
import { HomePage} from "../pages";
import { ProductosPage } from "../pages/ProductosPage";
import { AboutPage } from "../pages/AboutPage";
import { CotizacionesPage } from "../pages/CotizacionesPage";
import { ProductoPage } from "../pages/ProductoPage";
import Politicas from "../pages/Politicas";

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
        ]
    }
]

);