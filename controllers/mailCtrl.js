var nodemailer = require('nodemailer'); // email sender function

exports.sendEmail = function(req, res, dataForm){
    // Definimos el transporter
        var transporter = nodemailer.createTransport({
            host: 'smtp.titan.email',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAILSEND,
                pass: process.env.PASSWORDMAIL
            }
        });
    // Definimos el email
    var mailOptions = {
        from: process.env.EMAILWHOSEND,
        to: dataForm[2],
        subject: 'Register',
        text: "Estimado "+ dataForm[0] + " " + dataForm[1] + ". Tu Registro Fue Exitoso. Tu correo de ingreso es: "+ dataForm[2] + ". "   
    };
    
    // Enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
            res.send(500, err.message);
        } else {
            console.log("Email sent");
            res.status(200).jsonp(req.body);
        }
    });
    };