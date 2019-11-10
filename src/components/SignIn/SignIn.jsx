import React, { useState, useReducer } from 'react'
import { navigate } from '@reach/router'
import { useDispatch } from 'react-redux'

// Import actions types
import { USERDATA, ERRORSIGNIN } from '../../store/actionTypes'

// Import utils
import { apiUrl } from '../../utils/api'

// Import components
import IconButton from '../Button/IconButton'
import Loader from '../Loader/Loader'

const SignIn = props => {
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }), { email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleOnChange = event => {
    setUserInput({ [event.target.name]: event.target.value })
  }

  const handleOnSubmit = async event => {
    setIsLoading(true)
    event.preventDefault()

    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ password: userInput.password, email: userInput.email })
    })
    const result = await response.json()
    setIsLoading(false)

    if (result.message === 'You first need to register!') {
      dispatch({
        type: ERRORSIGNIN,
        payload: {
          message: 'El usuario o contraseña es incorrecto.'
        }
      })
      return
    }

    const payload = {
      auth: true,
      userId: result.user.id,
      userName: result.user.username,
      email: result.user.email,
      userToken: result.access_token.token
    }
    dispatch({
      type: USERDATA,
      payload
    })

    localStorage.setItem('easy_wallet', result.access_token.token)
    navigate('/dashboard')
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
