const express = require("express");
const bcrypt = require('bcrypt');
const AdminRouter = express.Router();
const { adminmodel } = require("../db");
require ('dotenv').config();
const JWT = require('jsonwebtoken');
const JWT_admin_pass = process.env.JWT_pass;

AdminRouter.post("/signup",async (req,res)=>{
        const { email,password,firstName,LastName } = req.body;
       const h_password = await bcrypt.hash(password,5);
       await adminmodel.create({
           email,
           password : h_password,
           firstName,
           LastName
       })
       res.json({
        message : "Sign up done!"
       })
    })

AdminRouter.post("/signin",async (req,res)=>{
        const { email,password } = req.body;
    const admin = await adminmodel.findOne({email});
    const passmatch = await bcrypt.compare(password,admin.password);

    if(passmatch){
        const token = JWT.sign({id: admin._id},JWT_admin_pass);
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

AdminRouter.post("/createcourse",(req,res)=>{
        res.json({
            message : "Creating course endpoint"
        })
    })

AdminRouter.put("/editcourse",(req,res)=>{
        res.json({
            message : "Editing course endpoint"
        })
    })
    
AdminRouter.get("/courses",(req,res)=>{
        res.json({
            message : "Getting course endpoint"
        })
    })    


module.exports = {
    AdminRouter : AdminRouter
}