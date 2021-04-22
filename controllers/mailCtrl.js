var nodemailer = require('nodemailer'); // email sender function

exports.sendEmail = function(req, res, mail){
    // Definimos el transporter
        var transporter = nodemailer.createTransport({
            service: 'smtp.titan.email',
            auth: {
                user: process.env.EMAILSEND,
                pass: process.env.PASSWORDMAIL
            }
        });
    // Definimos el email
    var mailOptions = {
        from: process.env.EMAILWHOSEND,
        to: mail,
        subject: 'Test API SENDMAIL',
        text: 'Favor de responder de recibido.'
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