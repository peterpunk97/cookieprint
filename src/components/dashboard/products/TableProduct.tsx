import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useProducts } from "../../../hooks";
import { Loader } from "../../shared/Loader";
import { formatDate, formatPrice } from "../../../helpers";
import { Pagination } from "../../shared/Pagination";
import { CellTableProduct } from "./CellTableProduct";
import { useDeleteProduct } from "../../../hooks/products/useDeleteProduct";

const tableHeaders = [
  "",
  "Nombre",
  "Variante",
  "Precio",
  "Stock",
  "Fecha de creación",
  "Acciones",
];

export const TableProduct = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const { products, isLoading, totalProducts } = useProducts({ page });
  const { mutate, isPending } = useDeleteProduct();

  const [selectedVariants, setSelectedVariants] = useState<{
    [key: string]: number;
  }>({});

  const handleMenuToggle = (index: number) => {
    setOpenMenuIndex((prev) => (prev === index ? null : index));
  };

  const handleVariantChange = (productId: string, variantIndex: number) => {
    setSelectedVariants({
      ...selectedVariants,
      [productId]: variantIndex,
    });
  };

  const handleDeleteProduct = (id: string) => {
    mutate(id);
    setOpenMenuIndex(null);
  };

  if (!products || isLoading || !totalProducts || isPending)
    return <Loader />;

  return (
    <div className="flex flex-col flex-1 border border-gray-200 rounded-lg p-4 sm:p-5 bg-white">
      <h1 className="font-bold text-xl">Productos</h1>
      <p className="text-sm mt-1 mb-6 text-gray-500">
        Gestiona tus productos y mira las estadísticas de tus ventas
      </p>

      <div className="relative w-full overflow-x-auto">
        <table className="min-w-[600px] w-full text-sm caption-bottom">
          <thead className="border-b border-gray-200">
            <tr className="text-sm font-bold text-left">
              {tableHeaders.map((header, index) => (
                <th key={index} className="h-12 px-4 whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => {
              const selectedVariantIndex = selectedVariants[product.id] ?? 0;
              const selectedVariant = product.variants[selectedVariantIndex];

              return (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-4">
                    <img
                      src={
                        product.images[0] ||
                        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                      }
                      alt="Imagen producto"
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-md"
                    />
                  </td>

                  <CellTableProduct content={product.name} />

                  <td className="p-4">
                    <select
                      className="border border-gray-300 rounded-md p-1 w-full text-xs sm:text-sm"
                      onChange={(e) =>
                        handleVariantChange(product.id, Number(e.target.value))
                      }
                      value={selectedVariantIndex}
                    >
                      {product.variants.map((variant, variantIndex) => (
                        <option key={variant.id} value={variantIndex}>
                          {variant.color_name} - {variant.storage}
                        </option>
                      ))}
                    </select>
                  </td>

                  <CellTableProduct
                    content={formatPrice(selectedVariant?.price)}
                  />
                  <CellTableProduct
                    content={(selectedVariant.stock || 0).toString()}
                  />
                  <CellTableProduct
                    content={formatDate(product.created_at)}
                  />

                  <td className="relative px-4">
                    <button
                      className="text-slate-900"
                      onClick={() => handleMenuToggle(index)}
                    >
                      <FaEdit />
                    </button>

                    {openMenuIndex === index && (
                      <div
                        className="absolute z-20 right-0 mt-2 w-[130px] bg-white border border-gray-200 rounded-md shadow-xl"
                        role="menu"
                      >
                        <Link
                          to={`/dashboard/productos/editar/${product.slug}`}
                          className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                        >
                          Editar{" "}
                          <HiOutlineExternalLink
                            size={13}
                            className="inline"
                          />
                        </Link>

                        <button
                          className="block w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <Pagination page={page} setPage={setPage} totalItems={totalProducts} />
      </div>
    </div>
  );
};
