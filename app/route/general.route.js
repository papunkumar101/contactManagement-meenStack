const { createContact } = require('../controller/contact.controller'); 


const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    res.render('home'); // it is automatically search the form.ejs file inside ./views/
 });
 
 router.get('/contact',(req,res)=>{
     res.render('contact');
 });
 
 router.get('/login',(req,res)=>{
     res.render('login');
 });
 
 router.get('/register',(req,res)=>{
     res.render('register');
 });
 
 router.post('/submit',createContact);
 // router.post('/submit',(req,res)=>{
 //     let name = req.body.name;
 //     let email = req.body.email;
     
 //     res.render('confirmation',{name,email});
 //     // console.log(req);
 // });


 module.exports = router;


 