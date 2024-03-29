let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('user connected')
    socket.on('disconnect', () => {
        console.log('user disconected')
    })
    socket.on('chat message', (message) => {
        console.log(message)
        io.emit('chat message', message)
    })
})


http.listen(3000,() => {
    console.log('Server is running on port 3000')
})

