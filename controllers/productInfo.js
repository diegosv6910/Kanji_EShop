var sqlDetails = require('./mysql')
var mysql = require('mysql')
const onloadBack = require('./data')

function loadProductByID(req, res) {
    var productItems = [

    ];
    var productsToFill = [

    ];
    var con = mysql.createConnection(sqlDetails)
    con.query("SELECT * FROM `" + process.env.BDNAME + "`.`productos` where idProducto = '"+ req.params.idProducto +"'", function (err, result, fields) {
        if (err) throw err
        productItems.push(result)  
        // res.render('product-detail', { arrayData: productItems })
    });
    con.query("SELECT * FROM `" + process.env.BDNAME + "`.`productos`", function (err, result, fields) {
        if (err) throw err
        productsToFill.push(result)
        con.end();
        res.render('product-detail', { arrayData: productItems, arrayToFill: productsToFill })
    });
}

function loadProductsByName(req, res){
    console.log("Llegando hasta aqui")
    var productItems = [

    ];
    var con = mysql.createConnection(sqlDetails)
    con.query("SELECT * FROM `" + process.env.BDNAME + "`.`productos` where nombreProducto like  '%"+req.params.nameToSearch+"%'", function (err, result, fields) {
        if (err) throw err
        productItems.push(result)  
        res.render('product-list', { arrayData: productItems })
    });

}

module.exports = {
    loadProductByID,
    loadProductsByName,
}