import AuthService from '@/services/AuthService'
import store from '@/store'
/**
 * TokenChecker checks if token is valid
 *   checkEvery():
 *     runs check() recursively
 *   check():
 *     gets token from vuex state, makes request to server
 *     and returns false / true
 */
class TokenChecker {
  constructor () {
    this.valid = (store.state.token)
      ? true
      : false
    this.checkEvery = this.checkEvery.bind(this)
    this.check = this.check.bind(this)
  }

  async checkEvery (seconds = 30) {
    const { token } = store.state
    if (!token) return

    this.valid = await this.check(token)

    setTimeout(
      () => {
        if (!this.valid) {
          store.commit('setToken', null)
          return
        }
        
        this.checkEvery(seconds)
      },
      seconds * 1000
    )
  }

  check (token) {
    if (!token) return

    return new Promise((resolve, reject) => {
      AuthService
        .checkToken(token)
        .catch(err => {
          console.log(err.toString())
          resolve(false)
        })
        .then(res => {
          const { valid } = res.data
          if (!valid) store.commit('setToken', null)
          resolve(valid)
        })
    })
  }
}

export default new TokenChecker()
