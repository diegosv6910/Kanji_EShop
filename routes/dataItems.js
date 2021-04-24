// importamos las dependencias necesarias
var router = require('express').Router();


const {
  onloadBack,
  onloadBackCart
} = require("../controllers/data")


router.post('/registro', onloadBack)
router.get('/cart', onloadBackCart)

// exportamos nuestro nuevo router
module.exports = router;