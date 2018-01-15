const mongoose = require('mongoose')
const UserSchema = require('../UserSchema')
const MessageSchema = require('./MessageSchema')

const ChatSchema = new mongoose.Schema({
  users: [UserSchema],
  messages: [MessageSchema]
})

ChatSchema.pre('save', function (next) {
  next()
})

module.exports = ChatSchema
