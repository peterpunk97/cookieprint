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


            if(existingColor) { 
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

        return{
            ...product,
            price,
            colors: colors.map(({name, color}) => ({name, color})),
            variants: product.variants,
        }
    });
};