const express = require("express");
const route = express.Router();
const {body}=require('express-validator');
const userController=require('../controllers/user.contollers')
const {jwtmiddleware, generateToken} = require('../jwt')

route.post('/signup',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage("First name should be atleast 3 character"),
    body('password').isLength({min:6}).withMessage("password should be atleast 5 character")
],userController.registerUser)

route.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage("password should be atleast 5 character")
],userController.loginUser)

route.get('/profile',jwtmiddleware,userController.userProfile)


module.exports = route;