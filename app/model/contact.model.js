const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');

const contactSchema = mongo.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add the contact name"],
          },
          email: {
            type: String,
            required: [true, "Please add the contact email address"],
          },
          phone: {
            type: Number,
            required: [true, "Please add the contact phone number"],
          },
        },
        {
          timestamps: true,
        } 
);

module.exports = mongoose.model('Contact',contactSchema); // here Contact will create your db with contacts