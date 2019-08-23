import Axios from 'axios'
import { Config } from '../config'
import { POSTS } from './types'

const fetchSuccessPosts = (users, posts, comments) => ({
  type: POSTS.FETCH_SUCCESS,
  users,
  posts,
  comments,
  loading: false,
})

const fetchFailedPosts = (error) => ({
  type: POSTS.FETCH_FAILED,
  error,
  loading: false,
})

export const fetchData = () => async dispatch => {
  try {
    const getUsers = async () => await Axios.get(`${Config.apiUrl}/users`);
    const getPosts = async () => await Axios.get(`${Config.apiUrl}/posts`);
    const getComments = async () => await Axios.get(`${Config.apiUrl}/comments`);
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

