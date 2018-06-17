const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function (socket) {
    console.log(`New user connected`);

    //socket.emit only emits to a particular connection.
    // socket.emit('newMessage', {
    //     from: 'mikey@example.com',
    //     text: 'Hey, What is going on?',
    //     createdAt: 123
    // });

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
    });

    socket.on('disconnect', function () {
        console.log(`Client disconnected from the server`);
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
