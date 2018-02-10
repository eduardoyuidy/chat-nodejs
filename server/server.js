var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(3000, function () {
    console.log('Bem vindo ao bate papo Coffee&Code JOI!');
});

io.on('connect', function (socket) {
    console.log('Um novo usuário entrou no bate-papo');
});
