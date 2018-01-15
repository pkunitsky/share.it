const Promise = require('bluebird')

const express = require('express')
const app = Promise.promisifyAll(express())
const mongoose = require('mongoose')
const config = require('./config')

require('./models')
require('./middlewares/global')(app)
require('./routes')(app)

mongoose.Promise = Promise
mongoose
  .connect(config.mongoURI, { useMongoClient: true })
  .then(_ => app.listenAsync(config.port))
  .then(_ => console.log(`server is serving on port ${config.port}`))
