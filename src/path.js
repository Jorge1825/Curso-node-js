const path = require('path'); //para trabajar con archivos y directorios



console.log(path.join('/content', 'subfolder', 'test.txt')); //sirve para unir carpetas o archivos
console.log(path.basename('/content/subfolder/test.txt')); //sirve para ver el nombre del archivo
console.log(path.dirname('/content/subfolder/test.txt')); //sirve para ver el directorio del archivo
console.log(path.extname('/content/subfolder/test.txt')); //sirve para ver la extension del archivo
console.log(path.resolve(__dirname, 'content', 'subfolder', 'test.txt')); //sirve para ver la ruta absoluta del archivo 
console.log(path.parse('/content/subfolder/test.txt')); //sirve para ver la informacion del archivo 
