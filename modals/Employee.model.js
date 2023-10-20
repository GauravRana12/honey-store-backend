const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    Rating:{type:Number,required:true}
})

const productModel=mongoose.model('/product',ProductSchema);
module.exports=productModel