import { LuMinus, LuPlus } from "react-icons/lu";
import { Separator } from "../components/shared/Separator";
import { formatPrice } from "../helpers";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { BsChatLeftText } from "react-icons/bs";
import { ProductDescription } from "../components/one-product/ProductDescription";
import { GridImages } from "../components/one-product/GridImages";
import { useProduct } from "../hooks/products/useProduct";
import { useEffect, useMemo, useState } from "react";
import { VariantProduct } from "../interfaces";
import { Tag } from "../components/shared/Tag";
import { Loader } from "../components/shared/Loader";

interface Acc {
    [key: string]: {
        name: string;
        storages: string[];
    }
}



export const ProductoPage = () => {

    const { slug } = useParams<{ slug: string }>();

    const { product, isLoading, isError } = useProduct(slug || '');

    const [selectedColor, setSelectedColor] = useState<string | null>(
        null
    );

    const [selectedStorage, setSelectedStorage] = useState<string | null>(
        null
    );

    const [selectedVariant, setSelectedVariant] =
        useState<VariantProduct | null>(null);


    //Agrupamos las variantes por color
    const colors = useMemo(() => {
        return product?.variants.reduce((acc: Acc, variant: VariantProduct) => {
            const { color, color_name, storage } = variant;
            if (!acc[color]) {
                acc[color] = {
                    name: color_name,
                    storages: [],
                };
            }

            if (!acc[color].storages.includes(storage)) {
                acc[color].storages.push(storage);
            }

            return acc;
        }, {} as Acc
        ) || {};
    }, [product?.variants])


    // Obtener el primer color predeterminado si no se ha seleccionado ninguno

    const avaibleColors = Object.keys(colors)
    useEffect(() => {
        if (!selectedColor && avaibleColors.length > 0) {
            setSelectedColor(avaibleColors[0]);
        }
    }, [avaibleColors, selectedColor]);

    //Actualizar el almacenamiento seleccionado cuando cambia el color
    useEffect(() => {
        if (selectedColor && colors[selectedColor] && !selectedStorage) {
            setSelectedStorage(colors[selectedColor].storages[0]);
        }
    }, [selectedColor, colors, selectedStorage]);


    // Obtener la variante seleccionada
    useEffect(() => {
        if (selectedColor && selectedStorage) {
            const variant = product?.variants.find(variant =>
                variant.color === selectedColor &&
                variant.storage === selectedStorage
            );

            setSelectedVariant(variant as VariantProduct);
        }
    }, [selectedColor, selectedStorage, product?.variants])

    //Obtener el Stock
    const isOutOfStock = selectedVariant?.stock === 0;

    if(isLoading) return <Loader/>

    if (!product || isError) return (
        <div className="flex justify-center items-center h-[80vh]">
            <p>
                Producto no encontrado
            </p>
        </div>
    )


    return <>
        <div className="h-fit flex flex-col md:flex-row gap-16 mt-8">
            {/* GALERIA DE IMAGENES*/}

            <GridImages images={product?.images} />

            <div className="flex-1 space-y-5">
                <h1 className="text-3xl font-bold tracking-tight">
                    {product.name}
                </h1>

                <div className="flex gap-5 items-center">
                    <span className="tracking-wide text-lg font-semibold">
                        {formatPrice(
                            selectedVariant?.price || product.variants[0].price)}
                    </span>

                    <div className="relative">
                        {isOutOfStock && <Tag contentTag="agotado"/>}

                    </div>
                </div>

                <Separator />
                {/*CARACTERISTICAS*/}

                <ul className="space-y-2 ml-7 my-10">
                    {
                        product.features.map(feature => (
                            <li key={feature}
                                className="text-sm flex items-center gap-2 tracking-tight font-medium">
                                <span className="bg-black w-[5px] h-[5px] rounded-full" />
                                {feature}
                            </li>
                        ))}
                </ul>

                <div className="flex flex-col gap-3">

                    <p>
                        Color: {selectedColor && colors[selectedColor].name}
                    </p>

                    <div className="flex gap-3">
                        {
                            avaibleColors.map(color => (
                                <button key={color} className={`w-8 h-8 rounded-full flex justify-center items-center ${selectedColor === color ? 'border border-slate-800' : ''
                                    }`}
                                    onClick={() => setSelectedColor(color)}
                                    >


                                    <span className="w-[26px] h-[26px] rounded-full" style={{ backgroundColor: color }} />
                                </button>
                            ))
                        }
                    </div>
                </div>


                {/*OPCIONES*/}

                <div className="flex flex-col gap-3">
                    <p className="text-xs font-medium">
                        Opciones disponibles
                    </p>

                    {
                        selectedColor && (
                            <div className="flex gap-3">
                                <select
                                    className="border border-gray-300 rounded-lg px-3 py-1"
                                    value={selectedStorage || ''}
                                    onChange={e => setSelectedStorage(e.target.value)}>
                                    {
                                        colors[selectedColor].storages.map(storage => (
                                            <option value={storage} key={storage}>{storage}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        )
                    }

                </div>

                {/*COMPRAR*/}

                {
                    isOutOfStock ? (
                        <button
                            disabled
                            className="bg-[#f3f3f3] uppercase-font-semibold tracking-widest text-xs py-4 rounded-full transition-all 
                        duration-300 hover:bg-[#e2e2e2] w-full">

                        </button>
                    ) : (
                        <>
                            {/*CONTADOR*/}
                            <div className="space-y3">
                                <p className="text-sm font-medium">
                                    Cantidad:
                                </p>

                                <div className="flex gap-8 px-5 py-3 border border-slate-200 w-fit rounded-full">
                                    <button>
                                        <LuMinus size={15} />
                                    </button>
                                    <span className="text-slate-500 text-sm">1</span>
                                    <button>
                                        <LuPlus size={15} />
                                    </button>
                                </div>
                            </div>

                            {/*BOTONES ACCION*/}
                            <div className="flex flex-col gap-3">
                                <button className="bg-[#f3f3f3] uppercase-font-semibold tracking-widest text-xs py-4 rounded-full transition-all 
                        duration-300 hover:bg-[#e2e2e2]">
                                    Agregar al carrito
                                </button>

                                <button className="bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full">
                                    Comprar ahora
                                </button>
                            </div>

                        </>
                    )}
                <div className="flex pt-2">
                    <div className="flex flex-col gap-1 flex-1 items-center">
                        <CiDeliveryTruck size={35} />
                        <p className="text-xs font-semibold">
                            Envio gratis
                        </p>
                    </div>
                    <Link to="#" className="flex flex-col gap-1 flex-1 items-center justify-center">
                        <BsChatLeftText size={30} />
                        <p className="flex flex-col item-center text-xs">
                            <span className="font font-semibold">
                                ¿Necesitas ayuda?
                            </span>

                            Contáctanos aquí
                        </p>
                    </Link>
                </div>

            </div>
        </div>

        {/* DESCRIPCION */}

        <ProductDescription content={product.description}/>
    </>;
}
