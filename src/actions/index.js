import Axios from 'axios'
import { http } from '../config'
import { POSTS } from './types'

export const fetchSuccessPosts = (users, posts, comments) => ({
  type: POSTS.FETCH_SUCCESS,
  users,
  posts,
  comments,
  loading: false,
})

export const fetchFailedPosts = (error) => ({
  type: POSTS.FETCH_FAILED,
  error,
  loading: false,
})

export const fetchData = () => async dispatch => {
  try {
    const getUsers = async () => await http.get('/users');
    const getPosts = async () => await http.get('/posts');
    const getComments = async () => await http.get('/comments');
    await Axios.all([getUsers(), getPosts(), getComments()])
      .then(Axios.spread((users, posts, comments) => {
        return (
          dispatch(fetchSuccessPosts(users, posts, comments))
        )
      }))
  } catch (error) {
    dispatch(fetchFailedPosts(error));
  }
}

