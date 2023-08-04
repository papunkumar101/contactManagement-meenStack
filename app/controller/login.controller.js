
const Users = require('../model/register.model');
const bcrypt = require('bcrypt');

const loginUser = async(req, res) =>{ 
    const { email, password } = req.body;
    if (!email || !password) {
        // res.status(400);
        res.send("All fields are mandatory!");
      }
    const user = await Users.findOne({email}); 
    if (user) { 
      try {  
          const isPasswordValid = await bcrypt.compare(password, user.password); 
          if (isPasswordValid) {  
            req.session.user = user;
            res.redirect('/dashboard');
          } else {
            res.send('Invalid username or password');
          }
        } catch (err) {
          console.error('Error comparing passwords:', err);
          res.status(500).send('Error comparing passwords');
        }
    } else {
     res.send('Invalid username or password');
    }
}

const userLogout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
}

module.exports = { loginUser, userLogout };