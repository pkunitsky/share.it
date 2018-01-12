const fs = require('fs')
const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js')

module.exports = app => {
  files.forEach(file => {
    require(`./${file}`)(app)
  })
}
