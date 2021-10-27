const nodeMailer = require("nodemailer")

const smtpConfig = {
    service : 'gmail',
    auth: {
        user: "esmaelm885@gmail.com",
        pass: "asdf852@fghjk"
    }
}

const sendMail = () => {
    try {
        const transporter = nodeMailer.createTransport(smtpConfig)
        transporter.sendMail({
            from:"Mohamed Abdel-Samie",
            to: "mohamed.abdelsamie3009@gmail.com",
            subject: "Test",
            text : "Hello Mohamed"
        })
    }catch(err){
        console.log(err);
    }
}

////////////////////////////
sendMail()


module.exports = sendMail