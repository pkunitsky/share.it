const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  userID: String,
  text: String
})
