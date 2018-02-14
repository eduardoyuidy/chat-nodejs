var args = process.argv.slice(2);

// Arrow Function
(nome => {
  console.log('Hello ' + nome + '!');
})(args[0] === undefined ? 'World' : args[0]);
