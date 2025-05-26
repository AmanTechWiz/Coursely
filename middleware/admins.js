const JWT = require('jsonwebtoken');
require ('dotenv').config();

const JWT_admin_pass = process.env.JWT_admin_pass;

function adminmiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = JWT.verify(token,JWT_admin_pass);
    if(decoded){
        req.adminId=decoded.id
        next();
    }else{
        res.json({
            message : "invalid token"
        })
    }
}

module.exports = { adminmiddleware }