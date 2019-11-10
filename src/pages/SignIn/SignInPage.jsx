import React from 'react'

// Import components
import SignIn from '../../components/SignIn/SignIn'

const SignInPage = props => {
  console.log(props.history)
  return (
    <div className='l-signin'>
      <SignIn
        history={props.history}
      />
    </div>
  )
}

export default SignInPage
