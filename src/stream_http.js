const http = require('http');
const {createReadStream} = require('fs');


const server = http.createServer((req, res) => {
    const fileStrem = createReadStream('./src/data/bigFile.txt',{
        encoding: 'utf-8'
    });

    fileStrem.on('data', (chunk)=>{
        fileStrem.pipe(res)
    })


    fileStrem.on('error', (error)=>{
        console.log(error)
    })


})

server.listen(3000, () => {
    console.log('server is running')
})