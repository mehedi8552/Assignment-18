const mongoose = require("mongoose");

const CardSchama = new mongoose.Schema({
    productID:{ type:mongoose.Schema.type.ObjectID,require:true},
    userID:{type:mongoose.Schema.type.ObjectID,require:true},
    color:{type:String},
    price:{type:Number},
    qty:{type:Number},
    size:{type:String}
})

const CardModel = mongoose.model('cardes',CardSchama);

module.exports = CardModel;