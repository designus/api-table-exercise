import { POSTS } from '../actions/types'

const initialState = {
  data: [],
  error: null,
  loading: true,
}

const postsReducer = (state = initialState, action) => {
  console.log('posts action.type', action.type)

  switch (action.type) {
    case POSTS.FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    case POSTS.FETCH_FAILED:
      return {
        ...state,
        error: action.error.message || action.error,
        loading: false
      }
    default:
      return state
  }
}

export default postsReducer
