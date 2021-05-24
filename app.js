var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');
    path = require('path');

// Objeto global de la app
var app = express();

// Configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configuramos express para que lea los archivos staticos de la carpeta public. (HTML, CSS, Scripts JS)
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/lib'));
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'ejs');

//Configuracion MySQL
var sqlDetails = require('./controllers/mysql')
var mysql = require('mysql')
con = mysql.createConnection(sqlDetails);
con.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
con.end();

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
  var port = server.address().port;
  console.log('Escuchando en el puerto ' + server.address().port);
});