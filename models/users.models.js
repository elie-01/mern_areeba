const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name: String,
    Address : String,
    Number: String
}, {timestamps: true})




module.exports = mongoose.model('users', UserSchema)
