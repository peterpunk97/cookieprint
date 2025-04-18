import { TableOrdersAdmin } from "../../components/dashboard";
import { Loader } from "../../components/shared/Loader";
import { useAllOrders } from "../../hooks";

export const DashboardOrdersPage = () => {
  const { data, isLoading } = useAllOrders();

  if (isLoading || !data) return <Loader />;

  return (
    <div className="px-2 sm:px-4 lg:px-6 py-4 space-y-5">
      <h1 className="text-2xl font-bold">Órdenes</h1>

      <div className="overflow-x-auto">
        <TableOrdersAdmin orders={data} />
      </div>
    </div>
  );
};
