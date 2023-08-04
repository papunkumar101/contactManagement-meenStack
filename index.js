// const http = require('http');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
require('ejs');
require('dotenv').config();
const config = process.env;
const app = express();
const routes = require('./app/route/general.route');
const dbConn = require('./app/config/mongodb-connect');
dbConn.connect(); 


app.use(bodyParser.urlencoded({ extended: true }));

app.listen(config.PORT,()=>{
    console.log('server runing on port '+config.PORT);
});


app.use(express.static(__dirname + '/public'));
// app.use('/', express.static(path.join(__dirname, 'views')))
// console.log(__dirname + '/public');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))


app.set('view engine', 'ejs');
app.set('views','./app/views'); 

app.use(routes);


 