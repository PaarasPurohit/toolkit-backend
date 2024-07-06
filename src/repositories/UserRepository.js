const User = require('../models/UserModel');

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const getUserById = async (id) => {
    return await User.findById(id);
};

const getAllUsers = async () => {
    return await User.find();
};

const updateUser = async (id, updateData) => {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = { createUser, getUserById, getAllUsers, updateUser, deleteUser };
