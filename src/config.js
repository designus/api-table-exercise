import Axios from 'axios'

export const http = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})
