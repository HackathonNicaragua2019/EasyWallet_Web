import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Import components
import AddProdcut from '../../components/Product/AddProduct'

// Import actions
import { PRODUCTS } from '../../store/actionTypes'

const ProductPage = props => {
  const dispatch = useDispatch()
  const { message } = useSelector(state => state.product)
  console.log(message)

  const handleOnClose = () => {
    dispatch({
      type: PRODUCTS,
      payload: {
        message: null
      }
    })
  }

  return (
    <div className='l-global'>
      <p className='global-title'>Agregar producto</p>
      {message && (
        <div className='product-container-sucess'>
          <p className='signin-message-error'>{message}</p>
          <p className='signin-close' onClick={handleOnClose}>X</p>
        </div>
      )}
      <AddProdcut />
    </div>
  )
}

export default ProductPage
