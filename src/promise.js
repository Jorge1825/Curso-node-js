const { readFile } = require("fs");
const {promisify} = require('util')


//forma dificil de promesas
/* function obtenerTexto(rutaArchivo) {
  return new Promise((resolve, reject) => {
    readFile(rutaArchivo, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
}

//opcion 1

//obtenerTexto('./src/data/fist.txt').then((result)=> console.log(result)).catch(error => console.log(error))
 

//opcion 2 async await

async function read() {
  try {
    //throw new Error("error inesperado") //ejemplo de errores manuales 
    const result = await obtenerTexto("./src/data/fist.txt");
    const result2 = await obtenerTexto("./src/data/second.txt");
    console.log(result);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

read();
 */







//forma facil de promesas con node

const readFilePromise = promisify(readFile);


async function read() {
    try {
      //throw new Error("error inesperado") //ejemplo de errores manuales 
      const result = await readFilePromise("./src/data/fist.txt", 'utf-8');
      const result2 = await readFilePromise("./src/data/second.txt",'utf-8');
      console.log(result);
      console.log(result2);
    } catch (error) {
      console.log(error);
    }
  }

  read()