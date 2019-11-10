import { REMOVEDATA, USERDATA, ERRORSIGNIN } from '../actionTypes'

const INITIAL_STATE = {
  auth: false,
  userToken: null,
  userId: null,
  userName: null,
  email: null
}

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERDATA: {
      return { ...action.payload }
    }
    case ERRORSIGNIN: {
      return { ...action.payload }
    }
    case REMOVEDATA: {
      return null
    }

    default:
      return state
  }
}
