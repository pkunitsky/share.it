const mongoose = require('mongoose')
const MessageSchema = require('./MessageSchema')

const ChatSchema = new mongoose.Schema({
  accessRestricted: Boolean,
  usersIDs: [String],
  messages: [MessageSchema]
})

/**
 * custom class method: Chat.findByUserID
 */
ChatSchema.statics.findByUserID = function (userID) {
  const Chat = this

  return Chat.find({"userIDs.id": userID})
}

module.exports = ChatSchema
