const jwt = require('jsonwebtoken');
const userModel = require('./models/user.models');
const blacklistTokenModel = require('./models/blacklistToken.model');

//middleware take 3 parameter
const jwtmiddleware = async(req, res, next) => {

    // first check request headers has authorization or not
    const authorization = req.headers.authorization 
    if(!authorization) return res.status(401).json({ error: 'Token Not Found' });

    // Extract the jwt token from the request headers
    const token =req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({ error: 'Unauthorized' });

    // Check if the token is blacklisted
    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if(isBlacklisted) return res.status(401).json({ error: 'Unauthorized' });

    
    try{
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        

        // Attach user information to the request object
        req.user = decoded //user is loction where attach
        next();
    }catch(err){
        console.error(err);
        res.status(401).json({ error: 'Invalid token' });
    }
}


// Function to generate JWT token
const generateToken = (userData) => {
    // Generate a new JWT token using user data
    return jwt.sign(userData, process.env.JWT_SECRET, {expiresIn: '24h'}); //userData is a parameter that take value from 'personRouteb.js' file
}

module.exports = {jwtmiddleware, generateToken};