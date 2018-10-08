const express = require('express');
//const socketIO = require('socket.io');
const http = require('http');


const path = require('path');

const app = express();
 
var server  = app.listen(3000);
var io      = require('socket.io').listen(server);

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido  a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        if(mensaje.usuario){
            callback({
                respuesta: 'todo salio bien'
            });
        } else {
            callback({
                respuesta: 'salio mal'
            });
        }
        
    });
});

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//io = comunicacion con backend 
//let io = socketIO(server);


/*app.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});*/