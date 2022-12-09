const http = require('http')

const server = http.createServer((request, response) => {

    if (request.url === '/') {
        response.write('Welcome to the server')
        return response.end()
    }
    if (request.url === '/about') {


        //blocking code 
        for(let i =0;i<10000000;i++){
            console.log(Math.random()*i)
        }



        return response.end('About page')
    }

    response.end("Not found")
})


server.listen(3000)
console.log("server on port 3000")