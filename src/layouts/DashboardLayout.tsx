import { Outlet } from "react-router-dom"
import { SideBar } from "../components/dashboard"

export const DashboardLayout = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen font-montserrat">
      <SideBar />

      {/* Eliminamos cualquier margen o padding automático y forzamos el contenido a estar junto al sidebar */}
      <div className="w-[calc(100%-120px)] lg:w-[calc(100%-250px)] ml-[120px] lg:ml-[250px]">
        <main className="w-full p-5 pt-7 text-slate-800">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
