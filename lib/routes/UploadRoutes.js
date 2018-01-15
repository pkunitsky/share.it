const path = require('path')
const uploadsDir = '../db/files'
const config = require('../config')

module.exports = app => {
  app.route('/:userID/upload')
    .post(
      (req, res, next) => {
        `http://rsz.io/${config.domain}/`
        next()
      }
    )
}
