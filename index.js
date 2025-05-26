const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { UserRouter } = require('./routes/users');
const { CourseRouter } = require('./routes/courses'); 
const { AdminRouter } = require('./routes/admin');
const app = express();

app.use(express.json());

app.use('/v1/users',UserRouter);
app.use('/v1/admin',AdminRouter);                                                                       
app.use('/v1/courses',CourseRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_DB);
   app.listen(3000);
   console.log('Server started');
}

main();
