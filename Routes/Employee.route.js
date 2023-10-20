const express=require('express');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const { Authenticate } = require('../Middlewares/Authentication');
const productModel = require('../modals/Employee.model');
const EmployeeRoute=express.Router();

EmployeeRoute.get('/',async (req,res)=>{
     try {
        const {page,limit,sort,order,category}=req.query;
        if(order){
            if(order=="asc"){
                if(category){
                    const data=await productModel.find({category}).skip(page*limit-limit).limit(limit).sort({price:1});
                    return  res.send(data);
                }
                else{
                    const data=await productModel.find().skip(page*limit-limit).limit(limit).sort({price:1});
                    return  res.send(data);
                }
            }
            else{
                if(category){
                    const data=await productModel.find({category}).skip(page*limit-limit).limit(limit).sort({price:-1});
                    return  res.send(data);
                }
                else{
                    const data=await productModel.find().skip(page*limit-limit).limit(limit).sort({price:-1});
                    return  res.send(data);
                }
                
            }
        }
        
     } catch (error) {
        console.log(error);
     }
})

EmployeeRoute.post('/',Authenticate,async (req,res)=>{
      try {
        const input=req.body;
        await productModel.create(input);
        res.send('Added successful');
      } catch (error) {
        console.log(error);
      }
})


EmployeeRoute.patch('/:emp_id',Authenticate,async (req,res)=>{
    try {
        const {emp_id}=req.params.emp_id;
        const input=req.body;
        await productModel.findByIdAndUpdate(emp_id,input);
        res.send("Patches successful");
    } catch (error) {
        console.log(error);
    }
})

EmployeeRoute.delete('/:emp_id',Authenticate,async (req,res)=>{
    try {
        const {emp_id}=req.params.emp_id;
        await productModel.findByIdAndDelete(emp_id);
        res.send('deleted successfully')
    } catch (error) {
        console.log(error);
    }
})

module.exports=EmployeeRoute;