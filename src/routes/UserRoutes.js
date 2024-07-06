const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../controllers/UserController');

// GET all users
router.get('/', getAllUsers);

// POST a new user
router.post('/', createUser);

module.exports = router;