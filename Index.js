const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const connection=require('./config/db');
const UserRoute = require('./Routes/User.route');
const EmployeeRoute = require('./Routes/Employee.route');

const app=express();
app.use(cors({
    origin : "*"
}))
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Welcome');
})
app.use('/user',UserRoute);
app.use('/employee',EmployeeRoute);


app.listen(process.env.PORT,async ()=>{
    try {
        await connection;
        console.log("server started");
    } catch (error) {
        console.log(error);
    }
})