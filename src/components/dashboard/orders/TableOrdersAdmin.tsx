import { useNavigate } from "react-router-dom";
import { formatDateLong, formatPrice } from "../../../helpers";
import { OrderWithCustomer } from "../../../interfaces";
import { useChangeStatusOrder } from "../../../hooks";

const tableHeaders = ['Cliente', 'Fecha', 'Estado', 'Total'];

const statusOptions = [
  { value: 'Pending', label: 'Pendiente' },
  { value: 'Paid', label: 'Pagado' },
  { value: 'Shipped', label: 'Enviado' },
  { value: 'Delivered', label: 'Entregado' },
];

interface Props {
  orders: OrderWithCustomer[];
}

export const TableOrdersAdmin = ({ orders }: Props) => {
  const navigate = useNavigate();
  const { mutate } = useChangeStatusOrder();

  const handleStatusChange = (id: number, status: string) => {
    mutate({ id, status });
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="min-w-[600px] w-full text-sm caption-bottom">
        <thead className="border-b border-gray-200">
          <tr className="text-sm font-bold text-left">
            {tableHeaders.map((header, index) => (
              <th key={index} className="h-12 px-4 whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="[&_tr:last-child]:border-0">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              onClick={() => navigate(`/dashboard/ordenes/${order.id}`)}
            >
              <td className="p-4 font-medium tracking-tight flex flex-col gap-1 whitespace-nowrap">
                <span className="font-semibold">
                  {order.customers?.full_name}
                </span>
                <span className="text-gray-600 text-xs">
                  {order.customers?.email}
                </span>
              </td>

              <td className="p-4 font-medium tracking-tight whitespace-nowrap">
                {formatDateLong(order.created_at)}
              </td>

              <td className="p-4 font-medium tracking-tight whitespace-nowrap">
                <select
                  value={order.status}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) =>
                    handleStatusChange(order.id, e.target.value)
                  }
                  className="border border-gray-300 p-1 rounded text-sm"
                >
                  {statusOptions.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </td>

              <td className="p-4 font-medium tracking-tight whitespace-nowrap">
                {formatPrice(order.total_amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
