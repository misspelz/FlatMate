import React from 'react'
import MainStark from './MainStark'
import AuthStark from './AuthStark'

const Router = () => {
  const loggedIn = false

  return loggedIn ? <MainStark /> : <AuthStark />
}

export default Router
