import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from 'antd'

// Import actions types
import { BUSINESS } from '../../store/actionTypes'

// Import components
import AddBusiness from '../../components/Business/AddBusiness'

// Import utils
import { apiUrl } from '../../utils/api'

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
    title: 'Codigo',
    dataIndex: 'id'
  }
]

const BusinessPage = props => {
  const dispatch = useDispatch()
  const [data, setData] = useState('')
  const [isLoading, setIsLading] = useState(false)
  const { userName, userToken } = useSelector(state => state.user)
  const { message } = useSelector(state => state.business)

  useEffect(() => {
    const fetchData = async () => {
      setIsLading(true)
    
      const response = await fetch(`${apiUrl}/${userName}/businesses`, {
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
          key: item.id.toString(),
          id: item.id,
          name: item.name,
          description: item.description
        })
      ))
      console.log(finalArray)
      setData(finalArray)
      setIsLading(false)
    }
    fetchData()
  }, [])

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
      {!isLoading && (
        <div className='product-table'>
          <Table columns={columns} dataSource={data} rowKey={record => record.id} />
        </div>
      )}
    </div>
  )
}

export default BusinessPage
