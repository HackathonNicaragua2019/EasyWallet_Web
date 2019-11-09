import { combineReducers } from 'redux'

// Import reducers
import { user } from './user'
import { dropdown } from './dropdown'

const reducers = combineReducers({
  user,
  dropdown
})

export default reducers
