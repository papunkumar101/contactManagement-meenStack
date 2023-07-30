const registerUser = require('../model/register.model');
const bcrypt = require('bcrypt'); 
const saltRounds = 10;

const createUser = async(req, res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    if(!name || !email || !password){
        //    res.status(400).send('all fields are required');
        res.send('all fields are required');
    }
    const salt =  bcrypt.genSaltSync(saltRounds);
    let hasPassword =  bcrypt.hashSync(password,salt); 
    const register =  await registerUser.create({
        name,
        email,
        password:hasPassword
    });

    // res.status(200).send('Create Successfully',register);
    res.send('Create Successfully');
}


module.exports = {createUser};