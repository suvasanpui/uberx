const captainModel=require('../models/captain.models');

module.exports.createCaptain=async ({firstname,lastname,email,password,color,plate,capacity,vechileType}) => {
    if(!firstname || !email || !password || !color || !plate || !capacity || !vechileType){
        throw new Error("All field are require");
        
    }
    const Captain=captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vechile:{
            color,
            plate,
            capacity,
            vechileType,
        },
    })


    return Captain;
}