import * as TYPE from './types'
// import Axios from 'axios'
// import { http } from '../config'
// import { POSTS } from './types'

// export const fetchSuccessPosts = (users, posts, comments) => ({
//   type: POSTS.FETCH_SUCCESS,
//   users,
//   posts,
//   comments,
// })

// export const fetchFailedPosts = error => ({
//   type: POSTS.FETCH_FAILED,
//   error,
// })

// export const fetchData = () => async dispatch => {
//   try {
//     const getUsers = async () => await http.get('/users')
//     const getPosts = async () => await http.get('/posts')
//     const getComments = async () => await http.get('/comments')
//     await Axios.all([getUsers(), getPosts(), getComments()])
//       .then(Axios.spread((users, posts, comments) => {
//         return (
//           dispatch(fetchSuccessPosts(users, posts, comments))
//         )
//       }))
//   } catch (error) {
//     dispatch(fetchFailedPosts(error))
//   }
// }

const fetchSuccess = (data, api) => {
  return {
    type: TYPE[api].FETCH_SUCCESS,
    data,
  }
}


export const fetchData = () => dispatch => {
  Promise.all(
    ['posts', 'users', 'comments'].map(api => fetch(`https://jsonplaceholder.typicode.com/${api}`)
      .then(response => response.json())
      .then((data) => { dispatch(fetchSuccess(data, api.toUpperCase()))})
    )
  )
}

