const Promise = require('bluebird')

const express = require('express')
const app = Promise.promisifyAll(express())
const mongoose = require('mongoose')
const config = require('./config')

require('./models')
require('./middlewares')(app)
require('./routes')(app)


if (process.env.NODE_ENV === 'production') {
  const path = require('path')

  app.use(express.static('../client/build'))
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'client', 'build', 'index.html')
    )
  })
}


mongoose.Promise = Promise
mongoose
  .connect(config.mongoURI, { useMongoClient: true })
  .then(_ => app.listenAsync(config.port))
  .then(_ => console.log(`server is serving on port ${config.port}`))
