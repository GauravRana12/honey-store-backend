const mongoose=require('mongoose');

const EmployeeSchema=mongoose.Schema({
    First_Name:{type:String,required:true},
    Last_Name:{type:String,required:true},
    Email:{type:String,required:true},
    Department:{type:String,required:true},
    Salary:{type:Number,required:true}
})

const EmployeeModel=mongoose.model('/employee',EmployeeSchema);
module.exports=EmployeeModel