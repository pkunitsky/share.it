module.exports = {
  port: 8081,
  jwt: {
    secret: 'secret',
    expiresIn: '1d'
  },
  mongoURI: 'mongodb://admin:admin@ds251737.mlab.com:51737/share-it-app' // local alternative 'mongodb://localhost/shareit'
}
