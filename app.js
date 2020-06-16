const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

// collection for Fruits

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'No name specified, please check your data entry']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: 'peaches',
  rating: 1,
  review: 'pretty solid for a fruit',
});


// const banana = new Fruit({
//   name: 'Banana',
//   rating: 9,
//   review: "very good for roughage"
// })

// const orange = new Fruit({
//   name: 'Orange',
//   rating: 7,
//   review: "must have during CNY"
// })

// const tomato = new Fruit({
//   name: 'tomato',
//   rating: 9,
//   review: "is tomato fruit or vege???"
// })

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
    mongoose.connection.close()
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


// Fruit.updateOne({ _id: '5ee8e8d12b309818733a8ef0' }, { name: 'Peach' }, function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('You have successfully updated the entry')
//   }
// })

Fruit.deleteOne({ _id: '5ee8e8d12b309818733a8ef0' }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully deleted entry')
  }
})