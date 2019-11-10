import { PRODUCTS } from '../actionTypes'

const INITIAL_STATE = {
  message: null
}

export const product = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS: {
      return { ...action.payload }
    }

    default:
      return state
  }
}
