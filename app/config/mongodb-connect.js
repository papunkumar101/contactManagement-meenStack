// const mongoose = require('mongoose');


// const dbURL = 'mongodb://127.0.0.1:27017/mini-blog';
// const mongodb = async () => {
//     await mongoose.connect(dbURL, function(err, db) {
//         if (err) throw err;
//             console.log("Connection Successfully."); 
//     });
// }

// module.exports = mongodb;


const mongoose = require('mongoose');

class MongoDB {
    constructor() {
        this.URL = 'mongodb://127.0.0.1:27017/mini-blog';
    }

    async connect() {
        try {
            await mongoose.connect(this.URL, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log('== Mongo connected ==');
        } catch (err) {
            console.error(err);
            setTimeout(async () => {
                console.log('retrying to connect mongo database...')
                await this.connect();
            }, 10000);
        }
    }
}

module.exports = new MongoDB;