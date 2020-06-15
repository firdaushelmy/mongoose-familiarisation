const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

// collection for Fruits

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: 'Apple',
  rating: 7,
  review: 'pretty solid for a fruit',
});


const banana = new Fruit({
  name: 'Banana',
  rating: 9,
  review: "very good for roughage"
})

const orange = new Fruit({
  name: 'Orange',
  rating: 7,
  review: "must have during CNY"
})

const tomato = new Fruit({
  name: 'tomato',
  rating: 9,
  review: "is tomato fruit or vege???"
})

Fruit.insertMany([banana, orange, tomato], function (err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log('successfully saved all fruits to the fruitsDB');
  }
})

// fruit.save()

// collection for People

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const People = mongoose.model('People', peopleSchema);

const people = new People({
  name: "John",
  age: 37,
});

// people.save()

const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function (err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits)
    callback(fruits);
  });
}