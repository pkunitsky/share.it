import API from '@/utils/axios-base-api'
import store from '@/store'

class UserService {
  constructor () {
    this.getChats = this.getChats.bind(this)
  }

  init () {
    this.userID = store.state.user._id
  }

  getChats () {
    return API.get(`${this.userID}/chats`)
  }
}

export default new UserService()
