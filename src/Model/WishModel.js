const mongoose = require("mongoose");

const WishSchema = new mongoose.Schema({
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true }
  });
  const WishModel = mongoose.model('Wishes', WishSchema);
  module.exports = WishModel;