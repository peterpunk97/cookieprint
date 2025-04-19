import { useState } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"
import { useGlobalStore } from "../../store/global.store"
import { formatPrice } from "../../helpers"
import { searchProducts } from "../../actions"
import { Product } from "../../interfaces"
import { useNavigate } from "react-router-dom"

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<Product[]>([])

  const closeSheet = useGlobalStore(state => state.closeSheet)
  const navigate = useNavigate()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (searchTerm.trim()) {
      const products = await searchProducts(searchTerm)
      setSearchResults(products)
    }
  }

  return (
    <>
      {/* Buscador */}
      <div className="py-5 px-7 flex gap-10 items-center border-b border-slate-200">
        <form className="flex gap-3 items-center flex-1" onSubmit={handleSearch}>
          <HiOutlineSearch size={22} />
          <input
            type="text"
            placeholder="¿Qué busca?"
            className="outline-none w-full text-sm"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </form>

        <button onClick={closeSheet}>
          <IoMdClose size={25} className="text-blue" />
        </button>
      </div>

      {/* Resultados */}
      <div className="p-5">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {searchResults.map(product => (
              <div
                key={product.id}
                className="border rounded-lg shadow-sm hover:shadow-md transition p-3 cursor-pointer bg-white"
                onClick={() => {
                  navigate(`/productos/${product.slug}`)
                  closeSheet()
                }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-20 w-20 object-contain rounded"
                  />

                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sm line-clamp-2">
                      {product.name}
                    </p>

                    <p className="text-xs text-gray-600">
                      {product.variants[0].storage} / {product.variants[0].color_name}
                    </p>

                    <p className="text-sm font-medium text-gray-700">
                      {formatPrice(product.variants[0].price)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600">No se encontraron resultados</p>
        )}
      </div>
    </>
  )
}
