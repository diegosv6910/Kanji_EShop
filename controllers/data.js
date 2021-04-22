var sqlDetails = require('./mysql')
var mysql = require('mysql')

function onloadBack(res) {

    var con = mysql.createConnection(sqlDetails)
    var arrayData = con.query("SELECT * FROM `"+ process.env.BDNAME +"`.`productos`", function (err, result, fields) {
        var productItems = [

        ]
        if (err) throw err;
        console.log(result);
        console.log(productItems);
        productItems.push(result);
        console.log(productItems)
        return productItems;
      });
    res.sendFile(path.join(__dirname, "../public/index.html"))
}

module.exports = {
    onloadBack,
}