const fs = require('fs');

/* 
//manipular archivos
const first = fs.readFileSync('./data/fist.txt', 'utf-8');
const second = fs.readFileSync('./data//second.txt');

console.log(first);

console.log(second.toString());


//crear archivos
fs.writeFileSync('./data/third.txt', 'Hello from Node.js',{flag: 'a'}); //flag: 'a' permite agregar texto al archivo sin sobreescribirlo

 */


//funciones async

fs.readFile('./src/data/third.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    }else{
    console.log(data);
    }
});