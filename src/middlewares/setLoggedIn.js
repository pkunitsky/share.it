/**
 * looks for req.token,
 * verifies it and sets req.loggedIn,
 * (req.loggedIn tracks token expiration)
 */
const jwt = require('jsonwebtoken')
const config = require('../config')

function jwtVerifyToken (token) {
  try {
    const decoded = jwt.verify(token, config.jwtSecret, {
      maxAge: config.ONE_WEEK
    })
    return (decoded)
      ? true
      : false
  } catch (err) {
    console.log(err.toString())
    return false
  }
}

module.exports = (req, res, next) => {
  if (!req.token) {
    req.loggedIn = false
    next()
    return
  }

  req.loggedIn = jwtVerifyToken(req.token)
  next()
}
