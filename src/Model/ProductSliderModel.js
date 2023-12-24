const mongoose = require("mongoose");

const ProductSliderSchema = new mongoose.Schema({
    title: { type: String },
    des: { type: String },
    price: { type: Number },
    img: { type: String },
    productID: { type: mongoose.Schema.Types.ObjectId, required: true }
  });
  const ProductSliderModel = mongoose.model('ProductSlideres', ProductSliderSchema);
  module.exports = ProductSliderModel;