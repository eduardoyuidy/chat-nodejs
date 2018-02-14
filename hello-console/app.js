var args = process.argv.slice(2);

// IIFE (Immediately Invoked Function Expression)
(function sayHello(nome) {
  console.log('Hello ' + nome + '!');
})(args[0] === undefined ? 'World' : args[0]);
