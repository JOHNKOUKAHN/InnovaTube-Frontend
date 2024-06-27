import React from 'react'

export const Card = ({ image, title, channel, description, isfavorite = false }) => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className='mx-3'>
          <img
            src={image ? image : 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'}
            alt={description} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{channel}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {
              !isfavorite &&
              <button className="btn bg-slate-500 text-white" disabled={isfavorite}>+</button>
            }
            {
              isfavorite &&
              <button className="btn bg-yellow-500 text-white" disabled={!isfavorite}>x</button>
            }
          </div>
        </div>
      </div>
    </>
  )
}
