import React from 'react'

// Import components
import Dropdown from '../Dropdown/Dropdown'

const Header = props => {
  return (
    <div className='l-header'>
      <div className='header'>
        <div className='header-left'>
          <p className='header-title'>Dashboard</p>
          <p>Home / Dashboard</p>
        </div>

        <div className='header-right'>
          <Dropdown />
        </div>
      </div>
    </div>
  )
}

export default Header
