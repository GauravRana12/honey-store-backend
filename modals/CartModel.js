const mongoose=require('mongoose');

const cartSchema=mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    Rating:{type:Number,required:true},
    authorID:{type:String,required:true}
})

const cartModel=mongoose.model('cart',cartSchema);
module.exports=cartModel;