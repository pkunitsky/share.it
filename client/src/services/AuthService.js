import axios from 'axios'

class AuthService {
  constructor () {
    this.API = axios.create({
      baseURL: 'http://localhost:8081/auth'
    })
  }

  register (user) {
    return this.API.post('register', user)
  }

  login (user) {
    return this.API.post('login', user)
  }
}

export default new AuthService()
