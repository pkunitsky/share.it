const ChatsController = require('../controllers/ChatsController')

module.exports = app => {
  app.route(':userID/chats')
    .get(
      ChatsController.getChats
    )
}
