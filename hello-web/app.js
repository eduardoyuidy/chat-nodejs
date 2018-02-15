var express = require('express');

var app = express();

// rotas
app.get('/', function(req,res,next) {
  res.send('Hello World!');
});

/* usa a porta 3000 caso não seja configurada uma outra 
   porta diferente via linha de comando */
var porta = process.env.PORT || 3000;
app.listen(porta, function() {
  console.log('Servidor aguardando requisições na porta ' + porta);
});
