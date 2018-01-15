const ChatController = require('../controllers/ChatController')

module.exports = app => {
  app.route('/chat/messages')
    .get(
      ChatController.getMessages
    )
    .post(
      ChatController.sendMessage
    )
}
