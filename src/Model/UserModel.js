const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: Number }
  });
  const UserModel = mongoose.model('Useres', UserSchema);

  module.exports = UserModel;