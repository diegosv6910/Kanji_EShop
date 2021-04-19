//Registro.js
//Funciones para el registro de usuarios.

function guardarUsuario(req,res){
    //Comprobar match passwords
    if(req.body.password1 !== req.body.password2){
        res.sendFile(path.join(__dirname, "../public/login.html"))
    }
    let dataForm = [req.body.Name, req.body.last_Name, req.body.Mail, req.body.Phone, req.body.password2]

    // res.redirect('/v1')
    // res.sendFile(path.join(__dirname, "../public/index.html"))
}


module.exports = {
    guardarUsuario
}