const mongoose = require("mongoose");

const ProductDetailsSchema = mongoose.Schema({
    img1:{type:String},
    img2:{type:String},
    img3:{type:String}, 
    img4:{type:String}, 
    des:{type:String,require:true}, 
    color:{type:String},
    size:{type:String}, 
    productID:{type:mongoose.Schema.type.ObjectID}
})

const ProductDetailsModel = mongoose.model('productdetailes',ProductDetailsSchema)

module.exports= ProductDetailsModel;