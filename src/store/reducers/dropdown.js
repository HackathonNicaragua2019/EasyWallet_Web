import { DROPDOWN } from '../actionTypes'

const INITIAL_STATE = {
  active: false
}

export const dropdown = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DROPDOWN: {
      return { ...action.payload }
    }

    default:
      return state
  }
}
