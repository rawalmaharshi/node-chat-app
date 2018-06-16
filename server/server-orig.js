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

    socket.emit('newEmail', {
        from: 'mikey@example.com',
        text: 'Hey, What is going on?',
        createdAt: 123
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    });

    socket.on('disconnect', function () {
        console.log(`Client disconnected from the server`);
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
