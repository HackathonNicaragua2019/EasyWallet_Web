import React, { useReducer, useState} from 'react'

// Import components
import Button from '../Button/IconButton'

const AddProduct = props => {
  const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }), { name: '', description: '', expiration_date: '' })
  const [isLoading, setIsLading] = useState(false)

  const handleOnSubmit = () => {
    setIsLading(true)
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
          />
        </div>

        <div className='signin-control'>
          <input
            className='signin-input'
            placeholder='Expiracion'
            value={userInput.expiration_date}
            type='text'
          />
        </div>

        <div className='signin-control'>
          <textarea
            className='signin-input'
            value={userInput.description}
            type='text'
            placeholder='Descriptcion'
          />
        </div>
      </form>
      <Button
        message='GUARDAR'
      />
    </div>
  )
}

export default AddProduct
