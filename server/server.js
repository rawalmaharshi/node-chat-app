const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

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

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);

        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });

    });

    socket.on('disconnect', function () {
        console.log(`Client disconnected from the server`);
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
