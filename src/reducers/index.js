import { combineReducers } from 'redux'
import status from './statusReducer'
import users from './usersReducer'
import posts from './postsReducer'
import comments from './commentsReducer'

const rootReducer = combineReducers({
  status,
  users,
  posts,
  comments,
})

export default rootReducer
