import React from 'react'
// import { MdArrowForwar } from 'react-icons/md'

const IconButton = props => {
  return (
    <div className='button-container'>
      {props.children}
      <p>{props.message}</p>
    </div>
  )
}

export default IconButton
