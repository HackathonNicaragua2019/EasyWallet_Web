import React, { Suspense } from 'react'
import { Router } from '@reach/router'

// Import pages
import SignIn from '../pages/SignIn/SignInPage'
import Loading from '../pages/Loading/LoadingPage'
import Profile from '../pages/Profile/ProfilePage'
import DashboardHome from '../components/Dashboard/DashboardHome'
const Home = React.lazy(() => import('../pages/Home/HomePage'))
const Dashboard = React.lazy(() => import('../pages/Dashboard/DashboardPage'))

const EasyWallet = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Home path='/' />
        <SignIn path='signin' />
        <Dashboard path='dashboard'>
          <DashboardHome path='/' />
          <Profile path='profile' />
        </Dashboard>
      </Router>
    </Suspense>
  )
}

export default EasyWallet
