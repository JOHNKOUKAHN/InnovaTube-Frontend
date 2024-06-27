import React from 'react'
import { useAuthStore } from '../hooks/useAuthStore'

export const Message = () => {
  const { msg, errorMessage } = useAuthStore()
  return (
    <>
      {msg && <p className='text-green-400'>{msg}</p>}
      {errorMessage && <p className='text-red-400'>{errorMessage}</p>}
    </>
  )
}
