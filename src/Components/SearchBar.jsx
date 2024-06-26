import React from 'react'

export const SearchBar = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-center m-7'>
        <div className="join ">
          <input className="input input-bordered join-item" placeholder="Buscar" />
          <button className="btn join-item rounded-r-full">Buscar</button>
        </div>
      </div>
    </>
  )
}
