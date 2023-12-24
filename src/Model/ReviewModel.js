const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    des: { type: String },
    rating: { type: Number }
  });
  const ReviewModel = mongoose.model('Reviewes', ReviewSchema);

  module.exports = ReviewModel;