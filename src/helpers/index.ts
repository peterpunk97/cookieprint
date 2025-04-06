//Funcion para preparar los productos

import { Color, Product, VariantProduct } from "../interfaces";

//Función para formatear el precio a pesos Mexicanos
export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
}


export const prepareProducts = (products: Product[]) => {
    return products.map(product => {
        //agrupar variantes por color
        const colors = product.variants.reduce((acc: Color[], variant: VariantProduct) => {
            const existingColor = acc.find(item => item.color === variant.color)


            if (existingColor) {
                //si ya existe el color comparamos los precios
                existingColor.price = Math.min(existingColor.price, variant.price);
            }
            else {
                acc.push({
                    color: variant.color,
                    price: variant.price,
                    name: variant.color_name,
                });
            }

            return acc;
        }, []);

        //Obtener el precio mas bajo de las variantes agrupadas
        const price = Math.min(...colors.map(item => item.price));

        // devolver el producto formateado

        return {
            ...product,
            price,
            colors: colors.map(({ name, color }) => ({ name, color })),
            variants: product.variants,
        }
    });
};


//Funcion para formatear la fecha a formato de lectura natural

export const formatDateLong = (date: string): string => {
    const dateObject = new Date(date);

    return dateObject.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

// Funcion para formatear la fecha con solo numeros (dd/mm/yyyy)

export const formatDate = (date: string): string => {
    const dateObject = new Date(date);

    return dateObject.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
    });
};


// Funcion para obtener el estado del pedido

export const getStatus = (status: string): string => {

    switch (status) {
        case 'Pending':
            return 'Pendiente';
        case 'Paid':
            return 'Pagado';
        case 'Shipped':
            return 'Enviado';
        case 'Delivered':
            return 'Entregado';
        default:
            return status;
    }
};