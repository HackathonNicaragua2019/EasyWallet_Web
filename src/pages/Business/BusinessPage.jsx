import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Import actions types
import { BUSINESS } from '../../store/actionTypes'

// Import components
import AddBusiness from '../../components/Business/AddBusiness'

const BusinessPage = props => {
  const dispatch = useDispatch()
  const { message } = useSelector(state => state.business)
  console.log(message)

  const handleOnClose = () => {
    dispatch({
      type: BUSINESS,
      payload: {
        message: null
      }
    })
  }

  return (
    <div className='l-global'>
      <p className='global-title'>Crear negocio</p>
      {message && (
        <div className='global-container'>
          <p className='global-message'>{message}</p>
          <p className='global-close' onClick={handleOnClose}>X</p>
        </div>
      )}
      <AddBusiness />
    </div>
  )
}

export default BusinessPage
