const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {
  register (req, res, next) {
    const { email } = req.body

    User
      .findOne({ email })
      .catch(err => console.log(err.toString()))
      .then(user => {
        if (!user) {
          next()
          return
        }

        res.status(409).send({
          error: `user with ${user.email} is already registered`
        })
        next()
      })
  }
}
