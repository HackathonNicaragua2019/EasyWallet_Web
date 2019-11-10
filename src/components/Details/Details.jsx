import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, navigate } from '@reach/router'

// Import actions types
import { REMOVEDATA } from '../../store/actionTypes'

const Details = props => {
  const dispatch = useDispatch()

  const handleOnSignout = () => {
    dispatch({
      type: REMOVEDATA
    })
    localStorage.removeItem('easy_wallet')
  }

  return (
    <div className='details'>
      <Link className='details-title' to='profile'>Perfil</Link>
      <Link onClick={handleOnSignout} className='details-title' to='/signin'>Cerrar sesion</Link>
    </div>
  )
}

export default Details
