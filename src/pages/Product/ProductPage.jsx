import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import 'antd/dist/antd.css'

// Import components
import AddProdcut from '../../components/Product/AddProduct'

// Import utils
import { apiUrl } from '../../utils/api'

// Import actions
import { PRODUCTS } from '../../store/actionTypes'

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name'
  },
  {
    title: 'Descriptcion',
    dataIndex: 'description'
  },
  {
    title: 'Expiracion',
    dataIndex: 'expiration'
  }
]

const ProductPage = props => {
  const dispatch = useDispatch()
  const [data, setData] = useState('')
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
      const finalArray = []
      result.map(item => (
        finalArray.push({
          name: item.name,
          description: item.description,
          expiration: !item.expiration_date ? 'NINGUNA' : item.expiration_date
        })
      ))
      setData(finalArray)
      setIsLading(false)
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
      {!isLoading && (
        <div className='product-table'>
          <Table columns={columns} dataSource={data} />
        </div>
      )}
    </div>
  )
}

export default ProductPage
