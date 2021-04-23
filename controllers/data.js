var sqlDetails = require('./mysql')
var mysql = require('mysql')
var change = require('../public/js/filldata');
const { query } = require('express');

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

    // change.changeRecent("Hola desde Module");
    // res.render(path.join(__dirname, "../public/index.ejs"))
}

module.exports = {
    onloadBack,
    query
}