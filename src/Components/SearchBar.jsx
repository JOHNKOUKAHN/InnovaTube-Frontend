import React, { useState } from 'react'

export const SearchBar = ({ functionToTrigger }) => {
  const [query, setQuery] = useState('')
  return (
    <>
      <div className='flex flex-row items-center justify-center m-7'>
        <div className="join ">
          <input className="input input-bordered join-item"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar" />
          <button className="btn join-item rounded-r-full" onClick={() => functionToTrigger(query)}>Buscar</button>
        </div>
      </div>
    </>
  )
}
