
import { useNavigate, useParams } from "react-router-dom"
import { useOrder } from "../hooks"
import { Loader } from "../components/shared/Loader"
import { FaChevronLeft } from "react-icons/fa";
import { formatDateLong, formatPrice } from "../helpers"

const tableHeaders = ["Producto", "Cantidad", "Total"]

export const OrderUserPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data: order, isLoading } = useOrder(Number(id!))
  const navigate = useNavigate()

  if (isLoading || !order) return <Loader />

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <button
          className="flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border border-slate-200 hover:bg-slate-50 transition-colors w-fit"
          onClick={() => navigate(-1)}
        >
          <FaChevronLeft size={16} />
          Volver a los pedidos
        </button>

        <div className="flex flex-col items-center gap-1.5">
          <h1 className="text-3xl font-bold">Pedido #{id}</h1>
          <p className="text-sm text-slate-500">{formatDateLong(order.created_at)}</p>
        </div>

        <div className="w-[150px] hidden md:block">{/* Empty div for layout balance */}</div>
      </div>

      {/* Order content */}
      <div className="space-y-10">
        {/* Products table */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  {tableHeaders.map((header, index) => (
                    <th
                      key={index}
                      className="h-12 px-6 text-left uppercase tracking-wide text-slate-600 font-medium text-sm"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {order.orderItems.map((product, index) => (
                  <tr key={index}>
                    <td className="p-6">
                      <div className="flex gap-4 items-center">
                        <div className="h-20 w-20 bg-slate-100 rounded-lg flex-shrink-0">
                          <img
                            src={product.productImage || "/placeholder.svg"}
                            alt={product.productName}
                            className="h-full w-full object-contain rounded-lg"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <h3 className="font-medium">{product.productName}</h3>
                          <p className="text-xs text-slate-500">
                            {product.color_name} / {product.storage}
                          </p>
                          <p className="text-sm font-medium">{formatPrice(product.price)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-center font-medium">{product.quantity}</td>
                    <td className="p-6 text-center font-medium">{formatPrice(product.price * product.quantity)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Address and Order summary side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Address information - Left side */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Dirección</h2>
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 h-full space-y-6">
              <div className="space-y-1">
                <h3 className="font-medium">Cliente:</h3>
                <p className="text-slate-700">{order.customer.full_name}</p>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium">Envío:</h3>
                <address className="not-italic text-slate-600 space-y-1">
                  <p>{order.address.addressLine1}</p>
                  {order.address.addressLine2 && <p>{order.address.addressLine2}</p>}
                  <p>{order.address.city}</p>
                  <p>{order.address.state}</p>
                  <p>{order.address.postalCode}</p>
                  <p>{order.address.country}</p>
                </address>
              </div>
            </div>
          </div>

          {/* Order summary - Right side */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Resumen del pedido</h2>
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 h-full">
              <div className="space-y-4">
                <div className="flex justify-between text-slate-600">
                  <p>Subtotal</p>
                  <p className="font-medium">{formatPrice(order.totalAmount)}</p>
                </div>
                <div className="flex justify-between text-slate-600">
                  <p>Envío (Standard)</p>
                  <p className="font-medium">{formatPrice(0)}</p>
                </div>
                <div className="h-px bg-slate-200 my-2"></div>
                <div className="flex justify-between text-black font-semibold">
                  <p>Total</p>
                  <p>{formatPrice(order.totalAmount)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

