const msgs = // get messages from global chat

module.exports = socket => {
  socket.emit('msgs', msgs)

  socket.on('msg:sent', msg => {
    // save msg to database
  })
  socket.on('broadcast', payload => {
    const {emitName, emitData} = payload
    socket.broadcast.emit(emitName, emitData)
  })
}
