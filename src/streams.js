const {writeFile} = require('fs/promises');



//crear un archivo
 const createBigFile = async () => {
await writeFile('./src/data/bigFile.txt', 'hello world'.repeat(10000000))
}


createBigFile()


/* 
const {createReadStream} = require('fs')


const stream = createReadStream('./src/data/bigFile.txt', 'utf-8')


stream.on('data', (chunk)=>{
    console.log(chunk)
})

stream.on('end', ()=>{
    console.log('finished')
}
)


stream.on('error', (error)=>{
    console.log(error)
})
 */