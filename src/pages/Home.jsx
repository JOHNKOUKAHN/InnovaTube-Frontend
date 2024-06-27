import React, { useEffect, useState } from 'react'
import { NavBar } from '../Components/NavBar'
import { SearchBar } from '../Components/SearchBar'
import { Card } from '../Components/Card'
import youtubeApi from '../api/youtubeAPI'
import { useVideosStore } from '../hooks/useVideosStore'

export const Home = () => {

  const { startNewSearch, startAddVideoToFavorite, searchResults } = useVideosStore()

  useEffect(() => {
    startNewSearch('Katy Perry')
  }, [])


  return (
    <>
      <NavBar />
      <SearchBar functionToTrigger={startNewSearch} />
      {
        !searchResults.length && <p className='text-center'>No hay resultados</p>
      }
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-5'>
        {searchResults.map((video) => (
          <Card key={video.id.videoId} video={video} functionToTrigger1={startAddVideoToFavorite} />
        ))}
      </div>
    </>
  )
}
