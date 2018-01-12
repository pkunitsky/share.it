const Promise = require('bluebird')

const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path').posix
const schemasDir = path.join(__dirname, './schemas')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

/**
 * register models
 */
fs.readdirSync(schemasDir).forEach(schemaName => {
  const schemaDotPath = `./schemas/${schemaName}`

  const schema = require(schemaDotPath)
  const modelName = schemaName.replace('Schema', '')

  mongoose.model(modelName, schema)
})

/**
 * custom User.prototype function
 */
mongoose.model('User').prototype.comparePassword = function (password) {
  return bcrypt.compareAsync(password, this.password)
}
