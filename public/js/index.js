var socket = io(); //Initiating a request from the client to the server to keep the connection open

//We will be using es5 functions instead of es6 arrow functions on the client side of things to ensure compatibility across different viewing devices

socket.on('connect', function () {
    console.log('Connected to the server');

    socket.emit('createMessage', {
        from: 'mahir@example.com',
        text: 'Hey. This is Mahir.'
    });
});

socket.on('disconnect', function () {
    console.log(`Disconnected from the server`);
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});
