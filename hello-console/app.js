var args = process.argv.slice(2);

function sayHello(nome) {
  console.log('Hello ' + nome + '!');
}

sayHello(args[0] === undefined ? 'World' : args[0]);
