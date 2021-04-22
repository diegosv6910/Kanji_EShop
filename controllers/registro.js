//Registro.js
//Funciones para el registro de usuarios.
const sendEmail = require('./mailCtrl')
var sqlDetails = require('./mysql')
var mysql = require('mysql')
var CryptoJS = require("crypto-js");

function guardarUsuario(req, res) {
    var con = mysql.createConnection(sqlDetails);
            let dataForm = [req.body.Name, req.body.last_Name, req.body.Mail, req.body.Phone, req.body.password2]
            var pwdEncrypt = CryptoJS.AES.encrypt(dataForm[4], process.env.SECRET_KEY).toString();
            res.redirect('/v1')
            var QueryRegister = "INSERT INTO `"+ process.env.BDNAME +"`.`usuarios` (`nameUser`, `lastnameUser`, `mailUser`, `phoneUser`, `password`) VALUES ('" + dataForm[0] + "', '" + dataForm[1] + "', '" + dataForm[2] + "', '" + dataForm[3] + "', '" + pwdEncrypt + "'); "
            con = mysql.createConnection(sqlDetails);
            con.query(QueryRegister, function (error) {
                if (error) throw error
                else sendEmail.sendEmail(req, res, dataForm)
            })
            
            con.end();
}

function checkMailRepeat(mail) {
    var checkMail = 0;
    var con = mysql.createConnection(sqlDetails);
    var querySelectMail = "SELECT FROM `bciw0ve1qvovsg6tfx0c`.`usuarios` where `mailUser` = '" + mail + "'"
    con.query(querySelectMail, function (error, result) {
        if (error) throw error
        if (result === 1) checkMail = 1
        return checkMail
    })
}



module.exports = {
    guardarUsuario,
    checkMailRepeat
}