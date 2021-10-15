const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport(
    {
        service: 'hotmail',
        auth: {
            user: 'martinmwangi1904@outlook.com',
            pass: 'outlook@1904???'
        }
    }
)

const sendEmail = async (message) =>{
    return new Promise((resolve, reject)=>{
        transport.sendMail(message, (err, info) =>{
            if(err){
                return reject(err)
            }
            resolve(info.response)
        })
    }) 
}

module.exports = sendEmail