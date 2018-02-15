var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var home = require('./routes/home');
var produtos = require('./routes/produtos');

var app = express();

// configurações
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// rotas
app.use('/', home);
app.use('/produtos', produtos);

// capturando erro 404 e passando-o para o tratador de erros
app.use(function(req, res, next) {
  var err = new Error('Recurso não encontrado!');
  err.status = 404;
  next(err);
});

// tratador de erros
app.use(function(err, req, res, next) {
  // mostra a mensagem de erro para depuração em ambiente de desenvolvimento
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // renderiza a página de erro
  res.status(err.status || 500);
  res.render('error');
});

var porta = process.env.PORT || 3000;

app.listen(porta, function() {
  console.log('Servidor aguardando requisições na porta ' + porta);
});
