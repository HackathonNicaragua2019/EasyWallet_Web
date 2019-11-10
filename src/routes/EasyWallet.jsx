import React, { Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

// Import pages
import SignIn from '../pages/SignIn/SignInPage'
const Home = React.lazy(() => import('../pages/Home/HomePage'))
const Dashboard = React.lazy(() => import('../pages/Dashboard/DashboardPage'))
const Mision = React.lazy(()=>import('../pages/Home/Mision'))
const Vision = React.lazy(()=>import('../pages/Home/Vision'))
const Valores = React.lazy(()=>import('../pages/Home/Valores'))


const EasyWallet = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        {/* <Redirect from='/' to='signin' /> */}
        <Home path='/' />
        <SignIn path='signin' />
        <Dashboard path='/dashboard' />
        <Mision path='/mision'/>
        <Vision path='/vision'/>
        <Valores path="/valores"/>
      
      </Router>
    </Suspense>
  )
}

export default EasyWallet
