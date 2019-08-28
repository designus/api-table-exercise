import { USERS } from '../actions/types'

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case USERS.FETCH_SUCCESS:
      return action.data
    default:
      return state
  }
}

export default usersReducer
