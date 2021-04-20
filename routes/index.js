// importamos las dependencias necesarias
var router = require('express').Router();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/lib'));

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.use('/usuario', require('./usuarios'));

// exportamos nuestro nuevo route
module.exports = router;