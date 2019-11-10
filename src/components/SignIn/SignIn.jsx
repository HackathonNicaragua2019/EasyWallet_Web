import React, { useState, useReducer } from 'react'
import { Redirect } from '@reach/router'
import { useDispatch } from 'react-redux'

// Import actions types
import { USERDATA } from '../../store/actionTypes'

// Import utils
import { apiUrl } from '../../utils/api'

// Import components
import IconButton from '../Button/IconButton'
import Loader from '../Loader/Loader'

const SignIn = props => {
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }), { email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const handleOnChange = event => {
    setUserInput({ [event.target.name]: event.target.value })
  }

  const handleOnSubmit = async event => {
    setIsLoading(true)
    event.preventDefault()
    fetch(`http://127.0.0.1:3333/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email: userInput.email, password: userInput.password })
    })
      .then(response => {
        console.log(response)
      })
    console.log({ email: userInput, password: userInput.password })
    return <Redirect to='dashboard' />
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
            {!isLoading && (
              <IconButton
                message='ENVIAR'
              />
            )}

            {isLoading && (
              <Loader
                type='ThreeDots'
                color='#1D2191'
              />
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
