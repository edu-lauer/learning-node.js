const EventEmitter = require('events')

const customEmitt = new EventEmitter()


customEmitt.on('response', (name, id) => {
    console.log(`data recieved ${name} with id:${id}`)
})

customEmitt.on('response', () => {
    console.log('another random text')
})

customEmitt.emit('response', 'Edu', 23)