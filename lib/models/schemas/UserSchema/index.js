const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

const mongoose = require('mongoose')
const PostSchema = require('./PostSchema')
const { isEmail } = require('validator')
const jwt = require('jsonwebtoken')
const config = require('../../../config')

const UserSchema = new mongoose.Schema({
  fullname: String,
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: value => isEmail(value),
      message: `{VALUE} is not a valid email`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 32
  },
  birthday: String,
  imgURL: {
    sm: String,
    md: String,
    lg: String
  },
  posts: [PostSchema]
})

/**
 * UNDER DEVELOPMENT
 * custom model method: User.findByToken
 */
// UserSchema.statics.findByToken = function (token) {
//   const User = this
  
//   try {
//     const decoded = jwt.verify(token, config.jwt.secret)
//     return User.findOne({
//       '_id': decoded._id,
//       'tokens.token': token
//     })
//   } catch (err) {
//     return Promise.reject(err.toString())
//   }
// }

/**
 * custom instance method: user.comparePassword
 */
UserSchema.methods.comparePassword = function (password) {
 return bcrypt.compareAsync(password, this.password)
}

/**
 * hash the password every time before saving to database
 */
UserSchema.pre('save', function (next) {
  const user = this
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      next(err)
      return
    }

    user.password = hash
    next()
  })
})

module.exports = UserSchema
