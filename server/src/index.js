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



http.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})

