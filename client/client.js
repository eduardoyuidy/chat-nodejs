var socket = require('socket.io-client')('http://localhost:3000');
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var uuidv1 = require('uuid/v1');
var currUser = { id: uuidv1(), username: '' };

socket.on('connect', function () {
    readline.question('Informe seu nome de usuário: ', function (name) {
        currUser.username = name;
        socket.emit('register', currUser);
    });

    readline.on('line', function (input) {
        if (input.length > 0) {
            socket.emit('message', input);
        }
    });
});

socket.on('broadcast', function (user, message) {
    if (user.id !== currUser.id) {
        console.log(user.username + ': ' + message);
    }
});

