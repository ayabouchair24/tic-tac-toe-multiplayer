const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors:{
        origin:"http://localhost:8082",
        methods:["GET","POST"]
    }
});
io.on("connection", (socket)=> {
    socket.emit("hello", "Ayaaaaa");
    socket.on("play", index =>{
        console.log("server recieved", index)
        socket.broadcast.emit("play", index)
    })
})

server.listen(3000)