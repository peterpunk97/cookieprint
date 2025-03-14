import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export const navbarLinks = [
    {
        id: 1,
        title: 'Inicio',
        href: '/',
    },

    {
        id: 2,
        title: 'Productos',
        href: '/productos',
    },

    {
        id: 3,
        title: 'Cotizaciones',
        href: '/cotizaciones',
    },

    {
        id: 4,
        title: 'Nosotros',
        href: '/nosotros',
    },
];

export const socialLinks = [
    {
        id: 1,
        title: 'Facebook',
        href: 'https://www.facebook.com/cookieprintoficial',
        icon: <FaFacebookF/>,
    },

    {
        id: 2,
        title: 'Instagram',
        href: 'https://www.instagram.com',
        icon: <FaInstagram/>,
    },

    {
        id: 3,
        title: 'WhatsApp',
        href: 'https://www.whatsapp.com',
        icon: <FaWhatsapp/>,
    },
]