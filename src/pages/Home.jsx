import React from 'react'
import { NavBar } from '../Components/NavBar'
import { SearchBar } from '../Components/SearchBar'
import { Card } from '../Components/Card'

export const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 p-5'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}
