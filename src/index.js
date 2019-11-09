import React from 'react'
import ReactDOM from 'react-dom'

import EasyWallet from './routes/EasyWallet'
import './static/scss/styles.scss'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<EasyWallet />, document.getElementById('root'))
serviceWorker.unregister()
