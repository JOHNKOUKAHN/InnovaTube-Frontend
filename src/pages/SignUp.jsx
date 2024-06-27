import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { Message } from "../Components/Message";

export const SignUp = () => {
  const navigate = useNavigate();
  const { startUserRegister, startCleaningMessages, status } = useAuthStore();


  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault()
    startUserRegister({ fullName, userName, email, password, confirmPassword })
  }



  useEffect(() => {
    startCleaningMessages();
    if (status === 'authenticated') {
      navigate('/home')
    }
  }, [])
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">Únete a InnovaTuve</h1>
          <form onSubmit={handleSignup} className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Nombre Completo
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  onChange={e => setFullName(e.target.value)}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="John Deep" />
              </label>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Nombre de Usuario
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  onChange={e => setUserName(e.target.value)}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="JohnDue, algo@algo.com ..." />
              </label>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Correo Electrónico
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={e => setEmail(e.target.value)}
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
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Confirmar Contraseña
                <input
                  id="confirmpPassword"
                  name="confirmPassword"
                  type="password"
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="........" />
              </label>
              <div className="flex flex-col justify-between gap-3">
                <Message />
                <button
                  type="submit"
                  className="transition duration-200 bg-red-500 hover:bg-red-600 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">Registrarse</span>
                </button>
                <div className="flex flex-row gap-3 text-sm">
                  <p>¿Ya tienes cuenta?</p>
                  <Link to={'/login'} className="font-bold">
                    Incia sesión aquí
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
