const express = require("express");
const bcrypt = require('bcrypt');
const AdminRouter = express.Router();
const { adminmodel } = require("../db");
require ('dotenv').config();
const JWT = require('jsonwebtoken');
const { adminmiddleware } = require("../middleware/admins");
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

AdminRouter.post("/createcourse",adminmiddleware,async(req,res)=>{
    const adminId = req.adminId;
    const { title,description,price,imageUrl } = req.body;
    const course = await coursemodel.create({
            title,
            description,
            price,
            imageUrl,
            creatorId : adminId
        })
// a course in mongo will be => _id = new ObjectId(...), rest stuff!


        res.json({
            meessage :'course created',
            course : title,
            courseId : course._id
        })
    });

AdminRouter.put("/editcourse",adminmiddleware,async(req,res)=>{
        const adminId = req.adminId;
        const { title,description,price,imageUrl,courseId } = req.body;

        //coursId check :
        const course = await coursemodel.updateOne(
            { _id : courseId, creatorId : adminId },       //courseid check
            {
                title,
                description,
                price,
                imageUrl
            }
        )
        res.json({
            message : "course edited",
            course_id : course._id
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