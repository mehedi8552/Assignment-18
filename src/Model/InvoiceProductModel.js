const mongoose = require("mongoose");

const InvoiceProductSchema = mongoose.Schema({
    userID:{type:mongoose.Schema.type.ObjectID,require:true},
    productID:{type:mongoose.Schema.type.ObjectID,require:true},
    invoiceID:{type:mongoose.Schema.type.ObjectID,require:true},
    qty:{type:Number},
    price:{type:Number},
    color:{type:String},
    size:{type:String}
})

const InvoiceProductModel = mongoose.Model('InvoiceProductes',InvoiceProductSchema);
module.exports= InvoiceProductModel;