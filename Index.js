const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const connection=require('./config/db');
const UserRoute = require('./Routes/User.route');
const EmployeeRoute = require('./Routes/Employee.route');
const CartRoute = require('./Routes/CartRoute');
const passport=require('./config/google.oauth')
const app=express();
app.use(cors({
    origin : ["http://localhost:3000","https://letitbee-q33svjs7y-gauravrana12.vercel.app"],
    credentials: true
}))
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Welcome');
})
app.use('/user',UserRoute);
app.use('/product',EmployeeRoute);
app.use('/cart',CartRoute)
app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  
app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login",
      session: false,
    }),
  
    function (req, res) {
      const token = req.token;
      res.cookie("token", token, {
        httpOnly: false,
        sameSite: "lax",
      });
      res.redirect(`https://letitbee-q33svjs7y-gauravrana12.vercel.app`);
    }
  );

app.listen(process.env.PORT,async ()=>{
    try {
        await connection;
        console.log("server started");
    } catch (error) {
        console.log(error);
    }
})