const mongoose = require('mongoose')
const User = mongoose.model('User')
const Chat = mongoose.model('Chat')

class SocketHelper {
  constructor (socket) {
    if (!socket) return

    // those are static
    this.socket = socket
    this.userID = socket.handshake.query
    this.user = null

    // those are dynamic
    this.chats = null
    this.currentChatID = null
    this.currentMessages = []

    this.init = this.init.bind(this)
  }

  async init () {
    /** 
     * as soon as client connects, setup its data
     * 1. get "userID"
     * 2. get "user" from database
     * 3. get available "chats" from database
     * 4. enhance "chats.users"
     */

    /** step 1: get "userID" */
    this.userID = socket.handshake.query.userID
    if (!this.userID) {
      console.log('socket.io: userID not found')
      return
    }

    /** step 2: get "user" from database */
    this.user = await User.findOne({_id: userID})
    if (!this.user) {
      console.log('socket.io: user not found')
      return
    }

    /** step 3: get available "chats" from database  */
    this.chats = await Chat.findByUserID(userID)
    if (!this.chats) {
      this.socket.emit('chats:404', 'no available chats found')
      return
    }

    /** step 4: enhance "chats.users" */
    const chatPromises = this.chats.map(async chat => {
      const chatUsers = await User.findByIDs(chat.usersIDs)
      chat.users = chatUsers
      await chat.save()
      return chat
    })
    this.chats = await Promise.all(chatPromises)
    this.socket.emit('chats', chats)
  }
}

module.exports = io => {
  io.on('connection', async socket => {
    const helper = new SocketHelper(socket)
    await helper.init()
    /**
     * lets get static data (userID, user)
     * it won't change
     */
    const {userID, user} = helper
    
    /**
     * as client joins chat the following event fires. it fetches chat from database, makes sure that user didn't already join the chat and add user to chat. finally emits 'chat:user-joined' to everyone
     */
    socket.on('chat:user-joined', async chatID => {
      const chat = await Chat.findOne({_id: chatID})
      const alreadyJoined = (chat.userIDs.findIndex(userID) !== -1)
      if (alreadyJoined) return

      chat.userIDs.push(user._id)
      await chat.save()

      io.emit('chat:user-joined', ({chat, user}))

      socket.on('msg:sent', msg => {
        
      })
    })

    socket.on('broadcast', payload => {
      const {emitName, emitData} = payload
      socket.broadcast.emit(emitName, emitData)
    })
  })
}
