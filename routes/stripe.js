// importamos las dependencias necesarias
var router = require('express').Router();


const {
  Checkout
} = require("../controllers/stripe")


router.post('/create-checkout-session', Checkout)

// exportamos nuestro nuevo router
module.exports = router;