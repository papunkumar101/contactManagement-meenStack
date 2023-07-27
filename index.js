// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
require('ejs');
require('dotenv').config();
const config = process.env;
const app = express();
const routes = require('./app/route/general.route');
const dbConn = require('./app/config/mongodb-connect');
dbConn.connect(); 

app.listen(config.PORT,()=>{
    console.log('server runing on port '+config.PORT);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views','./app/views'); 

app.use(routes);

// app.use(express.static(__dirname + '/public/'));
// console.log(__dirname + '/public');


 