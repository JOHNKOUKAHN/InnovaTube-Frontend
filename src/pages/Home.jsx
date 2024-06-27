import React, { useEffect, useState } from 'react'
import { NavBar } from '../Components/NavBar'
import { SearchBar } from '../Components/SearchBar'
import { Card } from '../Components/Card'
import youtubeApi from '../api/youtubeAPI'

export const Home = () => {

  const [videos, setVideos] = useState([]);

  const search = async () => {
    const { data } = await youtubeApi.get('', {
      params: {
        part: 'snippet',
        q: 'post malone',
        maxResults: 10,
        type: 'video',
      }
    })
    setVideos(data.items)
    console.log(data.items);
  }

  useEffect(() => {
    search()
  }, [])

  return (
    <>
      <NavBar />
      <SearchBar />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-5'>
        {videos.map((video) => (
          <Card
            key={video.id.videoId}
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            description={video.snippet.description}
            image={video.snippet.thumbnails.high.url}
          />
        ))}
      </div>
    </>
  )
}
