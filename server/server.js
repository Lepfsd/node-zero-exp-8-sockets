const express = require('express');
//const socketIO = require('socket.io');
const http = require('http');


const path = require('path');

const app = express();
 
var server  = app.listen(3000);
module.exports.io = require('socket.io').listen(server);
require('./sockets/socket');



const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//io = comunicacion con backend 
//let io = socketIO(server);


/*app.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});*/