const Promise = require('bluebird')

const express = require('express')
const app = express()
const server = Promise.promisifyAll(require('http').Server(app))
const io = require('socket.io')(server)

const mongoose = require('mongoose')
const config = require('./config')

require('./models')
require('./middlewares/global')(app)
require('./routes')(app)

io.on('connection', (socket) => {
  console.log('new user connected')

  socket.on('disconnect', () => {
    console.log('user was disconnected')
  })
})

mongoose.Promise = Promise
mongoose
  .connect(config.mongoURI, { useMongoClient: true })
  .then(_ => server.listenAsync(config.port))
  .then(_ => console.log(`server is serving on port ${config.port}`))
