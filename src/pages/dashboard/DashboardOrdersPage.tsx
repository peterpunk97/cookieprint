import { useState } from "react";
import { TableOrdersAdmin } from "../../components/dashboard";
import { Loader } from "../../components/shared/Loader";
import { useAllOrders } from "../../hooks";

export const DashboardOrdersPage = () => {
  const { data, isLoading } = useAllOrders();

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [statusFilter, setStatusFilter] = useState<string>(""); // estado
  const [customerSearch, setCustomerSearch] = useState<string>(""); // cliente

  if (isLoading || !data) return <Loader />;

  // 🔍 Filtro combinado
  const filteredOrders = data
    .filter((order) => {
      const statusMatches = statusFilter ? order.status === statusFilter : true;
      const customerMatches = customerSearch
        ? order.customers?.full_name?.toLowerCase().includes(customerSearch.toLowerCase()) ||
          order.customers?.email?.toLowerCase().includes(customerSearch.toLowerCase())
        : true;
      return statusMatches && customerMatches;
    })
    .sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  return (
    <div className="px-2 sm:px-4 lg:px-6 py-4 space-y-5">
      <h1 className="text-2xl font-bold">Órdenes</h1>

      {/* 🔎 Filtros */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end mb-4">
        {/* Filtro por fecha */}
        <div>
          <label className="block text-sm font-medium mb-1">Ordenar por fecha:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            className="border border-gray-300 px-2 py-1 rounded w-full"
          >
            <option value="desc">Más reciente primero</option>
            <option value="asc">Más antigua primero</option>
          </select>
        </div>

        {/* Filtro por estado */}
        <div>
          <label className="block text-sm font-medium mb-1">Filtrar por estado:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 px-2 py-1 rounded w-full"
          >
            <option value="">Todos</option>
            <option value="Pending">Pendiente</option>
            <option value="Paid">Pagado</option>
            <option value="Shipped">Enviado</option>
            <option value="Delivered">Entregado</option>
          </select>
        </div>

        {/* Filtro por cliente */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Buscar cliente:</label>
          <input
            type="text"
            value={customerSearch}
            onChange={(e) => setCustomerSearch(e.target.value)}
            placeholder="Nombre o correo"
            className="border border-gray-300 px-2 py-1 rounded w-full"
          />
        </div>
      </div>

      {/* Tabla filtrada */}
      <div className="overflow-x-auto">
        <TableOrdersAdmin orders={filteredOrders} />
      </div>
    </div>
  );
};
