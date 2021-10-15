const cron = require('node-cron');
const sendEmail = require('./emailcontroller/main');
const express = require('express')
const app = express();


cron.schedule('* * * * * * ', ()=>{
    const message ={
        from: 
        {
            //the name to apppear as the sender
            name: 'The Jitu',
            address: "martinmwangi1904@outlook.com"
        },
        to: 'wairimunjoroge132@gmail.com',
        subject: 'This is the email subject',
        text: 'Hello Team. Happy Learning'
    }

    try {
         sendEmail(message)
       console.log('Email sent');
        
    } catch (error) {
        console.log(error);
        console.log('Error, sending email. Try again')
        
    }

})

const PORT = 8000

app.listen(PORT, (req, res)=>{
    console.log(`App listens on port ${PORT}`);
})