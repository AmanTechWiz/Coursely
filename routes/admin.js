const express = require("express");

const AdminRouter = express.Router();




UserRouter.post("/signup",(req,res)=>{
        res.json({
            message : "admin signup endpoint"
        })
    })

UserRouter.post("/signin",(req,res)=>{
        res.json({
            message : "admin signin endpoint"
        })
    })

UserRouter.post("/createcourse",(req,res)=>{
        res.json({
            message : "Creating course endpoint"
        })
    })

    UserRouter.put("/editcourse",(req,res)=>{
        res.json({
            message : "Editing course endpoint"
        })
    })
    
UserRouter.get("/courses",(req,res)=>{
        res.json({
            message : "Getting course endpoint"
        })
    })    


module.exports = {
    AdminRouter : AdminRouter
}