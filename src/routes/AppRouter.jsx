import { Route, Routes } from "react-router-dom"
import { Favorites } from "../pages/Favorites"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { SignUp } from "../pages/SignUp"


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='home' element={<Home />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='/*' element={<Login />} />
      </Routes>
    </>
  )
}
