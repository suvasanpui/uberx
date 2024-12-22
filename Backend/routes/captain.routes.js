const express = require("express");
const route = express.Router();
const {body}=require('express-validator');
const captainController=require('../controllers/captain.controllers')
const {jwtmiddleware, generateToken} = require('../jwt')

route.post('/signup',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage("First name should be atleast 3 character"),
    body('password').isLength({min:6}).withMessage("password should be atleast 5 character"),
    body('vechile.color').isLength({min:3}).withMessage("color should be atleast 3 character"),
    body('vechile.plate').isLength({min:3}).withMessage("plate should be atleast 3 character"),
    body('vechile.capacity').isLength({min:1}).withMessage("capacity should be atleast 1 character"),
    body('vechile.vechileType').isIn(['car','bike','cycle']).withMessage("vechileType should be car or bike or cycle")
],captainController.registerCaptain)

route.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage("password should be atleast 5 character"),
],captainController.loginCaptain)

route.get('/profile',jwtmiddleware,captainController.captainProfile)

route.post('/logout',jwtmiddleware,captainController.logoutCaptain)

module.exports = route;

