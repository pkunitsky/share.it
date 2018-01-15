const port = 8081

module.exports = {
  port,
  domain: `localhost:${port}`,
  jwt: {
    secret: 'secret',
    expiresIn: '1d'
  },
  mongoURI: 'mongodb://localhost/shareit'
}
