module.exports = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieSecret: process.env.COOKIE_SECRET
}
