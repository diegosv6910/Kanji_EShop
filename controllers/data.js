var sqlDetails = require('./mysql')
var mysql = require('mysql')


function onloadBack() {

    var con = mysql.createConnection(sqlDetails)
    con.query("SELECT * FROM `"+ process.env.BDNAME +"`.`productos`", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });

    var arrayItems = ["nombre", "descripcion", "precio", "caracteristica1", "caracteristica2", "caracteristica3", "categoria"];

    var productItems = [

    ]

    console.log(productItems)

    productItems.push(arrayItems)
    productItems.push(arrayItems)

    console.log(productItems)

}

module.exports = {
    onloadBack
}