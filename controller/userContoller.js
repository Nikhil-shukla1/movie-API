const asyncHandler = require('express-async-handler')
const bcrypt = require("bcryptjs");
const Users = require("../models/movieModels")

const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body;
    if (!username || !email || !password){
        res.status(400);
        throw new Error("All feilds is mandatory !")
    }
    const userAvailable = await Users.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error ("user is already registered!");
    }
    // create hashpassword 
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed password: ",hashedPassword);

    const u1 = await Users.create({
        username,
        email,
        password:hashedPassword,
    });
    console.log(`user created: ${u1}`);

    if(u1){
        res.status(201).json({ _id: u1.id, email: u1.email});
    }
    else{
        res.status(400);
        throw new Error("user data is not valid");
    }
    res.json({message:"register the user"});
});


const currentUser = asyncHandler(async(req,res)=>{
    res.json({message:"current user"})
});

const UserLogin = asyncHandler(async(req,res)=>{
    res.json({message:"current user"})
});


module.exports={registerUser,currentUser,UserLogin};