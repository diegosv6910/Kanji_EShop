// importamos las dependencias necesarias
var router = require('express').Router();

const{
    loadProductByID,
} = require("../controllers/productInfo")

router.get('/:idProducto', loadProductByID)

module.exports = router;