var socket = require('socket.io-client')('http://localhost:3000');
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var uuidv1 = require('uuid/v1');
var colors = require('colors');
var userColors = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey'];
var currUser = {
    id: uuidv1(),
    username: '',
    color: userColors[Math.floor(Math.random() * userColors.length)]
};

socket.on('connect', function () {
    readline.question('Informe seu nome de usuário: '.bgRed, function (name) {
        currUser.username = name || 'anônimo';
        socket.emit('register', currUser);

        console.log('==== Para enviar mensagem direcionada: ">>>" + NOME_USUARIO + <ESPAÇO> + <SUA MENSAGEM> ===');
    });

    readline.on('line', function (input) {
        if (input.length > 0) {
            socket.emit('message', input);
        }
    });
});

socket.on('broadcast', function (user, message) {
    if (user.id !== currUser.id) {
        console.log(colors[user.color](user.username.toUpperCase() + ': ' + message));
    }
});
