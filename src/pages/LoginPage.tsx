"use client"

import type React from "react"

import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useLogin, useUser } from "../hooks"
import { Loader } from "../components/shared/Loader"

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { mutate, isPending } = useLogin()

  const { session, isLoading } = useUser()

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault()
    mutate({ email, password })
  }

  if (isLoading) return <Loader />
  if (session) return <Navigate to="/" />

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">Iniciar Sesión</h1>
          <p className="text-sm text-gray-600">¡Qué bueno tenerte de vuelta!</p>
        </div>

        {isPending ? (
          <div className="w-full flex justify-center py-12">
            {/* Custom spinner replacing LuLoader */}
            <div className="relative w-16 h-16">
              <div className="absolute w-full h-full rounded-full border-4 border-t-blue-600 border-r-blue-300/30 border-b-blue-300/10 border-l-blue-300/30 animate-spin"></div>
              <div className="absolute w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-100/80 animate-pulse"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <form className="space-y-5" onSubmit={onLogin}>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="border border-gray-300 text-gray-900 px-4 py-3 placeholder:text-gray-400 text-sm rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700 block">
                    Contraseña
                  </label>
                  <Link
                    to="/recuperar-password"
                    className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
                  >

                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  className="border border-gray-300 text-gray-900 px-4 py-3 placeholder:text-gray-400 text-sm rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-3 px-4 rounded-lg w-full transition-colors duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Iniciar Sesión
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                ¿No tienes cuenta?{" "}
                <Link to="/registro" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Regístrate
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

