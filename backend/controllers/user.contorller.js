const User = require('../models/user.model');

// GET all users
exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

// CREATE user
exports.createUser = async (req, res) => {
    const { name, email } = req.body;

    const newUser = await User.create({ name, email });

    res.status(201).json(newUser);
};