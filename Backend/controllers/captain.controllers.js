const captainModel = require("../models/captain.models");
const { validationResult } = require("express-validator");
const { jwtmiddleware, generateToken } = require("../jwt");
const captainService = require("../services/captain.service");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { fullname, email, password, vechile } = req.body;

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password,
    color: vechile.color,
    plate: vechile.plate,
    capacity: vechile.capacity,
    vechileType: vechile.vechileType,
  });

  const jwtPayload = {
    id: captain.id,
    email: captain.email,
  };

  const token = generateToken(jwtPayload);

  res.status(200).json({ captain, token });
};

module.exports.loginCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email: email });

  if (!captain) {
    return res.status(403).json({ error: "Invalid Email and Password" });
  }
  if (!captain || !(await captain.comparePassword(password))) {
    return res.status(401).json({ error: "Invalid Username and Password" });
  }

  //generate token
  const userPayload = {
    id: captain.id,
    email: captain.email,
  };
  const token = generateToken(userPayload);
  res.status(200).json({ message: "login successfully", captain, token });
};

module.exports.captainProfile = async (req, res, next) => {
    const captainId=req.user.id
  const captain = await captainModel.findById(captainId);
  res.status(200).json(captain);
};

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    await blacklistTokenModel.create({ token: token });
    res.status(200).json({ message: "logout successfully" });
}