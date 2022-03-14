const express    = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/",(req,res)=>{

    let nombre = req.body.nombre;
    let email = req.body.email;
    let asunto = req.body.asunto;
    let mensaje = req.body.mensaje;
    let contentHtml = `
        <h1>User information</h1>
            <ul>
            <li>nombre: ${nombre}</li>
            <li>asunto: ${asunto}</li>
            <li>email: ${email}</li>
            <li>mensaje: ${mensaje}</li>
            </ul>
    `;


    var transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false,
        port: 587,
        auth: {
            user: "ernesto_711@live.com.mx",
            pass: "busterswordpok02"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: "ernesto_711@live.com.mx",
        to: "ernesto_711@live.com.mx",
        subject: "Contacto desde Portafolio Web",
        html: contentHtml
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            console.log("Email Enviado");
            res.status(200).send("<h1>El email fue enviado</h1>");
        }
    });
});

app.listen(3000, ()=>{
    console.log("Server is on port 3000");
});