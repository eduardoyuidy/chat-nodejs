var app = require('http').createServer();
var io = require('socket.io')(app);
var colors = require('colors');

app.listen(3000, function () {
    console.log('Bem vindo ao bate papo Coffee&Code JOI!'.bgWhite);
});

io.on('connect', function (socket) {
    socket.on('register', function (user) {
        socket.user = user;
        console.log((socket.user.username + ' entrou no bate-papo').bgGreen);
    });

    socket.on('message', function (message) {
        io.emit('broadcast', socket.user, message);
    });
});
