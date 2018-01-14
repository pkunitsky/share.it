import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8081/auth'
})

export default {
  register: (user) => API.post('register', user),
  login: (user) => API.post('login', user),
  checkToken: (token) => API.post('check-token', { token })
}
