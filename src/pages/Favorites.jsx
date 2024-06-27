import React from 'react'
import { NavBar } from '../Components/NavBar'
import { useVideosStore } from '../hooks/useVideosStore'
import { Card } from '../Components/Card'
import { SearchBar } from '../Components/SearchBar'

export const Favorites = () => {
  const { favorites, currentFilterQuery, filteredFavorites, startRemoveVideoFromFavorite, startFilterFavorites } = useVideosStore()

  return (
    <>
      <NavBar />
      <SearchBar functionToTrigger={startFilterFavorites} />
      {
        !favorites.length && <p className='text-center'>Aun no hay favoritos</p>
      }
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-5'>
        {
          currentFilterQuery === ''
            ?
            favorites.length && favorites.map((video) => (
              <Card key={video.id.videoId} video={video} isfavorite functionToTrigger2={startRemoveVideoFromFavorite} />
            ))
            :
            filteredFavorites.length && filteredFavorites.map((video) => (
              <Card key={video.id.videoId} video={video} isfavorite functionToTrigger2={startRemoveVideoFromFavorite} />
            ))
        }
      </div>
    </>
  )
}
