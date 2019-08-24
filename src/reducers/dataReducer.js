import { POSTS } from '../actions/types'

const initialState = {
  loading: true,
  users: [],
  posts: [],
  comments: [],
  error: null,
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS.LOADING:
      return {
        ...state,
        loading: true,
      }
    case POSTS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users.data,
        posts: action.posts.data,
        comments: action.comments.data
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

export default dataReducer
