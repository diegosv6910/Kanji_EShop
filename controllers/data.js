var sqlDetails = require('./mysql')
var mysql = require('mysql')


function onloadBack(res) {

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
    res.sendFile(path.join(__dirname, "../public/index.html"))
}

module.exports = {
    onloadBack
}