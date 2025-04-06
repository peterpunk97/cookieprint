"use client"

import { useNavigate } from "react-router-dom"
import { formatDateLong, formatPrice, getStatus } from "../../helpers"
import type { OrderItemSingle } from "../../interfaces"

interface Props {
  orders: OrderItemSingle[]
}

const tableHeaders = ["ID", "Fecha", "Estado", "Total"]

export const TableOrders = ({ orders }: Props) => {
  const navigate = useNavigate()

  // Función para determinar el color del estado
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pendiente":
        return "bg-amber-50 text-amber-700 border-amber-200"
      case "completado":
        return "bg-emerald-50 text-emerald-700 border-emerald-200"
      case "enviado":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "cancelado":
        return "bg-red-50 text-red-700 border-red-200"
      default:
        return "bg-slate-50 text-slate-700 border-slate-200"
    }
  }

  return (
    <div className="w-full max-w-none overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50">
            {tableHeaders.map((header, index) => (
              <th key={index} className="h-14 px-6 text-left font-medium text-slate-600 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200">
          {orders.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                No hay pedidos para mostrar
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr
                key={order.id}
                className="cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => navigate(`/account/pedidos/${order.id}`)}
              >
                <td className="whitespace-nowrap px-6 py-5 font-medium text-slate-900">#{order.id}</td>
                <td className="whitespace-nowrap px-6 py-5 text-slate-700">{formatDateLong(order.created_at)}</td>
                <td className="whitespace-nowrap px-6 py-5">
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${getStatusColor(getStatus(order.status))}`}
                  >
                    {getStatus(order.status)}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-5 font-medium text-slate-900">
                  {formatPrice(order.total_amount)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

