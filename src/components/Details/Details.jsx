import React from 'react'
import { Link } from '@reach/router'

const Details = props => {
  return (
    <div className='details'>
      <Link className='details-title' to='/profile'>Perfil</Link>
      <Link className='details-title' to='/signout'>Cerrar sesion</Link>
    </div>
  )
}

export default Details
