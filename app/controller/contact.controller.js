const asyncHandler = require('express-async-handler');
const Contact = require('../model/contact.model');

// const createContact = asyncHandler(async (req, res) => {
//     console.log("The request body is :", req.body);
//     const { name, email, phone } = req.body;
//     if (!name || !email) {
//       res.status(400);
//       throw new Error("All fields are mandatory !");
//     }
//     const contact = await Contact.create({
//       name,
//       email,
//       phone
//     });
  
//     res.status(201).json(contact);
//   });

const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
        const { name, email, phone } = req.body;
        if (!name || !email) {
          res.status(400);
          throw new Error("All fields are mandatory !");
        }
        const contact = await Contact.insertOne({
          name,
          email,
          phone
        });
      
        res.status(201).json(contact);
  });


  module.exports = { createContact };