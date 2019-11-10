import React from 'react'
import { useSelector } from 'react-redux'

const Nav = props => {
  const { userName } = useSelector(state => state.user)

  return (
    <div className='l-nav'>
      <div className='nav'>
        <p className='nav-title'>Bienvenido {userName}</p>
      </div>
    </div>
  )
}

export default Nav
