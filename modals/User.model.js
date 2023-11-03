const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name:{type:String,required:true },
    email : {type:String,required:true,unique:true},
    phone:{type:Number},
    password:{type:String, required: true},
})

const UserModel=mongoose.model('signup',UserSchema);
module.exports=UserModel;