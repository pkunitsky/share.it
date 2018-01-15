const mongoose = require('mongoose')
const Chat = mongoose.model('Chat')
const jwt = require('jsonwebtoken')
const config = require('../config')

function jwtGetToken (user) {
}

function jwtCheckToken (token) {
}

module.exports = {
  sendMessage (req, res) {
    const { msg } = req.body

  },
  getMessages (req, res) {

  }
}
