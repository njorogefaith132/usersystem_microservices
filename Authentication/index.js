require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors')

const user = require('./routes/user');

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cors())

app.use('/users',  user)


const port =  5001
app.listen(port, ()=>{
    console.log(`The app is listening from port ${port}`)
})
