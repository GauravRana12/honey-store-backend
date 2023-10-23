const express=require('express');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const { Authenticate } = require('../Middlewares/Authentication');
const UserModel = require('../modals/User.model');
const cartModel = require('../modals/CartModel');

const CartRoute=express.Router();

CartRoute.get('/',Authenticate,async (req,res)=>{
     try {
        const id=req.userID;
        console.log(id)
        const user=await UserModel.find({_id:id});
        const data=await cartModel.find({authorID:id});
        res.send(data);
     } catch (error) {
        console.log(error);
     }
})

CartRoute.post('/',Authenticate,async (req,res)=>{
    const input=req.body;
        const id=req.userID;
        console.log(input)
        console.log(id)
      try {
        
        const new_obj={
            ...input,
            authorID:id
        }
        await cartModel.create(new_obj);
        res.send('Added successful');
      } catch (error) {
        console.log(error);
      }
})


CartRoute.patch('/:emp_id',Authenticate,async (req,res)=>{
    try {
        const {emp_id}=req.params.emp_id;
        const input=req.body;
        await cartModel.findByIdAndUpdate(emp_id,input);
        res.send("Patches successful");
    } catch (error) {
        console.log(error);
    }
})

CartRoute.delete('/:emp_id',Authenticate,async (req,res)=>{
    try {
        const {emp_id}=req.params.emp_id;
        await cartModel.findByIdAndDelete(emp_id);
        res.send('deleted successfully')
    } catch (error) {
        console.log(error);
    }
})

module.exports=CartRoute;