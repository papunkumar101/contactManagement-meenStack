const jwt = require('jsonwebtoken');
require('dotenv').config();
const config = process.env;
// const secretKey = config.JWT_SECRET_KEY;
const secretKey = 'thisIsMySecreteKey@123456##445446jknsflkjmoreThen30Char##';


async function tokenGenerate(userData) {
    try {
        let token =  await jwt.sign({userData}, secretKey, { expiresIn: '1m' }); 
        return token;
    } catch (error) {
        return error.message;
    }
}

async function tokenVerify(token) { 
    let verify = [];
    try {
        let decoded = await jwt.verify(token, secretKey); 
        if(decoded){
            verify['code'] = 200;
            verify['msg'] = 'verified'; 
        }else{
            verify['code'] = 400;
            verify['msg'] = 'something wrong!';
        }
    } catch (error) {
        verify['code'] = 400;
        verify['msg'] = error.message;
    }
    
    return verify;
}


module.exports = {tokenGenerate, tokenVerify};
