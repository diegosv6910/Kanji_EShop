var sqlDetails = require('./mysql')
var mysql = require('mysql')


function onloadBack(res) {

    var con = mysql.createConnection(sqlDetails)
    var arrayDB = con.query("SELECT * FROM `"+ process.env.BDNAME +"`.`productos`", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        return result
      });

    var arrayItems = ["nombre", "descripcion", "precio", "caracteristica1", "caracteristica2", "caracteristica3", "categoria"];

    var productItems = [

    ]

    console.log(productItems)

    productItems.push(arrayDB)

    console.log(productItems)
    res.sendFile(path.join(__dirname, "../public/index.html"))
}

module.exports = {
    onloadBack,
    arrayDB
}