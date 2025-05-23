const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Someone is there! ');
  socket.broadcast.emit('notify', 'Someone has connected!');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});