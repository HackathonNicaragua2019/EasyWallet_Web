import React from 'react'
// import { MdArrowForwar } from 'react-icons/md'

const IconButton = props => {
  return (
    <div className='button'>
      <input
        value={props.message}
        className='button-input'
        type='submit'
      />
    </div>
  )
}

export default IconButton
