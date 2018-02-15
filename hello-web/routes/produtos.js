var express = require('express');
var router = express.Router();

var _produtos = [{
    id: 1,
    descricao: 'Geladeira',
    valor: 500.0
  },
  {
    id: 2,
    descricao: 'Fogão',
    valor: 300.0
  }
];

var _getProduto = function(id) {
  console.log(id);
  var idx = _produtos.findIndex(function(produto) {
    return produto.id == id;
  });
  return _produtos[idx];
};

router.get('/', function (req, res, next) {
  res.render('produtos/index', {
    produtos: _produtos
  });
});

router.get('/:id', function (req, res, next) {
  var produtoID = req.params.id;
  var produto = _getProduto(produtoID);
  if (produto === undefined) {
    //res.status = 404;
    next();
  } else {
    res.render('produtos/produto', {
      produto: produto
    });  
  }  
});

module.exports = router;