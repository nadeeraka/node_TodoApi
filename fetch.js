//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
(err,db)=>
{
    if (err) {
        return console.log('unable to connect database',err);
    }
    console.log('connected');
    // db.collection('Todos').find({
    //         _id: new ObjectID('5bdff6e88ad0b91ce8fc6ac4')
    //     }).toArray().then((docs) =>
    // {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>
    // {
    //     console.log('Unable to fetch data',err);
    // })
     db.collection('Todos').find({name:'andrw'}).toArray().then((docs)=>
     {
       console.log(JSON.stringify(docs,undefined,2));
       
     },
     (err)=>
     {
       console.log('Unable to fetch data', err);
     }
     )

})