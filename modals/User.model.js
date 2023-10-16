const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    email : {type:String,required:true,unique:true},
    password:{type:String, required: true},
    confirm_pass:{type:String,required:true}
})

const UserModel=mongoose.model('signup',UserSchema);
module.exports=UserModel;