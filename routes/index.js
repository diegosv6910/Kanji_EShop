// importamos las dependencias necesarias
var router = require('express').Router();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/lib'));

const {
  onloadBack,
  onloadBackCart,
  onloadLogin,
  onloadCheckout
} = require("../controllers/data")


// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  onloadBack(res)
});

router.get('/cart', (req, res)=>{
  onloadBackCart(res)
});

router.get('/login', (req, res) =>{
  onloadLogin(res)
})

router.get('/checkout', (req, res) =>{
  onloadCheckout(res)
})


router.use('/usuario', require('./usuarios'));

// exportamos nuestro nuevo route
module.exports = router;