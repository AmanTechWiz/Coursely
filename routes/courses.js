const express = require("express");
const { usermiddleware } = require("../middleware/users");
const { purchasemodel, coursemodel } = require("../db");


const CourseRouter = express.Router();
    
    
    CourseRouter.post("/purchase",usermiddleware,async (req,res)=>{
        const userId = req.userId;
        const { courseId } = req.body;

        await purchasemodel.create({
            userId,courseId
        })

        res.json({
            message: "Course purchased successfully"
        })
    })

    CourseRouter.get("/preview",async(req,res)=>{
        const courses = await coursemodel.find({});
        
        res.json({
            courses
        })
    })


module.exports = {
    CourseRouter : CourseRouter
}