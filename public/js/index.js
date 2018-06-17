var socket = io(); //Initiating a request from the client to the server to keep the connection open

//We will be using es5 functions instead of es6 arrow functions on the client side of things to ensure compatibility across different viewing devices

socket.on('connect', function () {
    console.log('Connected to the server');
});

socket.on('disconnect', function () {
    console.log(`Disconnected from the server`);
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function (){

    });
});
