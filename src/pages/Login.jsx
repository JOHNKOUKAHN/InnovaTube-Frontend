import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";

export const Login = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { startLogin } = useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault()
    startLogin({ userName, password })
  }


  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">Bienvenido a InnovaTuve</h1>
          <form onSubmit={handleLogin} className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Correo o usuario
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  onChange={e => setUserName(e.target.value)}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="JohnDue, algo@algo.com ..." />
              </label>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Contraseña
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="........" />
              </label>
              <div className="flex flex-col justify-between gap-3">
                <button
                  type="submit"
                  className="transition duration-200 bg-red-500 hover:bg-red-600 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">Acceder</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <div className="flex flex-row gap-3">
                  <p>¿No tienes cuenta?</p>
                  <Link to={'/signup'} className="font-bold">
                    Regístrate aquí
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
