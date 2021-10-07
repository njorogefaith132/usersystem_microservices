require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors')

const projects = require('./routes/projects');



// const User = require('./classes/user')

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cors())

app.use('/user/project' , projects)





const port =  5003
app.listen(port, ()=>{
    console.log(`The app is listening from port ${port}`)
})
