import React, { useEffect } from 'react'
import { NavBar } from '../Components/NavBar'
import { SearchBar } from '../Components/SearchBar'
import { Card } from '../Components/Card'
import youtubeApi from '../api/youtubeAPI'

export const Home = () => {


  const search = async () => {
    const { data } = await youtubeApi.get('', {
      params: {
        part: 'snippet',
        q: 'post malone',
        maxResults: 10,
        type: 'video',
      }
    })
    console.log(data);
  }

  useEffect(() => {
    search()
  }, [])

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
