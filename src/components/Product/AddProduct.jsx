import React, { useReducer, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Import utis
import { apiUrl } from '../../utils/api'

// Import actions types
import { PRODUCTS } from '../../store/actionTypes'

// Import components
import Button from '../Button/IconButton'

const AddProduct = props => {
  const dispatch = useDispatch()
  const { userName, userToken } = useSelector(state => state.user)
  const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }), { name: '', description: '', expiration_date: '' })
  const [isLoading, setIsLading] = useState(false)
  
  const handleOnChange = event => {
    setUserInput({ [event.target.name]: event.target.value })
  }
  
  const handleOnSubmit = async event => {
    event.preventDefault()
    setIsLading(true)
    
    const response = await fetch(`${apiUrl}/${userName}/product`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name: userInput.name, description: userInput.description, expiration_date: userInput.expiration_date })
    })
    const result = await response.json()
    console.log(result)
    if (result.created_at !== null) {
      console.log(result)
      dispatch({
        type: PRODUCTS,
        payload: {
          message: 'El producto se registro correctamente.'
        }
      })
    }
    setIsLading(false)
  }

  return (
    <div className='product'>
      <form onSubmit={handleOnSubmit} className='product-form'>
        <div className='signin-control'>
          <input
            className='signin-input'
            placeholder='Nombre del producto'
            value={userInput.name}
            type='text'
            onChange={handleOnChange}
            name='name'
          />
        </div>

        <div className='signin-control'>
          <input
            className='signin-input'
            placeholder='Expiracion'
            value={userInput.expiration_date}
            type='text'
            onChange={handleOnChange}
            name='expiration_date'
          />
        </div>

        <div className='signin-control'>
          <textarea
            className='signin-input'
            value={userInput.description}
            type='text'
            placeholder='Descriptcion'
            onChange={handleOnChange}
            name='description'
          />
        </div>
        <div className='product-button'>
          <Button
            message={isLoading ? 'Cargando...' : 'GUARDAR'}
          />
        </div>
      </form>
    </div>
  )
}

export default AddProduct
