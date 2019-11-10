import React from 'react'

// Import components
import AddBusiness from '../../components/Business/AddBusiness'

const BusinessPage = props => {
  return (
    <div className='l-global'>
      <p className='global-title'>Crear negocio</p>

      <AddBusiness />
    </div>
  )
}

export default BusinessPage
