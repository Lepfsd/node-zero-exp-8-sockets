const { io } = require('../server');


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