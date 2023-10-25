const express=require('express');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const { Authenticate } = require('../Middlewares/Authentication');
const productModel = require('../modals/Employee.model');
const EmployeeRoute=express.Router();

EmployeeRoute.get('/',async (req,res)=>{
     try {
        const { page, limit, sort, order, category, search } = req.query;
        const query = {};

        if (category) {
            query.category = category;
        }

        // Add the search condition by title
        if (search) {
            query.title = new RegExp(search, 'i');
        }

        const options = {};

        if (sort === 'price') {
            options.sort = { price: order === 'asc' ? 1 : -1 };
        }

        if (page && limit) {
            options.skip = (page - 1) * limit;
            options.limit = parseInt(limit);
        }

        const data = await productModel.find(query, null, options);
        res.send(data);
        
     } catch (error) {
        console.log(error);
     }
})

EmployeeRoute.get('/single/:emp_id',async (req,res)=>{
    try {
        const {emp_id}=req.params;
        const data=await productModel.findOne({_id:emp_id});
       return res.send(data);
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