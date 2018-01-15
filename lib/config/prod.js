module.exports = {
  port: process.env.PORT,
  domain: process.env.DOMAIN,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
  },
  mongoURI: process.env.MONGO_URI
}
