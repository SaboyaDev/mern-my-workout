const express = require('express')

const { loginUser, signupUser } = require('../controllers/userController')

const userRouter = express.Router()

// User Login
userRouter.post('/login', loginUser)

// User Signup
userRouter.post('/signup', signupUser)

module.exports = userRouter
