import { Brands } from '../components/home/Brands';
import { FeatureGrid } from '../components/home/FeatureGrid';
import { ProductGrid } from '../components/home/ProductGrid';
import { popularProductos, recentProductos } from '../data/initialData';
import { prepareProducts } from '../helpers';


export const HomePage = () => {
  const preparedRecentProducts = prepareProducts(recentProductos);
  const preparedPopularProducts = prepareProducts(popularProductos);
  console.log(preparedRecentProducts);

  return (

    
    <div>
      
      <FeatureGrid />

      <ProductGrid title='Nuevos productos' products={preparedRecentProducts} />

      <ProductGrid title='Productos Destacados' products={preparedPopularProducts} />

      <Brands />

      {/* Ir hacia arriba */}
      <div id="back-to-top" className="fixed bottom-8 right-8">
          <a href="#top" className="bg-yellow-400 text-black p-3 rounded-full hover:bg-blue-700">
            <i className="ui-arrow-up">↑</i>
          </a>
        </div>
    </div>
  );
};