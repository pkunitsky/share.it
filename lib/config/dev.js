module.exports = {
  port: 8081,
  jwt: {
    secret: 'secret',
    expiresIn: '1d'
  },
  mongoURI: 'mongodb://localhost/shareit'
}
