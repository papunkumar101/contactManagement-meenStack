// const http = require('http');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
require('ejs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./app/swagger/swagger-route.json');
require('dotenv').config();
const config = process.env;
const app = express();
const { router, apiRoutes } = require('./app/route/general.route');
const dbConn = require('./app/config/mongodb-connect');
dbConn.connect(); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));

app.listen(config.PORT,()=>{
    console.log('server runing on port '+config.PORT);
});


app.use(express.static(__dirname + '/public')); 
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))


app.set('view engine', 'ejs');
app.set('views','./app/views'); 

app.use(router);
app.use('/api/v1',apiRoutes);



// const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
// let express to use this
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


 