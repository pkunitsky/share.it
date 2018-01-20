const mongoose = require('mongoose')
const Chat = mongoose.model('Chat')

module.exports = {
  getChats (req, res) {
    // fetch all chats for user
    const {userID} = req.params
    console.log(`userID from req.body: ${userID}`)

    Chat
      .findOne({
        'users.userID': userID
      })
      .then(chats => {
        console.log(`chats found in db: ${chats}`)
        res.send(chats)
      })
  }
}
