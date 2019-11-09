import React, { Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

// Import pages
import SignIn from '../pages/SignIn/SignInPage'
const Home = React.lazy(() => import('../pages/Home/HomePage'))

const EasyWallet = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        {/* <Redirect from='/' to='signin' /> */}
        <Home path='/' />
        <SignIn path='signin' />
      </Router>
    </Suspense>
  )
}

export default EasyWallet
