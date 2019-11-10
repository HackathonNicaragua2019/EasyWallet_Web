import { combineReducers } from 'redux'

// Import reducers
import { user } from './user'
import { dropdown } from './dropdown'
import { product } from './product'
import { business } from './business'

const reducers = combineReducers({
  user,
  dropdown,
  product,
  business
})

export default reducers
