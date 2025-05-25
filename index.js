const express = require('express');
const { UserRouter } = require('./routes/users');
const { CourseRouter } = require('./routes/courses'); 
const { AdminRouter } = require('./routes/admin');
const app = express();

app.use('/v1/users',UserRouter);
app.use('/v1/admin',AdminRouter);
app.use('/v1/courses',CourseRouter);

app.listen(3000,()=>{
    console.log("Server Started");
})