const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_DB);
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema({
    email : {type : String, unique : true},
    password : String,
    firstName : String,
    LastName : String
});

const AdminSchema = new Schema({
    email : {type : String, unique : true},
    password : String,
    firstName : String,
    LastName : String
});

const CourseSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imageUrl : String,
    creatorId : ObjectId

});

const PurchaseSchema = new Schema({
    userId : ObjectId,
    courseId : ObjectId
});

const usermodel = mongoose.model('user',UserSchema);
const adminmodel = mongoose.model('admin',AdminSchema);
const coursemodel = mongoose.model('course',CourseSchema);
const purchasemodel = mongoose.model('purchase',PurchaseSchema);

module.exports = {
    usermodel : usermodel,
    adminmodel : adminmodel,
    coursemodel : coursemodel,
    purchasemodel : purchasemodel
}
