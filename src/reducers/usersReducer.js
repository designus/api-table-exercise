import { USERS } from '../actions/types'

const initialState = {
  data: [],
  error: null,
  loading: true,
}

const usersReducer = (state = initialState, action) => {
  console.log('users action.type', action.type)
  switch (action.type) {
    case USERS.FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    case USERS.FETCH_FAILED:
      return {
        ...state,
        error: action.error.message || action.error,
        loading: false
      }
    default:
      return state
  }
}

export default usersReducer
