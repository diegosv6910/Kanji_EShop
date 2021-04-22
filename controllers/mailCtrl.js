var nodemailer = require('nodemailer'); // email sender function
var handlebars = require('handlebars');
var fs = require('fs-extra');
const app = express();
app.use(express.static(__dirname + '/public'));

var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};


exports.sendEmail = function (req, res, dataForm) {
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

    //Configure the HTML MAIL Template
    readHTMLFile(__dirname + '../public/register.html', function (err, html) {
        var template = handlebars.compile(html);
        var replacements = {
            username: dataForm[0]
        };
        var htmlToSend = template(replacements);
        var mailOptions = {
            from: process.env.EMAILWHOSEND,
            to: dataForm[2],
            subject: 'Register',
            html: htmlToSend
        }

        // Enviamos el email
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send(500, err.message);
            } else {
                console.log("Email sent");
                res.status(200).jsonp(req.body);
            }
        });
    });
};