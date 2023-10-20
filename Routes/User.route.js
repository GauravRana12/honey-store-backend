const express=require('express');
const bcrypt = require('bcrypt');

const jwt=require('jsonwebtoken');
const UserModel = require('../modals/User.model');
const UserRoute=express.Router();

UserRoute.post('/signup',async (req,res)=>{
    try {
        const {name,email,phone,password}=req.body;
        
        bcrypt.hash(password, 8,async function(err, hash) {
            // Store hash in your password DB.
            if(err){
                return res.send('Please enter all details');
            }
            else{
                await UserModel.create({name,email,phone,password:hash});
                console.log(hash);
                res.send('User registered successfully');
            }
        });
    } catch (error) {
        console.log(error);
    }
})

UserRoute.post('/login',async (req,res)=>{
    try {
        const {email,password}=req.body;
       let user=await UserModel.findOne({email});
       if(user){
        bcrypt.compare(password, user.password,async function(err, result) {
            if(err || !result){
               return res.send("please signup first");
            }
            else{
                const userObj={
                    userID:user._id
                }
                const token=jwt.sign(userObj,'secret');
                res.send(token)
            }
        });
        
       }
       else{
        res.send('Please signup first')
       }
    } catch (error) {
        console.log(error);
    }
})

module.exports=UserRoute;