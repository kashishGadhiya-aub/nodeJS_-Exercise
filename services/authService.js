const User = require("../models/User");

const registerUser = async (username, email) => {
  if (!username || !email) {
    throw new Error("Username and email are required.");
  }

  const usernameRegex = /^[a-zA-Z0-9_]{3,10}$/;
  if (!usernameRegex.test(username)) {
    throw new Error(
      "Username must be 3-10 characters long and contain only letters, numbers, and underscores."
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email");
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error("Username already exists.");
  }

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new Error("Email already exists.");
  }

  const newUser = new User({ username, email });
  await newUser.save();
  return "User registered successfully!";
};

const loginUser = async (username, email) => {
  if (!username || !email) {
    throw new Error("Username and email are required.");
  }

  const user = await User.findOne({ username, email });
  if (!user) {
    throw new Error("Invalid username or email.");
  }

  return "Login successful!";
};

const getAllUsers = async () => {
  return await User.find({});
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
};
