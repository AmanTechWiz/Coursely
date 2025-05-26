const express = require("express");
const bcrypt = require('bcrypt');
require ('dotenv').config();
const UserRouter = express.Router();
const { usermodel } = require("../db");
const JWT = require('jsonwebtoken');
const JWT_pass = process.env.JWT_pass;


UserRouter.post("/signup",async (req,res)=>{
       const { email,password,firstName,LastName } = req.body;
       const h_password = await bcrypt.hash(password,5);
       await usermodel.create({
           email,
           password : h_password,
           firstName,
           LastName
       })

       res.json({
        message : "Sign up done!"
       })

    })

UserRouter.post("/signin",async (req,res)=>{
    const { email,password } = req.body;
    const user = await usermodel.findOne({email});
    const passmatch = await bcrypt.compare(password,user.password);

    if(passmatch){
        const token = JWT.sign({id: user._id},JWT_pass);
          res.json({
            message : "Sign in success",
            token:token
        })
    }else{
        res.json({
            message : "invalid credentials"
        })
    }
    })

UserRouter.get("/purchases",(req,res)=>{
        res.json({
            message : "user purchases endpoint"
        })
    })


module.exports = {
    UserRouter : UserRouter
}