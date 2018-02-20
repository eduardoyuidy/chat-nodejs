var app = require('http').createServer();
var io = require('socket.io')(app);
var colors = require('colors');

let userList = [];

app.listen(3000, function () {
    console.log('Bem vindo ao bate papo Coffee&Code JOI!'.bgWhite);
});

io.on('connect', function (socket) {
    socket.on('register', function (user) {
        socket.user = user;
        console.log((socket.user.username + ' entrou no bate-papo').bgGreen);
        userList.push({
            id: socket.id,
            name: socket.user.username
        });
    });

    socket.on('message', function (message) {

        userList.forEach(function (usuario) {                

            if (usuario.name.toLowerCase() !== socket.user.username.toLowerCase()) {
                
                io.to(usuario.id).emit('broadcast', socket.user, message);
            }
        });
    });
});
