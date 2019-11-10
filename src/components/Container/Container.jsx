import React from 'react'

const Container = props => {
  return (
    <div className='container'>
      <h3 className='container-title'>{props.title}</h3>
      <p className='container-description'>{props.description}</p>
    </div>
  )
}

export default Container
