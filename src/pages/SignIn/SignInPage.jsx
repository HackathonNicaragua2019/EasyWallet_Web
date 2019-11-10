import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Import actions types
import { ERRORSIGNIN } from '../../store/actionTypes'

// Import components
import SignIn from '../../components/SignIn/SignIn'

const SignInPage = props => {
  const dispatch = useDispatch()
  const { message } = useSelector(state => state.user)

  const handleOnClose = () => {
    dispatch({
      type: ERRORSIGNIN,
      payload: {
        message: null
      }
    })
  }

  return (
    <div className='l-signin'>
      {message && (
        <div className='signin-container-error'>
          <p className='signin-message-error'>{message}</p>
          <p className='signin-close' onClick={handleOnClose}>X</p>
        </div>
      )}
      <SignIn />
    </div>
  )
}

export default SignInPage
