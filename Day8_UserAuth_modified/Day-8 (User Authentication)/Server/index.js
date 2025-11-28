const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const app = express();
const User = require("./Models/Auth");
const Product = require("./Models/productModel");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Demo");

// Get all users (for superadmin UI)
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update user role
app.put("/api/users/update-role/:id", async (req, res) => {
  try {
    const { role } = req.body;
    if (!['superadmin','admin','user'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.role = role;
    await user.save();
    res.json({ message: 'Role updated successfully', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete user
app.delete("/api/users/delete/:id", async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Signup
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body.user;

  if (!name || !email || !password) {
    return res.json({ message: "All fields are required!" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({ message: "User already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  res.json({ message: "User Created!" });
});

// Login with role
app.post("/login", async (req, res) => {
  const sAdminEmail = "sadmin@gmail.com";
  const sAdminPassword = "sAdmin@123";

  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ message: "All fields are required!" });
  }

  // Super admin check
  if (email === sAdminEmail && password === sAdminPassword) {
    const superToken = await jwt.sign({ id: 1001 }, "demo@rnw", {
      expiresIn: "1h",
    });
    return res.json({ message: "Super Admin Logged In!", role: "superadmin", superToken });
  }

  const existingUser = await User.findOne({ email });
  if (!existingUser) return res.json({ message: "User does not exist!" });

  const comparedPass = await bcrypt.compare(password, existingUser.password);
  if (!comparedPass) return res.json({ message: "Email or Password incorrect!" });

  const token = await jwt.sign({ id: existingUser._id }, "demo@rnw", {
    expiresIn: "1h",
  });

  res.json({
    message: `Welcome ${existingUser.name}`,
    userName: existingUser.name,
    role: existingUser.role,
    token,
  });
});

// Forget password
app.post("/forget", async (req, res) => {
  const { forgetEmail } = req.body;

  const existingUser = await User.findOne({ email: forgetEmail });

  if (!existingUser) {
    res.json({ message: "User not exist !" });
  } else {
    const createNodeMailer = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "parthhadiyal4242@gmail.com",
        pass: "oholhywrpntuaeju",
      },
    });

    const otp = Math.floor(Math.random() * 1000000);

    createNodeMailer.sendMail({
      from: "parthhadiyal4242@gmail.com",
      to: forgetEmail,
      subject: "Reset Password OTP !",
      text: `Your OTP-(One Time Password) For Reset Password is ${otp}`,
    });

    existingUser.otp = otp;
    existingUser.save();

    let flag = false;
    if (existingUser.otp) flag = true;
    res.json({ message: "OTP Sent!", flag, forgetEmail });
  }
});

// OTP verify
app.post("/otpverify", async (req, res) => {
  const { otp, forgetEmail } = req.body;
  const existingUser = await User.findOne({ email: forgetEmail });

  let flag = null;
  if (existingUser && existingUser.otp == otp) {
    flag = true;
    res.json({ message: "You can change your password!", flag });
  } else {
    flag = false;
    res.json({ message: "Invalid OTP!", flag });
  }
});

// Reset password
app.post("/resetpassword", async (req, res) => {
  const { password, forgetEmail } = req.body;
  const existingUser = await User.findOne({ email: forgetEmail });

  let flag = null;
  if (existingUser) {
    const hashedPassword = await bcrypt.hash(password, 10);
    existingUser.password = hashedPassword;
    existingUser.save();
    flag = true;
    res.json({ message: "Password Updated!", flag });
  } else {
    flag = false;
    res.json({ message: "Invalid!", flag });
  }
});

// Super Admin fetch all users (alternative)
app.get("/superAdmin", async (req, res) => {
  const allUsers = await User.find();
  res.json({ message: "Users fetched!", allUsers });
});

// Add Product (Super Admin)
app.post("/api/products", async (req, res) => {
  try {
    const { name, details, price } = req.body;
    if (!name || !details || !price) {
      return res.status(400).json({ message: "All fields required!" });
    }
    const newProduct = new Product({ name, details, price });
    await newProduct.save();
    res.json({ message: "Product added successfully!", product: newProduct });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

console.log("Starting server on port 8080...");
app.listen(8080, () => console.log("Server running on port 8080"));
