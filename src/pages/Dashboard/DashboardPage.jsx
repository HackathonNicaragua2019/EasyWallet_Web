import React from 'react'

// Import components
import Nav from '../../components/NavBar/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'

const DashboardPage = props => {
  return (
    <div>
      <div className='l-dashboard'>
        <Nav />
        <Sidebar />
        <Header />
        <div className='l-content'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
