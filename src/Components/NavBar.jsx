import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../hooks/useAuthStore'

export const NavBar = () => {
  const { startLogout, user } = useAuthStore()
  return (
    <>
      <div className="navbar bg-red-600 text-white">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to={'/home'}>Inicio</Link></li>
              <li><Link to={'/favorites'}>Favoritos</Link></li>
              <li><span onClick={() => startLogout()}>Cerrar Sesión</span></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">InnovaTube</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={'/home'}>Inicio</Link></li>
            <li><Link to={'/favorites'}>Favoritos</Link></li>
            <li><span onClick={() => startLogout()}>Cerrar Sesión</span></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="">{user.userName}</a>
        </div>
      </div>
    </>
  )
}
