"use client"

import { Link, Navigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRegister, useUser } from "../hooks"
import { ImSpinner2 } from "react-icons/im" // Add this import
import { Loader } from "../components/shared/Loader"
import { type UserRegisterFormValues, userRegisterSchema } from "../lib/validator"

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      phone: "",
    },
    resolver: zodResolver(userRegisterSchema),
  })

  const { mutate, isPending } = useRegister()
  const { session, isLoading } = useUser()

  const onRegister = handleSubmit((data) => {
    const { email, password, fullName, phone } = data
    mutate({ email, password, fullName, phone })
  })

  if (isLoading) return <Loader />
  if (session) return <Navigate to="/" />

  return (
    <div className="h-full flex flex-col items-center mt-12 gap-5">
      <br />
      <h1 className="text-4xl font-bold capitalize">Registrate</h1>

      <p className="text-sm font-medium">Por favor ingresa los siguientes datos</p>

      {isPending ? (
        <div className="w-full h-full flex flex-col gap-3 justify-center items-center mt-20">
          <ImSpinner2 className="animate-spin h-10 w-10 text-[#2563EB]" />
          <p className="text-sm font-medium">Procesando tu registro</p>
        </div>
      ) : (
        <>
          <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 border border-slate-200 mt-6">
            <form className="flex flex-col items-center gap-4 w-full" onSubmit={onRegister}>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full"
                  {...register("fullName")}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-4">{errors.fullName.message}</p>}
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Número celular"
                  className="border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full"
                  {...register("phone")}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 ml-4">{errors.phone.message}</p>}
              </div>

              <div className="w-full">
                <input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full"
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-4">{errors.email.message}</p>}
              </div>

              <div className="w-full">
                <input
                  type="password"
                  placeholder="Ingresa una contraseña"
                  className="border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full"
                  {...register("password")}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1 ml-4">{errors.password.message}</p>}
              </div>

              <button className="bg-[#2563EB] text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full mt-5 w-full hover:bg-[#1d4ed8] transition-colors">
                Registrarme
              </button>
            </form>
          </div>

          <p className="text-sm text-stone-800 mt-4">
            ¿Ya tienes una cuenta?
            <Link to="/login" className="text-[#2563EB] font-semibold">
              {" "}
              Inicia Sesión
            </Link>
          </p>
        </>
      )}
    </div>
  )
}

