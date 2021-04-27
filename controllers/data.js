var sqlDetails = require('./mysql')
var mysql = require('mysql')

function onloadBack(res) {
    var productItems = [

    ]
    var con = mysql.createConnection(sqlDetails)
    con.query("SELECT * FROM `" + process.env.BDNAME + "`.`productos`", function (err, result, fields) {
        if (err) throw err
        productItems.push(result)
        con.end();
        res.render('index', { arrayData: productItems })
    });
}

function onloadBackCart(res) {
    var productItems = [

    ]
    var con = mysql.createConnection(sqlDetails)
    con.query("SELECT * FROM `" + process.env.BDNAME + "`.`productos`", function (err, result, fields) {
        if (err) throw err
        productItems.push(result)
        con.end();
        res.render('cart', { arrayData: productItems })
    });
}

function onloadLogin(res) {
    res.render('login')
}

module.exports = {
    onloadBack,
    onloadBackCart,
    onloadLogin
}