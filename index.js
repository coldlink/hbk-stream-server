const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('a user connected');
});

setTimeout(() => io.emit('date', new Date().getTime()))

http.listen(process.env.PORT || 3000, () => {
  console.log('listening on *:3000');
});