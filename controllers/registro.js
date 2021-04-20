//Registro.js
//Funciones para el registro de usuarios.
const sendEmail = require('./mailCtrl')
var sqlDetails = require('./mysql')
var mysql = require('mysql')

function guardarUsuario(req, res) {
    //Comprobar match passwords
    // res.sendFile(path.join(__dirname, "../public/product-list.html"))
    let dataForm = [req.body.Name, req.body.last_Name, req.body.Mail, req.body.Phone, req.body.password2]
    varQueryRegister = "INSERT INTO `bciw0ve1qvovsg6tfx0c`.`usuarios` (`nameUser`, `lastnameUser`, `mailUser`, `phoneUser`, `password`) VALUES ('"+ dataForm[0] +"', '"+ dataForm[1] +"', '"+ dataForm[2] +"', '"+ dataForm[3] +"', '"+ dataForm[4] +"'); "
    var con = mysql.createConnection(sqlDetails);
    con.query(varQueryRegister, function(error){
        if (error) throw error
    })
    // sendEmail.sendEmail(req, res, req.body.Mail);
    res.redirect('/v1')
    // res.sendFile(path.join(__dirname, "../public/index.html"))
}



module.exports = {
    guardarUsuario,
}