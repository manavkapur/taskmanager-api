const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const  sendWelcomeEmail= (email,name)=>{
    sgMail.send({
        to : email,
        from: 'kapurmanav13@gmail.com',
        subject :'Thanks for joining in ',
        text : `Welcome  to the app, ${name}.Let me know how you get along with the app`
    })
}


const sendcancelEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from :'kapurmanav13@gmail.com',
        subject:'Thanks ',
        text: `Thanks for using our app ${name}`
        })
}

module.exports={
    sendWelcomeEmail,
    sendcancelEmail
}