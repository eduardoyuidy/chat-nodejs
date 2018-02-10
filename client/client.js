var socket = require('socket.io-client')('http://localhost:3000');
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var uuidv1 = require('uuid/v1');

socket.on('connect', function () {
    readline.question('Informe seu nome de usuário: ', function (name) {
        socket.user = { id: uuidv1(), username: name };
        socket.emit('register', socket.user);
    });

    readline.on('line', function (input) {
        if (input.length > 0) {
            socket.emit('message', input);
        }
    });
});

socket.on('broadcast', function (user, message) {
    if (user.id !== socket.user.id) {
        console.log(socket.user.username + ': ' + message);
    }
});
