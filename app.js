var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');
    path = require('path');

// Objeto global de la app
var app = express();

// Configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuramos express para que lea los archivos staticos de la carpeta public. (HTML, CSS, Scripts JS)
app.use(express.static(__dirname + '/public'));

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Interceptando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});