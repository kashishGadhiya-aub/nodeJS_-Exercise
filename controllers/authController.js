const authService = require("../services/authService");

const register = async (req, res) => {
  const { username, email } = req.body;

  try {
    const message = await authService.registerUser(username, email);
    res.status(201).json({ message });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { username, email } = req.body;

  try {
    const message = await authService.loginUser(username, email);
    res.status(200).json({ message });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await authService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
};
