import { POSTS, USERS, COMMENTS } from '../actions/types'

const initialState = {
  error: null,
  loading: true,
}

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS.FETCH_SUCCESS:
    case POSTS.FETCH_SUCCESS:
    case COMMENTS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case USERS.FETCH_FAILED:
    case POSTS.FETCH_FAILED:
    case COMMENTS.FETCH_FAILED:
      return {
        ...state,
        error: action.error.message || action.error,
        loading: false
      }
    default:
      return state
  }
}

export default statusReducer
