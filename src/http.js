const http = require('http');

const server = http.createServer((request,response)=>{

    console.log(request.url);

    if(request.url === "/"){
        response.write("Bienvenido al server");
        return response.end();
    }


    if(request.url === "/about"){
        response.write("Acerca de");
        return response.end();
    }

    response.write(`
    <h1>Not Found</h1>
    <p>Esta pagina no se ha encontrado</p>
    <a href="/">Volver a la pagina principal</a>
    `);
    response.end();

    
})



server.listen(3000);

console.log('Server running at http://localhost:3000');