import React, { useState, useReducer } from 'react'

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
        <p className='signin-description'>Hola, inicie sesion</p>
      </div>
      <div className='signin-body'>
        <div>
          <form onSubmit={handleOnSubmit}>
            <input
              type='email'
              className='signin-input'
              value={userInput.email}
              onChange={handleOnChange}
              placeholder='Correo'
              name='email'
            />

            <input
              type='password'
              className='signin-input'
              value={userInput.password}
              onChange={handleOnChange}
              placeholder='Contraseña'
              name='password'
            />

            <input
              type='submit'
              value='ENVIAR'
              className='signin-button'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
