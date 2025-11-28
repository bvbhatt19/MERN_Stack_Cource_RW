const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  otp: Number,
  role: {
    type: String,
    enum: ["superadmin", "admin", "user"],
    default: "user",
  },
});

module.exports = mongoose.model("User", AuthSchema);
