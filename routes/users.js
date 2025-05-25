const express = require("express");

const UserRouter = express.Router();


UserRouter.post("/signup",(req,res)=>{
        res.json({
            message : "signup endpoint"
        })
    })

UserRouter.post("/signin",(req,res)=>{
        res.json({
            message : "signin endpoint"
        })
    })

UserRouter.get("/purchases",(req,res)=>{
        res.json({
            message : "user purchases endpoint"
        })
    })


module.exports = {
    UserRouter : UserRouter
}