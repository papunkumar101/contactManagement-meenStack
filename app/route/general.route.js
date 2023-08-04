const { createContact } = require('../controller/contact.controller'); 
const { createUser } = require('../controller/register.controller');
const { loginUser, userLogout } = require('../controller/login.controller');
const {userDasboard} = require('../controller/dasboard.controller');
const { publicRoute,privateRoute } = require('../middleware/auth.middleware');


const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    res.render('home'); // it is automatically search the form.ejs file inside ./views/
 });
 

 router.post('/login',loginUser);
 router.get('/login', publicRoute, (req,res)=>{
     res.render('login');
 });
 
 router.post('/register',createUser);
 router.get('/register', publicRoute, (req,res)=>{
     res.render('register');
 });

 router.get('/contact',(req,res)=>{
    res.render('contact');
});

 router.post('/contact',createContact);
 // router.post('/submit',(req,res)=>{
 //     let name = req.body.name;
 //     let email = req.body.email;
     
 //     res.render('confirmation',{name,email});
 //     // console.log(req);
 // });

 router.get('/dashboard',privateRoute,userDasboard);
 router.get('/logout',privateRoute,userLogout);


 module.exports = router;


 