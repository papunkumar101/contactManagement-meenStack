const asyncHandler = require('express-async-handler');
const abc = require('../model/contact.model'); 
require('ejs');

const createContact = asyncHandler(async (req, res) => {
    // console.log("The request body is :", req.body);
        const { name, email, phone } = req.body;
        if (!name || !email) {
          res.status(400);
          throw new Error("All fields are mandatory !");
        }
        const contact = await abc.create({
          name,
          email,
          phone
        });
        // const contact = await dbConn.collection("contact").insertOne({ name, email, phone });
      
       // res.status(201).json({message:"cntact saved!!"});
       console.log(contact);
       res.status(201).render('confirmation',{contact:contact});
  });


  module.exports = { createContact };