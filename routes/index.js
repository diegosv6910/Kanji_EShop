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
  onloadCheckout,
  onloadContact,
  onloadAccount,
  onloadProductDetail,
  onloadProductList,
  onloadWishlist,
  onloadPolicies
} = require("../controllers/data")

const{
  Checkout
} = require("../controllers/stripe")


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
router.get('/contact', (req, res) =>{
  onloadContact(res)
})
router.get('/account', (req, res) =>{
  onloadAccount(res)
})
router.get('/product-list', (req, res) =>{
  onloadProductList(res)
})
router.get('/wishlist', (req, res) =>{
  onloadWishlist(res)
})
router.get('/politicas', (req, res) =>{
  onloadPolicies(res)
})

router.use('/usuario', require('./usuarios'));

router.use('/stripe', require('./stripe'));

router.use('/product-detail', require('./productInfo'));

// exportamos nuestro nuevo route
module.exports = router;