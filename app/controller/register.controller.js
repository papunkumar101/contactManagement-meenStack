const registerUser = require('../model/register.model');

const createUser = (req, res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    if(!name || !email || !password){
    //    res.status(400).send('all fields are required');
       res.send('all fields are required');
    }
    const register = registerUser.create({
        name,
        email,
        password
    });

    // res.status(200).send('Create Successfully',register);
    res.send('Create Successfully');
}


module.exports = {createUser};