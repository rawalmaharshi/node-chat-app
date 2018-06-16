var socket = io(); //Initiating a request from the client to the server to keep the connection open

//We will be using es5 functions instead of es6 arrow functions on the client side of things to ensure compatibility across different viewing devices

socket.on('connect', function () {
    console.log('Connected to the server');

    socket.emit('createEmail', {
        to: 'jen@example.com',
        text: 'Hey. This is Mahir.'
    });
});

socket.on('disconnect', function () {
    console.log(`Disconnected from the server`);
});

socket.on('newEmail', function (email) {
    console.log('New email', email);
});
