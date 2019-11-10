import React, { useReducer, useState } from 'react'
import { useSelector } from 'react-redux'

// Import components
import AddProdcut from '../../components/Product/AddProduct'

const ProductPage = props => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='l-global'>
      <p className='global-title'>Agregar producto</p>

      <AddProdcut />
    </div>
  )
}

export default ProductPage
