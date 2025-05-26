const JWT = require('jsonwebtoken');
require ('dotenv').config();

const JWT_pass = process.env.JWT_pass;

function usermiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = JWT.verify(token,JWT_pass);
    if(decoded){
        req.userId=decoded.id
        next();
    }else{
        res.json({
            message : "invalid token"
        })
    }
}

module.exports = { usermiddleware }