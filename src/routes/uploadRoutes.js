const path = require('path')
const multer = require('multer')
const uploadsDir = '../db/uploads'

module.exports = app => {
  app.route('/:userID/upload')
    .post(
      (req, res, next) => {
        console.log(req.loggedIn)
        console.log(req.params.userID)
        next()
      }
    )
}
