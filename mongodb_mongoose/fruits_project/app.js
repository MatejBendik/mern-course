const { MongoChangeStreamError } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");                  // mongoose connection to database, after / is name of the db what we want to connect to

// Inserting data: 

const fruitSchema = new mongoose.Schema({                                // in this schema we specify how we want the data in a collection to be structured
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
// every new product will be created by this schema, it's basically a blue print

const Fruit = mongoose.model("Fruit", fruitSchema);                       // the first parameter in the mongoose model is collection name, it could be in singular because mongoose make it to plural 

const fruit = new Fruit({                                                 // here we are creating document from Fruit model which is specified on line 14
    name: "Apple",
    rating: 7,
    review: "Pretty solif as a fruit."
})                                                  

//fruit.save();                                                             // this save fruit document into a fruits collection inside fruitsDB                                      

// collection of people: 

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit."
});

//pineapple.save();

const melon = new Fruit({
    name: "Melon",
    score: 8,
    review: "Good fruit."
});

melon.save();

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});

//person.save();

/*
const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
});

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
});

const banana = new Fruit({
    name: "Banana",
    score: 5,
    review: "Weird texture"
});

Fruit.insertMany([kiwi, orange, banana], function(err){                 // this will insert more than one document to the fruits collection
    if(err){
        console.log(err);
    }else{
        console.log("Successfully saved all the fruits to fruitsDB.");
    }
});
*/

Fruit.find(function(err, fruits){                                       // check the Fruit collection through the Fruit model and find all the fruits
    if(err){                                                            // if something went wrong with finding the fruits, we'll get an error
        console.log(err);
    }else{                                                              // else there were no errors, we'll just simply log all results as a array
        
        mongoose.connection.close();                                    // this will close the connection with the database

        fruits.forEach(function(fruit){
            console.log(fruit.name);                                    // this will print only fruit names in the console
        });
    }
});

// Update method

Person.updateOne({name: "John"}, {favoriteFruit: melon}, function(err){             // this will update the fruit on specific id and change the rating to 10
    if(err){
        console.log(err);
    }else{
        console.log("Successfully updated the document");
    }
});

// Delete method

/*
Fruit.deleteOne({_id: "62c582e8185692bb0f124ba4"},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully deleted the document");
    } 
});
*/

// Delete all Johns

/*
Person.deleteMany({name: "John"},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully deleted the Johns documents");
    } 
})
*/
