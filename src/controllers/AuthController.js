const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
const config = require('../config')

function jwtGetToken (user) {
  const { expiresIn } = config.jwt
  const token = jwt.sign(user, config.jwt.secret, {
    expiresIn
  })
  return token
}

function jwtCheckToken (token) {
  try {
    const decoded = jwt.verify(token, config.jwt.secret)
    return (decoded)
      ? true
      : false
  } catch (err) {
    console.log(err.toString())
    return false
  }
}

module.exports = {
  register (req, res) {
    const { email, password } = req.body

    new User({
      email,
      password
    })
      .save()
      .then(user => {
        res.send(user)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  },

  login (req, res) {
    const { email, password } = req.body

    User.findOne({ email })
      .catch(err => {
        res.status(400).send(err)
      })
      .then(async user => {
        const confirmed = await user.comparePassword(password)
        if (!confirmed) {
          res.status(401).send({
            error: `user not found. please make sure you didn't make any typos`
          })
          return
        }

        res.status(200).send({
          user,
          token: jwtGetToken(user.toObject())
        })
      })
  },

  checkToken (req, res) {
    const { token } = req.body

    if (!token) {
      res.send({
        valid: false,
        msg: 'no token provided'
      })
      return
    }

    res.send({
      valid: jwtCheckToken(token)
    })
  }
}
