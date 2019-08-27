import { COMMENTS } from '../actions/types'

const initialState = {
  data: [],
  error: null,
  loading: true,
}

const commentsReducer = (state = initialState, action) => {
  console.log('comments action.type', action)

  switch (action.type) {
    case COMMENTS.FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
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

export default commentsReducer
