/**
 * load dotenv config if not production mode
 */
if (process.env.NODE_ENV !== 'production') {
  const path = require('path')
  const dotEnvPath = path.join(__dirname, './.env')
  
  require('dotenv').config({ path: dotEnvPath })
  console.log(`using .env configuration (${process.env.NODE_ENV} mode)`)
  require('../../src/app.js')
}
