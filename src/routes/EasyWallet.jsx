import React, { Suspense } from 'react'
import { Router } from '@reach/router'

// Import pages
const Home = React.lazy(() => import('../pages/Home/Home'))


const EasyWallet = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Home path='/' />
      </Router>
    </Suspense>
  )
}

export default EasyWallet