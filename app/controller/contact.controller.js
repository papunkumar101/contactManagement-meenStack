const asyncHandler = require('express-async-handler');
const abc = require('../model/contact.model'); 
require('ejs');

const createContact = asyncHandler(async (req, res) => { 
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
       
     return  res.status(201).render('confirmation',{contact:contact});
  });



  const getAllContacts = async(req, res) =>{
    try {
       const contactList = await abc.find();
        return res.status(200).json(contactList);
     } catch (error) {
        return res.status(400).json(error);
     }
  }

  const getContactById = async(req, res) => {
    let id = req.params.id;   
    try {
       let getContact = await abc.findOne({"_id":id}); 
       return res.status(200).json(getContact); 
     } catch (error) {
        return res.status(404).json(error);
     }
  } 


  const getContactByName = async(req, res) => {
    let name = req.params.name; 
    try {
       let getContact = await abc.find({ name: {$regex: '.*' + name + '.*', $options: 'i'} });  
       return res.status(200).json(getContact); 
     } catch (error) {
        return res.status(400).json(error);
     }
  } 


  const addContact = async(req, res) => { 
    const {name, email, phone} = req.body; 
    if (!name || !email || !phone) {
      return res.status(400).json({'message':'All fields are mandatory!'});
    }
    try { 
      let uniqueEmail = await abc.find({'email':email}); 
      if(uniqueEmail.length > 0){
        return res.status(400).json({'message':'Email Already Exist !'});
      } 
      let response = await abc.create({
        name,
        email,
        phone
      });
      return res.status(201).json(response); 
    } catch (error) { 
      return  res.status(400).json(error.message);
    }    
  }

  const updateContact = async(req, res) => {
       let id = req.params.id;
       let updateData = req.body; 
      try {  
        const resData = await abc.find({"_id":id});
        if(resData.length == 0){
          return res.status(400).json({'message': 'can not find user!'});
        }
        const updateRes = await abc.findByIdAndUpdate({"_id":id}, {$set: updateData},{returnDocument:'after'});
        return res.status(200).json(updateRes);
      } catch (error) {
        return res.status(400).json(error.message);
      }
  }
  //findByIdAndUpdate
  //findAndUpdate
  //findById
  //findOne
  //findOneAndRemove
  

  module.exports = { createContact, getAllContacts, getContactById, getContactByName, addContact, updateContact };