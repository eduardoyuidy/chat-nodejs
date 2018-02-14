var args = process.argv.slice(2);

// IIFE (Immediately Invoked Function Expression)
// Arrow Function
// Default Parameter Values
// Template Literals
((nome='World') => {
  console.log(`Hello ${nome}!`);
})(args[0]);
