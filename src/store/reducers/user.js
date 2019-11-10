import { REMOVEDATA, USERDATA, ERRORSIGNIN } from '../actionTypes'

const INITIAL_STATE = {
  auth: false,
  userToken: '',
  userId: '',
  userName: '',
  email: ''
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
      return INITIAL_STATE
    }

    default:
      return state
  }
}
