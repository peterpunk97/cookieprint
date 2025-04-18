import { IoAddCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { TableProduct } from '../../components/dashboard';

export const DashboardProductsPage = () => {
	return (
		<div className="h-full flex flex-col gap-4 px-2 sm:px-4 lg:px-6 py-4">
			<div className="w-full flex justify-end">
				<Link
					to="/dashboard/productos/new"
					className="bg-black text-white flex items-center py-2 px-3 rounded-md text-sm gap-2 font-semibold hover:bg-gray-800 transition"
				>
					<IoAddCircleOutline className="text-lg" />
					Nuevo Producto
				</Link>
			</div>

			<div className="overflow-x-auto">
				<TableProduct />
			</div>
		</div>
	);
};
