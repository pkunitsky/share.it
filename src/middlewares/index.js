/**
 * this directory connects general middleware with express app
 * route specific middleware is in ./src/policies
 */
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const setLoggedIn = require('./setLoggedIn')
const config = require('../config')

module.exports = app => {
  app.use(morgan('tiny'))
  app.use(cors())
  app.use(bodyParser.json())
  app.use(setLoggedIn)
}
