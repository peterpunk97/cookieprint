"use client"

import { Link, useNavigate, useParams } from "react-router-dom"
import { useOrder, useUser } from "../hooks"
import { Loader } from "../components/shared/Loader"
import { CiCircleCheck } from "react-icons/ci"
import { formatPrice } from "../helpers"
import { useEffect } from "react"
import { supabase } from "../supabase/client"
import { Logo } from "../components/shared/Logo"

export const ThankYouPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useOrder(Number(id));
  const {isLoading: isLoadingSession} = useUser();

    const navigate = useNavigate();
  
    useEffect(() => {
              supabase.auth.onAuthStateChange(async (event, session) => {
                  if(event === 'SIGNED_OUT' || !session){
                      navigate('/login');
                  }
              });
    }, [navigate]);

  if (isError) return <div>Error al cargar la orden</div>
  if (isLoading || !data || isLoadingSession) return <Loader />

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#2563EB] text-white flex items-center justify-center flex-col px-10 py-6 shadow-sm">
        <Link to="/" className="text-3xl font-bold self-center tracking-tighter transition-all md:text-4xl">
          <Logo/>
        </Link>
      </header>

      <main className="container flex-1 flex flex-col items-center gap-10 py-8">
        <div className="flex gap-3 items-center">
          <CiCircleCheck size={40} className="text-[#2563EB]" />
          <p className="text-3xl md:text-4xl font-medium text-gray-800">¡Gracias, {data.customer.full_name}!</p>
        </div>

        <div className="border border-slate-200 w-full md:w-[600px] p-6 rounded-lg shadow-sm space-y-4 bg-white">
          <h3 className="font-medium text-lg text-gray-800">Tu pedido está confirmado</h3>

          <p className="text-sm text-gray-600">
            Gracias por realizar tu compra en CookiePrint. Para realizar la transferencia te compartimos los siguientes
            datos:
          </p>

          <div className="bg-blue-50 text-[13px] p-5 space-y-0.5 border border-[#2563EB] rounded-es-md rounded-ee-md">
          <p>Datos para realizar la transferencia:</p>
          <p><strong>Razón Social:</strong> JESUS FLORES PROCEL</p>
          <p><strong>Tipo de cuenta:</strong> STP</p>
          <p><strong>CLABE:</strong> 699180000006070608</p>
 
        </div>

          <p className="text-sm text-gray-600">
            Una vez realizada la transferencia, comparte tu comprobante a{" "}
            <strong className="text-[#2563EB]">galletitasdigitales@gmail.com</strong> o a nuestro WhatsApp{" "}
            <strong className="text-[#2563EB]">443-942-5741</strong> para procesarla y personalizar tu pedido.
          </p>

          <div className="border border-slate-200 w-full p-5 rounded-md space-y-4 mt-6">
            <h3 className="font-medium text-gray-800">Detalles del pedido</h3>

            <div className="flex flex-col gap-5">
              <ul className="space-y-4">
                {data.orderItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center gap-3 pb-3 border-b border-gray-100">
                    <div className="flex">
                      <img
                        src={item.productImage || "/placeholder.svg"}
                        alt={item.productName}
                        className="w-16 h-16 object-contain rounded-md border border-gray-200 bg-gray-50 p-1"
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between">
                        <p className="font-semibold text-gray-800">{item.productName}</p>
                        <p className="text-sm font-medium text-[#2563EB] mt-1">{formatPrice(item.price)}</p>
                      </div>

                      <div className="flex gap-3">
                        <p className="text-[13px] text-gray-600">
                          {item.storage} / {item.color_name}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="font-semibold text-gray-800">Total:</span>
                <span className="font-semibold text-[#2563EB]">{formatPrice(data.totalAmount)}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 mt-2 border-t border-gray-200">
              <div className="flex flex-col text-sm">
                <p className="font-semibold text-gray-800 mb-1">Información de contacto</p>
                <p className="text-gray-600">{data.customer.email}</p>
              </div>

              <div className="flex flex-col text-sm">
                <p className="font-semibold text-gray-800 mb-1">Métodos de pago</p>
                <p className="text-gray-600">Depósito bancario {formatPrice(data.totalAmount)}</p>
              </div>

              <div className="flex flex-col text-sm md:col-span-2">
                <p className="font-semibold text-gray-800 mb-1">Dirección de envío</p>
                <p className="text-gray-600">{data.address.addressLine1}</p>
                {data.address.addressLine2 && <p className="text-gray-600">{data.address.addressLine2}</p>}
                <p className="text-gray-600">{data.address.city}</p>
                <p className="text-gray-600">{data.address.state}</p>
                <p className="text-gray-600">{data.address.postalCode}</p>
                <p className="text-gray-600">{data.address.country}</p>
              </div>

              <div className="flex flex-col text-sm">
                <p className="font-semibold text-gray-800 mb-1">Método de envío</p>
                <p className="text-gray-600">Standard</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center w-full mb-5 gap-3 sm:flex-row md:w-[600px] md:gap-0">
          <p className="text-sm text-gray-600">¿Necesitas ayuda? Ponte en contacto con nosotros</p>

          <Link
            to="/productos"
            className="text-white bg-[#2563EB] hover:bg-[#1d4ed8] py-3.5 px-6 text-sm rounded-full tracking-tight font-semibold transition-colors"
          >
            Seguir comprando
          </Link>
        </div>
      </main>
    </div>
  )
}

