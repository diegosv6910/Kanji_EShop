// importamos las dependencias necesarias
var router = require('express').Router();

const{
    onloadBackCart,
    loadCartById
} = require("../controllers/data")

router.get('/', (req, res)=>{
    onloadBackCart(res)
});

router.get('/:idProducto', loadCartById)

module.exports = router;
