const mongoose = require('mongoose')
const UserSchema = require('../UserSchema')

const MessageSchema = new mongoose.Schema({
  dateSent: Date,
  text: String,
  user: UserSchema
})

module.exports = MessageSchema
