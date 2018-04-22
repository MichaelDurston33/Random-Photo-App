const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/PictureApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB Server *****')

  db.collection('Todos').insertOne({
    url: 'https://ibb.co/eJOEZ7'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  db.close();
});
