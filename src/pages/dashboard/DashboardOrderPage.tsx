import { IoChevronBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Loader } from "../../components/shared/Loader";
import { getOrderByIdAdmin } from "../../actions";

const tableHeaders = ["Producto", "Cantidad", "Total"];

export const DashboardOrderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!id) return;
      try {
        const res = await getOrderByIdAdmin(Number(id));
        setOrder(res);
      } catch (err) {
        console.error("Error al obtener el pedido:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  if (loading) return <Loader />;
  if (!order) return <p className="text-center text-red-500">Orden no encontrada</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button
          className="border rounded-full py-2 border-gray-300 px-5 flex items-center gap-2 text-sm font-medium hover:bg-gray-100 transition"
          onClick={() => navigate(-1)}
        >
          <IoChevronBack size={18} />
          Volver
        </button>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-1">Pedido #{id}</h1>
          <p className="text-sm text-gray-500">
            {new Date(order.created_at).toLocaleString("es-MX")}
          </p>
        </div>
        <div />
      </div>

      {/* Card: Cliente y Dirección */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
          <h2 className="text-lg font-semibold mb-3 text-slate-700">Datos del Cliente</h2>
          <p><span className="font-medium text-slate-1000">Nombre:</span> {order.customer.full_name}</p>
          <p><span className="font-medium text-slate-1000">Email:</span> {order.customer.email}</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
          <h2 className="text-lg font-semibold mb-3 text-slate-700">Dirección de Envío</h2>
          <p><span className="text-lg font-semibold mb-3 text-slate-700"> Dirección principal: </span>{order.address.addressLine1}</p>

          <p>{order.address.city}, {order.address.state}</p>
          <p>{order.address.country}, CP {order.address.postalCode}</p>
		  <br />
		  <p> <span className="font-semibold text-slate-1000">Dirección secundaria: </span>
		
		  </p>
		  {order.address.addressLine2 && <p>{order.address.addressLine2}</p>}
        </div>
      </div>

      {/* Tabla de productos */}
      <div className="bg-white shadow-md rounded-xl border border-gray-100 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              {tableHeaders.map((header) => (
                <th key={header} className="p-4 text-left font-semibold border-b border-gray-200">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {order.orderItems.map((item: any, idx: number) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="p-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    {item.productImage && (
                      <img
                        src={item.productImage}
                        alt={item.productName}
                        className="w-16 h-16 object-cover rounded-lg shadow-sm"
                      />
                    )}
                    <div>
                      <p className="font-medium text-slate-800">{item.productName}</p>
                      <p className="text-xs text-slate-500">
                        Color: {item.color_name} | Tamaño: {item.storage}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200">{item.quantity}</td>
                <td className="p-4 border-b border-gray-200 font-semibold">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total */}
      <div className="mt-8 text-right">
        <p className="text-xl font-bold text-slate-800">
          Total: ${order.totalAmount}
        </p>
      </div>
    </div>
  );
};
