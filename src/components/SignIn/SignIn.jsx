import React, { useState, useReducer } from 'react'
import { Redirect } from '@reach/router'
import { useDispatch } from 'react-redux'
import axios from 'axios'

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

    // const config = {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    //   }
    // }

    // axios.post(`${apiUrl}/auth/login`, { email: userInput.email, password: userInput.password }, config)
    //   .then(response => {
    //     console.log(response)
    //   })
    
    // console.log(result)
    // setIsLoading(false)
    // setData(result)
    // dispatch({
    //   type: USERDATA,
    //   payload: {

    //   }
    // })
    // localStorage.setItem('easy-token', result)
    // props.history.push('/dashboard')
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
