import { REMOVEDATA, USERDATA } from '../actionTypes'

const INITIAL_STATE = {
  auth: false,
  userToken: null,
  userId: null,
  firstName: null,
  lastName: null,
  userName: null,
  email: null,
  phoneNumber: null,
  avatar: null
}

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERDATA: {
      return { ...action.payload }
    }
    case REMOVEDATA: {
      return null
    }

    default:
      return state
  }
}
