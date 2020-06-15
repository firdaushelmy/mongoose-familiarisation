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

// Fruit.insertMany([banana, orange, tomato], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('successfully saved all fruits to the fruitsDB');
//   }
// })

// fruit.save()

// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(fruits);
//   }
// })

Fruit.find(function (err, fruits) {
  fruits.forEach(function (fruit) {
    console.log(fruit.name);
  })
})

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
