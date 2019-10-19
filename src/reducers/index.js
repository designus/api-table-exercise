import { combineReducers } from 'redux';
<<<<<<< HEAD
import { posts } from './posts';
import { users } from './users';

export default combineReducers({
  posts,
  users
=======

const exampleReducer = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  exampleReducer
>>>>>>> 259ea2a8d90a1b69e8b7e54d61b4896f880b0ed0
})
  