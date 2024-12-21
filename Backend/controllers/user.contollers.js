const userModel = require("../models/user.models");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const { jwtmiddleware, generateToken } = require("../jwt");

//new user registration
module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { fullname, email, password } = req.body;

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password,
  });

  const jwtPayload = {
    id: user.id,
  };
  console.log(JSON.stringify(jwtPayload));
  const token = generateToken(jwtPayload);
  console.log("token", token);

  res.status(200).json({ user, token });
};

//user login
module.exports.loginUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;

  const user = await userModel.findOne({ email: email });
  if (!user) {
    return res.status(403).json({ error: "user not Invalid Username and Password" });
  }
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ error: "Invalid Username and Password" });
  }

  //generate token
  const userPayload = {
    id: user.id,
    email: user.email,
  };
  const token = generateToken(userPayload);
  res.status(200).json({ message: "login successfully", user, token });
};
