import { ImSpinner2 } from "react-icons/im"

export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <ImSpinner2 className="animate-spin h-16 w-16 text-[#2563EB]" />
      <p className="text-sm font-medium text-gray-600">Cargando...</p>
    </div>
  )
}

