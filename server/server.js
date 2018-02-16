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

        if (message.substring(0,3) === ">>>") {

            let userDestiny = message.split(' ')[0].substring(3,message.split(' ')[0].length);

            //console.log(`Esta mensagem deve ser direcionada para ${userDestiny}`);

            let erroEntrega = true;

            userList.forEach(function (usuario) {                

                if (usuario.name.toLowerCase() == userDestiny.toLowerCase()) {
                    
                    erroEntrega = false;

                    io.to(usuario.id).emit('broadcast', socket.user, message);
                }
            });

            if (erroEntrega == true){
                console.log(`ERRO:: Mensagem não foi entregue, o usuário ${userDestiny} não está mais logado.`);
            }
        } else {
            io.emit('broadcast', socket.user, message);
        }         
    });
});
