var socket = require('socket.io-client')('http://localhost:3000');
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var uuidv1 = require('uuid/v1');
var colors = require('colors');
var userColors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey'];
var currUser = {
    id: uuidv1(),
    username: '',
    color: userColors[Math.floor(Math.random() * userColors.length)]
};

socket.on('connect', function () {    
    readline.question('Informe seu nome de usuário: '.bgRed, function (name) {
        currUser.username = name || 'anônimo';
        socket.emit('register', currUser);
    });

    readline.on('line', function (input) {
        if (input.length > 0) {
            socket.emit('message', input);
        }
    });
});

socket.on('broadcast', function (user, message) {
    
    console.log(colors[user.color](user.username + ': ' + message));    
});
