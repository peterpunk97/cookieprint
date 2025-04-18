import { FaArrowUp } from 'react-icons/fa6';
import { Brands } from '../components/home/Brands';
import { FeatureGrid } from '../components/home/FeatureGrid';
import { ProductGrid } from '../components/home/ProductGrid';
import { ProductGridSkeleton } from '../components/skeletons/ProductGridSkeleton';
import { prepareProducts } from '../helpers';
import { useHomeProducts } from '../hooks';
import { useEffect, useState } from 'react';


export const HomePage = () => {

  const [showScrollButton, setShowScrollButton] = useState(false)

  // Mostrar botón de scroll solo cuando se ha desplazado hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const { recentProducts, popularProducts, isLoading } = useHomeProducts();


  const preparedRecentProducts = prepareProducts(recentProducts);
  const preparedPopularProducts = prepareProducts(popularProducts);

  return (


    <div>

      <FeatureGrid />

      {
        isLoading ? (
          <ProductGridSkeleton numberOfProducts={4} />
        ) : (
          <ProductGrid title='Nuevos productos' products={preparedRecentProducts} />
        )
      }

      {
        isLoading ? (
          <ProductGridSkeleton numberOfProducts={4} />
        ) : (
          <ProductGrid title='Productos Destacados' products={preparedPopularProducts} />
        )
      }





      <Brands />

      {/* Botón  para ir hacia arriba */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-400 text-black p-4 rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-lg z-50 hover:transform hover:scale-110"
          aria-label="Volver arriba"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};