const mongoose = require("mongoose");


const BrandSchema = new mongoose.Schema({
    BrandName:{type:String,require:true},
    BrandImg:{type:String}
});

const BrandModel = mongoose.model('brands',BrandSchema)

module.exports = BrandModel;
