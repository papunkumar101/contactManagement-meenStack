const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/mini-blog';
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('err', (err)=>{
    console.log('Connection Faild', err);
});
db.once('open', ()=>{
    console.log('Connection Successfully.');
    // You can perform your database operations here
});