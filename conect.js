//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    (err, db) => {
        if (err) {
            return console.log('unable to connect database', err);
        }
        console.log('connected');
      db.close();
    })