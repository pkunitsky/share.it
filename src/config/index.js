const config = process.env.NODE_ENV === 'production'
  ? require('./prod')
  : require('./dev')

module.exports = {
  ONE_WEEK: 60 * 60 * 24 * 7,
  ...config
}
