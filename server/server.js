var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(3000, function () {
    console.log('Bem vindo ao bate papo Coffee&Code JOI!');
});

io.on('connect', function (socket) {
    socket.on('register', function (name) {
        console.log(name + ' entrou no bate-papo');
    });

    socket.on('message', function (message) {
        io.emit('broadcast', message);
    });
});
