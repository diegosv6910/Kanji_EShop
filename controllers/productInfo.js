var sqlDetails = require('./mysql')
var mysql = require('mysql')

function loadProductByID(req, res) {
    var productItems = [

    ]
    var con = mysql.createConnection(sqlDetails)
    con.query("SELECT * FROM `" + process.env.BDNAME + "`.`productos` where idProducto = '"+ req.params.idProducto +"'", function (err, result, fields) {
        if (err) throw err
        productItems.push(result)
        con.end();
        res.render('product-detail', { arrayData: productItems })
    });
}

module.exports = {
    loadProductByID,
}