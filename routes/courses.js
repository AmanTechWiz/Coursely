const express = require("express");


const CourseRouter = express.Router();
    
    
    CourseRouter.post("/purchase",(req,res)=>{
        res.json({
            message : "purchase endpoint"
        })
    })

    CourseRouter.get("/preview",(req,res)=>{
        res.json({
            message : "preview endpoint"
        })
    })


module.exports = {
    CourseRouter : CourseRouter
}