const mongoose = require("mongoose");

const categorySchma = mongoose.Schema({
    categoryName:{type:String},
    categoryImg:{type:String}
})

const CategoryModel = mongoose.Model('categorices',categorySchma);
module.exports = CategoryModel;