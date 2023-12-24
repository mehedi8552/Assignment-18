const mongoose = require("mongoose");

const InvoiveSchema = mongoose.Schema({
    userID:{type:mongoose.Schema.type.ObjectID,require:true},
    payable:{type:Number,require:true}, 
    cus_details:{type:Number},
    ship_details:{type:Number},
    tran_id:{type:String},
    val_id:{type:String},
    payment_status:{type:String},
    delivery_status:{type:String},
    total:{type:Number},
    vat:{type:Number}
})

const InvoiveModel = mongoose.Model('Invoives',InvoiveSchema);
module.exports = InvoiveModel;