const mail = require('../helper/mail.helper');
const userDasboard = async(req,res) =>{   
       res.status(200).render('dashboard',{userData: req.session.user});
}

const test = async(req, res) => {  
       try {
              let response = await mail.send('','tetsting', 'this is body');
              if(response){
                     console.log('mail  sent to ',response?.accepted[0]);
                     return res.status(200).send('successfully mail  sent to ',response.accepted[0]);
              }else{
                     return res.status(200).send('somethisng wrong');
              }
       } catch (error) {
              console.log(error.message);
              return res.status(400).send(error.message);
       }
}

module.exports = {userDasboard,test};