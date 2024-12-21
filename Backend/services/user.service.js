const userModel=require('../models/user.models')

module.exports.createUser=async ({firstname,lastname,email,password}) => {
    if(!firstname || !email || !password){
        throw new Error("All field are require");
        
    }
    const User=userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        
    })


    return User;
}

