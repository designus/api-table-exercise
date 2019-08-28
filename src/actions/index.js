import * as TYPE from './types'

const fetchSuccess = (data, api) => {
  return {
    type: TYPE[api].FETCH_SUCCESS,
    data,
  }
}

const fetchFailed = (error, api) => {
  return {
    type: TYPE[api].FETCH_FAILED,
    error,
  }
}

export const fetchData = () => dispatch => {
  Promise.all(
    ['users', 'posts', 'comments'].map(api => fetch(`https://jsonplaceholder.typicode.com/${api}`)
      .then(response => response.json())
      .then(data => dispatch(fetchSuccess(data, api.toUpperCase())))
      .catch(error => dispatch(fetchFailed(error, api.toUpperCase())))
    )
  )
}

