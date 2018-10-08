var socket = io();

//escuchar
socket.on('connect', function(){
	console.log('conectado al servidor');
});

socket.on('disconnect', function(){
	console.log('perdimos conexion con el servidor');
});

//enviar info
socket.emit('enviarMensaje', {
	usuario: 'fernando',
	mensaje: 'hola mundo'
}, function(resp){
	console.log(resp);
});

//escuchar informacion

socket.on('enviarMensaje', function(mensaje){
	console.log(mensaje);
});