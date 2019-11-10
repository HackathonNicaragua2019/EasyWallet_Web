import { combineReducers } from 'redux'

// Import reducers
import { user } from './user'
import { dropdown } from './dropdown'
import { product } from './product'

const reducers = combineReducers({
  user,
  dropdown,
  product
})

export default reducers
