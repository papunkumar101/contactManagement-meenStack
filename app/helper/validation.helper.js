const joi = require('joi');


const signUpValidation = joi.object({
    username: joi.string().alphanum().min(3).max(30).required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    // repeat_password: joi.ref('password'),access_token: [joi.string(),joi.number()],
    // birth_year: joi.number().integer().min(1900).max(2013),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})


const signInValidation = joi.object({ 
    password: joi.string().pattern(new RegExp('[a-zA-Z0-9!@#$%^&*()-_+=<>?/]')), 
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

module.exports = {signUpValidation, signInValidation}