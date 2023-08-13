
const helper =  require('../helper/general.helper');

const publicRoute = (req, res, next) => {
    if (!req.session.user) {
        next();
      } else {
        res.redirect('/dashboard');
      }
}

const privateRoute = (req, res, next) => {
    if (req.session.user){
        next();
      } else {
        res.redirect('/login');
      }
}


const verifyDataForGenerateToken = async(req, res, next) => {
  const {email, password} = req.body;
  if(!email && !password) return res.status(400).json({'message' : 'All Fields are mondotary!'});
  next();
} 


const verifyToken = async(req, res, next) => {
  let token = req.header('authorization');
  if(token || !token == undefined){
    token = token.split(' ')[1];
    let verifyRes = await helper.tokenVerify(token); 
    if(verifyRes['code'] === 200) return next();
   return res.status(400).json({'message' : verifyRes['msg']});
  }else{
    return res.status(400).json({'message' : 'Token required!'});
  }
}

module.exports = { publicRoute,privateRoute, verifyDataForGenerateToken, verifyToken };