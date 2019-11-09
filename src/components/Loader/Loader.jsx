import React from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const LoaderSpinner = props => {
  return (
    <Loader
      type={props.type}
      color={props.color}
      height={60}
      width={60}
      timeout={3000}
    />
  )
}

export default LoaderSpinner
