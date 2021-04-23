// importamos las dependencias necesarias
var router = require('express').Router();


const {
  onloadBack
} = require("../controllers/data")


router.post('/registro', onloadBack)

// exportamos nuestro nuevo router
module.exports = router;