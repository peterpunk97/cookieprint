import { Brands } from '../components/home/Brands';
import { FeatureGrid } from '../components/home/FeatureGrid';
import { ProductGrid } from '../components/home/ProductGrid';
import { ProductGridSkeleton } from '../components/skeletons/ProductGridSkeleton';
import { prepareProducts } from '../helpers';
import { useHomeProducts } from '../hooks';


export const HomePage = () => {

  const {recentProducts, popularProducts, isLoading} = useHomeProducts();

  
  const preparedRecentProducts = prepareProducts(recentProducts);
  const preparedPopularProducts = prepareProducts(popularProducts);

  return (

    
    <div>
      
      <FeatureGrid />

      {
        isLoading ? (
          <ProductGridSkeleton numberOfProducts={4} />
        ): (
          <ProductGrid title='Nuevos productos' products={preparedRecentProducts} />
        )
      }

{
        isLoading ? (
          <ProductGridSkeleton numberOfProducts={4} />
        ): (
          <ProductGrid title='Productos Destacados' products={preparedPopularProducts} />
        )
      }

      

      

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