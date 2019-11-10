import React, { Suspense } from 'react'
import { Router } from '@reach/router'

// Import pages
import SignIn from '../pages/SignIn/SignInPage'
import Loading from '../pages/Loading/LoadingPage'
import Profile from '../pages/Profile/ProfilePage'
import DashboardHome from '../components/Dashboard/DashboardHome'
import Product from '../pages/Product/ProductPage'
import Business from '../pages/Business/BusinessPage'
const Home = React.lazy(() => import('../pages/Home/HomePage'))
const Dashboard = React.lazy(() => import('../pages/Dashboard/DashboardPage'))
const Mision = React.lazy(() => import('../pages/Home/Mision'))
const Vision = React.lazy(() => import('../pages/Home/Vision'))
const Valores = React.lazy(() => import('../pages/Home/Valores'))

const EasyWallet = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        {/* <Redirect from='/' to='signin' /> */}

        <Home path='/' />
        <SignIn path='signin' />
        <Mision path='/mision' />
        <Vision path='/vision' />
        <Valores path='/valores' />
      
        <Home path='/' />
        <SignIn path='signin' />
        <Dashboard path='dashboard'>
          <DashboardHome path='/' />
          <Profile path='profile' />
          <Product path='product' />
          <Business path='business' />
        </Dashboard>

      </Router>
    </Suspense>
  )
}

export default EasyWallet
