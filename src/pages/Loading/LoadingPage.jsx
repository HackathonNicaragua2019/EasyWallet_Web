import React from 'react'

// Import components
import Loader from '../../components/Loader/Loader'

const LoadingPage = props => {
  return (
    <div className='l-loading'>
      <Loader
        type='ThreeDots'
        color='#fff'
      />
    </div>
  )
}

export default LoadingPage
