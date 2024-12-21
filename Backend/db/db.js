
const mongoose = require('mongoose');
const mongoDBURL=process.env.LOCAL_MONGO_URL;
mongoose.connect(mongoDBURL);

const db=mongoose.connection;

//add event listener
db.on("connected",()=>{
    console.log("DB connected");
});
db.on("disconnected",()=>{
    console.log("Connection break");
});
db.on("error",()=>{
    console.log("fail to connect",err);
});

module.exports=db;