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

function onloadLogin(res) {
    res.render('login')
}

function onloadCheckout(res) {
    res.render('checkout')
}

function onloadContact(res){
    res.render('contact')
}

function onloadAccount(res){
    res.render('my-account')
}

function onloadPolicies(res){
    res.render('politicas')
}

function onloadProductDetail(res){
    res.render('product-detail')
}

function onloadProductList(res){
    var productItems = [

    ]
    var con = mysql.createConnection(sqlDetails)
    con.query("SELECT * FROM `" + process.env.BDNAME + "`.`productos`", function (err, result, fields) {
        if (err) throw err
        productItems.push(result)
        con.end();
        res.render('product-list', { arrayData: productItems })
    });
}

function onloadWishlist(res){
    res.render('wishlist')
}

module.exports = {
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
}