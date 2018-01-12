const AuthControllerPolicy = require('../policies/AuthControllerPolicy')
const AuthController = require('../controllers/AuthController')

module.exports = app => {
  app.route('/auth/register')
    .post(
      AuthControllerPolicy.register,
      AuthController.register
    )
  
  app.route('/auth/login')
    .post(
      AuthController.login
    )
}
