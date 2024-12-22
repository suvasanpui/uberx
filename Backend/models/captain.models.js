const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const captainSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            require:true,
            minlength:[3,'First name should be atleast 3 character']
        },
        lastname:{
            type:String,
            minlength:[3,'Last name should be atleast 3 character']
        }
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true,
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['online','offline'],
        default:'offline'
    },
    vechile:{
        color:{
            type:String,
            require:true,
            minlength:[3,'color should be atleast 3 character']
        },
        plate:{
            type:String,
            require:true,
            minlength:[3,'plate should be atleast 3 character']
        },
        capacity:{
            type:Number,
            require:true,
            minlength:[1,'capacity should be atleast 1 character']
        },
        vechileType:{
            type:String,
            require:true,
            enum:['car','bike','cycle']
        },
    },
    location:{
        latitude:{
            type:Number,
        },
        longitude:{
            type:Number,
        }
    }
});

captainSchema.pre('save',async function(next) {
    const user=this;
    if(!user.isModified('password'))
        return next();

    try{
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(user.password,salt);
        user.password=hashPassword;

        next();
    }catch(err){
        return next(err);
    }
})


captainSchema.methods.comparePassword=async function(candidatePassword) {
    try{
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}

const Captain=mongoose.model("Captain",captainSchema); //persson is a collection name
module.exports=Captain;