import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

// Import components
import AddProdcut from '../../components/Product/AddProduct'

// Import utils
import { apiUrl } from '../../utils/api'

// Import actions
import { PRODUCTS } from '../../store/actionTypes'

const columns = [
  {
    title: '',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const ProductPage = props => {
  const dispatch = useDispatch()
  const [isLoading, setIsLading] = useState(false)
  const { userName, userToken } = useSelector(state => state.user)
  const { message } = useSelector(state => state.product)

  useEffect(() => {
    const fetchData = async () => {
      setIsLading(true)
    
      const response = await fetch(`${apiUrl}/${userName}/products`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userToken}`,
          'Content-type': 'application/json'
        }
      })
      const result = await response.json()
      console.log(result)
    }
    fetchData()
  }, [])

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
      <div className='product-table'>
        
      </div>
    </div>
  )
}

export default ProductPage
