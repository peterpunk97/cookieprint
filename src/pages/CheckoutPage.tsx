import { Link } from "react-router-dom"
import { useCartStore } from "../store/cart.store"
import { FormCheckout } from "../components/checkout/FormCheckout"

export const CheckoutPage = () => {
  const totalItems = useCartStore((state) => state.totalItemsInCart)

  return (
    <div
      style={{
        minHeight: "calc(100vh - 100px",
      }}
    >
      <header className="h-[70px] bg-[#2563EB] text-white flex items-center justify-center flex-col px-10 border-b border-slate-200">
        <Link
          to="/"
          className="text-2xl font-bold self-center tracking-tighter transition-all md:text-3xl md:self-start"
        >
          <p>
            Cookie
            <span className="text-[#FFD700]">Print</span>
          </p>
        </Link>
      </header>

      <main className="w-full h-full flex-relative">
        {totalItems === 0 ? (
          <div
            className="flex flex-col items-center justify-center gap-5 w-full"
            style={{
              height: "calc(100vh - 100px)",
            }}
          >
            <p className="text-sm font-medium tracking-tight text-gray-700">Su carrito está vacío</p>
            <Link
              to="/productos"
              className="py-4 bg-[#2563EB] hover:bg-[#1d4ed8] rounded-full text-white px-7 text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Empezar a comprar
            </Link>
          </div>
        ) : (
          <>
            <div className="w-full md-[50%] p-10">
              {/**FORMULARIO DE DIRECCION */}
              <FormCheckout />
            </div>
          </>
        )}
      </main>
    </div>
  )
}

