const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if (err) {
    return console.log('connection fail');
}
console.log('connection success');
db.close();
})