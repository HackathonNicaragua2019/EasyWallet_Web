import React, { useState, useReducer } from 'react'

// Import components
import IconButton from '../Button/IconButton'

const SignIn = props => {
  const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }), { email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleOnChange = event => {
    setUserInput({ [event.target.name]: event.target.value })
  }

  const handleOnSubmit = async event => {
    setIsLoading(true)
    event.preventDefault()
  }

  return (
    <div className='signin-container'>
      <div className='signin-header'>
        <h2 className='signin-title'>SIGN IN</h2>
        <p className='signin-description'>Hola, inicie sesion y comience a administrar su inventario</p>
      </div>
      <div className='signin-body'>
        <form
          onSubmit={handleOnSubmit}
          autoComplete='off'
          className='signin-form'
        >
          <div className='signin-control'>
            <input
              type='email'
              className='signin-input'
              value={userInput.email}
              onChange={handleOnChange}
              placeholder='Correo'
              name='email'
            />
          </div>

          <div className='signin-control'>
            <input
              type='password'
              className='signin-input'
              value={userInput.password}
              onChange={handleOnChange}
              placeholder='Contraseña'
              name='password'
            />
          </div>

          <div className='signin-button'>
            <IconButton
              message='ENVIAR'
            />

          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
