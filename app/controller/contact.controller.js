const asyncHandler = require('express-async-handler');
const abc = require('../model/contact.model'); 
require('ejs');

const createContact = asyncHandler(async (req, res) => {
    // console.log("The request body is :", req.body);
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
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
       res.status(201).render('confirmation',{contact:contact});
  });



  const getAllContacts = async(req, res) =>{
    try {
       const contactList = await abc.find();
        res.json(contactList);
     } catch (error) {
         res.json(error);
     }
  }

  const getContactById = async(req, res) => {
    let id = req.params.id;  
    try {
       let getContact = await abc.findOne({"_id":id}); 
       res.status(200).json(getContact); 
     } catch (error) {
        res.status(404).json(error);
     }
  } 


  const getContactByName = async(req, res) => {
    let name = req.params.name; 
    try {
       let getContact = await abc.find({"name":name});  
       res.json(getContact); 
     } catch (error) {
        res.json(error);
     }
  } 


  const addContact = async(req, res) => {
    const {name, email, phone} = req.body;
    console.log(name, email, phone);
    if (!name || !email || !phone) {
      let res = await abc.create({
        name,
        email,
        phone
      });
      res.status(201).json(res);  
    }else{ 
      res.status(400).json({'message':'All fields are mandatory!'});
    }
  }

  module.exports = { createContact, getAllContacts, getContactById, getContactByName, addContact };