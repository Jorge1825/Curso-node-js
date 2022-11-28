const os = require('os') //modulo para trabajar con cosas del sistema operativo

console.log(os.platform()) //ver el sistema operativo
console.log(os.userInfo()) //ver la informacion del usuario
console.log(os.totalmem()) //ver la informacion de la memoria 
console.log(os.cpus()) //ver la informacion del procesador
console.log(os.freemem()) //ver la informacion de la memoria libre
console.log(os.release()) //ver la version del sistema operativo