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

// const fruit = new Fruit({
//   name: 'peaches',
//   rating: 1,
//   review: 'pretty solid for a fruit',
// });
// fruit.save()

const pineapple = new Fruit({
  name: 'Pineapple',
  rating: 7,
  review: "This on pizza is the best!"
})

// pineapple.save()

// Fruit.insertMany([banana, orange, tomato], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('successfully saved all fruits to the fruitsDB');
//   }
// })

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
  favouriteFruit: fruitSchema
});

const People = mongoose.model('People', peopleSchema);

const people = new People({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
});

people.save()


// Fruit.updateOne({ _id: '5ee8e8d12b309818733a8ef0' }, { name: 'Peach' }, function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('You have successfully updated the entry')
//   }
// })

// People.deleteMany({ name: 'Amy' }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully deleted entry')
//   }
// })