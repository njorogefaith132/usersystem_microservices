require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors')

const projects = require('./routes/projects');
const tasks = require('./routes/task');



// const User = require('./classes/user')

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cors())

app.use('/user/projects' , projects)
app.use('/project/task' , tasks)



const port =  5002
app.listen(port, ()=>{
    console.log(`The app is listening from port ${port}`)
})
