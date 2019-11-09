import React from 'react'

// Import components
import Header from '../../components/Header/Header'
import Nav from '../../components/NavBar/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'

const DashboardPage = props => {
  return (
    <div className='l-dashboard'>
      <Nav />
      <Header />
      <Sidebar />
    </div>
  )
}

export default DashboardPage
