import { CardProduct } from '../components/products/CardProduct';
import { ContainerFilter } from '../components/products/ContainerFilter';
import { allProductos } from '../data/initialData';
import { prepareProducts } from '../helpers/index';

export const ProductosPage = () => {
  const preparedProducts = prepareProducts(allProductos);

  return (
    <>
      <h1 className="text-5xl font-semibold text-center mb-12">
        Productos
      </h1>

      {/* Contenedor principal con grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Filtros (ocupa 1 columna en pantallas grandes) */}
        <div className="lg:col-span-1">
          <ContainerFilter />
        </div>

        {/* Lista de productos (ocupa 4 columnas en pantallas grandes) */}
        <div className="lg:col-span-4">
          <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4">
            {preparedProducts.map((product) => (
              <CardProduct
                key={product.id}
                name={product.name}
                price={product.price}
                colors={product.colors}
                img={product.images[0]}
                slug={product.slug}
                variants={product.variants}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Ir hacia arriba */}
      <div id="back-to-top" className="fixed bottom-8 right-8">
          <a href="#top" className="bg-yellow-400 text-black p-3 rounded-full hover:bg-blue-700">
            <i className="ui-arrow-up">↑</i>
          </a>
        </div>
    </>

    
  );
};