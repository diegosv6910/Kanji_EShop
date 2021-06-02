// importamos las dependencias necesarias
var router = require('express').Router();

const{
    loadProductByID,
    loadProductsByName,
} = require("../controllers/productInfo")

router.get('/:idProducto', loadProductByID)

router.get('/filterName/:nameToSearch', loadProductsByName)

module.exports = router;