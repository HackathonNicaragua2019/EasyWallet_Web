import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

// Import store
import store from './store/store'

import EasyWallet from './routes/EasyWallet'
import './static/scss/styles.scss'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <EasyWallet />
  </Provider>, document.getElementById('root'))
serviceWorker.unregister()
