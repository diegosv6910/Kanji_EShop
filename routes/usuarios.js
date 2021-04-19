// importamos las dependencias necesarias
var router = require('express').Router();


const {
  guardarUsuario
} = require("../controllers/registro")


router.post('/registro', guardarUsuario)

// exportamos nuestro nuevo router
module.exports = router;