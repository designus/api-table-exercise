import { COMMENTS } from '../actions/types'

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case COMMENTS.FETCH_SUCCESS:
      return action.data
    default:
      return state
  }
}

export default commentsReducer
