//importar contenido de un modulo
const {myNumber} = require("./modules/myModule.js");

console.log(myNumber);


const math = require('./math/index.js');

console.log(math.add(1,2));