const express = require('express')
const cors = require('cors')
const PORT = 4000

const app = express()
const http = require('http').Server(app)

app.use(cors())


app.get('/api', (req, res)=>{
    res.json({
        message: 'Hello world'
    })
})

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

socketIO.on('connection', (socket)=>{
    console.log(`⚡: ${socket.id} user just connected!`)
    
    socket.on('message', (data)=>{
        socketIO.emit('messageResponse', data)
    })

    socket.on('disconnect', ()=>{
        console.log('🔥: A user disconnected')
    })
})



http.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})

