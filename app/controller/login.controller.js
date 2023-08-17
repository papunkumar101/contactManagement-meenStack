
// const { model } = require('mongoose');
const Users = require('../model/register.model');
const bcrypt = require('bcrypt');
const helper =  require('../helper/general.helper');
const {logger} =  require('../helper/log.helper');
const {signUpValidation, signInValidation} =  require('../helper/validation.helper');



async function checkUser(email, password, returnData = ''){
   try{ 
    const user = await Users.findOne({email}); 
    if (user) { 
      const isPasswordValid = await bcrypt.compare(password, user.password); 
      if (isPasswordValid) {  
        if(returnData == 'ALL') return user; 
         return true;
      }  
    } 
    return false;
   }catch(error){
     return error.message;
   }
}

const loginUser = async(req, res) =>{ 
  try {  
    const value = await signInValidation.validateAsync(req.body);
    const { email, password } = value;
    const userData = await checkUser(email, password, 'ALL');
    logger.info({"activity": "user login","user":userData._id+", "+userData.name+", "+userData.email });
    if(userData){
      req.session.user = userData;
      return res.redirect('/dashboard');
    }else{
      return res.status(400).send('Invalid username or password');
    } 
  } catch (error) {
     return res.status(400).send(error.message);
  }
}


// api get token 
const getAuthentication = async(req, res) => {
  try{
     const value = await signInValidation.validateAsync(req.body);
     const {email, password} = value; 
     const userData = await checkUser(email, password, 'ALL');   
     if(userData){ 
        let {_id, name, email} = userData;
        const token = await helper.tokenGenerate({_id, name, email});
        return res.status(200).json({'token':token});
      }else{
        return res.status(400).json({'message' : 'Invalid username or password'});
      }
   }catch(error){
    return res.status(400).json(error.message);
   }
}

const userLogout = (req, res) => { 
  logger.info({"activity": "user logout","user":req.session.user._id+", "+req.session.user.name+", "+req.session.user.email });
  req.session.destroy();
  res.redirect('/login');
}

module.exports = { loginUser, userLogout, getAuthentication };