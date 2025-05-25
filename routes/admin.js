const express = require("express");

const AdminRouter = express.Router();

const { adminModel } = require("../db");


AdminRouter.post("/signup",(req,res)=>{
        res.json({
            message : "admin signup endpoint"
        })
    })

AdminRouter.post("/signin",(req,res)=>{
        res.json({
            message : "admin signin endpoint"
        })
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