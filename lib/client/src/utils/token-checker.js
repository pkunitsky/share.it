import AuthService from '@/services/AuthService'
import store from '@/store'
import notify from '@/utils/notify'
import nprogress from '@/../modules/nprogress'
/**
 * TokenChecker instance checks if token is valid
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

  async checkEvery (seconds = 15) {
    const { token } = store.state
    if (!token) return

    try {
      this.valid = await this.check(token)
    } catch (err) {
      notify('No internet connection', { timeout: false, static: true })
      nprogress.done()
    }

    setTimeout(
      () => {
        if (!this.valid) {
          store.dispatch('logout')
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
        .then(res => {
          const { valid } = res.data
          if (!valid) {
            store.dispatch('logout')
          }
          resolve(valid)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default new TokenChecker()
