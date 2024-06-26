import React from 'react'
import { NavBar } from '../Components/NavBar'
import { Navigate, Route, Router } from 'react-router-dom'
import { Favorites } from './Favorites'
import { Feed } from './Feed'

export const Home = () => {
  return (
    <>
      <NavBar />
    </>
  )
}
