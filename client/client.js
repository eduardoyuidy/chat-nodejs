var socket = require('socket.io-client')('http://localhost:3000');
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

socket.on('connect', function () {
    readline.question('Informe seu nome de usuário: ', function (name) {
        socket.emit('register', name);
    });
});
