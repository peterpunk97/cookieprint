import { FaArrowUp } from 'react-icons/fa6';
import { CardProduct } from '../components/products/CardProduct';
import { ContainerFilter } from '../components/products/ContainerFilter';
import { Pagination } from '../components/shared/Pagination';
import { prepareProducts } from '../helpers/index';
import { useFilteredProducts } from '../hooks';
import { useEffect, useState } from 'react';

export const ProductosPage = () => {

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



	const [page, setPage] = useState(1);
	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

	const { data: products = [],
		isLoading,
		totalProducts,
	} = useFilteredProducts({
		page,
		brands: selectedBrands,
	});


	const preparedProducts = prepareProducts(products);

	return (
		<>
			<br />
			<br />
			<br />
			<h1 className='text-4xl font-semibold text-center mb-12'>
				Productos
			</h1>

			<div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
				{/* FILTROS */}
				<ContainerFilter
					setSelectedBrands={setSelectedBrands}
					selectedBrands={selectedBrands}
				/>
				{isLoading ? (
					<div className='col-span-2 flex items-center justify-center h-[500px]'>
						<p className='text-2xl'>Cargando...</p>
					</div>
				) : (
					<div className='col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12'>
						<div className='grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4'>
							{preparedProducts.map(product => (
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




						{/* TODO: Paginación */}
						<Pagination
							totalItems={totalProducts}
							page={page}
							setPage={setPage}
						/>
					</div>


				)}

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
		</>
	);
};