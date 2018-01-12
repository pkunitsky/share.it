const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const UserPostSchema = require('./UserPostSchema')

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [UserPostSchema]
})

UserSchema.pre('save', function (next) {
  const user = this
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err)
    }
    user.password = hash
    next()
  })
})

module.exports = UserSchema
