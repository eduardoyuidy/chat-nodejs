var sayhello = require('./sayhello');
var args = process.argv.slice(2);

// Modules with RequireJS (CommonsJS)
sayhello(args[0]);
