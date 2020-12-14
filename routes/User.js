const express = require('express');
const router = express.Router();
const { registerUser,loginUser,logoutUser } = require('../controller/User/user')
const AuthMW = require('../middleware/AuthMW')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/logout',AuthMW,logoutUser)

module.exports = router;