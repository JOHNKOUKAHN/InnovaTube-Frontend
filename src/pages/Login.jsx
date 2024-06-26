import React from 'react'
import { useSelector } from 'react-redux';

export const Login = () => {
  const { status } = useSelector(state => state.auth);

  return (
    <div>Login {status} </div>
  )
}
