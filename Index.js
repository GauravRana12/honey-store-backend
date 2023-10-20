const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const connection=require('./config/db');
const UserRoute = require('./Routes/User.route');
const EmployeeRoute = require('./Routes/Employee.route');
const CartRoute = require('./Routes/CartRoute');

const app=express();
app.use(cors({
    origin : "*"
}))
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Welcome');
})
app.use('/user',UserRoute);
app.use('/product',EmployeeRoute);
app.use('/cart',CartRoute)


app.listen(process.env.PORT,async ()=>{
    try {
        await connection;
        console.log("server started");
    } catch (error) {
        console.log(error);
    }
})