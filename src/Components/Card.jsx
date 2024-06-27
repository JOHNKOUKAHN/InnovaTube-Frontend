import React from 'react'

export const Card = ({ video, isfavorite = false, functionToTrigger1, functionToTrigger2 }) => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure >
          <img
            src={video.snippet.thumbnails.high.url ? video.snippet.thumbnails.high.url : 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'}
            alt={video.snippet.description} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{video.snippet.title}</h2>
          <p>{video.snippet.channelTitle}</p>
          <p>{video.snippet.description}</p>
          <div className="card-actions justify-end">
            {
              !isfavorite &&
              <button className="btn bg-slate-500 text-white" disabled={isfavorite} onClick={() => functionToTrigger1(video)}>+</button>
            }
            {
              isfavorite &&
              <button className="btn bg-yellow-500 text-white" disabled={!isfavorite} onClick={() => functionToTrigger2(video)}>x</button>
            }
          </div>
        </div>
      </div>
    </>
  )
}
