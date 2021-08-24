require("dotenv").config()

const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

function sendMail(params){

    console.log(params)
    let mailOptions = {
        from: process.env.EMAIL,
        to: params.mail,
        subject: "Consulta",
        text: "Muchas gracias por comunicarte con SUD, en breve estaremos comunicandonos contigo"
    }

    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            console.log("Error occurs: ", err)
        } else {
            console.log("Success")
        }
    })
}

export default sendMail;