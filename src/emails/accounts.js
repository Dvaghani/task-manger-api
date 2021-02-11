const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email,name)=>{

    sgMail.send({
        from:'dkvaghani328@gmail.com',
        to:email,
        subject:'TaskManger app',
        text:`Welcome to the TaskManger App,${name}. contact on this email if you need any help `
    })
}
const sendDeleteEmail = (email,name)=>{
    sgMail.send({
        from:'dkvaghani328@gmail.com',
        to:email,
        subject:'TaskManger app',
        text:`Good Bye,${name}. Is there anything we can improve let us know bt replying to this email`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}