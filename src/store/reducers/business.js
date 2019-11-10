import { BUSINESS } from '../actionTypes'

const INITIAL_STATE = {
  message: null
}

export const business = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUSINESS: {
      return { ...action.payload }
    }

    default:
      return state
  }
}
