var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// configurações
app.use(bodyParser.urlencoded({extended: false}));

// rotas
app.get('/', function(req,res,next) {
  res.send('Hello World!');
});
app.get('/sayhello/:nome', function(req,res) {
  res.send('Hello ' + req.params.nome + '!');
});

/* usa a porta 3000 caso não seja configurada uma outra 
   porta diferente via linha de comando */
var porta = process.env.PORT || 3000;
app.listen(porta, function() {
  console.log('Servidor aguardando requisições na porta ' + porta);
});
