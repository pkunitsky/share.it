const mongoose = require('mongoose')

const UserPostSchema = new mongoose.Schema({
  title: String,
  text: String,
  pictures: [String],
  likes: Number
})

module.exports = UserPostSchema
