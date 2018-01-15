import axios from 'axios'

const API = axios.create({
  baseURL: `${process.env.DOMAIN}/auth`
})

export default {
  register: (user) => API.post('register', user),
  login: (user) => API.post('login', user),
  checkToken: (token) => API.post('check-token', { token })
}
