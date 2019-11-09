import React from 'react'

// Import images
import logo from '../../static/images/logo.svg'

const Item = () => {
  return (
    <div className='item'>
      <img
        className='item-image'
        alt='EasyWallet'
        src={logo}
      />
      <p className='item-title'>EasyWallet</p>
    </div>
  )
}

export default Item
