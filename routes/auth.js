// const express = require("express");
// const User = require("../models/User");
// const router = express.Router();

// router.post("/register", async (req, res) => {
//   const { username, email } = req.body;

//   try {
//     if (!username || !email) {
//       return res
//         .status(400)
//         .json({ message: "Username and email are required." });
//     }

//     const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;
//     if (!usernameRegex.test(username)) {
//       return res
//         .status(400)
//         .json({
//           message:
//             "Username must be 3-30 characters long and contain only letters, numbers, and underscores.",
//         });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ message: "Invalid email format." });
//     }

//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "Username already exists." });
//     }

//     const existingEmail = await User.findOne({ email });
//     if (existingEmail) {
//       return res.status(400).json({ message: "Email already exists." });
//     }

//     const newUser = new User({ username, email });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });

// router.post("/login", async (req, res) => {
//   const { username, email } = req.body;

//   try {
//     if (!username || !email) {
//       return res
//         .status(400)
//         .json({ message: "Username and email are required." });
//     }

//     const user = await User.findOne({ username, email });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid username or email." });
//     }

//     res.status(200).json({ message: "Login successful!" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });
// router.get('/register', async(req, res) => {
// const user = await User.find({ });
//   res.send(user);
  
// });

// module.exports = router;


// routes/auth.js
const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/register", authController.getAllUsers);

module.exports = router;




