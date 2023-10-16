const express=require('express');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const { Authenticate } = require('../Middlewares/Authentication');
const EmployeeModel = require('../modals/Employee.model');
const EmployeeRoute=express.Router();

EmployeeRoute.get('/',Authenticate,async (req,res)=>{
     try {
        const data=await EmployeeModel.find({}).limit(5);
        res.send(data);
     } catch (error) {
        console.log(error);
     }
})

EmployeeRoute.post('/',Authenticate,async (req,res)=>{
      try {
        const input=req.body;
        await EmployeeModel.create(input);
        res.send('Added successful');
      } catch (error) {
        console.log(error);
      }
})


EmployeeRoute.patch('/:emp_id',Authenticate,async (req,res)=>{
    try {
        const {emp_id}=req.params.emp_id;
        const input=req.body;
        await EmployeeModel.findByIdAndUpdate(emp_id,input);
        res.send("Patches successful");
    } catch (error) {
        console.log(error);
    }
})

EmployeeRoute.delete('/:emp_id',Authenticate,async (req,res)=>{
    try {
        const {emp_id}=req.params.emp_id;
        await EmployeeModel.findByIdAndDelete(emp_id);
        res.send('deleted successfully')
    } catch (error) {
        console.log(error);
    }
})

module.exports=EmployeeRoute;