const nodemailer = require("nodemailer");
require('dotenv').config();
const config = process.env;
let host = config.SMTP_HOST;
let post = config.SMTP_PORT;
let fromMail = config.SMTP_MAIL;
let fromMailPass = config.SMTP_MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: host,
  port: post,
//   secure: true,
  auth: { 
    user: fromMail,
    pass: fromMailPass
  }
});
 
async function send(toMail, subject, body) { 
    try {       
        const res = await transporter.sendMail({
          from: '"Contact Management App" <${fromMail}>', // sender address
          to: toMail,
          subject: subject, // Subject line
          // text: "Hello world?", // plain text body
          html: body, // html body
        });
        return res;
    } catch (error) {
        return error.message;
    }
} 

module.exports = {send}