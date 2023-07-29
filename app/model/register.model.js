const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');

const registerSchema = mongo.Schema({
    name: {
        type : String,
        required : [true, "Please add your name"]
    },
    email: {
        type : String,
        required : [true, "please add your email address"]
    },

    password : {
        type : String,
        required : [true,"Please add your password"]
    }
},{timestamp:true});


module.exports = mongoose.model('Register',registerSchema);