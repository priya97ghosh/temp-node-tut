// Modules
//CommonJS, every file is module(by default)
// Modules - Encapsulated Code(only share minimum)

const name = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-alter-flav");
require("./7-mind-graned");
console.log(name);
console.log(sayHi);
console.log(data);

sayHi("susan");
sayHi(name.john);
sayHi(name.peter);
