//eventos con node

const EventEmitter = require('events');

const customEmitter = new EventEmitter()


//adeventListener es decir escuchar eventos
customEmitter.on('response', (data)=>{
    console.log(data)
})

customEmitter.emit('response','hello word')