const mongoose = require("mongoose");

const FeaturesSchema = mongoose.Schema({
    name:{type:String}, 
    description:{type:String,require:true},
    img:{type:String}
});

const FeaturesModel = mongoose.Model('Features',FeaturesSchema);
module.exports = FeaturesModel;