const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
const config = require('../config')

function jwtSignUser (user) {
  const token = jwt.sign(user, config.jwtSecret, {
    expiresIn: config.ONE_WEEK
  })
  return token
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
        console.log(err)
      })
  },
  login (req, res) {
    const { email, password } = req.body

    User.findOne({ email })
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
          token: jwtSignUser(user.toObject())
        })
      })
      .catch(err => console.log(err.toString()))
  }
}
