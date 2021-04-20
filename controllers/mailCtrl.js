var nodemailer = require('nodemailer'); // email sender function

exports.sendEmail = function(req, res, mail){
    // Definimos el transporter
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'diegosv6910@gmail.com',
                pass: 'uijv1kow'
            }
        });
    // Definimos el email
    var mailOptions = {
        from: 'diegosv6910@gmail.com',
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