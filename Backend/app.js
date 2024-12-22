//is used to load environment variables from a .env file
const env=require('dotenv');
env.config();

//cors middleware is applied to allow cross-origin requests, making your server accessible to clients from different domains.
const cors=require('cors');

const express = require('express')
const app = express()
const userRoutes=require('./routes/user.routes')
const captainRoutes=require('./routes/captain.routes')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const db = require("./db/db");



app.get('/', function (req, res) {
  res.send('Welcome to UBER')
})

app.use('/users',userRoutes)
app.use('/captains',captainRoutes)

module.exports=app;