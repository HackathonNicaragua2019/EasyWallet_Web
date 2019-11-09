import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Dropdown = props => {
  return (
    <div
      className='dropdown'
      onClick={props.onClick}
    >
      <p className='dropdown-user'>{props.user}</p>
      <MdKeyboardArrowDown
        size={props.size}
        color={props.color}
      />
    </div>
  )
}

export default Dropdown
