import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Import components
import Dropdown from '../Dropdown/Dropdown'
import Details from '../Details/Details'

import { DROPDOWN } from '../../store/actionTypes'

const Header = props => {
  const { active } = useSelector(state => state.dropdown)
  const { userName } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleActive = () => {
    dispatch({
      type: DROPDOWN,
      payload: {
        active: !active
      }
    })
  }

  return (
    <div className='l-header'>
      <div className='header'>
        <div className='header-left'>
          <p className='header-title'>Dashboard</p>
          <p>Home / Dashboard</p>
        </div>

        <div className='header-right'>
          <Dropdown
            size={30}
            color='#fff'
            user={userName}
            onClick={handleActive}
          />

          {active && (
            <Details />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
